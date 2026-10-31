const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const vm = require("node:vm");

const source = readFileSync(require("node:path").join(__dirname, "../app.js"), "utf8");
function setup() {
  const calls = { overlays: 0, uploads: 0, timers: [], status: [], logs: [] };
  const context = vm.createContext({
    Blob,
    folderId: "folder",
    fileId: "file",
    data: { entries: [] },
    who: "test",
    timer: null,
    document: { hidden: false },
    tokenValid: () => true,
    pullRemote: async () => true,
    rememberSyncBase: () => {},
    markAuthExpired: () => {},
    setSt: (...args) => calls.status.push(args),
    recordDeveloperLog: (...args) => calls.logs.push(args),
    clearTimeout: () => {},
    setTimeout: (callback) => calls.timers.push(callback),
    withLoading: async (_, operation) => {
      calls.overlays++;
      return operation();
    },
    up: async () => {
      calls.uploads++;
      return { json: async () => ({ id: "file" }) };
    },
  });
  vm.runInContext(source.slice(source.indexOf("let syncing = false;"), source.indexOf("async function connect()")), context);
  vm.runInContext(source.slice(source.indexOf("async function save("), source.indexOf("function updateAreaBrand()")), context);
  return { context, calls };
}

test("automatic saves upload without a loading overlay", async () => {
  const { context, calls } = setup();
  assert.equal(await context.save(), true);
  assert.equal(calls.uploads, 1);
  assert.equal(calls.overlays, 0);
});

test("periodic sync and its scheduled upload remain invisible", async () => {
  const { context, calls } = setup();
  await context.backgroundSync();
  assert.equal(calls.timers.length, 1);
  await calls.timers[0]();
  assert.equal(calls.uploads, 1);
  assert.equal(calls.overlays, 0);
});

test("manual sync uses a loading overlay", async () => {
  const { context, calls } = setup();
  assert.equal(await context.save({ manual: true }), true);
  assert.equal(calls.overlays, 1);
  assert.equal(calls.uploads, 1);
});

test("retries preserve automatic or manual display mode", async () => {
  for (const manual of [false, true]) {
    const { context, calls } = setup();
    vm.runInContext("syncing = true", context);
    await context.save({ manual });
    vm.runInContext("syncing = false", context);
    await calls.timers[0]();
    assert.equal(calls.overlays, manual ? 2 : 0);
    assert.equal(calls.uploads, 1);
  }
});

test("automatic sync errors remain visible in status and logs without an overlay", async () => {
  const { context, calls } = setup();
  context.pullRemote = async () => { throw new Error("network"); };
  assert.equal(await context.save(), false);
  assert.equal(calls.overlays, 0);
  assert.equal(calls.status.at(-1)[1], "err");
  assert.equal(calls.logs.length, 1);
  await context.backgroundSync();
  assert.equal(calls.overlays, 0);
  assert.equal(calls.logs.length, 2);
});
