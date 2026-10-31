const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const source = fs.readFileSync(path.join(__dirname, "../app.js"), "utf8");

function setup(data = { entries: [] }) {
  const storage = new Map();
  const context = vm.createContext({
    data, crypto: require("node:crypto").webcrypto,
    localStorage: { getItem: (key) => storage.get(key) || null, setItem: (key, value) => storage.set(key, value) },
    areaStorageKey: (key) => key, showToast: () => {}, saveDataLocal: () => {}, renderShopping: () => {},
  });
  const load = (start, end) => vm.runInContext(source.slice(source.indexOf(start), source.indexOf(end)), context);
  load("const T = {", "let activeArea =");
  load("function normalizeData()", "// Rebuilds the category tables");
  load("function mergeSimple(", "// Downloads daten.json");
  load("const shoppingNameKey", "function renderShopping()");
  load("const propertyUsage =", "function renderPropertyFilter()");
  load("const activeRentals =", "function rentalMonthActive");
  context.normalizeData();
  return context;
}

test("old vehicles, properties and Drive IDs are preserved", () => {
  const entries = [
    { id: "car", cat: "Fahrzeug", v: 2, driveFolder: "existing-car", docs: [{ id: "document" }] },
    { id: "flat", cat: "Wohnen", v: 2, rental: { active: true, monthlyRent: 500 } },
  ];
  const ctx = setup({ entries });
  assert.equal(ctx.data.entries[0].driveFolder, "existing-car");
  assert.equal(ctx.data.entries[0].docs[0].id, "document");
  assert.equal(ctx.data.entries[0].cat, "Fahrzeug");
  assert.equal(vm.runInContext('categoryName("Fahrzeug")', ctx), "Garage");
  assert.equal(vm.runInContext('categoryName("Wohnen")', ctx), "Immobilien");
  assert.equal(vm.runInContext("propertyUsage(data.entries[1])", ctx), "Vermietet");
  assert.equal(vm.runInContext("activeRentals().length", ctx), 1);
  ctx.normalizeData();
  assert.equal(ctx.data.settings.objectTypes.Fahrzeug.filter((kind) => kind === "Auto").length, 1);
});

test("shopping defaults contain at least 80 unique articles", () => {
  const ctx = setup();
  const names = vm.runInContext("Object.values(SHOPPING_DEFAULTS).flat()", ctx);
  assert.ok(names.length >= 80);
  assert.equal(new Set(names).size, names.length);
});

test("shopping prevents duplicates and reopens completed articles", () => {
  const ctx = setup();
  ctx.addShoppingItem(" Milch ", "2 Liter");
  ctx.addShoppingItem("MILCH");
  assert.equal(ctx.data.shoppingItems.length, 1);
  ctx.data.shoppingItems[0].done = true;
  ctx.addShoppingItem("Milch");
  assert.equal(ctx.data.shoppingItems.length, 1);
  assert.equal(ctx.data.shoppingItems[0].done, false);
  assert.equal(ctx.data.shoppingItems[0].quantity, "2 Liter");
});

test("shopping changes and deletions are merged and scheduled for upload", () => {
  const ctx = setup();
  const old = { entries: [], shoppingItems: [{ id: "milk", name: "Milch", updatedAt: 1 }] };
  const current = { entries: [], shoppingItems: [{ id: "milk", name: "Milch", updatedAt: 2, deletedAt: 2 }] };
  const merged = ctx.merge(old, current);
  assert.equal(merged.shoppingItems[0].deletedAt, 2);
  assert.equal(ctx.needsPush(old, merged), true);
  assert.equal(ctx.needsPush(merged, merged), false);
});
