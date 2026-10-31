const $ = (s) => document.querySelector(s);

const ICONS = {
  "shield-check": '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  "file-text":
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  "car-front":
    '<path d="m5 17-1 2v2h2l1-2h10l1 2h2v-2l-1-2"/><path d="m5 17 1-7 2-5h8l2 5 1 7"/><path d="M5 13h14M8 17h.01M16 17h.01"/>',
  house: '<path d="m3 10 9-7 9 7"/><path d="M5 9v12h14V9M9 21v-7h6v7"/>',
  "receipt-text": '<path d="M4 2v20l4-2 4 2 4-2 4 2V2l-4 2-4-2-4 2z"/><path d="M8 9h8M8 13h8M8 17h5"/>',
  "heart-pulse":
    '<path d="M20.8 8.6c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.8 2.4Z"/><path d="M3.5 12h4l2-3 3 6 2-3h5"/>',
  "contact-round": '<circle cx="12" cy="8" r="4"/><path d="M5 21v-1a7 7 0 0 1 14 0v1M19 8h2M3 8h2"/>',
  "id-card":
    '<rect x="2.5" y="4.5" width="19" height="15" rx="2.2"/><circle cx="8.2" cy="10" r="2.1"/><path d="M5.3 15.5c.7-1.6 1.7-2.3 2.9-2.3s2.2.7 2.9 2.3M13.5 9h4.5M13.5 12h4.5M13.5 15h3"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v12h14V9M9 21v-7h6v7"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
  paperclip:
    '<path d="m21.4 11.1-8.5 8.5a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  image:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  settings:
    '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  pencil: '<path d="M17 3a2.85 2.85 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  restore: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  archive:
    '<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4"/>',
  lifebuoy:
    '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"/>',
  trash:
    '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/>',
};
function icon(name, cls = "") {
  const p = ICONS[name] || ICONS.file;
  return '<svg class="ui-icon ' + cls + '" viewBox="0 0 24 24" aria-hidden="true">' + p + "</svg>";
}

const T = {
  Versicherung: { i: "shield-check", c: "#0e7c86", f: ["Gesellschaft", "Police-Nr."], dl: "Kündigung bis" },
  Vertrag: { i: "file-text", c: "#6366f1", f: ["Anbieter", "Kundennummer"], dl: "Kündigung bis" },
  Fahrzeug: {
    i: "car-front",
    c: "#f59e0b",
    f: ["Hersteller", "Modell", "Kennzeichen", "Fahrgestellnr."],
    dl: "TÜV fällig",
  },
  Wohnen: { i: "house", c: "#ec4899", f: ["Objekt / Adresse", "Vermieter / Verwaltung"], dl: "Frist" },
  Steuer: { i: "receipt-text", c: "#16a34a", f: ["Steuerjahr", "Finanzamt"], dl: "Abgabe bis" },
  Gesundheit: { i: "heart-pulse", c: "#e11d48", f: ["Krankenkasse / Arzt", "Versichertennr."], dl: "Termin / Frist" },
  Ausweise: { i: "id-card", c: "#0284c7", f: ["Dokumentnummer", "Ausgestellt von"], dl: "Gültig bis" },
  Sonstiges: { i: "folder", c: "#94a3b8", f: [], dl: "Frist" },
};
// Document types per category ("Unterlagen-Arten"): the groups inside an object, e.g. Fahrzeugschein of a car.
const SUB = {
  Versicherung: ["Police & Vertrag", "Beitragsrechnungen", "Schadensfälle", "Kündigung", "Korrespondenz"],
  Vertrag: ["Vertrag", "Rechnungen", "Kündigung", "Korrespondenz"],
  Fahrzeug: [
    "Fahrzeugschein & Fahrzeugbrief",
    "Kaufvertrag",
    "TÜV & Inspektion",
    "Reparaturen",
    "Kfz-Steuer",
    "Fahrzeugversicherung",
    "Sonstige Fahrzeugunterlagen",
  ],
  Wohnen: [
    "Mietvertrag",
    "Nebenkosten",
    "Kaufunterlagen",
    "Finanzierung",
    "Übergabeprotokoll",
    "Sonstige Wohnunterlagen",
  ],
  Steuer: ["Steuerbescheid", "Steuererklärung", "Belege", "Finanzamt-Schreiben", "Sonstige Steuerunterlagen"],
  Gesundheit: ["Arztunterlagen", "Rechnungen", "Krankenkasse", "Rezepte", "Sonstige Gesundheitsunterlagen"],
  Ausweise: ["Personalausweis", "Reisepass", "Führerschein", "Geburtsurkunde", "Aufenthaltstitel", "Sonstige Ausweise"],
  Sonstiges: ["Allgemeine Unterlagen", "Quittungen", "Korrespondenz", "Sonstige Dokumente"],
};
// Object kinds per category ("Objektarten", optional), e.g. Mobilfunk → objects "Handy Ich", "Handy Partner/in".
const OBJ = {
  Versicherung: [
    "Haftpflicht",
    "Hausrat",
    "Kfz-Versicherung",
    "Rechtsschutz",
    "Krankenversicherung",
    "Lebensversicherung",
    "Sonstige Versicherung",
  ],
  Vertrag: ["Internet & Telefon", "Mobilfunk", "Strom & Gas", "Abonnement", "Mitgliedschaft", "Sonstiger Vertrag"],
};
const DEFAULT_PEOPLE = ["Ich", "Partner/in", "Gemeinsam"];
const SETTINGS_LISTS = {
  people: { label: "Personen („Gehört zu“)", key: "people" },
  insuranceCompanies: { label: "Versicherungsgesellschaften", key: "insuranceCompanies" },
  vehicleMakes: { label: "Fahrzeughersteller", key: "vehicleMakes" },
  vehicleModels: { label: "Fahrzeugmodelle", key: "vehicleModels" },
  providers: { label: "Anbieter & Dienstleister", key: "providers" },
};

const IV = { monatlich: 1, vierteljährlich: 1 / 3, halbjährlich: 1 / 6, jährlich: 1 / 12, einmalig: 0 };
const D = "https://www.googleapis.com/drive/v3/files";
const T0 = JSON.parse(JSON.stringify(T)),
  SUB0 = JSON.parse(JSON.stringify(SUB)),
  OBJ0 = JSON.parse(JSON.stringify(OBJ));
let data = JSON.parse(localStorage.getItem("hv_data") || "null") || { entries: [] };
function normalizeData() {
  data.entries = data.entries || [];
  data.events = data.events || [];
  data.deletedEvents = data.deletedEvents || [];
  data.trash = data.trash || [];
  const s = (data.settings = data.settings || {});
  // Initial settings are copied from the defaults only once. upd stays 0 so synced settings always win over fresh defaults.
  if (!s.initialized) {
    s.subcategories = JSON.parse(JSON.stringify(SUB0));
    s.objectTypes = JSON.parse(JSON.stringify(OBJ0));
    s.customLists = { insuranceCompanies: [], vehicleMakes: [], vehicleModels: [], providers: [] };
    s.customCategories = {};
    s.initialized = true;
  }
  s.subcategories = s.subcategories || {};
  s.customLists = s.customLists || {};
  s.customCategories = s.customCategories || {};
  s.deletedCategories = s.deletedCategories || [];
  // Until the object model, the subcategories of Versicherung/Vertrag described the kind of object.
  if (!s.objectTypes) {
    s.objectTypes = {};
    Object.keys(OBJ0).forEach((c) => {
      s.objectTypes[c] = s.subcategories[c] || OBJ0[c];
      s.subcategories[c] = JSON.parse(JSON.stringify(SUB0[c]));
    });
  }
  if (!s.customLists.people) s.customLists.people = DEFAULT_PEOPLE.slice();
  data.entries.forEach(migrateEntry);
}
// Converts an entry of the old model into an object (idempotent, so data from older devices is handled too).
function migrateEntry(e) {
  if (e.v >= 2) return;
  const kinds = (data.settings.objectTypes || {})[e.cat] || OBJ0[e.cat] || [];
  if (e.subcat && kinds.includes(e.subcat) && !e.objType) e.objType = e.subcat;
  (e.docs || []).forEach((d) => {
    if (d.subcategory === undefined) d.subcategory = e.subcat || "";
    // A former object kind (e.g. "Haftpflicht") is no document type; such files go to the general group.
    if (kinds.includes(d.subcategory)) d.subcategory = "";
  });
  if (!e.costs)
    e.costs = e.cost
      ? [
          {
            id: "c1",
            label: "",
            amount: String(e.cost),
            iv: e.iv || "monatlich",
            history: (e.priceHistory || []).map((p) => ({ date: p.date, amount: String(p.cost), iv: p.iv })),
          },
        ]
      : [];
  e.owner = e.owner || "";
  e.objType = e.objType || "";
  e.v = 2;
}
// Rebuilds the category tables T/SUB from the defaults plus the (possibly synced) settings.
function applySettings() {
  const s = data.settings;
  Object.keys(T).forEach((k) => delete T[k]);
  Object.keys(SUB).forEach((k) => delete SUB[k]);
  Object.keys(OBJ).forEach((k) => delete OBJ[k]);
  Object.assign(T, JSON.parse(JSON.stringify(T0)));
  Object.assign(SUB, JSON.parse(JSON.stringify(SUB0)));
  s.deletedCategories.forEach((name) => {
    delete T[name];
    delete SUB[name];
  });
  Object.entries(s.customCategories).forEach(([name, meta]) => {
    T[name] = { i: meta.i || "folder", c: meta.c || "#64748b", f: meta.f || [], dl: meta.dl || "Frist" };
  });
  Object.keys(T).forEach((k) => {
    SUB[k] = s.subcategories[k] || SUB[k] || [];
    OBJ[k] = (s.objectTypes || {})[k] || OBJ0[k] || [];
  });
}
const people = () => data.settings.customLists.people || DEFAULT_PEOPLE;
function touchSettings() {
  data.settings.upd = Date.now();
  saveDataLocal();
}
normalizeData();
applySettings();
let calMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  calSelected = dateKey(new Date()),
  editingEventId = null,
  evFiles = [],
  evUploads = [],
  evRemovals = [];
let settingsListKey = "providers";
let exitArmedUntil = 0;
let swipedAt = 0;
let settingsOpen = [];
let token = null,
  exp = 0,
  folderId = null,
  fileId = null,
  tab = "home",
  filter = "Alle",
  q = "",
  qd = "",
  so = "n",
  cur = null,
  isNew = false,
  timer = null,
  tc = null,
  res = null,
  authExpired = false;
let sheetUploads = [],
  sheetRemovals = [];
// Built-in Google OAuth client. It is public by design; an own ID can still be entered in the Drive settings.
const DEFAULT_CLIENT_ID = "340909526339-j4kf4uj6urrsq3umjh4sqmj19v48q6nr.apps.googleusercontent.com";
const cid = () => localStorage.getItem("hv_cid") || DEFAULT_CLIENT_ID;
const role = () => localStorage.getItem("hv_role") || "owner";
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
const fmt = (n) => n.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
const fmt0 = (n) => n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const fmtD = (d) => d.split("-").reverse().join(".");
const dleft = (d) => {
  const t = parseLocalDate(d),
    n = new Date();
  n.setHours(0, 0, 0, 0);
  return Math.round((t - n) / 864e5);
};
// All deadlines of an entry (own deadlines plus the contract's cancellation date), each with a display label.
function entryDeadlines(e) {
  const own = e.deadlines || (e.due ? [{ label: e.dl, date: e.due }] : []);
  const out = own.filter((d) => d.date).map((d) => ({ label: d.label || tp(e).dl, date: d.date, kind: "deadline" }));
  if (e.cat === "Vertrag" && e.cancelBy) {
    const cb = nextCancelBy(e);
    out.push({
      label: cb !== e.cancelBy ? "Nächster Kündigungstermin" : "Spätester Kündigungstermin",
      date: cb,
      kind: "contract",
    });
  }
  return out.sort((a, b) => a.date.localeCompare(b.date));
}
// The most pressing deadline: the earliest one, so overdue deadlines come first.
const primaryDeadline = (e) => entryDeadlines(e)[0] || null;
const dueOf = (e) => primaryDeadline(e)?.date || "";
const tp = (e) => T[e.cat] || T.Sonstiges || { i: "folder", c: "#94a3b8", f: [], dl: "Frist" };
const monthly = (amount, iv) => (+amount || 0) * (IV[iv || "monatlich"] || 0);
const costItems = (e) => e.costs || (e.cost ? [{ id: "c1", label: "", amount: e.cost, iv: e.iv || "monatlich" }] : []);
const mo1 = (e) => costItems(e).reduce((s, c) => s + monthly(c.amount, c.iv), 0);
const onceSum = (e) => costItems(e).reduce((s, c) => s + (c.iv === "einmalig" ? +c.amount || 0 : 0), 0);
const sum = (L) => L.reduce((s, e) => s + mo1(e), 0);
const nDocs = (L) => L.reduce((s, e) => s + (e.docs || []).length, 0);
// The sync status is shown as a traffic light: grey = offline, amber = busy, green = synced, red = error.
// The text is available as tooltip, for screen readers and as a toast when tapping the light.
function setSt(t, c) {
  const e = $("#st");
  e.className = c || "";
  e.title = t;
  e.setAttribute("aria-label", "Status: " + t);
  e.querySelector(".sr").textContent = t;
}

/* ---- Google Drive ---- */
function initTc() {
  if (tc || !window.google || !google.accounts || !cid()) return;
  tc = google.accounts.oauth2.initTokenClient({
    client_id: cid(),
    scope: "https://www.googleapis.com/auth/drive",
    callback: (r) => {
      if (r.error) {
        res && res.rej(r.error);
        return;
      }
      token = r.access_token;
      exp = Date.now() + (r.expires_in - 60) * 1000;
      localStorage.setItem("hv_ok", "1");
      res && res.ok(token);
    },
    error_callback: (e) => res && res.rej(e.type || "error"),
  });
}
function tokenValid() {
  return !!token && Date.now() < exp;
}
let tokenPromise = null;
function getToken() {
  if (tokenValid()) return Promise.resolve(token);
  if (tokenPromise) return tokenPromise;
  initTc();
  if (!tc) return Promise.reject(new Error("NOCLIENT"));
  // Browsers block the Google sign-in popup without a recent user gesture (e.g. from the autosave timer).
  if (navigator.userActivation && !navigator.userActivation.isActive) return Promise.reject(new Error("NEEDS_AUTH"));
  tokenPromise = new Promise((ok, rej) => {
    res = { ok, rej };
    tc.requestAccessToken({ prompt: localStorage.getItem("hv_ok") ? "" : "consent" });
  })
    .then((t) => {
      authExpired = false;
      return t;
    })
    .finally(() => {
      tokenPromise = null;
    });
  return tokenPromise;
}
// Asks for a fresh Google sign-in via an explicit tap when the session expired outside of a user gesture.
async function ensureAuth() {
  if (tokenValid()) return true;
  if (!navigator.userActivation || navigator.userActivation.isActive) {
    try {
      await getToken();
      return true;
    } catch (e) {
      if (e.message !== "NEEDS_AUTH") return false;
    }
  }
  const ok = await showSettingsDialog({
    title: "Google-Anmeldung erneuern",
    description: "Deine Google-Drive-Sitzung ist abgelaufen. Bitte melde dich erneut an, um fortzufahren.",
    confirmText: "Anmelden",
  });
  if (ok === null) return false;
  try {
    await getToken();
    return true;
  } catch (e) {
    return false;
  }
}
function markAuthExpired() {
  authExpired = true;
  setSt("Google-Anmeldung abgelaufen – tippen zum Anmelden", "err");
  if (tab === "home") renderHome();
}
async function api(url, opt = {}) {
  const t = await getToken();
  const r = await fetch(url, { ...opt, headers: { ...(opt.headers || {}), Authorization: "Bearer " + t } });
  if (r.status === 401) {
    token = null;
    exp = 0;
    throw new Error("NEEDS_AUTH");
  }
  if (!r.ok) throw new Error("Drive " + r.status);
  return r;
}
// Escapes a value for use inside a single-quoted Drive query string.
const qEsc = (s) => String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
async function find(name, parent) {
  const qq =
    "name='" +
    qEsc(name) +
    "' and trashed=false" +
    (parent ? " and '" + qEsc(parent) + "' in parents" : " and mimeType='application/vnd.google-apps.folder'");
  const j = await (await api(D + "?q=" + encodeURIComponent(qq) + "&fields=files(id)")).json();
  return j.files[0] && j.files[0].id;
}
async function ensureFolder() {
  const owner = role() === "owner";
  const fq =
    "name='Haushalt' and mimeType='application/vnd.google-apps.folder' and trashed=false" +
    (owner ? " and 'me' in owners" : " and sharedWithMe=true");
  const fl = await (await api(D + "?q=" + encodeURIComponent(fq) + "&fields=files(id)")).json();
  folderId = fl.files[0] && fl.files[0].id;
  if (!folderId && !owner) throw new Error("NOFOLDER");
  if (!folderId) {
    const r = await api(D, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Haushalt", mimeType: "application/vnd.google-apps.folder" }),
    });
    folderId = (await r.json()).id;
  }
  fileId = await find("daten.json", folderId);
}
async function getOrCreateFolder(name, parent) {
  const q =
    "name='" +
    qEsc(name) +
    "' and mimeType='application/vnd.google-apps.folder' and trashed=false and '" +
    qEsc(parent) +
    "' in parents";
  const j = await (await api(D + "?q=" + encodeURIComponent(q) + "&fields=files(id,name)")).json();
  if (j.files && j.files.length) return j.files[0].id;
  const r = await api(D, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, mimeType: "application/vnd.google-apps.folder", parents: [parent] }),
  });
  return (await r.json()).id;
}
async function folderFor(cat, sub) {
  const main = await getOrCreateFolder(cat, folderId);
  return sub ? await getOrCreateFolder(sub, main) : main;
}
// Each object has its own Drive folder: Haushalt/<Kategorie>/[<Art>/]<Bezeichnung>/<Unterlagen-Art>/
const objectPlace = (o) => o.cat + "/" + (o.objType || "");
async function objectFolder(o) {
  if (o.driveFolder) return o.driveFolder;
  const parent = await folderFor(o.cat, o.objType || ""),
    name = safeFilePart(o.title),
    r = await api(D, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mimeType: "application/vnd.google-apps.folder", parents: [parent] }),
    });
  o.driveFolder = (await r.json()).id;
  o.driveFolderName = name;
  o.drivePlace = objectPlace(o);
  if (o === cur) sheetCreatedFolder = o.driveFolder;
  return o.driveFolder;
}
async function docTargetFolder(o, sub) {
  const f = await objectFolder(o);
  return sub ? await getOrCreateFolder(sub, f) : f;
}
function safeFilePart(s) {
  return (
    String(s || "")
      .replace(/[\\/:*?\"<>|]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/[. ]+$/, "") || "Dokument"
  );
}
/* ---- Dateinamen: JJJJ-MM-TT_Titel_Dokumentart.endung (sortiert in Drive chronologisch) ---- */
function fileExt(name, mime = "") {
  const dot = (name || "").lastIndexOf(".");
  if (dot > 0) return name.slice(dot).toLowerCase();
  return { "image/jpeg": ".jpg", "image/png": ".png", "application/pdf": ".pdf" }[mime] || "";
}
function buildDocName({ date, title, type, ext }) {
  return (
    (date || dateKey(new Date())) +
    "_" +
    safeFilePart(title) +
    (type && type.trim() ? "_" + safeFilePart(type) : "") +
    (ext || "")
  );
}
// Names from the old scheme (TTMMJJ_Titel.ext) are recognised so they can be converted when the entry changes.
function parseLegacyName(name, title) {
  const m = /^(\d{2})(\d{2})(\d{2})_(.+)$/.exec((name || "").slice(0, name.length - fileExt(name).length));
  return m && m[4] === safeFilePart(title) ? { docDate: "20" + m[3] + "-" + m[2] + "-" + m[1], docType: "" } : null;
}
// Appends " (2)", " (3)", … if another known document in the same folder already has this name.
// `extra` holds names already chosen in the same batch (e.g. while renaming several files at once).
function uniqueDocName(name, obj, sub, exceptId, extra = new Set()) {
  const taken = new Set(extra);
  (obj.docs || []).forEach(
    (d) => d.id !== exceptId && (d.subcategory || "") === (sub || "") && taken.add(d.name.toLowerCase()),
  );
  if (!taken.has(name.toLowerCase())) return name;
  const ext = fileExt(name),
    base = name.slice(0, name.length - ext.length);
  for (let n = 2; ; n++) {
    const c = base + " (" + n + ")" + ext;
    if (!taken.has(c.toLowerCase())) return c;
  }
}
// Upload/replace dialog: document date, document type and the resulting file name (editable).
function showDocNameDialog({ heading, okText, title, date, type, ext, types = [] }) {
  return new Promise((resolve) => {
    document.querySelector(".settings-dialog-backdrop")?.remove();
    const b = document.createElement("div");
    b.className = "settings-dialog-backdrop";
    b.innerHTML =
      '<div class="settings-dialog" role="dialog" aria-modal="true" aria-labelledby="nar-docname-title"><div class="settings-dialog-head"><div class="settings-dialog-kicker">Dokument</div><h3 id="nar-docname-title">' +
      esc(heading) +
      '</h3></div><div class="settings-dialog-body"><label for="dn-date">Datum des Dokuments</label><input id="dn-date" type="date"><label for="dn-type">Dokumentart (optional)</label><input id="dn-type" type="text" list="dn-types" placeholder="z. B. TÜV-Bericht, Rechnung, Police"><datalist id="dn-types">' +
      types.map((t) => '<option value="' + esc(t) + '"></option>').join("") +
      '</datalist><label for="dn-name">Dateiname</label><input id="dn-name" type="text"><p class="settings-note">Der Name wird aus Datum, Titel und Dokumentart gebildet. Änderst du ihn von Hand, behält die Datei diesen Namen auch später.</p></div><div class="settings-dialog-foot"><button type="button" class="dialog-secondary" data-cancel>Abbrechen</button><button type="button" class="dialog-primary" data-ok>' +
      esc(okText) +
      "</button></div></div>";
    document.body.appendChild(b);
    document.body.classList.add("modal-lock");
    requestAnimationFrame(() => b.classList.add("on"));
    const dEl = b.querySelector("#dn-date"),
      tEl = b.querySelector("#dn-type"),
      nEl = b.querySelector("#dn-name"),
      gen = () => buildDocName({ date: dEl.value, title, type: tEl.value, ext });
    dEl.value = date;
    tEl.value = type || "";
    nEl.value = gen();
    let manual = false;
    nEl.oninput = () => (manual = nEl.value.trim() !== gen());
    dEl.oninput = tEl.oninput = () => {
      if (!manual) nEl.value = gen();
    };
    const finish = (v) => {
      b.classList.remove("on");
      if (!document.querySelector(".ov.on,.doc-preview.on")) document.body.classList.remove("modal-lock");
      setTimeout(() => b.remove(), 180);
      resolve(v);
    };
    b.addEventListener("click", (e) => {
      if (e.target === b || e.target.closest("[data-cancel]")) finish(null);
    });
    b.querySelector("[data-ok]").onclick = () => {
      let name = safeFilePart(nEl.value.trim()) || gen();
      if (ext && !name.toLowerCase().endsWith(ext)) name += ext;
      finish({ date: dEl.value || dateKey(new Date()), type: tEl.value.trim(), name, auto: name === gen() });
    };
    b.addEventListener("keydown", (e) => {
      if (e.key === "Escape") finish(null);
      if (e.key === "Enter" && e.target.tagName === "INPUT") {
        e.preventDefault();
        b.querySelector("[data-ok]").click();
      }
    });
    tEl.focus();
  });
}
function up(name, blob, id, parent = folderId) {
  const meta = id ? { name } : { name, parents: [parent] };
  const f = new FormData();
  f.append("metadata", new Blob([JSON.stringify(meta)], { type: "application/json" }));
  f.append("file", blob);
  return api(
    "https://www.googleapis.com/upload/drive/v3/files" +
      (id ? "/" + id : "") +
      "?uploadType=multipart&fields=id,name,mimeType,webViewLink",
    { method: id ? "PATCH" : "POST", body: f },
  );
}
let who = "";
function mergeSimple(a, b) {
  const m = new Map();
  [...(a || []), ...(b || [])].forEach((x) => {
    const old = m.get(x.id);
    if (!old || (x.updatedAt || 0) > (old.updatedAt || 0)) m.set(x.id, x);
  });
  return [...m.values()];
}
// Last synced `upd` per entry (this device). Used for three-way conflict detection.
const syncBase = () => JSON.parse(localStorage.getItem("hv_synced") || "null");
function rememberSyncBase() {
  localStorage.setItem("hv_synced", JSON.stringify(Object.fromEntries(data.entries.map((e) => [e.id, e.upd || 0]))));
}
// Conflicts from older versions have no stored versions and cannot be compared, so they are dropped.
const loadConflicts = () => JSON.parse(localStorage.getItem("hv_conflicts") || "[]").filter((c) => c.local && c.remote);
const storeConflicts = (list) => localStorage.setItem("hv_conflicts", JSON.stringify(list));
function merge(a, b) {
  const del = new Set([...(a.del || []), ...(b.del || [])]),
    m = new Map(),
    conflicts = [],
    base = syncBase();
  const left = new Map((a.entries || []).map((e) => [e.id, e])),
    right = new Map((b.entries || []).map((e) => [e.id, e]));
  for (const id of new Set([...left.keys(), ...right.keys()])) {
    const x = left.get(id),
      y = right.get(id);
    if (del.has(id)) continue;
    // A conflict means both sides changed the entry since this device last synced it.
    if (base && x && y && JSON.stringify(x) !== JSON.stringify(y)) {
      const b0 = base[id] || 0;
      if ((x.upd || 0) > b0 && (y.upd || 0) > b0 && (x.upd || 0) !== (y.upd || 0)) {
        conflicts.push({ id, title: y.title || x.title || "Eintrag", detectedAt: Date.now(), remote: x, local: y });
      }
    }
    const chosen = !x ? y : !y ? x : (y.upd || 0) > (x.upd || 0) ? y : x;
    m.set(id, chosen);
  }
  if (conflicts.length) {
    const ids = new Set(conflicts.map((c) => c.id));
    storeConflicts([...loadConflicts().filter((c) => !ids.has(c.id)), ...conflicts].slice(-20));
  }
  const deletedEvents = [...new Set([...(a.deletedEvents || []), ...(b.deletedEvents || [])])];
  const mergedEvents = mergeSimple(a.events || [], b.events || []).filter((e) => !deletedEvents.includes(e.id));
  const sa = a.settings || {},
    sb = b.settings || {};
  // Settings are synced as a whole: the most recently changed version wins (ties keep the remote version).
  return {
    ...a,
    ...b,
    entries: [...m.values()],
    del: [...del],
    events: mergedEvents,
    deletedEvents,
    settings: (sb.upd || 0) > (sa.upd || 0) ? sb : sa,
    trash: mergeTrash(a.trash, b.trash),
  };
}
/* ---- Papierkorb (gemeinsam, in daten.json) ---- */
const TRASH_KEEP = 20;
const trashKey = (t) => t.kind + ":" + t.id + ":" + t.deletedAt;
// Keeps the newest 20 deleted items per kind; restored items stay a while so the restore reaches the other device.
function trimTrash(list) {
  const out = [],
    monthAgo = Date.now() - 30 * 864e5;
  ["entry", "event", "occ", "doc"].forEach((kind) => {
    const L = list.filter((t) => t.kind === kind).sort((a, b) => b.deletedAt - a.deletedAt);
    out.push(...L.filter((t) => !t.restoredAt).slice(0, TRASH_KEEP), ...L.filter((t) => t.restoredAt > monthAgo));
  });
  return out;
}
function mergeTrash(a = [], b = []) {
  const m = new Map();
  [...a, ...b].forEach((t) => {
    const k = trashKey(t),
      old = m.get(k);
    if (!old || (t.restoredAt || 0) > (old.restoredAt || 0)) m.set(k, t);
  });
  return trimTrash([...m.values()]);
}
function addToTrash(t) {
  data.trash = trimTrash([{ ...t, deletedAt: Date.now(), by: who || "Dieses Gerät" }, ...(data.trash || [])]);
}
// Returns true when this device has data that Drive does not have yet (so it must be uploaded).
function needsPush(remote, local) {
  const rEntries = new Map((remote.entries || []).map((e) => [e.id, e.upd || 0])),
    rEvents = new Map((remote.events || []).map((e) => [e.id, e.updatedAt || 0])),
    rDel = new Set(remote.del || []),
    rDelEv = new Set(remote.deletedEvents || []);
  return (
    local.entries.some((e) => !rEntries.has(e.id) || rEntries.get(e.id) < (e.upd || 0)) ||
    (local.events || []).some((e) => !rEvents.has(e.id) || rEvents.get(e.id) < (e.updatedAt || 0)) ||
    (local.del || []).some((id) => !rDel.has(id)) ||
    (local.deletedEvents || []).some((id) => !rDelEv.has(id)) ||
    (local.settings?.upd || 0) > (remote.settings?.upd || 0) ||
    (local.trash || []).some((t) => {
      const r = (remote.trash || []).find((x) => trashKey(x) === trashKey(t));
      return !r || (r.restoredAt || 0) < (t.restoredAt || 0);
    })
  );
}
// Downloads daten.json and merges it into the local data. Returns whether local data must be uploaded.
async function pullRemote() {
  if (!fileId) return false;
  const r = await (await api(D + "/" + fileId + "?alt=media")).json();
  const before = JSON.stringify(data);
  data = merge(r, data);
  // Items waiting in the undo window stay hidden even if the remote copy still has them.
  data.entries = data.entries.filter((e) => !pendingDeletes.has("entry:" + e.id));
  data.events = (data.events || []).filter((e) => !pendingDeletes.has("event:" + e.id));
  normalizeData();
  applySettings();
  if (JSON.stringify(data) !== before) {
    localStorage.setItem("hv_data", JSON.stringify(data));
    render();
    checkReminders();
  }
  return needsPush(r, data);
}
// Background sync: fetch changes from the other device and push anything Drive is missing.
let syncing = false;
async function backgroundSync() {
  if (syncing || !folderId || document.hidden) return;
  if (!tokenValid()) {
    if (!authExpired) markAuthExpired();
    return;
  }
  syncing = true;
  let push = false;
  try {
    push = await pullRemote();
  } catch (e) {
    if (e.message === "NEEDS_AUTH") markAuthExpired();
  } finally {
    syncing = false;
  }
  if (push) {
    clearTimeout(timer);
    timer = setTimeout(save, 300);
  }
}
async function connect() {
  try {
    setSt("Verbinde mit Google Drive …", "busy");
    await getToken();
    await ensureFolder();
    const u = (await (await api("https://www.googleapis.com/drive/v3/about?fields=user")).json()).user;
    who = u.emailAddress || u.displayName || "Google-Konto";
    authExpired = false;
    await save();
    render();
  } catch (e) {
    if (e.message === "NOFOLDER") {
      setSt("Ordner nicht freigegeben", "err");
      showAlert(
        "Ordner nicht freigegeben",
        "Der Ordner „Haushalt“ ist für dieses Konto noch nicht freigegeben. Bitte das Hauptkonto, ihn in den Einstellungen über „Ordner freigeben“ zu teilen.",
      );
    } else if (e.message === "NEEDS_AUTH" && folderId) markAuthExpired();
    else setSt("Nicht verbunden", "err");
    render();
  }
}
async function save() {
  if (!folderId) {
    setSt("Nicht verbunden – Änderungen nur auf diesem Gerät gespeichert");
    return false;
  }
  // Never run two syncs at once; try again shortly.
  if (syncing) {
    clearTimeout(timer);
    timer = setTimeout(save, 500);
    return false;
  }
  syncing = true;
  try {
    const push = await pullRemote();
    if (push || !fileId) {
      const r = await up("daten.json", new Blob([JSON.stringify(data)], { type: "application/json" }), fileId);
      fileId = (await r.json()).id;
    }
    rememberSyncBase();
    setSt("Synchronisiert · " + who, "ok");
    return true;
  } catch (e) {
    if (e.message === "NEEDS_AUTH") markAuthExpired();
    else setSt("Synchronisierung fehlgeschlagen", "err");
    return false;
  } finally {
    syncing = false;
  }
}
function dirty() {
  localStorage.setItem("hv_data", JSON.stringify(data));
  render();
  clearTimeout(timer);
  if (folderId) setSt("Änderungen werden synchronisiert …", "busy");
  else setSt("Nicht verbunden – Änderungen nur auf diesem Gerät gespeichert");
  timer = setTimeout(save, 800);
  checkReminders();
}

/* ---- Erinnerungen (laufen, solange die App geöffnet ist) ---- */
const REMINDER_DEFAULT_TIME = "09:00";
const loadReminders = () => JSON.parse(localStorage.getItem("hv_reminders") || "[]");
const storeReminders = (list) => localStorage.setItem("hv_reminders", JSON.stringify(list.slice(-100)));
function atTime(key, time) {
  const d = parseLocalDate(key),
    [h, m] = (time || REMINDER_DEFAULT_TIME).split(":").map(Number);
  d.setHours(h || 0, m || 0, 0, 0);
  return d;
}
// All reminders that are due right now. Each has a unique key so it fires only once per device.
function dueReminders(now = new Date()) {
  const out = [];
  for (let i = 0; i <= 8; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    const k = dateKey(d);
    eventsForDate(k).forEach((ev) => {
      const min = +ev.reminder || 0;
      if (!min || isEventDone(ev, k)) return;
      const at = atTime(k, ev.time);
      if (at - min * 60000 <= now && at > now)
        out.push({
          key: "ev:" + ev.id + ":" + k + ":" + min,
          kind: "event",
          ref: k,
          until: +at,
          title: ev.title,
          body:
            "Termin " + (k === dateKey(now) ? "heute" : "am " + fmtD(k)) + (ev.time ? " um " + ev.time + " Uhr" : ""),
        });
    });
  }
  data.entries.forEach((e) => {
    const rem = e.reminders || "90,30,7";
    if (e.cat !== "Vertrag" || !e.cancelBy || rem === "none") return;
    const cb = nextCancelBy(e),
      n = dleft(cb);
    if (n < 0 || atTime(dateKey(now)) > now) return;
    // Only the closest reached threshold fires, e.g. 30 instead of 90 when the app was not opened for weeks.
    const days = rem
      .split(",")
      .map(Number)
      .filter((x) => n <= x);
    if (!days.length) return;
    out.push({
      key: "ct:" + e.id + ":" + cb + ":" + Math.min(...days),
      kind: "contract",
      ref: e.id,
      until: +atTime(cb, "23:59"),
      title: e.title,
      body: "Kündigung bis " + fmtD(cb) + " (" + (n === 0 ? "heute" : "in " + n + (n === 1 ? " Tag" : " Tagen")) + ")",
    });
  });
  return out;
}
function notify(r) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  // Some mobile browsers only allow notifications from a service worker; the in-app list still shows the reminder.
  try {
    new Notification("NAR Home · " + r.title, { body: r.body, tag: r.key });
  } catch (e) {}
}
function checkReminders() {
  const list = loadReminders(),
    known = new Set(list.map((r) => r.key)),
    fresh = dueReminders().filter((r) => !known.has(r.key));
  if (!fresh.length) return;
  fresh.forEach((r) => {
    r.firedAt = Date.now();
    list.push(r);
    notify(r);
  });
  storeReminders(list);
  if (tab === "home") renderHome();
}
const activeReminders = () => loadReminders().filter((r) => !r.dismissed && r.until > Date.now());
function dismissReminder(key) {
  storeReminders(loadReminders().map((r) => (r.key === key ? { ...r, dismissed: true } : r)));
  renderHome();
}
const notificationsAvailable = () => "Notification" in window;
async function enableNotifications() {
  if (!notificationsAvailable()) {
    showAlert(
      "Nicht unterstützt",
      "Dieser Browser unterstützt keine Benachrichtigungen. Erinnerungen erscheinen in der Übersicht.",
    );
    return;
  }
  const p = await Notification.requestPermission();
  if (p === "denied")
    showAlert(
      "Benachrichtigungen blockiert",
      "Du kannst sie in den Website-Einstellungen deines Browsers wieder erlauben. Erinnerungen erscheinen weiterhin in der Übersicht.",
    );
  render();
}
function renderReminders() {
  const list = activeReminders();
  if (!list.length) return "";
  const ask = notificationsAvailable() && Notification.permission === "default";
  return (
    '<h2 style="margin-top:8px">Erinnerungen</h2>' +
    list
      .slice(-5)
      .reverse()
      .map(
        (r) =>
          '<div class="reminder"><span class="ic">' +
          icon("bell") +
          '</span><button type="button" class="reminder-main" ' +
          (r.kind === "contract"
            ? 'data-id="' + esc(r.ref) + '"'
            : 'data-open-calendar="1" data-cal-date="' + esc(r.ref) + '"') +
          "><b>" +
          esc(r.title) +
          "</b><small>" +
          esc(r.body) +
          '</small></button><button type="button" class="ib" data-dismiss-reminder="' +
          esc(r.key) +
          '" aria-label="Erinnerung ausblenden" title="Ausblenden">✕</button></div>',
      )
      .join("") +
    (ask
      ? '<button type="button" class="btn s w" data-notify="1" style="margin-top:4px">Auch als Benachrichtigung anzeigen</button>'
      : "")
  );
}

/* ---- Preisverlauf & Spar-Hinweise ---- */
const sameMoney = (a, b) =>
  !!a && !!b && String(a.amount) === String(b.amount) && (a.iv || "monatlich") === (b.iv || "monatlich");
// Keeps a history of amount/interval changes per cost item; the first record of an existing amount has no known date.
function recordPriceChange(e, old) {
  (e.costs || []).forEach((c) => {
    if (!c.amount) return;
    const prev = old && (old.costs || []).find((x) => x.id === c.id),
      hist = (c.history || []).slice(),
      now = { date: dateKey(new Date()), amount: String(c.amount), iv: c.iv || "monatlich" };
    if (!hist.length) hist.push(prev && prev.amount ? { date: "", amount: String(prev.amount), iv: prev.iv } : now);
    const last = hist[hist.length - 1];
    if (!sameMoney(last, now)) {
      // Several edits on one day only keep the latest value.
      if (last.date === now.date && hist.length > 1) hist[hist.length - 1] = now;
      else hist.push(now);
    }
    c.history = hist;
  });
}
// Change between the last two recorded prices of one cost item, compared as monthly amounts.
function itemPriceChange(c) {
  const h = (c.history || []).filter((p) => p.iv !== "einmalig");
  if (h.length < 2) return null;
  const a = monthly(h[h.length - 2].amount, h[h.length - 2].iv),
    b = monthly(h[h.length - 1].amount, h[h.length - 1].iv);
  if (!a || a === b) return null;
  return { pct: ((b - a) / a) * 100, from: a, to: b, since: h[h.length - 1].date, label: c.label };
}
const pctTxt = (p) => (p > 0 ? "+" : "") + p.toFixed(1).replace(".", ",") + " %";
function renderPriceHistory() {
  const items = (cur.costs || []).filter((c) => (c.history || []).length > 1);
  $("#priceHist").innerHTML = items
    .map((c) => {
      const ch = itemPriceChange(c);
      return (
        "<b>Preisverlauf" +
        (c.label ? ": " + esc(c.label) : "") +
        "</b>" +
        c.history
          .map(
            (p) =>
              "<div><span>" +
              (p.date ? fmtD(p.date) : "bisher") +
              "</span><span>" +
              fmt(+p.amount) +
              " " +
              esc(p.iv) +
              "</span></div>",
          )
          .join("") +
        (ch
          ? '<small class="' +
            (ch.pct > 0 ? "up" : "down") +
            '">' +
            pctTxt(ch.pct) +
            " pro Monat (" +
            fmt(ch.from) +
            " → " +
            fmt(ch.to) +
            ")</small>"
          : "")
      );
    })
    .join("");
}
function savingsHints() {
  const E = data.entries,
    hints = [];
  E.forEach((e) =>
    (e.costs || []).forEach((c) => {
      const ch = itemPriceChange(c);
      if (ch && ch.pct > 0)
        hints.push({
          id: e.id,
          title: "Preis gestiegen: " + e.title + (c.label ? " – " + c.label : ""),
          text:
            pctTxt(ch.pct) +
            (ch.since ? " seit " + fmtD(ch.since) : "") +
            ", jetzt " +
            fmt(ch.to) +
            " pro Monat. Ein Vergleich lohnt sich.",
        });
    }),
  );
  E.filter((e) => e.cat === "Vertrag" && e.cancelBy && mo1(e) > 0).forEach((e) => {
    const cb = nextCancelBy(e),
      n = dleft(cb);
    if (n >= 0 && n <= 60)
      hints.push({
        id: e.id,
        title: "Kündigungsfenster: " + e.title,
        text: "Bis " + fmtD(cb) + " kündbar (" + fmt(mo1(e)) + " pro Monat). Jetzt Angebote vergleichen.",
      });
  });
  const byKind = {};
  E.filter((e) => e.cat === "Versicherung" && e.objType && !/^Sonstige/.test(e.objType)).forEach((e) =>
    (byKind[e.objType] = byKind[e.objType] || []).push(e),
  );
  Object.entries(byKind)
    .filter(([, l]) => l.length > 1)
    .forEach(([kind, l]) =>
      hints.push({
        id: l[0].id,
        title: "Doppelt versichert? " + l.length + "× " + kind,
        text: l.map((e) => e.title).join(", ") + ". Prüfe, ob sich die Leistungen überschneiden.",
      }),
    );
  const monthlyIns = E.filter(
    (e) => e.cat === "Versicherung" && costItems(e).some((c) => c.amount && (c.iv || "monatlich") === "monatlich"),
  );
  if (monthlyIns.length)
    hints.push({
      title:
        monthlyIns.length +
        (monthlyIns.length === 1 ? " Versicherung wird" : " Versicherungen werden") +
        " monatlich bezahlt",
      text: "Bei jährlicher Zahlweise verlangen viele Versicherer weniger – oft 3 bis 5 % Ersparnis.",
    });
  return hints;
}
function savingsHtml() {
  const hints = savingsHints();
  if (!hints.length) return "";
  return (
    "<h2>Spar-Hinweise</h2>" +
    hints
      .map(
        (x) =>
          '<button type="button" class="hint"' +
          (x.id ? ' data-id="' + esc(x.id) + '"' : "") +
          "><b>" +
          esc(x.title) +
          "</b><small>" +
          esc(x.text) +
          "</small></button>",
      )
      .join("")
  );
}

/* ---- Ansichten ---- */
function rowHtml(e) {
  const t = tp(e),
    k = (e.docs || []).length,
    x = e.x || {},
    first = t.f.map((l) => x[l]).find(Boolean);
  let fr = "";
  const all = entryDeadlines(e),
    pd = all[0];
  if (pd) {
    const n = dleft(pd.date);
    fr =
      '<small class="' +
      (n < 0 ? "r" : n <= 30 ? "w" : "") +
      '">' +
      esc(pd.label) +
      ": " +
      esc(fmtD(pd.date)) +
      " · " +
      (n < 0 ? "abgelaufen" : n === 0 ? "heute" : "in " + n + (n === 1 ? " Tag" : " Tagen")) +
      (all.length > 1 ? " · +" + (all.length - 1) + (all.length === 2 ? " weitere Frist" : " weitere Fristen") : "") +
      "</small>";
  }
  const m = mo1(e),
    once = onceSum(e),
    pr = m ? fmt(m) + "<small>pro Monat</small>" : once ? fmt(once) + "<small>einmalig</small>" : "";
  return (
    '<button class="row" data-id="' +
    esc(e.id) +
    '" style="--c:' +
    esc(t.c) +
    '"><span class="ic">' +
    icon(t.i) +
    '</span><div class="m"><b>' +
    (e.fav ? "★ " : "") +
    esc(e.title) +
    "</b><small>" +
    esc(e.objType || e.cat) +
    (e.owner ? " · " + esc(e.owner) : "") +
    (first ? " · " + esc(first) : "") +
    (k ? " · " + k + " 📎" : "") +
    "</small>" +
    fr +
    '</div><div class="pr">' +
    pr +
    "</div></button>"
  );
}
// Collapsible home sections; the open/closed state is remembered on this device.
const homeFolds = () => JSON.parse(localStorage.getItem("hv_home_folds") || "{}");
function homeFold(key, title, count, content) {
  const open = homeFolds()[key] !== false;
  return (
    '<details class="home-fold" data-fold="' +
    key +
    '"' +
    (open ? " open" : "") +
    "><summary><h2>" +
    esc(title) +
    '</h2><span class="fold-count">' +
    count +
    "</span></summary>" +
    content +
    "</details>"
  );
}
function renderHome() {
  const E = data.entries,
    mo = sum(E);
  const dl = E.filter((e) => dueOf(e))
    .map((e) => ({ e, n: dleft(dueOf(e)) }))
    .sort((a, b) => a.n - b.n);
  const urgent = dl.filter((x) => x.n <= 30),
    dc = nDocs(E),
    fav = E.filter((e) => e.fav),
    conflicts = loadConflicts();
  let h = "";
  if (conflicts.length)
    h +=
      '<div class="card note"><b>Synchronisationskonflikt</b><p class="mu" style="margin:5px 0 12px">' +
      (conflicts.length === 1 ? "Ein Eintrag wurde" : conflicts.length + " Einträge wurden") +
      " auf zwei Geräten gleichzeitig geändert. Vergleiche die Versionen und wähle die richtige aus.</p>" +
      '<button class="btn w" data-conflicts="1">Versionen vergleichen</button></div>';
  if (!cid())
    h +=
      '<div class="card note"><b>Noch nicht eingerichtet</b><p style="margin:6px 0 12px">Google Drive verbinden.</p><button class="btn w" data-set="1">Einrichten</button></div>';
  else if (!folderId)
    h +=
      '<div class="card note"><b>Nicht mit Drive verbunden</b><p style="margin:6px 0 12px">Aktuell nur auf diesem Gerät gespeichert.</p><button class="btn w" data-con="1">Mit Google Drive verbinden</button><button class="btn s w" data-set="1" style="margin-top:8px">Einrichtung &amp; Partner-Gerät</button></div>';
  else if (authExpired)
    h +=
      '<div class="card note"><b>Google-Anmeldung abgelaufen</b><p style="margin:6px 0 12px">Deine Änderungen sind auf diesem Gerät gespeichert und werden nach der Anmeldung synchronisiert.</p><button class="btn w" data-con="1">Erneut anmelden</button></div>';
  h += renderReminders();
  if (E.length) {
    h += '<h2 style="margin-top:8px">Handlungsbedarf</h2>';
    h += urgent.length
      ? urgent
          .slice(0, 5)
          .map((x) => rowHtml(x.e))
          .join("") +
        (urgent.length > 5
          ? '<p class="mu" style="margin:4px 2px 0;font-size:12px">+ ' +
            (urgent.length - 5) +
            " weitere unter „Einträge“ (Sortierung „Nächste Frist“)</p>"
          : "")
      : '<div class="card" style="display:flex;gap:12px;align-items:center;margin-top:0"><span class="ic" style="color:var(--ok)">' +
        icon("shield-check") +
        '</span><div class="m"><b>Alles im grünen Bereich</b><small>Keine Frist in den nächsten 30 Tagen.</small></div></div>';
    h +=
      '<div class="hero" style="margin-top:20px">' +
      (mo > 0
        ? '<small>Fixkosten pro Monat</small><div class="big">' +
          fmt(mo) +
          "</div><div>" +
          fmt(mo * 12) +
          " pro Jahr</div>"
        : '<small>Gespeichert</small><div class="big">' +
          dc +
          " Dokument" +
          (dc === 1 ? "" : "e") +
          "</div><div>in " +
          E.length +
          (E.length === 1 ? " Eintrag" : " Einträgen") +
          "</div>") +
      '<div class="hs">' +
      (mo > 0 ? "<span><b>" + E.length + "</b> Einträge</span><span><b>" + dc + "</b> Dokumente</span>" : "") +
      (dl.length ? "<span><b>" + urgent.length + "</b> Fristen in 30 Tagen</span>" : "") +
      "</div></div>";
    if (fav.length) h += homeFold("fav", "Wichtig", fav.length, fav.slice(0, 5).map(rowHtml).join(""));
    h += homeFold(
      "recent",
      "Zuletzt hinzugefügt",
      Math.min(E.length, 4),
      E.slice()
        .sort((a, b) => (b.ts || 0) - (a.ts || 0))
        .slice(0, 4)
        .map(rowHtml)
        .join(""),
    );
  }
  h += renderUpcoming();
  if (E.length)
    h +=
      '<h2>Kategorien</h2><div class="grid">' +
      Object.keys(T)
        .map((c) => {
          const L = E.filter((e) => e.cat === c),
            s = sum(L),
            d = nDocs(L);
          return (
            '<button class="tile" data-go="' +
            esc(c) +
            '" style="--c:' +
            esc(T[c].c) +
            '"><span class="ic">' +
            icon(T[c].i) +
            "</span><b>" +
            esc(c) +
            "</b><small>" +
            L.length +
            (L.length === 1 ? " Eintrag" : " Einträge") +
            (d ? " · " + d + " Dok." : "") +
            (s ? "<br>" + fmt0(s) + " pro Monat" : "") +
            "</small></button>"
          );
        })
        .join("") +
      "</div>";
  $("#v-home").innerHTML = h;
}
function renderUpcoming() {
  const out = [];
  for (let i = 0; i < 60 && out.length < 3; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const k = dateKey(d);
    eventsForDate(k)
      .filter((e) => !isEventDone(e, k))
      .forEach((e) => {
        if (out.length < 3) out.push({ e, k });
      });
  }
  return (
    '<div class="mini-calendar-head" style="margin:27px 0 11px"><h2 style="margin:0">Nächste Termine</h2><button class="btn s" data-open-calendar="1">Kalender öffnen</button></div>' +
    (out.length
      ? out
          .map((x) => {
            const d = parseLocalDate(x.k);
            return (
              '<div class="event-row" role="button" tabindex="0" data-open-calendar="1" data-cal-date="' +
              x.k +
              '"><div class="event-datebox"><b>' +
              d.getDate() +
              "</b><small>" +
              d.toLocaleDateString("de-DE", { month: "short" }) +
              '</small></div><div class="m"><b>' +
              esc(x.e.title) +
              '</b><small><span class="event-badge">' +
              esc(x.e.type || "Termin") +
              "</span>" +
              esc(x.e.time || "") +
              "</small></div></div>"
            );
          })
          .join("")
      : '<div class="card mu" style="margin:0">Keine anstehenden Termine.</div>')
  );
}
function openMore() {
  document.querySelector(".settings-dialog-backdrop")?.remove();
  const items = [
    ["docs", "file", "Dokumente", "Alle Dateien durchsuchen und öffnen"],
    ["stats", "chart", "Statistik", "Kosten, Fristen und Spar-Hinweise"],
    ["emergency", "lifebuoy", "Notfallmappe", "Alle wichtigen Daten als PDF"],
    ["settings", "settings", "Einstellungen", "Kategorien, Backup, Darstellung und Google Drive"],
  ];
  const b = document.createElement("div");
  b.className = "settings-dialog-backdrop";
  b.innerHTML =
    '<div class="settings-dialog" role="dialog" aria-modal="true"><div class="settings-dialog-head"><div class="settings-dialog-kicker">Mehr</div><h3>Weitere Bereiche</h3></div><div class="settings-dialog-body">' +
    items
      .map(
        (i) =>
          '<button type="button" class="row" data-more="' +
          i[0] +
          '"><span class="ic">' +
          icon(i[1]) +
          '</span><div class="m"><b>' +
          i[2] +
          "</b><small>" +
          i[3] +
          "</small></div></button>",
      )
      .join("") +
    '</div><div class="settings-dialog-foot"><button type="button" class="dialog-secondary" data-cancel>Schließen</button></div></div>';
  document.body.appendChild(b);
  document.body.classList.add("modal-lock");
  requestAnimationFrame(() => b.classList.add("on"));
  const close = (cb) => {
    b.classList.remove("on");
    if (!document.querySelector(".ov.on,.doc-preview.on")) document.body.classList.remove("modal-lock");
    setTimeout(() => {
      b.remove();
      cb && cb();
    }, 180);
  };
  b.addEventListener("click", (e) => {
    const m = e.target.closest("[data-more]");
    if (m) {
      close(() => (m.dataset.more === "emergency" ? printEmergency() : navigateTo(m.dataset.more)));
      return;
    }
    if (e.target === b || e.target.closest("[data-cancel]")) close();
  });
  b.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
function renderList() {
  $("#chips").innerHTML = ["Alle", ...Object.keys(T)]
    .map(
      (c) => '<button class="chip' + (c === filter ? " on" : "") + '" data-c="' + esc(c) + '">' + esc(c) + "</button>",
    )
    .join("");
  const hay = (e) =>
    (
      e.title +
      " " +
      (e.note || "") +
      " " +
      (e.objType || "") +
      " " +
      (e.owner || "") +
      " " +
      Object.values(e.x || {}).join(" ") +
      " " +
      (e.docs || []).map((d) => d.name + " " + (d.subcategory || "")).join(" ")
    ).toLowerCase();
  const po = $("#po"),
    person = people().includes(po.value) ? po.value : "";
  po.innerHTML =
    '<option value="">Alle Personen</option>' +
    people()
      .map((p) => '<option value="' + esc(p) + '">' + esc(p) + "</option>")
      .join("");
  po.value = person;
  const l = data.entries.filter(
    (e) => (filter === "Alle" || e.cat === filter) && (!person || e.owner === person) && hay(e).includes(q),
  );
  l.sort(
    (a, b) =>
      (b.fav ? 1 : 0) - (a.fav ? 1 : 0) ||
      (so === "t"
        ? (b.ts || 0) - (a.ts || 0)
        : so === "d"
          ? (dueOf(a) || "9").localeCompare(dueOf(b) || "9")
          : a.title.localeCompare(b.title, "de")),
  );
  // Within one category that has object kinds (e.g. Vertrag → Mobilfunk), the list is grouped by kind.
  const kinds = filter !== "Alle" ? OBJ[filter] || [] : [];
  if (kinds.length && l.length) {
    const groups = [...kinds, ""].map((k) => [k, l.filter((e) => (kinds.includes(e.objType) ? e.objType : "") === k)]);
    $("#list").innerHTML = groups
      .filter(([, L]) => L.length)
      .map(([k, L]) => '<h3 class="list-group">' + esc(k || "Ohne Art") + "</h3>" + L.map(rowHtml).join(""))
      .join("");
    return;
  }
  $("#list").innerHTML =
    l.map(rowHtml).join("") ||
    '<p class="mu" style="margin-top:20px">Keine Einträge gefunden. Tippe unten auf „Neu“, um einen anzulegen.</p>';
}
function renderDocs2() {
  const L = [];
  data.entries.forEach((e) => (e.docs || []).forEach((d) => L.push({ d, e })));
  const sel = $("#docCat"),
    cat = Object.keys(T).includes(sel.value) ? sel.value : "Alle";
  sel.innerHTML =
    '<option value="Alle">Alle Kategorien</option>' +
    Object.keys(T)
      .map((c) => '<option value="' + esc(c) + '">' + esc(c) + "</option>")
      .join("");
  sel.value = cat;
  const f = L.filter(
    (x) =>
      (
        x.d.name +
        " " +
        x.e.title +
        " " +
        x.e.cat +
        " " +
        (x.e.objType || "") +
        " " +
        (x.d.subcategory || "") +
        " " +
        (x.e.owner || "")
      )
        .toLowerCase()
        .includes(qd) &&
      (cat === "Alle" || x.e.cat === cat),
  );
  $("#dlist").innerHTML =
    f
      .map((x) => {
        const n = x.d.name.toLowerCase(),
          ico = n.endsWith(".pdf") ? "file-text" : /\.(jpe?g|png|heic|webp|gif|bmp)$/.test(n) ? "image" : "file";
        return (
          '<div class="row" style="--c:' +
          esc(tp(x.e).c) +
          '"><button class="ib" data-od="' +
          esc(x.d.id) +
          '" data-oe="' +
          esc(x.e.id) +
          '" title="Öffnen" style="padding:4px">' +
          icon(ico) +
          '</button><div class="m"><b>' +
          esc(x.d.name) +
          "</b><small>" +
          esc(x.e.title) +
          " · " +
          esc(x.e.cat) +
          (x.d.subcategory ? " / " + esc(x.d.subcategory) : "") +
          '</small></div><button class="ib" data-dl="' +
          esc(x.d.id) +
          '" data-de="' +
          esc(x.e.id) +
          '" title="Herunterladen">↓</button></div>'
        );
      })
      .join("") || '<p class="mu">' + (L.length ? "Keine Treffer." : "Noch keine Dokumente.") + "</p>";
}
function renderStats() {
  const E = data.entries;
  if (!E.length) {
    $("#v-stats").innerHTML =
      '<div class="card"><b>Noch keine Daten</b><p class="mu" style="margin:6px 0 0">Sobald du Einträge angelegt hast, siehst du hier Auswertungen.</p></div>';
    return;
  }
  const mo = sum(E),
    priced = E.filter((e) => mo1(e) > 0),
    dd = E.filter((e) => dueOf(e));
  const cats = Object.keys(T)
      .map((c) => ({ c, n: E.filter((e) => e.cat === c).length, d: nDocs(E.filter((e) => e.cat === c)) }))
      .filter((x) => x.n),
    mx = Math.max(...cats.map((x) => x.n));
  let h =
    '<h2 style="margin-top:8px">Überblick</h2><div class="facts"><div><b>' +
    E.length +
    "</b><small>Einträge</small></div><div><b>" +
    nDocs(E) +
    "</b><small>Dokumente</small></div></div>" +
    savingsHtml() +
    '<h2>Einträge pro Kategorie</h2><div class="card">' +
    cats
      .map(
        (x) =>
          '<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between"><span style="display:flex;align-items:center;gap:8px">' +
          icon(T[x.c].i) +
          esc(x.c) +
          "</span><b>" +
          x.n +
          '</b></div><div class="bw" style="--c:' +
          esc(T[x.c].c) +
          '"><i style="width:' +
          (x.n / mx) * 100 +
          '%"></i></div></div>',
      )
      .join("") +
    "</div>";
  if (priced.length) {
    const by = Object.keys(T)
      .map((c) => ({ c, v: sum(E.filter((e) => e.cat === c)) }))
      .filter((x) => x.v > 0)
      .sort((a, b) => b.v - a.v);
    let off = 25;
    const segs = by
      .map((x) => {
        const p = (x.v / mo) * 100,
          s =
            '<circle cx="21" cy="21" r="15.9155" fill="none" stroke="' +
            esc(T[x.c].c) +
            '" stroke-width="6" stroke-dasharray="' +
            p +
            " " +
            (100 - p) +
            '" stroke-dashoffset="' +
            off +
            '"/>';
        off -= p;
        return s;
      })
      .join("");
    const top = priced
        .slice()
        .sort((a, b) => mo1(b) - mo1(a))
        .slice(0, 5),
      m1 = mo1(top[0]),
      once = E.reduce((s, e) => s + onceSum(e), 0);
    h +=
      '<h2>Kosten nach Kategorie</h2><div class="card"><svg viewBox="0 0 42 42" style="width:210px;display:block;margin:0 auto"><circle cx="21" cy="21" r="15.9155" fill="none" stroke="#e2e8f0" stroke-width="6"/>' +
      segs +
      '<text x="21" y="20.5" text-anchor="middle" font-size="4.6" font-weight="700" fill="#162331">' +
      fmt0(mo) +
      '</text><text x="21" y="25.5" text-anchor="middle" font-size="2.6" fill="#64748b">pro Monat</text></svg><div style="margin-top:10px">' +
      by
        .map(
          (x) =>
            '<div class="leg" style="--c:' +
            esc(T[x.c].c) +
            '"><i></i>' +
            esc(x.c) +
            ' <span class="mu">' +
            Math.round((x.v / mo) * 100) +
            " %</span><b>" +
            fmt(x.v) +
            "</b></div>",
        )
        .join("") +
      "</div></div>" +
      '<h2>Teuerste Posten pro Monat</h2><div class="card">' +
      top
        .map(
          (e) =>
            '<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;gap:8px"><span>' +
            esc(e.title) +
            "</span><b>" +
            fmt(mo1(e)) +
            '</b></div><div class="bw" style="--c:' +
            esc(tp(e).c) +
            '"><i style="width:' +
            (mo1(e) / m1) * 100 +
            '%"></i></div></div>',
        )
        .join("") +
      "</div>" +
      '<div class="facts"><div><b>' +
      fmt0(mo * 12) +
      "</b><small>Kosten pro Jahr</small></div><div><b>" +
      fmt0(once) +
      "</b><small>Einmalige Kosten</small></div><div><b>" +
      priced.length +
      " von " +
      E.length +
      "</b><small>Einträge mit Betrag</small></div><div><b>" +
      fmt0(mo / priced.length) +
      "</b><small>Ø pro Posten und Monat</small></div></div>";
  }
  if (dd.length) {
    const od = dd.filter((e) => dleft(dueOf(e)) < 0).length,
      s30 = dd.filter((e) => {
        const n = dleft(dueOf(e));
        return n >= 0 && n <= 30;
      }).length;
    h +=
      '<h2>Fristen im Überblick</h2><div class="facts"><div><b style="color:var(--rd)">' +
      od +
      '</b><small>abgelaufen</small></div><div><b style="color:var(--wa)">' +
      s30 +
      "</b><small>in den nächsten 30 Tagen</small></div><div><b>" +
      (dd.length - od - s30) +
      "</b><small>später</small></div><div><b>" +
      (E.length - dd.length) +
      "</b><small>ohne Frist</small></div></div>";
  }
  $("#v-stats").innerHTML = h;
}

function dateKey(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function parseLocalDate(s) {
  const a = (s || "").split("-").map(Number);
  return new Date(a[0], a[1] - 1, a[2]);
}
function monthLabel(d) {
  return d.toLocaleDateString("de-DE", { month: "long", year: "numeric" });
}
const isRecurring = (ev) => !!ev.repeat && ev.repeat !== "none";
// Recurring events track "done" and deleted occurrences per date; single events use status.
function isEventDone(ev, key) {
  return isRecurring(ev) ? (ev.doneDates || []).includes(key) : ev.status === "done";
}
function eventOccursOn(ev, key) {
  if (!ev.date || (ev.exDates || []).includes(key)) return false;
  if (ev.date === key) return true;
  if (!isRecurring(ev)) return false;
  const start = parseLocalDate(ev.date),
    target = parseLocalDate(key);
  if (target < start) return false;
  // Days that don't exist in the target month (31st, 29 Feb) fall back to the month's last day.
  const day = Math.min(start.getDate(), new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate());
  if (ev.repeat === "yearly") return start.getMonth() === target.getMonth() && target.getDate() === day;
  if (ev.repeat === "monthly") return target.getDate() === day;
  if (ev.repeat === "weekly") return Math.round((target - start) / 86400000) % 7 === 0;
  return false;
}
function eventsForDate(key) {
  return (data.events || [])
    .filter((e) => eventOccursOn(e, key))
    .sort((a, b) => (a.time || "").localeCompare(b.time || ""));
}
// Entry deadlines (TÜV, cancellation dates, ID expiry, …) grouped by date for the calendar.
function deadlineMap() {
  const m = new Map();
  data.entries.forEach((e) =>
    entryDeadlines(e).forEach((d) => {
      if (!m.has(d.date)) m.set(d.date, []);
      m.get(d.date).push({ e, label: d.label, kind: d.kind });
    }),
  );
  return m;
}
function renderCalendar() {
  const y = calMonth.getFullYear(),
    m = calMonth.getMonth(),
    first = new Date(y, m, 1),
    offset = (first.getDay() + 6) % 7,
    days = new Date(y, m + 1, 0).getDate(),
    dmap = deadlineMap();
  let h =
    '<div class="cal-head"><div class="cal-month">' +
    monthLabel(calMonth) +
    '</div><div class="cal-toolbar"><button class="btn s" data-cal-today="1">Heute</button><button class="btn s" data-cal-prev="1" aria-label="Vorheriger Monat">‹</button><button class="btn s" data-cal-next="1" aria-label="Nächster Monat">›</button><button class="btn cal-add" data-new-event="1" aria-label="Neuer Termin" title="Neuer Termin">' +
    icon("plus") +
    '</button></div></div><div class="cal-card"><div class="cal-grid">';
  ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].forEach((x) => (h += '<div class="cal-weekday">' + x + "</div>"));
  for (let i = 0; i < offset; i++) h += "<div></div>";
  for (let d = 1; d <= days; d++) {
    const key = dateKey(new Date(y, m, d)),
      events = eventsForDate(key),
      dls = dmap.get(key) || [],
      today = key === dateKey(new Date()),
      label =
        new Date(y, m, d).toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }) +
        (events.length ? ", " + events.length + (events.length === 1 ? " Termin" : " Termine") : "") +
        (dls.length ? ", " + dls.length + (dls.length === 1 ? " Frist" : " Fristen") : "");
    h +=
      '<button class="cal-day ' +
      (today ? "today " : "") +
      (calSelected === key ? "selected" : "") +
      '" data-cal-select="' +
      key +
      '" aria-label="' +
      esc(label) +
      '" aria-pressed="' +
      (calSelected === key) +
      '"' +
      (today ? ' aria-current="date"' : "") +
      '><span class="daynum">' +
      d +
      '</span><span class="dots">' +
      [...dls.map(() => '<i class="dl"></i>'), ...events.map(() => "<i></i>")].slice(0, 3).join("") +
      "</span></button>";
  }
  h += '</div></div><div class="cal-agenda">';
  const evs = eventsForDate(calSelected),
    selDls = dmap.get(calSelected) || [];
  h += selDls
    .map(
      (x) =>
        '<div class="event-row deadline-row" role="button" tabindex="0" data-open-entry="' +
        esc(x.e.id) +
        '"><div class="event-datebox">' +
        icon(tp(x.e).i) +
        '</div><div class="m"><b>' +
        esc(x.label) +
        ": " +
        esc(x.e.title) +
        '</b><small><span class="event-badge dl">Frist</span>' +
        esc(x.e.cat) +
        "</small></div></div>",
    )
    .join("");
  h += evs.length
    ? evs
        .map((e) => {
          const done = isEventDone(e, calSelected);
          return (
            '<div class="swipe-wrap" data-swipe-id="' +
            esc(e.id) +
            '" data-swipe-date="' +
            esc(calSelected) +
            '"><div class="swipe-bg"><span class="sw-done">' +
            (done ? "Wieder öffnen" : "Erledigt") +
            '</span><span class="sw-del">Löschen</span></div><div class="event-row ' +
            (done ? "event-done" : "") +
            '" data-edit-event="' +
            esc(e.id) +
            '" data-edit-date="' +
            esc(calSelected) +
            '" role="button" tabindex="0"><div class="event-datebox"><b>' +
            (esc((e.time || "").slice(0, 5)) || "—") +
            '</b></div><div class="m"><b>' +
            esc(e.title) +
            '</b><small><span class="event-badge">' +
            esc(e.type || "Termin") +
            "</span>" +
            esc(e.note || "") +
            (isRecurring(e) ? " · Wiederholt sich" : "") +
            ((e.files || []).length ? " · " + e.files.length + " 📎" : "") +
            '</small></div><button type="button" class="event-check' +
            (done ? " on" : "") +
            '" data-toggle-done="' +
            esc(e.id) +
            '" data-done-date="' +
            esc(calSelected) +
            '" aria-pressed="' +
            done +
            '" aria-label="' +
            esc(e.title) +
            (done ? " wieder öffnen" : " als erledigt markieren") +
            '" title="' +
            (done ? "Wieder öffnen" : "Erledigt") +
            '">✓</button></div></div>'
          );
        })
        .join("")
    : selDls.length
      ? ""
      : '<div class="card mu">Keine Termine an diesem Tag.</div>';
  h +=
    '</div><div class="settings-note" style="margin:12px 2px">Gemeinsame Familientermine. Abhaken mit ✓ oder nach rechts wischen, löschen durch Wischen nach links.</div>';
  $("#v-calendar").innerHTML = h;
}
function renderSettings() {
  const cats = Object.keys(T);
  const iconSvg = (d) => '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true">' + d + "</svg>";
  let h =
    '<h2 style="margin-top:8px">Einstellungen</h2><p class="settings-note">Verwalte Kategorien, Gesellschaften und weitere Stammdaten an einem Ort.</p>';
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    iconSvg(
      '<path d="M4 5h16M4 12h16M4 19h16"/><circle cx="8" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="10" cy="19" r="1"/>',
    ) +
    '</span><span><span class="set-title">Kategorien</span><span class="set-sub">Kategorien, Objektarten und Unterlagen-Arten</span></span></summary><div class="settings-content">';
  cats.forEach((c) => {
    const subs = SUB[c] || [],
      kinds = OBJ[c] || [];
    h +=
      '<div class="settings-item"><span><b>' +
      esc(c) +
      '</b><small class="doc-meta">' +
      subs.length +
      " Unterlagen-Arten" +
      (kinds.length ? " · " + kinds.length + " Objektarten" : "") +
      '</small></span><button type="button" class="icon-btn" data-edit-cat="' +
      esc(c) +
      '" aria-label="' +
      esc(c) +
      ' bearbeiten" title="Bearbeiten">' +
      icon("pencil") +
      '</button><button type="button" class="icon-btn danger" data-del-cat="' +
      esc(c) +
      '" aria-label="' +
      esc(c) +
      ' löschen" title="Löschen">' +
      icon("trash") +
      "</button></div>";
  });
  h +=
    '<div class="settings-tools"><button class="btn" data-add-cat="1">＋ Hauptkategorie hinzufügen</button></div></div></details>';
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    iconSvg('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h6M7 16h8"/>') +
    '</span><span><span class="set-title">Weitere Stammdaten</span><span class="set-sub">Personen, Gesellschaften, Anbieter und Fahrzeugdaten</span></span></summary><div class="settings-content"><label class="f"><span>Liste auswählen</span><select id="settingsList" class="settings-select">' +
    Object.keys(SETTINGS_LISTS)
      .map((k) => '<option value="' + k + '">' + SETTINGS_LISTS[k].label + "</option>")
      .join("") +
    '</select></label><div id="settingsListItems"></div><div class="settings-tools"><button class="btn" data-add-list-item="1">＋ Eintrag hinzufügen</button></div></div></details>';
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    iconSvg(ICONS.settings) +
    '</span><span><span class="set-title">App & Synchronisation</span><span class="set-sub">Verbindung, Erinnerungen und weitere Funktionen</span></span></summary><div class="settings-content"><p class="settings-note">Einträge, Termine und Einstellungen werden auf diesem Gerät gespeichert und – sobald Google Drive verbunden ist – automatisch mit dem Partnerkonto synchronisiert.</p><p class="settings-note">Erinnerungen erscheinen in der Übersicht, solange NAR Home geöffnet ist. Benachrichtigungen: <b>' +
    (!notificationsAvailable()
      ? "nicht unterstützt"
      : Notification.permission === "granted"
        ? "erlaubt"
        : Notification.permission === "denied"
          ? "im Browser blockiert"
          : "noch nicht erlaubt") +
    '</b></p><div class="settings-tools">' +
    (notificationsAvailable() && Notification.permission === "default"
      ? '<button class="btn s" data-notify="1">Benachrichtigungen erlauben</button>'
      : "") +
    '<button class="btn s" data-drive-settings="1">Google-Drive-Einstellungen</button>' +
    (legacyDocCount()
      ? '<button class="btn s" data-resort="1">Unterlagen in Objekt-Ordner einsortieren (' +
        legacyDocCount() +
        ")</button>"
      : "") +
    "</div>" +
    (legacyDocCount()
      ? '<p class="settings-note">Ältere Dokumente liegen in Drive noch in der alten Ordnerstruktur. Mit dem Knopf werden sie einmalig in die Ordner ihrer Objekte verschoben.</p>'
      : "") +
    "</div></details>";
  const th = themeSetting(),
    last = +localStorage.getItem("hv_last_backup") || 0,
    lastTxt = last
      ? new Date(last).toLocaleDateString("de-DE", { dateStyle: "medium" }) +
        " (vor " +
        Math.max(0, Math.round((Date.now() - last) / 864e5)) +
        " Tagen)"
      : "noch nie";
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    iconSvg(ICONS.moon) +
    '</span><span><span class="set-title">Darstellung</span><span class="set-sub">Hell, Dunkel oder wie das Gerät</span></span></summary><div class="settings-content"><div class="seg" role="radiogroup" aria-label="Farbschema">' +
    [
      ["auto", "Automatisch"],
      ["light", "Hell"],
      ["dark", "Dunkel"],
    ]
      .map(
        ([v, l]) =>
          '<button type="button" role="radio" aria-checked="' +
          (th === v) +
          '" class="' +
          (th === v ? "on" : "") +
          '" data-theme-set="' +
          v +
          '">' +
          l +
          "</button>",
      )
      .join("") +
    '</div><p class="settings-note">Die Einstellung gilt nur für dieses Gerät.</p></div></details>';
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    iconSvg(ICONS.archive) +
    '</span><span><span class="set-title">Datensicherung &amp; Notfallmappe</span><span class="set-sub">Backup, Wiederherstellung und PDF-Übersicht</span></span></summary><div class="settings-content"><p class="settings-note">Letzte Sicherung auf diesem Gerät: <b>' +
    esc(lastTxt) +
    '</b></p><div class="settings-tools"><button class="btn s" data-backup="json">Backup herunterladen (ohne Dokumente)</button><button class="btn s" data-backup="zip">Backup mit Dokumenten (ZIP)</button><button class="btn s" data-backup="import">Sicherung wiederherstellen</button><button class="btn s" data-backup="print">Notfallmappe als PDF</button></div><p class="settings-note">Das ZIP enthält die Daten und alle Dokumente als normale Dateien. Beim Wiederherstellen werden die Daten übernommen; Dokumente bleiben in Google Drive und werden nicht erneut hochgeladen.</p><input type="file" id="importFile" accept=".json,.zip,application/json,application/zip" hidden></div></details>';
  const trashCount = (data.trash || []).filter((t) => !t.restoredAt).length;
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    iconSvg(ICONS.trash) +
    '</span><span><span class="set-title">Papierkorb</span><span class="set-sub">' +
    (trashCount ? trashCount + " gelöschte Elemente wiederherstellbar" : "Gelöschtes wiederherstellen") +
    '</span></span></summary><div class="settings-content">' +
    trashHtml() +
    "</div></details>";
  $("#v-settings").innerHTML = h;
  document.querySelectorAll("#v-settings details").forEach((d, i) => {
    d.open = !!settingsOpen[i];
  });
  renderSettingsList();
}
function renderSettingsList() {
  const key = $("#settingsList")?.value || "providers",
    items = data.settings.customLists[key] || [];
  $("#settingsListItems").innerHTML = items.length
    ? items
        .map(
          (v, i) =>
            '<div class="settings-item"><span>' +
            esc(v) +
            '</span><button type="button" class="icon-btn" data-edit-list="' +
            i +
            '" aria-label="' +
            esc(v) +
            ' ändern" title="Ändern">' +
            icon("pencil") +
            '</button><button type="button" class="icon-btn danger" data-del-list="' +
            i +
            '" aria-label="' +
            esc(v) +
            ' löschen" title="Löschen">' +
            icon("trash") +
            "</button></div>",
        )
        .join("")
    : '<p class="settings-note">Noch keine Einträge.</p>';
}
function saveDataLocal() {
  localStorage.setItem("hv_data", JSON.stringify(data));
  if (folderId) {
    clearTimeout(timer);
    setSt("Änderungen werden synchronisiert …", "busy");
    timer = setTimeout(save, 800);
  }
  setTimeout(checkReminders, 0);
}
let editingEventDate = null;
// Marks a single event, or for recurring events only the occurrence on `key`, as done or open again.
function toggleEventDone(id, key) {
  const ev = (data.events || []).find((x) => x.id === id);
  if (!ev) return;
  if (isRecurring(ev)) {
    const was = isEventDone(ev, key);
    ev.doneDates = (ev.doneDates || []).filter((k) => k !== key);
    if (!was) ev.doneDates.push(key);
  } else ev.status = ev.status === "done" ? "open" : "done";
  ev.updatedAt = Date.now();
  saveDataLocal();
  render();
}
function addEvent() {
  editingEventId = null;
  editingEventDate = null;
  $("#eventTitle").textContent = "Neuer Termin";
  $("#evName").value = "";
  $("#evDate").value = calSelected || dateKey(new Date());
  $("#evTime").value = "";
  $("#evType").value = "Familie";
  $("#evNote").value = "";
  $("#evRepeat").value = "none";
  $("#evReminder").value = "0";
  evFiles = [];
  renderEventFiles();
  $("#evDelete").classList.add("hide");
  $("#eventOv").classList.add("on");
  $("#eventOv .sh").scrollTop = 0;
}
function editEvent(id, key) {
  const e = (data.events || []).find((x) => x.id === id);
  if (!e) return;
  editingEventId = id;
  editingEventDate = key || e.date;
  $("#eventTitle").textContent = "Termin bearbeiten";
  $("#evName").value = e.title || "";
  $("#evDate").value = e.date || "";
  $("#evTime").value = e.time || "";
  $("#evType").value = e.type || "Familie";
  $("#evNote").value = e.note || "";
  $("#evRepeat").value = e.repeat || "none";
  $("#evReminder").value = String(e.reminder || 0);
  evFiles = JSON.parse(JSON.stringify(e.files || []));
  renderEventFiles();
  $("#evDelete").classList.remove("hide");
  $("#eventOv").classList.add("on");
  $("#eventOv .sh").scrollTop = 0;
}
// Closes the event form. Files uploaded in this session but not saved are trashed again.
function closeEvent() {
  evUploads.forEach((id) => delDrive(id));
  evUploads = [];
  evRemovals = [];
  evFiles = [];
  $("#eventOv").classList.remove("on");
  $("#eventOv .sh").scrollTop = 0;
  editingEventId = null;
  editingEventDate = null;
}
async function requestCloseEvent() {
  if (
    (evUploads.length || evRemovals.length) &&
    !(await showConfirm(
      "Änderungen verwerfen?",
      "Neu angehängte Dateien werden wieder entfernt, entfernte Anhänge bleiben erhalten.",
      "Verwerfen",
      true,
    ))
  )
    return;
  closeEvent();
}
function renderEventFiles() {
  $("#evFiles").innerHTML = evFiles.length
    ? evFiles
        .map(
          (d, i) =>
            '<div class="doc"><span aria-hidden="true">' +
            icon(fileIcon(d.name) === "▤" ? "file-text" : "image") +
            '</span><button type="button" class="doc-link" data-ev-open="' +
            i +
            '" title="Vorschau öffnen">' +
            esc(d.name) +
            '</button><span class="doc-actions"><button type="button" class="ib" data-ev-rm="' +
            i +
            '" title="Anhang entfernen" aria-label="' +
            esc(d.name) +
            ' entfernen">✕</button></span></div>',
        )
        .join("")
    : "";
}
// Checked synchronously so the file picker / camera still opens within the user's tap.
function canAttachToEvent() {
  if (folderId) return true;
  showAlert("Google Drive nicht verbunden", "Anhänge werden in Google Drive gespeichert. Bitte zuerst verbinden.");
  return false;
}
async function attachEventFiles(e) {
  const files = [...e.target.files];
  e.target.value = "";
  if (!files.length || !folderId || !(await ensureAuth())) return;
  const date = $("#evDate").value || dateKey(new Date()),
    title = $("#evName").value.trim() || "Termin";
  try {
    setSt("Ordner wird vorbereitet …", "busy");
    const folder = await folderFor("Kalender", date.slice(0, 4));
    for (const f of files) {
      const name = uniqueDocName(
        buildDocName({ date, title, type: "", ext: fileExt(f.name, f.type) }),
        { docs: evFiles },
        "",
      );
      try {
        setSt("Lade hoch: " + name, "busy");
        const j = await (await up(name, f, null, folder)).json();
        evUploads.push(j.id);
        evFiles.push({ id: j.id, name: j.name || name, mimeType: j.mimeType || f.type || "" });
        renderEventFiles();
      } catch (err) {
        await showAlert("Upload fehlgeschlagen", "„" + f.name + "“ konnte nicht hochgeladen werden.");
      }
    }
    setSt("Anhang gespeichert", "ok");
  } catch (err) {
    setSt("Upload fehlgeschlagen", "err");
    showAlert("Upload fehlgeschlagen", "Der Ordner in Google Drive konnte nicht angelegt werden.");
  }
}
function saveEvent() {
  const title = $("#evName").value.trim(),
    date = $("#evDate").value;
  if (!title || !date) {
    showAlert("Angaben fehlen", "Bitte Titel und Datum eintragen.");
    return;
  }
  const old = (data.events || []).find((x) => x.id === editingEventId),
    repeat = $("#evRepeat").value;
  // The done state is changed via the check button or swipe in the calendar, so it is kept as is here.
  const e = {
    ...(old || {}),
    id: editingEventId || "ev" + Date.now(),
    title,
    date,
    time: $("#evTime").value,
    type: $("#evType").value,
    note: $("#evNote").value.trim(),
    repeat,
    reminder: Number($("#evReminder").value),
    files: evFiles,
    status: repeat !== "none" ? "open" : (old && old.status) || "open",
    updatedAt: Date.now(),
    updatedBy: "Dieses Gerät",
    shared: true,
  };
  // Removed attachments go to the Drive trash and into the app's trash, so they can be restored.
  evRemovals.forEach((d) => {
    delDrive(d.id);
    if (!evUploads.includes(d.id))
      addToTrash({ kind: "doc", id: d.id, title: d.name, item: d, eventId: e.id, entryTitle: title });
  });
  evUploads = [];
  evRemovals = [];
  data.events = data.events || [];
  data.deletedEvents = (data.deletedEvents || []).filter((id) => id !== e.id);
  if (old) data.events = data.events.map((x) => (x.id === editingEventId ? e : x));
  else data.events.push(e);
  const focus = repeat !== "none" && old && old.date === date && editingEventDate ? editingEventDate : date;
  calSelected = focus;
  calMonth = new Date(parseLocalDate(focus).getFullYear(), parseLocalDate(focus).getMonth(), 1);
  saveDataLocal();
  closeEvent();
  render();
}
async function deleteEvent() {
  if (!editingEventId) return;
  await deleteEventById(editingEventId, true, editingEventDate);
}
function showChoiceDialog({ title, description = "", choices = [], kicker = "Sicherheitsabfrage", danger = true }) {
  return new Promise((resolve) => {
    document.querySelector(".settings-dialog-backdrop")?.remove();
    const backdrop = document.createElement("div");
    backdrop.className = "settings-dialog-backdrop";
    backdrop.innerHTML =
      '<div class="settings-dialog' +
      (danger ? " is-danger" : "") +
      '" role="dialog" aria-modal="true"><div class="settings-dialog-head"><div class="settings-dialog-kicker">' +
      esc(kicker) +
      "</div><h3>" +
      esc(title) +
      '</h3></div><div class="settings-dialog-body">' +
      (description ? "<p>" + esc(description) + "</p>" : "") +
      choices
        .map(
          (c) =>
            '<button type="button" class="btn w ' +
            (c.danger ? "x" : "s") +
            '" style="margin-top:9px" data-choice="' +
            esc(c.value) +
            '">' +
            esc(c.label) +
            "</button>",
        )
        .join("") +
      '</div><div class="settings-dialog-foot"><button type="button" class="dialog-secondary" data-cancel>Abbrechen</button></div></div>';
    document.body.appendChild(backdrop);
    document.body.classList.add("modal-lock");
    requestAnimationFrame(() => backdrop.classList.add("on"));
    const finish = (value) => {
      backdrop.classList.remove("on");
      if (!document.querySelector(".ov.on,.doc-preview.on")) document.body.classList.remove("modal-lock");
      setTimeout(() => backdrop.remove(), 180);
      resolve(value);
    };
    backdrop.addEventListener("click", (e) => {
      const c = e.target.closest("[data-choice]");
      if (c) {
        finish(c.dataset.choice);
        return;
      }
      if (e.target === backdrop || e.target.closest("[data-cancel]")) finish(null);
    });
    backdrop.addEventListener("keydown", (e) => {
      if (e.key === "Escape") finish(null);
    });
    backdrop.querySelector("[data-choice]")?.focus();
  });
}
let dialogSeq = 0;
function showSettingsDialog({
  title,
  description = "",
  fields = [],
  confirmText = "Speichern",
  cancelText = "Abbrechen",
  danger = false,
  kicker = "",
}) {
  return new Promise((resolve) => {
    document.querySelector(".settings-dialog-backdrop")?.remove();
    const backdrop = document.createElement("div");
    backdrop.className = "settings-dialog-backdrop";
    const titleId = "nar-dialog-title-" + ++dialogSeq;
    const fieldHtml = fields
      .map(
        (f, i) =>
          '<label for="nar-dialog-' +
          i +
          '">' +
          esc(f.label) +
          "</label>" +
          (f.type === "textarea"
            ? '<textarea id="nar-dialog-' + i + '" rows="4">' + esc(f.value || "") + "</textarea>"
            : '<input id="nar-dialog-' +
              i +
              '" type="text" value="' +
              esc(f.value || "") +
              '" placeholder="' +
              esc(f.placeholder || "") +
              '">'),
      )
      .join("");
    backdrop.innerHTML =
      '<div class="settings-dialog' +
      (danger ? " is-danger" : "") +
      '" role="dialog" aria-modal="true" aria-labelledby="' +
      titleId +
      '"><div class="settings-dialog-head"><div class="settings-dialog-kicker">' +
      esc(kicker || (danger ? "Sicherheitsabfrage" : "NAR HOME · VERWALTUNG")) +
      '</div><h3 id="' +
      titleId +
      '">' +
      esc(title) +
      '</h3></div><div class="settings-dialog-body">' +
      (description ? "<p>" + esc(description) + "</p>" : "") +
      fieldHtml +
      '</div><div class="settings-dialog-foot">' +
      (cancelText
        ? '<button type="button" class="dialog-secondary" data-cancel>' + esc(cancelText) + "</button>"
        : "") +
      '<button type="button" class="' +
      (danger ? "dialog-danger" : "dialog-primary") +
      '" data-ok>' +
      esc(confirmText) +
      "</button></div></div>";
    document.body.appendChild(backdrop);
    document.body.classList.add("modal-lock");
    requestAnimationFrame(() => backdrop.classList.add("on"));
    const finish = (value) => {
      backdrop.classList.remove("on");
      if (!document.querySelector(".ov.on,.doc-preview.on")) document.body.classList.remove("modal-lock");
      setTimeout(() => backdrop.remove(), 180);
      resolve(value);
    };
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop || e.target.closest("[data-cancel]")) finish(null);
    });
    backdrop.querySelector("[data-ok]").onclick = () =>
      finish(fields.map((f, i) => backdrop.querySelector("#nar-dialog-" + i).value));
    backdrop.addEventListener("keydown", (e) => {
      if (e.key === "Escape") finish(null);
      if (e.key === "Enter" && e.target.tagName === "INPUT") {
        e.preventDefault();
        backdrop.querySelector("[data-ok]").click();
      }
    });
    const first = backdrop.querySelector("input,textarea");
    if (first) {
      first.focus();
      first.select?.();
    } else backdrop.querySelector("[data-ok]").focus();
  });
}
// Replacements for the native alert/confirm/prompt in the app's own dialog style.
let toastTimer = null;
function showToast(text, { ms = 2000, action = "", onAction = null } = {}) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.setAttribute("aria-live", "polite");
    document.body.appendChild(t);
  }
  t.innerHTML = "<span>" + esc(text) + "</span>" + (action ? '<button type="button">' + esc(action) + "</button>" : "");
  t.classList.toggle("has-action", !!action);
  if (action)
    t.querySelector("button").onclick = () => {
      t.classList.remove("on");
      onAction && onAction();
    };
  t.classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("on"), ms);
}
// Deletions wait a few seconds before they become final, so they can be undone from the toast.
const pendingDeletes = new Map();
const UNDO_MS = 6000;
function deleteWithUndo({ key, text, remove, restore, commit }) {
  remove();
  render();
  const finish = () => {
    if (!pendingDeletes.has(key)) return;
    clearTimeout(pendingDeletes.get(key).timer);
    pendingDeletes.delete(key);
    commit();
  };
  const cancel = () => {
    if (!pendingDeletes.has(key)) return;
    clearTimeout(pendingDeletes.get(key).timer);
    pendingDeletes.delete(key);
    restore();
    render();
    showToast("Wiederhergestellt");
  };
  pendingDeletes.set(key, { finish, timer: setTimeout(finish, UNDO_MS) });
  showToast(text, { ms: UNDO_MS, action: "Rückgängig", onAction: cancel });
}
const commitPendingDeletes = () => [...pendingDeletes.values()].forEach((p) => p.finish());
window.addEventListener("pagehide", commitPendingDeletes);
function showAlert(title, description = "") {
  return showSettingsDialog({ title, description, confirmText: "OK", cancelText: null, kicker: "Hinweis" });
}
async function showConfirm(title, description = "", confirmText = "OK", danger = false) {
  return (await showSettingsDialog({ title, description, confirmText, danger })) !== null;
}
async function showPrompt(title, label, value = "", confirmText = "OK") {
  const r = await showSettingsDialog({ title, fields: [{ label, value }], confirmText, kicker: "Eingabe" });
  return r === null ? null : r[0];
}
async function showDeleteDialog(title, description) {
  const result = await showSettingsDialog({
    title,
    description,
    fields: [],
    confirmText: "Endgültig löschen",
    danger: true,
  });
  return result !== null;
}

async function showCategoryDialog({ title, category = "", subcategories = [], kinds = [] } = {}) {
  return new Promise((resolve) => {
    document.querySelector(".settings-dialog-backdrop")?.remove();
    const backdrop = document.createElement("div");
    backdrop.className = "settings-dialog-backdrop";
    const editor = (key, label, hint, add) =>
      '<div class="subcategory-editor" data-list="' +
      key +
      '"><div class="subcategory-editor-head"><b>' +
      label +
      '</b><span class="sub-count"></span></div><p class="settings-note">' +
      hint +
      '</p><div class="subcategory-fields"></div><button type="button" class="subcategory-add">＋ ' +
      add +
      "</button></div>";
    backdrop.innerHTML =
      '<div class="settings-dialog" role="dialog" aria-modal="true"><div class="settings-dialog-head"><div class="settings-dialog-kicker">NAR HOME · VERWALTUNG</div><h3>' +
      esc(title) +
      '</h3></div><div class="settings-dialog-body"><label for="nar-category-name">Name der Kategorie</label><input id="nar-category-name" type="text" value="' +
      esc(category) +
      '" placeholder="z. B. Mitgliedschaften">' +
      editor(
        "subs",
        "Unterlagen-Arten",
        "Gruppen für die Dokumente eines Objekts, z. B. Fahrzeugschein, Rechnungen, Kündigung.",
        "Unterlagen-Art hinzufügen",
      ) +
      editor(
        "kinds",
        "Objektarten (optional)",
        "Sortiert die Objekte selbst, z. B. Mobilfunk, Strom & Gas. Leer lassen, wenn nicht nötig.",
        "Objektart hinzufügen",
      ) +
      '</div><div class="settings-dialog-foot"><button type="button" class="dialog-secondary" data-cancel>Abbrechen</button><button type="button" class="dialog-primary" data-ok>Speichern</button></div></div>';
    document.body.appendChild(backdrop);
    document.body.classList.add("modal-lock");
    requestAnimationFrame(() => backdrop.classList.add("on"));
    const setup = (key, values, placeholder) => {
      const box = backdrop.querySelector('[data-list="' + key + '"]'),
        fields = box.querySelector(".subcategory-fields"),
        count = box.querySelector(".sub-count"),
        update = () => (count.textContent = fields.children.length + " Einträge"),
        addField = (value) => {
          const row = document.createElement("div");
          row.className = "subcategory-field";
          row.innerHTML =
            '<input type="text" aria-label="' +
            placeholder +
            '" placeholder="' +
            placeholder +
            '"><button type="button" class="subcategory-remove" aria-label="Entfernen">×</button>';
          row.querySelector("input").value = value || "";
          row.querySelector("button").onclick = () => {
            row.remove();
            update();
          };
          fields.appendChild(row);
          update();
        };
      values.forEach(addField);
      update();
      box.querySelector(".subcategory-add").onclick = () => {
        addField("");
        fields.lastElementChild.querySelector("input").focus();
      };
      return () => [...fields.querySelectorAll("input")].map((x) => x.value.trim()).filter(Boolean);
    };
    const readSubs = setup("subs", subcategories.length ? subcategories : [""], "Name der Unterlagen-Art"),
      readKinds = setup("kinds", kinds, "Name der Objektart");
    const finish = (value) => {
      backdrop.classList.remove("on");
      if (!document.querySelector(".ov.on,.doc-preview.on")) document.body.classList.remove("modal-lock");
      setTimeout(() => backdrop.remove(), 180);
      resolve(value);
    };
    backdrop.querySelector("[data-cancel]").onclick = () => finish(null);
    backdrop.querySelector("[data-ok]").onclick = () =>
      finish({ name: backdrop.querySelector("#nar-category-name").value.trim(), subs: readSubs(), kinds: readKinds() });
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) finish(null);
    });
    backdrop.addEventListener("keydown", (e) => {
      if (e.key === "Escape") finish(null);
    });
    backdrop.querySelector("#nar-category-name").focus();
  });
}

async function manageCategory(cat) {
  const s = data.settings;
  s.objectTypes = s.objectTypes || {};
  const result = await showCategoryDialog({
    title: "Kategorie bearbeiten",
    category: cat,
    subcategories: s.subcategories[cat] || SUB[cat] || [],
    kinds: s.objectTypes[cat] || OBJ[cat] || [],
  });
  if (!result) return;
  const renamed = result.name || cat;
  if (renamed !== cat && T[renamed]) {
    await showAlert("Name bereits vorhanden", "Eine Kategorie mit diesem Namen existiert bereits.");
    return;
  }
  if (renamed !== cat) {
    T[renamed] = T[cat];
    delete T[cat];
    delete SUB[cat];
    delete OBJ[cat];
    delete s.subcategories[cat];
    delete s.objectTypes[cat];
    s.customCategories = s.customCategories || {};
    s.customCategories[renamed] = { i: T[renamed].i, c: T[renamed].c, f: T[renamed].f, dl: T[renamed].dl };
    s.deletedCategories = s.deletedCategories || [];
    if (!s.deletedCategories.includes(cat)) s.deletedCategories.push(cat);
    s.deletedCategories = s.deletedCategories.filter((x) => x !== renamed);
    delete s.customCategories[cat];
    data.entries.forEach((e) => {
      if (e.cat === cat) {
        e.cat = renamed;
        e.upd = Date.now();
      }
    });
    cat = renamed;
  }
  s.subcategories[cat] = SUB[cat] = result.subs;
  s.objectTypes[cat] = OBJ[cat] = result.kinds;
  touchSettings();
  render();
}
async function deleteCategory(cat) {
  if (data.entries.some((e) => e.cat === cat)) {
    await showAlert(
      "Kategorie kann nicht gelöscht werden",
      "Diese Kategorie enthält noch Einträge. Ordne sie zuerst einer anderen Kategorie zu.",
    );
    return;
  }
  if (
    !(await showDeleteDialog(
      "Kategorie löschen?",
      "„" +
        cat +
        "“ mit ihren Unterlagen- und Objektarten wird entfernt. Diese Aktion kann nicht rückgängig gemacht werden.",
    ))
  )
    return;
  const s = data.settings;
  delete T[cat];
  delete SUB[cat];
  delete OBJ[cat];
  delete s.subcategories[cat];
  if (s.objectTypes) delete s.objectTypes[cat];
  s.deletedCategories = s.deletedCategories || [];
  if (!s.deletedCategories.includes(cat)) s.deletedCategories.push(cat);
  if (s.customCategories) delete s.customCategories[cat];
  touchSettings();
  render();
}
async function addCategory() {
  const result = await showCategoryDialog({ title: "Neue Kategorie" });
  if (!result || !result.name) return;
  const c = result.name,
    s = data.settings;
  if (T[c]) {
    await showAlert("Kategorie existiert bereits", "Bitte wähle einen anderen Namen.");
    return;
  }
  T[c] = { i: "folder", c: "#64748b", f: [], dl: "Frist" };
  s.customCategories = s.customCategories || {};
  s.customCategories[c] = { i: "folder", c: "#64748b", f: [], dl: "Frist" };
  s.deletedCategories = (s.deletedCategories || []).filter((x) => x !== c);
  s.subcategories[c] = SUB[c] = result.subs;
  s.objectTypes = s.objectTypes || {};
  s.objectTypes[c] = OBJ[c] = result.kinds;
  touchSettings();
  render();
}
async function addListItem() {
  const key = $("#settingsList").value,
    meta = SETTINGS_LISTS[key];
  const values = await showSettingsDialog({
    title: "Eintrag hinzufügen",
    description: "Ergänze einen neuen Wert für „" + meta.label + "“.",
    fields: [{ label: meta.label, placeholder: "Bezeichnung eingeben" }],
    confirmText: "Hinzufügen",
  });
  if (!values || !values[0].trim()) return;
  const value = values[0].trim();
  data.settings.customLists[key] = data.settings.customLists[key] || [];
  if (!data.settings.customLists[key].includes(value)) data.settings.customLists[key].push(value);
  touchSettings();
  renderSettingsList();
}
async function editListItem(i) {
  const key = $("#settingsList").value,
    items = data.settings.customLists[key] || [],
    old = items[i];
  if (old === undefined) return;
  const values = await showSettingsDialog({
    title: "Eintrag bearbeiten",
    description: "Ändere die Bezeichnung des Stammdateneintrags.",
    fields: [{ label: "Bezeichnung", value: old }],
    confirmText: "Änderungen speichern",
  });
  if (!values || !values[0].trim()) return;
  items[i] = values[0].trim();
  touchSettings();
  renderSettingsList();
}
async function deleteListItem(i) {
  const key = $("#settingsList").value,
    items = data.settings.customLists[key] || [];
  if (
    !(await showDeleteDialog(
      "Stammdateneintrag löschen?",
      "Der Eintrag wird aus der Auswahlliste entfernt. Bereits gespeicherte Einträge bleiben unverändert.",
    ))
  )
    return;
  items.splice(i, 1);
  touchSettings();
  renderSettingsList();
}

function render() {
  ["home", "list", "docs", "stats", "calendar", "settings"].forEach((t) =>
    $("#v-" + t).classList.toggle("hide", t !== tab),
  );
  document
    .querySelectorAll("nav button")
    .forEach((b) =>
      b.classList.toggle(
        "on",
        b.dataset.t === tab || (b.dataset.action === "more" && ["docs", "stats", "settings"].includes(tab)),
      ),
    );
  ({
    home: renderHome,
    list: renderList,
    docs: renderDocs2,
    stats: renderStats,
    calendar: renderCalendar,
    settings: renderSettings,
  })[tab]();
}

/* ---- Eintrag bearbeiten ---- */
const optionsHtml = (list, selected, emptyLabel) =>
  (emptyLabel !== undefined ? '<option value="">' + esc(emptyLabel) + "</option>" : "") +
  list
    .map((x) => '<option value="' + esc(x) + '"' + (x === selected ? " selected" : "") + ">" + esc(x) + "</option>")
    .join("");
// Object kind ("Art"), owner ("Gehört zu") and the document group for new uploads.
function renderObjectSelects() {
  const kinds = OBJ[cur.cat] || [],
    kind = kinds.includes(cur.objType) || !cur.objType ? cur.objType || "" : cur.objType;
  $("#fobj").innerHTML = optionsHtml(
    kinds.includes(kind) || !kind ? kinds : [...kinds, kind],
    kind,
    kinds.length ? "Bitte wählen" : "–",
  );
  $("#fobj").value = kind;
  $("#fobjWrap").classList.toggle("hide", !kinds.length && !kind);
  const ppl = people(),
    owner = cur.owner || "";
  $("#fown").innerHTML = optionsHtml(ppl.includes(owner) || !owner ? ppl : [...ppl, owner], owner, "Nicht festgelegt");
  $("#fown").value = owner;
  renderDocSubSelect();
}
function renderDocSubSelect() {
  const keep = $("#docSub").value;
  $("#docSub").innerHTML = optionsHtml(SUB[cur.cat] || [], keep, "Allgemein");
  $("#docSub").value = (SUB[cur.cat] || []).includes(keep) ? keep : (SUB[cur.cat] || [])[0] || "";
}
function fieldsHtml() {
  return (
    tp(cur)
      .f.map((l) => {
        let key =
          l === "Gesellschaft"
            ? "insuranceCompanies"
            : l === "Hersteller"
              ? "vehicleMakes"
              : l === "Modell"
                ? "vehicleModels"
                : l === "Anbieter"
                  ? "providers"
                  : "";
        let list = key ? ' list="dl-' + key + '"' : "";
        return (
          '<label class="f"><span>' +
          esc(l) +
          '</span><input data-x="' +
          esc(l) +
          '" value="' +
          esc(cur.x[l] || "") +
          '"' +
          list +
          "></label>"
        );
      })
      .join("") +
    Object.keys(SETTINGS_LISTS)
      .map(
        (k) =>
          '<datalist id="dl-' +
          k +
          '">' +
          (data.settings.customLists[k] || []).map((v) => '<option value="' + esc(v) + '"></option>').join("") +
          "</datalist>",
      )
      .join("")
  );
}
function readX() {
  document.querySelectorAll("#fx input").forEach((i) => (cur.x[i.dataset.x] = i.value));
}
// Adds months to a YYYY-MM-DD date; days missing in the target month fall back to its last day.
function addMonths(dateStr, months, anchorDay) {
  const d = parseLocalDate(dateStr),
    t = d.getMonth() + months,
    y = d.getFullYear() + Math.floor(t / 12),
    m = ((t % 12) + 12) % 12;
  return dateKey(new Date(y, m, Math.min(anchorDay || d.getDate(), new Date(y, m + 1, 0).getDate())));
}
function contractDeadline(start, term, notice) {
  if (!start || !Number.isFinite(+term) || !Number.isFinite(+notice) || +term <= 0) return "";
  return addMonths(start, Number(term) - Number(notice));
}
// Once the stored deadline has passed, an auto-renewing contract gets its next deadline one renewal period later.
function nextCancelBy(e) {
  if (!e.cancelBy) return "";
  const renew = +e.renewMonths || 0;
  if (renew <= 0 || dleft(e.cancelBy) >= 0) return e.cancelBy;
  const day = parseLocalDate(e.cancelBy).getDate();
  let next = e.cancelBy;
  for (let k = 1; k < 1200 && dleft(next) < 0; k++) next = addMonths(e.cancelBy, k * renew, day);
  return next;
}
const renewSuggestion = (start) => (start ? (start >= "2022-03-01" ? 1 : 12) : "");
function syncContractFields() {
  const active = cur && cur.cat === "Vertrag";
  $("#contractFields").classList.toggle("hide", !active);
  if (!active) return;
  $("#cStart").value = cur.contractStart || "";
  $("#cTerm").value = cur.termMonths ?? "";
  $("#cNotice").value = cur.noticeMonths ?? "";
  $("#cCancelBy").value = cur.cancelBy || "";
  $("#cCancelBy").dataset.manual = "";
  $("#cRenew").value = cur.renewMonths ?? "";
  $("#cReminders").value = cur.reminders || "90,30,7";
  updateContractHint();
}
function updateContractHint() {
  const v = contractDeadline($("#cStart").value, $("#cTerm").value, $("#cNotice").value),
    cb = $("#cCancelBy").value,
    next = cb ? nextCancelBy({ cancelBy: cb, renewMonths: $("#cRenew").value }) : "";
  let txt = v
    ? "Vorgeschlagener Kündigungstermin: " + fmtD(v) + ". Bei Sonderregeln bitte manuell anpassen."
    : "Der Kündigungstermin wird aus Vertragsbeginn, Laufzeit und Kündigungsfrist vorgeschlagen.";
  if (next && next !== cb) txt += " Nächster möglicher Kündigungstermin nach Verlängerung: " + fmtD(next) + ".";
  $("#cCalcHint").textContent = txt;
}
function updateContractSuggestion() {
  const v = contractDeadline($("#cStart").value, $("#cTerm").value, $("#cNotice").value);
  if (v && !$("#cCancelBy").dataset.manual) {
    $("#cCancelBy").value = v;
  }
  if ($("#cRenew").value === "") $("#cRenew").value = renewSuggestion($("#cStart").value);
  updateContractHint();
}
// Editable list of cost items (e.g. Versicherung, Kfz-Steuer); cur.costs is the source of truth while editing.
const IV_NAMES = ["monatlich", "vierteljährlich", "halbjährlich", "jährlich", "einmalig"];
function renderCostFields() {
  $("#costList").innerHTML = cur.costs
    .map(
      (c, i) =>
        '<div class="cost-row"><label class="f cost-label"><span>Bezeichnung</span><input data-cost-label="' +
        i +
        '" value="' +
        esc(c.label || "") +
        '" placeholder="z. B. Versicherung, Kfz-Steuer, Rate"></label><label class="f"><span>Betrag in €</span><input type="number" inputmode="decimal" step="0.01" min="0" data-cost-amount="' +
        i +
        '" value="' +
        esc(c.amount || "") +
        '"></label><label class="f"><span>Zahlweise</span><select data-cost-iv="' +
        i +
        '">' +
        optionsHtml(IV_NAMES, c.iv || "monatlich") +
        '</select></label><button type="button" class="icon-btn danger" data-cost-remove="' +
        i +
        '" aria-label="Kosten entfernen" title="Kosten entfernen">' +
        icon("trash") +
        "</button></div>",
    )
    .join("");
}
function readCostFields() {
  document
    .querySelectorAll("#costList [data-cost-label]")
    .forEach((el) => (cur.costs[+el.dataset.costLabel].label = el.value));
  document
    .querySelectorAll("#costList [data-cost-amount]")
    .forEach((el) => (cur.costs[+el.dataset.costAmount].amount = el.value));
  document.querySelectorAll("#costList [data-cost-iv]").forEach((el) => (cur.costs[+el.dataset.costIv].iv = el.value));
}
// Editable list of deadlines in the entry sheet; cur.deadlines is the source of truth while editing.
function renderDeadlineFields() {
  $("#dlList").innerHTML = cur.deadlines
    .map(
      (d, i) =>
        '<div class="dl-row"><label class="f"><span>Bezeichnung</span><input data-dl-label="' +
        i +
        '" value="' +
        esc(d.label || "") +
        '" placeholder="' +
        esc(tp(cur).dl) +
        '"></label><label class="f"><span>Datum</span><input type="date" data-dl-date="' +
        i +
        '" value="' +
        esc(d.date || "") +
        '"></label><button type="button" class="icon-btn danger" data-dl-remove="' +
        i +
        '" aria-label="Frist entfernen" title="Frist entfernen">' +
        icon("trash") +
        "</button></div>",
    )
    .join("");
}
function readDeadlineFields() {
  document
    .querySelectorAll("#dlList [data-dl-label]")
    .forEach((el) => (cur.deadlines[+el.dataset.dlLabel].label = el.value));
  document
    .querySelectorAll("#dlList [data-dl-date]")
    .forEach((el) => (cur.deadlines[+el.dataset.dlDate].date = el.value));
}
function openSheet(e, nw) {
  cur = JSON.parse(JSON.stringify(e));
  migrateEntry(cur);
  cur.docs = cur.docs || [];
  cur.x = cur.x || {};
  cur.deadlines = cur.deadlines || (cur.due ? [{ label: cur.dl || "", date: cur.due }] : []);
  isNew = nw;
  sheetUploads = [];
  sheetRemovals = [];
  sheetCreatedFolder = null;
  $("#sht").textContent = nw ? "Neu: " + cur.cat : cur.title || "Bearbeiten";
  $("#fc").innerHTML = optionsHtml(Object.keys(T), cur.cat);
  $("#ft").value = cur.title || "";
  $("#docSub").innerHTML = "";
  renderObjectSelects();
  $("#fx").innerHTML = fieldsHtml();
  syncContractFields();
  renderCostFields();
  renderDeadlineFields();
  renderPriceHistory();
  $("#fn").value = cur.note || "";
  $("#ff").checked = !!cur.fav;
  $("#fdel").classList.toggle("hide", nw);
  renderDocs();
  $("#ov").classList.add("on");
  sheetSnapshot = sheetState();
  sheetOpener = document.activeElement;
  $("#ov .sh").focus({ preventScroll: true });
}
let sheetSnapshot = "",
  sheetOpener = null,
  sheetCreatedFolder = null;
// Serialized form state, used to detect unsaved changes before closing the sheet.
function sheetState() {
  const vals = [...document.querySelectorAll("#ov input:not([type=file]), #ov select, #ov textarea")]
    .filter((el) => el.id !== "docSub")
    .map((el) => (el.type === "checkbox" ? el.checked : el.value));
  return JSON.stringify([
    vals,
    cur && cur.costs.length,
    cur && cur.deadlines.length,
    cur && cur.docs.map((d) => d.id + d.name + d.subcategory),
  ]);
}
async function requestCloseSheet() {
  if (!cur || document.querySelector(".settings-dialog-backdrop")) return;
  if (sheetState() !== sheetSnapshot || sheetUploads.length || sheetRemovals.length) {
    const ok = await showConfirm(
      "Änderungen verwerfen?",
      "Du hast ungespeicherte Änderungen an diesem Eintrag. Neu hochgeladene Dokumente werden dabei wieder entfernt.",
      "Verwerfen",
      true,
    );
    if (!ok) return;
  }
  cancelSheet();
}
// Documents grouped by document type, in the order of the category's list ("Allgemein" last).
function renderDocs() {
  const order = [...(SUB[cur.cat] || [])],
    extra = [...new Set(cur.docs.map((d) => d.subcategory || "").filter((s) => s && !order.includes(s)))],
    groups = [...order, ...extra, ""]
      .map((g) => [g, cur.docs.map((d, i) => [d, i]).filter(([d]) => (d.subcategory || "") === g)])
      .filter(([, L]) => L.length);
  $("#docs").innerHTML =
    groups
      .map(
        ([g, L]) =>
          '<div class="doc-group"><div class="doc-group-head"><b>' +
          esc(g || "Allgemein") +
          '</b><span class="fold-count">' +
          L.length +
          "</span></div>" +
          L.map(
            ([d, i]) =>
              '<div class="doc"><span aria-hidden="true">' +
              icon(fileIcon(d.name) === "▤" ? "file-text" : "image") +
              '</span><button type="button" class="doc-link" data-o="' +
              i +
              '" title="Vorschau öffnen">' +
              esc(d.name) +
              '</button><span class="doc-actions"><button type="button" class="ib" data-mv="' +
              i +
              '" title="Andere Unterlagen-Art" aria-label="' +
              esc(d.name) +
              ' verschieben">⇄</button><button type="button" class="ib" data-rep="' +
              i +
              '" title="Datei ersetzen" aria-label="' +
              esc(d.name) +
              ' ersetzen">↻</button><button type="button" class="ib" data-r="' +
              i +
              '" title="Aus Eintrag entfernen" aria-label="' +
              esc(d.name) +
              ' entfernen">✕</button></span></div>',
          ).join("") +
          "</div>",
      )
      .join("") || '<p class="mu" style="margin:6px 0 10px">Noch keine Unterlagen.</p>';
}
function fileIcon(name) {
  const n = (name || "").toLowerCase();
  return n.endsWith(".pdf")
    ? "▤"
    : /\.(jpe?g|png|gif|webp|heic|bmp)$/.test(n)
      ? "▧"
      : n.endsWith(".docx") || n.endsWith(".doc")
        ? "▤"
        : "▧";
}
function closeSheet() {
  $("#ov").classList.remove("on");
  const sheet = $("#ov .sh");
  if (sheet) sheet.scrollTop = 0;
  cur = null;
  if (sheetOpener && document.contains(sheetOpener)) sheetOpener.focus({ preventScroll: true });
  sheetOpener = null;
}
// Discards the sheet: files uploaded in this session are trashed again, pending removals are dropped.
function cancelSheet() {
  sheetUploads.forEach((id) => delDrive(id));
  // An object folder created during this (discarded) session would stay empty, so it goes to the trash too.
  if (sheetCreatedFolder) delDrive(sheetCreatedFolder);
  sheetCreatedFolder = null;
  sheetUploads = [];
  sheetRemovals = [];
  closeSheet();
}
async function delDrive(id) {
  try {
    await api(D + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trashed: true }),
    });
  } catch (e) {}
}
// Takes files back out of the Google Drive trash. Returns the ids that could not be restored.
async function untrashDrive(ids) {
  const failed = [];
  for (const id of ids) {
    try {
      await api(D + "/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trashed: false }),
      });
    } catch (e) {
      failed.push(id);
    }
  }
  return failed;
}
async function restoreFromTrash(key) {
  const t = (data.trash || []).find((x) => trashKey(x) === key && !x.restoredAt);
  if (!t) return;
  if (t.kind === "occ" && !data.events.some((e) => e.id === t.eventId)) {
    showAlert("Terminserie nicht mehr vorhanden", "Stelle zuerst die ganze Serie „" + t.title + "“ wieder her.");
    return;
  }
  if (t.kind === "doc" && t.eventId && !data.events.some((e) => e.id === t.eventId)) {
    showAlert(
      "Termin nicht mehr vorhanden",
      "„" +
        (t.entryTitle || "Termin") +
        "“ wurde gelöscht. Stelle zuerst den Termin wieder her – seine Anhänge kommen dann mit.",
    );
    return;
  }
  if (t.kind === "doc" && !t.eventId && !data.entries.some((e) => e.id === t.entryId)) {
    showAlert(
      "Eintrag nicht mehr vorhanden",
      "„" +
        (t.entryTitle || "Eintrag") +
        "“ wurde gelöscht. Stelle zuerst den Eintrag wieder her – seine Dokumente kommen dann mit.",
    );
    return;
  }
  const now = Date.now(),
    docIds =
      t.kind === "doc"
        ? [t.id]
        : t.kind === "entry"
          ? (t.item.docs || []).map((d) => d.id)
          : t.kind === "event"
            ? (t.item.files || []).map((d) => d.id)
            : [];
  let failed = [];
  if (docIds.length) {
    if (!folderId) {
      showAlert(
        "Google Drive nicht verbunden",
        "Zum Wiederherstellen von Dokumenten muss Google Drive verbunden sein.",
      );
      return;
    }
    if (!(await ensureAuth())) return;
    setSt("Stelle Dokumente wieder her …", "busy");
    failed = await untrashDrive(docIds);
  }
  if (t.kind === "doc" && failed.length) {
    setSt("Dokument nicht wiederherstellbar", "err");
    showAlert(
      "Dokument nicht wiederherstellbar",
      "„" +
        t.title +
        "“ ist nicht mehr im Google-Drive-Papierkorb. Google löscht Dateien dort nach 30 Tagen endgültig.",
    );
    return;
  }
  if (t.kind === "entry") {
    const e = JSON.parse(JSON.stringify(t.item));
    // Deleted ids stay blocked for syncing, so a restored entry gets a fresh id.
    if ((data.del || []).includes(e.id) || data.entries.some((x) => x.id === e.id)) e.id = e.id + "-r" + now;
    (data.trash || []).forEach((x) => x.kind === "doc" && x.entryId === t.id && (x.entryId = e.id));
    e.docs = (e.docs || []).filter((d) => !failed.includes(d.id));
    e.upd = now;
    e.updatedBy = who || "Dieses Gerät";
    data.entries.push(e);
  } else if (t.kind === "event") {
    const ev = JSON.parse(JSON.stringify(t.item));
    if ((data.deletedEvents || []).includes(ev.id) || data.events.some((x) => x.id === ev.id))
      ev.id = ev.id + "-r" + now;
    (data.trash || []).forEach((x) => x.kind === "doc" && x.eventId === t.id && (x.eventId = ev.id));
    ev.files = (ev.files || []).filter((d) => !failed.includes(d.id));
    ev.updatedAt = now;
    data.events.push(ev);
  } else if (t.kind === "occ") {
    const ev = data.events.find((x) => x.id === t.eventId);
    ev.exDates = (ev.exDates || []).filter((k) => k !== t.date);
    ev.updatedAt = now;
  } else if (t.kind === "doc" && t.eventId) {
    const ev = data.events.find((x) => x.id === t.eventId);
    ev.files = [...(ev.files || []).filter((d) => d.id !== t.id), t.item];
    ev.updatedAt = now;
  } else if (t.kind === "doc") {
    const e = data.entries.find((x) => x.id === t.entryId);
    e.docs = [...(e.docs || []).filter((d) => d.id !== t.id), t.item];
    e.upd = now;
  }
  t.restoredAt = now;
  dirty();
  if (failed.length)
    showAlert(
      "Teilweise wiederhergestellt",
      failed.length +
        " Dokument(e) waren nicht mehr im Google-Drive-Papierkorb (dort wird nach 30 Tagen endgültig gelöscht) und fehlen deshalb.",
    );
  else showToast("„" + t.title + "“ wiederhergestellt");
}
let trashTab = "entry";
function trashHtml() {
  const active = (data.trash || []).filter((t) => !t.restoredAt),
    groups = [
      ["entry", "Einträge", (t) => t.kind === "entry"],
      ["event", "Termine", (t) => t.kind === "event" || t.kind === "occ"],
      ["doc", "Dokumente", (t) => t.kind === "doc"],
    ],
    [, , filterFn] = groups.find((g) => g[0] === trashTab),
    list = active.filter(filterFn).sort((a, b) => b.deletedAt - a.deletedAt),
    monthAgo = Date.now() - 30 * 864e5;
  return (
    '<div class="seg" role="tablist" aria-label="Papierkorb">' +
    groups
      .map(
        ([k, label, fn]) =>
          '<button type="button" role="tab" aria-selected="' +
          (trashTab === k) +
          '" class="' +
          (trashTab === k ? "on" : "") +
          '" data-trash-tab="' +
          k +
          '">' +
          label +
          " (" +
          active.filter(fn).length +
          ")</button>",
      )
      .join("") +
    '</div><div class="trash-list">' +
    (list.length
      ? list
          .map((t) => {
            const hasDocs =
                t.kind === "doc" ||
                (t.kind === "entry" && (t.item.docs || []).length) ||
                (t.kind === "event" && (t.item.files || []).length),
              when = new Date(t.deletedAt).toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" });
            return (
              '<div class="settings-item"><span><b>' +
              esc(t.kind === "occ" ? t.title + " am " + fmtD(t.date) : t.title) +
              '</b><small class="doc-meta">Gelöscht ' +
              esc(when) +
              " · " +
              esc(t.by || "") +
              (t.kind === "doc" ? " · aus „" + esc(t.entryTitle || "") + "“" : "") +
              (t.kind === "entry" && (t.item.docs || []).length ? " · " + t.item.docs.length + " Dok." : "") +
              (t.kind === "event" && (t.item.files || []).length
                ? " · " + t.item.files.length + " Anhang/Anhänge"
                : "") +
              (t.kind === "occ" ? " · einzelner Serientermin" : "") +
              (hasDocs && t.deletedAt < monthAgo
                ? ' · <span class="warn">Dokumente evtl. endgültig gelöscht</span>'
                : "") +
              '</small></span><button type="button" class="icon-btn" data-restore="' +
              esc(trashKey(t)) +
              '" aria-label="' +
              esc(t.title) +
              ' wiederherstellen" title="Wiederherstellen">' +
              icon("restore") +
              "</button></div>"
            );
          })
          .join("")
      : '<p class="settings-note">Hier ist nichts gelöscht.</p>') +
    '</div><p class="settings-note">Aufbewahrt werden jeweils die letzten 20 gelöschten Einträge, Termine und Dokumente – für euch beide. Dokumente liegen im Google-Drive-Papierkorb und lassen sich bis 30 Tage nach dem Löschen zurückholen.</p>'
  );
}
let previewUrl = null,
  previewDownloadName = "Dokument";
/* ---- Dokumentvorschau (Bilder direkt, PDFs mit PDF.js, sonst „In Drive öffnen“) ---- */
const PDFJS_BASE = "https://cdn.jsdelivr.net/npm/pdfjs-dist@6.4.299/legacy/build/";
let pdfjsPromise = null,
  pdfDoc = null,
  pdfZoom = 1,
  pdfRenderSeq = 0,
  pdfObserver = null;
const PDF_ZOOMS = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
// PDF.js is only downloaded the first time a PDF is opened.
function loadPdfJs() {
  if (!pdfjsPromise)
    pdfjsPromise = import(PDFJS_BASE + "pdf.min.mjs")
      .then((lib) => {
        lib.GlobalWorkerOptions.workerSrc = PDFJS_BASE + "pdf.worker.min.mjs";
        return lib;
      })
      .catch((e) => {
        pdfjsPromise = null;
        throw e;
      });
  return pdfjsPromise;
}
const driveViewUrl = (d) => "https://drive.google.com/file/d/" + encodeURIComponent(d.id) + "/view";
function resetPdf() {
  pdfRenderSeq++;
  pdfObserver?.disconnect();
  pdfObserver = null;
  pdfDoc?.destroy?.();
  pdfDoc = null;
  $("#pdfZoom").classList.add("hide");
  $("#previewBody").classList.remove("pdf-mode");
}
function closePreview() {
  resetPdf();
  $("#docPreview").classList.remove("on");
  $("#previewBody").innerHTML = "";
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
    previewUrl = null;
  }
}
function previewMessage(d, title, text) {
  $("#previewBody").innerHTML =
    '<div class="preview-msg"><div class="preview-msg-icon">' +
    icon(fileIcon(d.name) === "▤" ? "file-text" : "image") +
    "</div><b>" +
    esc(title) +
    '</b><p class="mu">' +
    esc(text) +
    '</p><a class="btn w" target="_blank" rel="noopener" href="' +
    esc(driveViewUrl(d)) +
    '">In Google Drive ansehen</a></div>';
}
// Pages are drawn when they scroll into view, so long PDFs stay light on phones.
async function drawPdfPage(ph, seq, cssScale, dpr) {
  const page = await pdfDoc.getPage(+ph.dataset.page);
  if (seq !== pdfRenderSeq) return;
  const v = page.getViewport({ scale: cssScale }),
    vp = page.getViewport({ scale: cssScale * dpr }),
    c = document.createElement("canvas");
  ph.style.width = Math.floor(v.width) + "px";
  ph.style.height = Math.floor(v.height) + "px";
  c.width = Math.floor(vp.width);
  c.height = Math.floor(vp.height);
  ph.replaceChildren(c);
  await page.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
}
async function renderPdf() {
  if (!pdfDoc) return;
  const seq = ++pdfRenderSeq,
    body = $("#previewBody"),
    first = await pdfDoc.getPage(1);
  if (seq !== pdfRenderSeq) return;
  const avail = Math.max(200, body.clientWidth - 24),
    dpr = Math.min(window.devicePixelRatio || 1, 2),
    cssScale = (avail / first.getViewport({ scale: 1 }).width) * pdfZoom,
    size = first.getViewport({ scale: cssScale }),
    wrap = document.createElement("div");
  wrap.className = "pdf-pages";
  $("#pdfZoom .pdf-zoom-val").textContent = Math.round(pdfZoom * 100) + " %";
  pdfObserver?.disconnect();
  pdfObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        pdfObserver.unobserve(en.target);
        drawPdfPage(en.target, seq, cssScale, dpr);
      }),
    { root: body, rootMargin: "800px 0px" },
  );
  for (let n = 1; n <= pdfDoc.numPages; n++) {
    const ph = document.createElement("div");
    ph.className = "pdf-page";
    ph.dataset.page = n;
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", "Seite " + n + " von " + pdfDoc.numPages);
    ph.style.width = Math.floor(size.width) + "px";
    ph.style.height = Math.floor(size.height) + "px";
    wrap.appendChild(ph);
  }
  const ratio = body.scrollHeight ? body.scrollTop / body.scrollHeight : 0;
  body.classList.add("pdf-mode");
  body.replaceChildren(wrap);
  body.scrollTop = ratio * body.scrollHeight;
  [...wrap.children].forEach((ph, i) => (i === 0 ? drawPdfPage(ph, seq, cssScale, dpr) : pdfObserver.observe(ph)));
}
async function showPdf(d, blob) {
  try {
    const lib = await loadPdfJs();
    pdfDoc = await lib.getDocument({ data: new Uint8Array(await blob.arrayBuffer()) }).promise;
    pdfZoom = 1;
    $("#pdfZoom").classList.remove("hide");
    await renderPdf();
  } catch (e) {
    if (e && e.name === "PasswordException") {
      previewMessage(d, "Passwortgeschütztes PDF", "Dieses PDF kann hier nicht angezeigt werden.");
      return;
    }
    // Without PDF.js (e.g. no connection to the CDN) the browser's own PDF viewer is the fallback.
    const frame = document.createElement("iframe");
    frame.title = "PDF-Vorschau: " + (d.name || "Dokument");
    frame.src = previewUrl;
    $("#previewBody").replaceChildren(frame);
  }
}
async function openDoc(d) {
  if (!d) return;
  resetPdf();
  $("#docPreview").classList.add("on");
  $("#previewName").textContent = d.name || "Dokument";
  $("#previewDrive").href = driveViewUrl(d);
  $("#previewBody").innerHTML = '<div class="preview-msg">Vorschau wird geladen …</div>';
  previewDownloadName = d.name || "Dokument";
  const prevSt = [$("#st").title, $("#st").className];
  try {
    setSt("Lade Vorschau …", "busy");
    const response = await api(D + "/" + d.id + "?alt=media");
    const blob = await response.blob();
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = URL.createObjectURL(blob);
    const mime = (d.mimeType || blob.type || "").toLowerCase(),
      name = (d.name || "").toLowerCase();
    if (mime === "application/pdf" || name.endsWith(".pdf")) await showPdf(d, blob);
    else if (mime.startsWith("image/") || /\.(png|jpe?g|gif|webp|bmp|heic|heif)$/.test(name)) {
      const img = document.createElement("img");
      img.alt = d.name || "Dokument";
      // e.g. HEIC photos can only be shown by Safari; other browsers fall back to Google Drive.
      img.onerror = () =>
        previewMessage(d, "Bildformat wird hier nicht unterstützt", "Google Drive kann dieses Bild anzeigen.");
      img.src = previewUrl;
      $("#previewBody").replaceChildren(img);
    } else
      previewMessage(
        d,
        "Für diesen Dateityp gibt es hier keine Vorschau",
        "In Google Drive kannst du die Datei ansehen, ohne sie herunterzuladen.",
      );
    setSt(prevSt[0], prevSt[1]);
  } catch (e) {
    $("#previewBody").innerHTML =
      '<div class="preview-msg"><b>Vorschau nicht verfügbar</b><p class="mu">Bitte prüfe die Google-Drive-Verbindung und versuche es erneut.</p></div>';
    setSt("Dokument nicht ladbar", "err");
  }
}
$("#pdfZoom").onclick = (e) => {
  const b = e.target.closest("[data-zoom]");
  if (!b || !pdfDoc) return;
  const step = +b.dataset.zoom,
    i = PDF_ZOOMS.indexOf(pdfZoom);
  pdfZoom = step === 0 ? 1 : PDF_ZOOMS[Math.max(0, Math.min(PDF_ZOOMS.length - 1, (i < 0 ? 2 : i) + step))];
  renderPdf();
};
let pdfResizeTimer = null;
window.addEventListener("resize", () => {
  if (!pdfDoc) return;
  clearTimeout(pdfResizeTimer);
  pdfResizeTimer = setTimeout(renderPdf, 200);
});
function downloadPreview() {
  if (!previewUrl) return;
  const a = document.createElement("a");
  a.href = previewUrl;
  a.download = previewDownloadName;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function newEntry(cat) {
  openSheet(
    {
      id: "e" + Date.now(),
      ts: Date.now(),
      v: 2,
      cat: cat,
      objType: "",
      owner: "",
      title: "",
      x: {},
      note: "",
      costs: [],
      deadlines: [],
      docs: [],
    },
    true,
  );
}

/* ---- Ereignisse ---- */
const open = (id) =>
  openSheet(
    data.entries.find((x) => x.id === id),
    false,
  );

$("#v-home").addEventListener(
  "toggle",
  (e) => {
    const d = e.target;
    if (!d.matches || !d.matches("details[data-fold]")) return;
    localStorage.setItem("hv_home_folds", JSON.stringify({ ...homeFolds(), [d.dataset.fold]: d.open }));
  },
  true,
);
$("#v-home").onclick = (e) => {
  const r = e.target.closest("[data-id]"),
    g = e.target.closest("[data-go]"),
    n = e.target.closest("[data-new]"),
    rm = e.target.closest("[data-dismiss-reminder]");
  if (rm) dismissReminder(rm.dataset.dismissReminder);
  else if (r) open(r.dataset.id);
  else if (n) newEntry(n.dataset.new);
  else if (g) {
    filter = g.dataset.go;
    navigateTo("list");
  } else if (e.target.closest("[data-conflicts]")) openConflicts();
  else if (e.target.closest("[data-notify]")) enableNotifications();
  else if (e.target.dataset.set) openSettings();
  else if (e.target.dataset.con) connect();
};
$("#chips").onclick = (e) => {
  const c = e.target.dataset.c;
  if (c) {
    filter = c;
    renderList();
  }
};
$("#q").oninput = (e) => {
  q = e.target.value.toLowerCase();
  renderList();
};
$("#qd").oninput = (e) => {
  qd = e.target.value.toLowerCase();
  renderDocs2();
};
$("#docCat").onchange = renderDocs2;
$("#so").onchange = (e) => {
  so = e.target.value;
  renderList();
};
$("#po").onchange = renderList;
$("#v-stats").onclick = (e) => {
  const h = e.target.closest("[data-id]");
  if (h) open(h.dataset.id);
};
$("#list").onclick = (e) => {
  const r = e.target.closest(".row");
  if (r) open(r.dataset.id);
};
$("#dlist").onclick = async (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const en = data.entries.find((x) => x.id === (b.dataset.oe || b.dataset.de));
  if (!en) return;
  const d = en.docs.find((x) => x.id === (b.dataset.od || b.dataset.dl));
  if (!d) return;
  if (b.dataset.dl) {
    try {
      const r = await api(D + "/" + d.id + "?alt=media");
      const blob = await r.blob();
      const u = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = u;
      a.download = d.name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(u), 1000);
    } catch (err) {
      showAlert("Download fehlgeschlagen", "Bitte prüfe die Google-Drive-Verbindung und versuche es erneut.");
    }
    return;
  }
  openDoc(d);
};

$("#cCancelBy").oninput = () => {
  $("#cCancelBy").dataset.manual = "1";
  updateContractHint();
};
$("#cRenew").oninput = updateContractHint;
["cStart", "cTerm", "cNotice"].forEach(
  (id) =>
    ($("#" + id).onchange = () => {
      $("#cCancelBy").dataset.manual = "";
      updateContractSuggestion();
    }),
);
$("#fc").onchange = () => {
  readX();
  readDeadlineFields();
  readCostFields();
  cur.cat = $("#fc").value;
  cur.objType = "";
  renderObjectSelects();
  $("#fx").innerHTML = fieldsHtml();
  syncContractFields();
  renderDeadlineFields();
  renderDocs();
};
$("#fobj").onchange = () => (cur.objType = $("#fobj").value);
$("#fown").onchange = () => (cur.owner = $("#fown").value);
$("#addc").onclick = () => {
  readCostFields();
  cur.costs.push({ id: "c" + Date.now(), label: "", amount: "", iv: "monatlich" });
  renderCostFields();
  [...document.querySelectorAll("#costList [data-cost-label]")].pop()?.focus();
};
$("#costList").onclick = (e) => {
  const b = e.target.closest("[data-cost-remove]");
  if (!b) return;
  readCostFields();
  cur.costs.splice(+b.dataset.costRemove, 1);
  renderCostFields();
};
$("#addd").onclick = () => {
  readDeadlineFields();
  cur.deadlines.push({ label: "", date: "" });
  renderDeadlineFields();
  [...document.querySelectorAll("#dlList [data-dl-label]")].pop()?.focus();
};
$("#dlList").onclick = (e) => {
  const b = e.target.closest("[data-dl-remove]");
  if (!b) return;
  readDeadlineFields();
  cur.deadlines.splice(+b.dataset.dlRemove, 1);
  renderDeadlineFields();
};
// Checks run synchronously so the file picker / camera still opens within the user's tap.
function canUpload() {
  if (!folderId) {
    showAlert("Google Drive nicht verbunden", "Bitte zuerst in der Übersicht mit Google Drive verbinden.");
    return false;
  }
  if (!$("#ft").value.trim()) {
    showAlert(
      "Bezeichnung fehlt",
      "Bitte zuerst eine Bezeichnung eingeben, z. B. „Golf 7“. Ordner und Dateinamen werden daraus gebildet.",
    ).then(() => $("#ft").focus());
    return false;
  }
  return true;
}
$("#fub").onclick = () => {
  if (canUpload()) $("#fu").click();
};
$("#fcamb").onclick = () => {
  if (canUpload()) $("#fcam").click();
};
let replaceTarget = null;
$("#docs").addEventListener("click", (e) => {
  const b = e.target.closest("[data-rep]");
  if (!b) return;
  replaceTarget = cur.docs[Number(b.dataset.rep)];
  $("#fru").click();
});
$("#fru").onchange = async (e) => {
  const f = e.target.files && e.target.files[0];
  if (!f || !replaceTarget) return;
  try {
    if (!(await ensureAuth())) return;
    const legacy = parseLegacyName(replaceTarget.name, cur.title),
      sub = replaceTarget.subcategory || "";
    const res = await showDocNameDialog({
      heading: "Datei ersetzen",
      okText: "Ersetzen",
      title: $("#ft").value.trim() || cur.title,
      date: dateKey(new Date()),
      type: replaceTarget.docType ?? (legacy ? "" : sub),
      ext: fileExt(f.name, f.type),
      types: SUB[cur.cat] || [],
    });
    if (!res) return;
    const clean = uniqueDocName(res.name, cur, sub, replaceTarget.id);
    const j = await (await up(clean, f, replaceTarget.id)).json();
    replaceTarget.name = j.name || clean;
    replaceTarget.mimeType = j.mimeType || f.type;
    replaceTarget.docDate = res.date;
    replaceTarget.docType = res.type;
    replaceTarget.auto = res.auto;
    replaceTarget.nameTitle = $("#ft").value.trim() || cur.title;
    // category/subcategory describe where the file actually lies, so they are not changed by replacing.
    replaceTarget.entryId = cur.id;
    const stored = data.entries.find((x) => x.id === cur.id);
    if (stored) {
      const sd = (stored.docs || []).find((x) => x.id === replaceTarget.id);
      if (sd) {
        Object.assign(sd, {
          name: replaceTarget.name,
          mimeType: replaceTarget.mimeType,
          docDate: replaceTarget.docDate,
          docType: replaceTarget.docType,
          auto: replaceTarget.auto,
          nameTitle: replaceTarget.nameTitle,
        });
        stored.upd = Date.now();
      }
    }
    dirty();
    renderDocs();
    setSt("Dokument ersetzt", "ok");
  } catch (err) {
    setSt("Ersetzen fehlgeschlagen", "err");
    showAlert("Ersetzen fehlgeschlagen", "Das Dokument konnte nicht ersetzt werden.");
  } finally {
    replaceTarget = null;
    e.target.value = "";
  }
};
$("#fu").onchange = async (e) => {
  if (!folderId) {
    showAlert("Google Drive nicht verbunden", "Bitte zuerst in der Übersicht mit Google Drive verbinden.");
    e.target.value = "";
    return;
  }
  if (!(await ensureAuth())) {
    e.target.value = "";
    return;
  }
  const files = [...e.target.files],
    sub = $("#docSub").value;
  e.target.value = "";
  for (const [n, f] of files.entries()) {
    try {
      cur.title = $("#ft").value.trim();
      cur.cat = $("#fc").value;
      cur.objType = $("#fobj").value;
      if (!cur.title.trim()) {
        await showAlert("Bezeichnung fehlt", "Bitte zuerst eine Bezeichnung eingeben, z. B. „Golf 7“.");
        $("#ft").focus();
        break;
      }
      setSt("Ordner wird vorbereitet …", "busy");
      const targetFolder = await docTargetFolder(cur, sub);
      const res = await showDocNameDialog({
        heading:
          (files.length > 1 ? "Dokument " + (n + 1) + " von " + files.length : "Dokument") +
          " → " +
          (sub || "Allgemein"),
        okText: "Hochladen",
        title: cur.title,
        date: dateKey(new Date()),
        type: sub,
        ext: fileExt(f.name, f.type),
        types: SUB[cur.cat] || [],
      });
      if (!res) continue;
      const cleanName = uniqueDocName(res.name, cur, sub);
      setSt("Lade hoch: " + cleanName, "busy");
      const j = await (await up(cleanName, f, null, targetFolder)).json();
      sheetUploads.push(j.id);
      cur.docs.push({
        id: j.id,
        name: j.name || cleanName,
        mimeType: j.mimeType || f.type || "",
        subcategory: sub,
        folderSub: sub,
        inObj: true,
        entryId: cur.id,
        docDate: res.date,
        docType: res.type,
        auto: res.auto,
        nameTitle: cur.title,
      });
      renderDocs();
      setSt("Dokument gespeichert", "ok");
    } catch (x) {
      setSt("Upload fehlgeschlagen", "err");
      await showAlert(
        "Upload fehlgeschlagen",
        "„" + f.name + "“ konnte nicht hochgeladen werden. Bitte prüfe die Drive-Verbindung und versuche es erneut.",
      );
    }
  }
};
// Camera photos go through the same upload flow as picked files.
$("#fcam").onchange = $("#fu").onchange;
$("#docs").onclick = async (e) => {
  const o = e.target.closest("[data-o]"),
    r = e.target.closest("[data-r]"),
    mv = e.target.closest("[data-mv]");
  if (o) openDoc(cur.docs[o.dataset.o]);
  if (mv) {
    const d = cur.docs[+mv.dataset.mv],
      choice = await showChoiceDialog({
        title: "Unterlagen-Art ändern",
        kicker: "Dokument verschieben",
        danger: false,
        description: "„" + d.name + "“ ablegen unter:",
        choices: [...(SUB[cur.cat] || []), ""]
          .filter((s) => s !== (d.subcategory || ""))
          .map((s) => ({ value: s || "__general", label: s || "Allgemein" })),
      });
    if (choice === null) return;
    // The file itself is moved in Drive when the entry is saved.
    d.subcategory = choice === "__general" ? "" : choice;
    renderDocs();
  }
  if (r) {
    const i = +r.dataset.r;
    if (
      await showDeleteDialog(
        "Dokument löschen?",
        "Das Dokument wird beim Speichern aus diesem Eintrag und aus Google Drive entfernt.",
      )
    ) {
      sheetRemovals.push(cur.docs[i]);
      cur.docs.splice(i, 1);
      renderDocs();
    }
  }
};
$("#fs").onclick = () => {
  if (!$("#ft").value.trim()) {
    $("#ft").focus();
    return;
  }
  readX();
  readDeadlineFields();
  readCostFields();
  cur.cat = $("#fc").value;
  cur.title = $("#ft").value.trim();
  cur.objType = $("#fobj").value;
  cur.owner = $("#fown").value;
  cur.costs = cur.costs
    .map((c) => ({ ...c, label: (c.label || "").trim(), amount: String(c.amount ?? "").trim() }))
    .filter((c) => c.amount !== "");
  cur.deadlines = cur.deadlines
    .map((d) => ({ label: (d.label || "").trim(), date: d.date }))
    .filter((d) => d.date)
    .sort((a, b) => a.date.localeCompare(b.date));
  // due/dl mirror the earliest deadline so older app versions still show one deadline.
  cur.due = cur.deadlines[0]?.date || "";
  cur.dl = cur.deadlines[0]?.label || "";
  cur.note = $("#fn").value;
  cur.fav = $("#ff").checked;
  if (cur.cat === "Vertrag") {
    cur.contractStart = $("#cStart").value;
    cur.termMonths = $("#cTerm").value === "" ? "" : Number($("#cTerm").value);
    cur.noticeMonths = $("#cNotice").value === "" ? "" : Number($("#cNotice").value);
    cur.cancelBy = $("#cCancelBy").value;
    cur.reminders = $("#cReminders").value;
    cur.renewMonths = $("#cRenew").value === "" ? "" : Number($("#cRenew").value);
  }
  // Fields of the old single-entry model are replaced by objType, costs and per-document groups.
  ["cost", "iv", "priceHistory", "subcat"].forEach((k) => delete cur[k]);
  const ix = data.entries.findIndex((x) => x.id === cur.id),
    old = ix >= 0 ? data.entries[ix] : null,
    storedDocIds = new Set(((old && old.docs) || []).map((d) => d.id)),
    savedId = cur.id;
  recordPriceChange(cur, old);
  cur.upd = Date.now();
  cur.updatedBy = who || "Dieses Gerät";
  if (isNew || ix < 0) data.entries.push(cur);
  else data.entries[ix] = cur;
  // Removed documents go to the Drive trash and into the app's trash, so they can be restored.
  sheetRemovals.forEach((d) => {
    delDrive(d.id);
    if (storedDocIds.has(d.id))
      addToTrash({ kind: "doc", id: d.id, title: d.name, item: d, entryId: cur.id, entryTitle: cur.title });
  });
  sheetUploads = [];
  sheetRemovals = [];
  sheetCreatedFolder = null;
  dirty();
  closeSheet();
  syncDocFiles(savedId);
};
// Keeps Drive in line with the object: renaming the object renames its folder, a new category or kind moves
// the folder, a new document group moves the file. App-generated file names follow a new title; hand-edited
// names stay. Files from before the object model are handled by the re-sort in the settings.
async function syncDocFiles(entryId) {
  let e = data.entries.find((x) => x.id === entryId);
  if (!e || !folderId) return;
  const folderRename = !!e.driveFolder && e.driveFolderName !== safeFilePart(e.title),
    folderMove = !!e.driveFolder && !!e.drivePlace && e.drivePlace !== objectPlace(e),
    plan = [],
    chosen = {};
  for (const d of (e.docs || []).filter((x) => x.inObj)) {
    const sub = d.subcategory || "",
      move = (d.folderSub ?? sub) !== sub,
      retitle = d.auto === true && safeFilePart(d.nameTitle ?? e.title) !== safeFilePart(e.title),
      taken = (chosen[sub] = chosen[sub] || new Set());
    if (!move && !retitle) {
      taken.add(d.name.toLowerCase());
      continue;
    }
    const base = retitle
        ? buildDocName({ date: d.docDate, title: e.title, type: d.docType, ext: fileExt(d.name) })
        : d.name,
      name = uniqueDocName(base, e, sub, d.id, taken);
    taken.add(name.toLowerCase());
    plan.push({
      id: d.id,
      sub,
      move,
      name,
      changes: { name, folderSub: sub, ...(retitle ? { nameTitle: e.title } : {}) },
    });
  }
  if (!folderRename && !folderMove && !plan.length) return;
  if (!(await ensureAuth())) return;
  setSt("Unterlagen werden einsortiert …", "busy");
  const parentsQuery = async (id, target) => {
    const info = await (await api(D + "/" + id + "?fields=parents")).json();
    return (
      "?addParents=" +
      encodeURIComponent(target) +
      "&removeParents=" +
      encodeURIComponent((info.parents || []).join(","))
    );
  };
  const patch = (id, q, body) =>
    api(D + "/" + id + q, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  let failed = 0,
    folderDone = null;
  const done = [];
  if (folderRename || folderMove) {
    try {
      const q = folderMove ? await parentsQuery(e.driveFolder, await folderFor(e.cat, e.objType || "")) : "";
      await patch(e.driveFolder, q, { name: safeFilePart(e.title) });
      folderDone = { driveFolderName: safeFilePart(e.title), drivePlace: objectPlace(e) };
    } catch (err) {
      failed++;
    }
  }
  for (const p of plan) {
    try {
      const q = p.move ? await parentsQuery(p.id, await docTargetFolder(e, p.sub)) : "";
      await patch(p.id, q, { name: p.name });
      done.push(p);
    } catch (err) {
      failed++;
    }
  }
  // The entry may have been replaced by a sync meanwhile, so look it up again.
  e = data.entries.find((x) => x.id === entryId);
  if (e && (folderDone || done.length)) {
    if (folderDone) Object.assign(e, folderDone);
    done.forEach((p) => Object.assign((e.docs || []).find((d) => d.id === p.id) || {}, p.changes));
    e.upd = Date.now();
    dirty();
  }
  if (failed) showToast("Einige Unterlagen konnten in Google Drive nicht einsortiert werden");
}
$("#fx2").onclick = cancelSheet;
$("#fdel").onclick = () => {
  const id = cur.id,
    stored = data.entries.find((x) => x.id === id);
  // Files uploaded in this session are not part of the stored entry, so they go right away.
  sheetUploads.forEach((fid) => delDrive(fid));
  sheetUploads = [];
  sheetRemovals = [];
  closeSheet();
  if (!stored) return;
  const index = data.entries.indexOf(stored);
  deleteWithUndo({
    key: "entry:" + id,
    text: "„" + (stored.title || "Eintrag") + "“ gelöscht",
    remove: () => (data.entries = data.entries.filter((x) => x.id !== id)),
    restore: () => {
      stored.upd = Date.now();
      data.entries.splice(Math.min(index, data.entries.length), 0, stored);
      dirty();
    },
    commit: () => {
      (stored.docs || []).forEach((d) => delDrive(d.id));
      data.del = (data.del || []).concat(id);
      addToTrash({ kind: "entry", id, title: stored.title || "Eintrag", item: JSON.parse(JSON.stringify(stored)) });
      dirty();
    },
  });
};
function openSettings() {
  const sheet = $("#ov2 .sh");
  if (sheet) sheet.scrollTop = 0;
  const cf = loadConflicts();
  $("#conflictInfo").classList.toggle("hide", !cf.length);
  $("#conflictInfo").innerHTML = cf.length
    ? "<b>" +
      cf.length +
      (cf.length === 1 ? " Konflikt" : " Konflikte") +
      '</b><p class="mu">Betroffen: ' +
      cf.map((x) => esc(x.title)).join(", ") +
      '</p><button class="btn s w" data-conflicts="1">Versionen vergleichen</button>'
    : "";
  $("#cid").value = localStorage.getItem("hv_cid") || "";
  $("#role").value = role();
  $("#shr").classList.toggle("hide", !(role() === "owner" && folderId));
  $("#ov2").classList.add("on");
}
$("#conflictInfo").addEventListener("click", (e) => {
  if (!e.target.closest("[data-conflicts]")) return;
  $("#cidX").click();
  openConflicts();
});

const costsText = (e) =>
  costItems(e)
    .map((c) => (c.label ? c.label + ": " : "") + fmt(+c.amount || 0) + " " + (c.iv || "monatlich"))
    .join(", ");
const CONFLICT_FIELDS = [
  ["title", "Bezeichnung"],
  ["cat", "Kategorie"],
  ["objType", "Art"],
  ["owner", "Gehört zu"],
  ["costs", "Kosten", (v, e) => costsText(e)],
  ["deadlines", "Fristen", (v) => (v || []).map((d) => (d.label ? d.label + ": " : "") + fmtD(d.date)).join(", ")],
  ["contractStart", "Vertragsbeginn", (v) => (v ? fmtD(v) : "")],
  ["termMonths", "Laufzeit (Monate)"],
  ["noticeMonths", "Kündigungsfrist (Monate)"],
  ["renewMonths", "Verlängerung (Monate)"],
  ["cancelBy", "Kündigungstermin", (v) => (v ? fmtD(v) : "")],
  ["reminders", "Erinnerungen"],
  ["note", "Notizen"],
  ["fav", "Wichtig", (v) => (v ? "Ja" : "Nein")],
];
function conflictRows(a, b) {
  const rows = [];
  const add = (label, va, vb) => {
    va = va == null ? "" : String(va);
    vb = vb == null ? "" : String(vb);
    if (va !== vb) rows.push([label, va, vb]);
  };
  CONFLICT_FIELDS.forEach(([k, label, f]) => add(label, f ? f(a[k], a) : a[k], f ? f(b[k], b) : b[k]));
  new Set([...Object.keys(a.x || {}), ...Object.keys(b.x || {})]).forEach((k) =>
    add(k, (a.x || {})[k], (b.x || {})[k]),
  );
  const docs = (e) => (e.docs || []).map((d) => (d.subcategory ? d.subcategory + ": " : "") + d.name).join(", ");
  add("Dokumente", docs(a), docs(b));
  return rows;
}
const versionLabel = (e, fallback) =>
  (e.updatedBy || fallback) +
  (e.upd ? " · " + new Date(e.upd).toLocaleString("de-DE", { dateStyle: "short", timeStyle: "short" }) : "");
function showConflictDialog(c, index, total) {
  return new Promise((resolve) => {
    document.querySelector(".settings-dialog-backdrop")?.remove();
    const rows = conflictRows(c.local, c.remote);
    const backdrop = document.createElement("div");
    backdrop.className = "settings-dialog-backdrop";
    backdrop.innerHTML =
      '<div class="settings-dialog conflict-dialog" role="dialog" aria-modal="true" aria-labelledby="nar-conflict-title"><div class="settings-dialog-head"><div class="settings-dialog-kicker">Konflikt ' +
      (index + 1) +
      " von " +
      total +
      '</div><h3 id="nar-conflict-title">' +
      esc(c.title) +
      '</h3></div><div class="settings-dialog-body"><p>Dieser Eintrag wurde auf zwei Geräten geändert. Wähle die Version, die gelten soll. Dokumente beider Versionen bleiben erhalten.</p>' +
      '<table class="cmp"><thead><tr><th></th><th>A · Dieses Gerät<small>' +
      esc(versionLabel(c.local, "Dieses Gerät")) +
      "</small></th><th>B · Anderes Gerät<small>" +
      esc(versionLabel(c.remote, "Anderes Gerät")) +
      "</small></th></tr></thead><tbody>" +
      (rows.length
        ? rows
            .map(
              (r) =>
                "<tr><th>" +
                esc(r[0]) +
                "</th><td>" +
                (esc(r[1]) || "—") +
                "</td><td>" +
                (esc(r[2]) || "—") +
                "</td></tr>",
            )
            .join("")
        : '<tr><td colspan="3">Keine inhaltlichen Unterschiede.</td></tr>') +
      "</tbody></table></div>" +
      '<div class="settings-dialog-foot conflict-foot"><button type="button" class="dialog-primary" data-pick="local">Version A behalten</button><button type="button" class="dialog-primary" data-pick="remote">Version B behalten</button><button type="button" class="dialog-secondary" data-cancel>Später</button></div></div>';
    document.body.appendChild(backdrop);
    document.body.classList.add("modal-lock");
    requestAnimationFrame(() => backdrop.classList.add("on"));
    const finish = (value) => {
      backdrop.classList.remove("on");
      if (!document.querySelector(".ov.on,.doc-preview.on")) document.body.classList.remove("modal-lock");
      setTimeout(() => backdrop.remove(), 180);
      resolve(value);
    };
    backdrop.addEventListener("click", (e) => {
      const p = e.target.closest("[data-pick]");
      if (p) finish(p.dataset.pick);
      else if (e.target === backdrop || e.target.closest("[data-cancel]")) finish(null);
    });
    backdrop.addEventListener("keydown", (e) => {
      if (e.key === "Escape") finish(null);
    });
    backdrop.querySelector("[data-pick]").focus();
  });
}
function resolveConflict(c, pick) {
  const chosen = JSON.parse(JSON.stringify(pick === "local" ? c.local : c.remote));
  const other = pick === "local" ? c.remote : c.local;
  const ids = new Set((chosen.docs || []).map((d) => d.id));
  chosen.docs = [...(chosen.docs || []), ...(other.docs || []).filter((d) => !ids.has(d.id))];
  chosen.upd = Date.now();
  chosen.updatedBy = who || "Dieses Gerät";
  const ix = data.entries.findIndex((e) => e.id === c.id);
  if (ix >= 0) data.entries[ix] = chosen;
  // Both versions now count as seen, so the next sync does not report the same conflict again.
  const base = syncBase() || {};
  base[c.id] = Math.max(c.local.upd || 0, c.remote.upd || 0);
  localStorage.setItem("hv_synced", JSON.stringify(base));
  storeConflicts(loadConflicts().filter((x) => x.id !== c.id));
}
async function openConflicts() {
  const list = loadConflicts();
  let changed = false;
  for (let i = 0; i < list.length; i++) {
    const c = list[i];
    if (!data.entries.some((e) => e.id === c.id)) {
      storeConflicts(loadConflicts().filter((x) => x.id !== c.id));
      changed = true;
      continue;
    }
    const pick = await showConflictDialog(c, i, list.length);
    if (!pick) break;
    resolveConflict(c, pick);
    changed = true;
  }
  if (changed) dirty();
}
$("#previewClose").onclick = closePreview;
$("#previewClose2").onclick = closePreview;
$("#previewDownload").onclick = downloadPreview;
$("#docPreview").onclick = (e) => {
  if (e.target === $("#docPreview")) closePreview();
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const rb = e.target.closest && e.target.closest('[role="button"][tabindex]');
    if (rb && rb === e.target) {
      e.preventDefault();
      rb.click();
    }
    return;
  }
  if (e.key !== "Escape") return;
  // Small dialogs handle Escape themselves; never close the layer underneath at the same time.
  if (document.querySelector(".settings-dialog-backdrop")) return;
  if ($("#docPreview").classList.contains("on")) closePreview();
  else if ($("#eventOv").classList.contains("on")) requestCloseEvent();
  else if ($("#ov2").classList.contains("on")) $("#cidX").click();
  else if ($("#ov").classList.contains("on")) requestCloseSheet();
});
$("#ov").onclick = (e) => {
  if (e.target === $("#ov")) requestCloseSheet();
};
$("#ov2").onclick = (e) => {
  if (e.target === $("#ov2")) $("#cidX").click();
};
$("#cidX").onclick = () => {
  $("#ov2").classList.remove("on");
  const sheet = $("#ov2 .sh");
  if (sheet) sheet.scrollTop = 0;
};
$("#cidSave").onclick = () => {
  const ownId = $("#cid").value.trim();
  if (ownId) localStorage.setItem("hv_cid", ownId);
  else localStorage.removeItem("hv_cid");
  localStorage.setItem("hv_role", $("#role").value);
  localStorage.removeItem("hv_ok");
  tc = null;
  token = null;
  tokenPromise = null;
  authExpired = false;
  folderId = null;
  fileId = null;
  $("#ov2").classList.remove("on");
  const sheet = $("#ov2 .sh");
  if (sheet) sheet.scrollTop = 0;
  connect();
};
$("#shb").onclick = async () => {
  const m = $("#shm").value.trim();
  if (!m || !folderId) return;
  try {
    await api(D + "/" + folderId + "/permissions?sendNotificationEmail=true", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "user", role: "writer", emailAddress: m }),
    });
    showAlert("Ordner freigegeben", "Der Ordner „Haushalt“ ist jetzt für " + m + " freigegeben.");
    $("#shm").value = "";
  } catch (e) {
    showAlert("Freigabe fehlgeschlagen", "Bitte die E-Mail-Adresse prüfen und erneut versuchen.");
  }
};
document.addEventListener("visibilitychange", () => {
  if (document.hidden) return;
  checkReminders();
  backgroundSync();
});
$("#st").addEventListener("click", () => {
  if (cid() && (authExpired || !folderId)) {
    showToast("Verbinde mit Google Drive …");
    connect();
  } else showToast($("#st").title);
});

$("#v-calendar").onclick = (e) => {
  const b = e.target.closest("button,[data-edit-event],[data-open-entry]");
  if (!b || Date.now() - swipedAt < 400) return;
  if (b.dataset.openEntry) {
    open(b.dataset.openEntry);
    return;
  }
  if (b.dataset.calPrev) {
    calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() - 1, 1);
    renderCalendar();
  } else if (b.dataset.calNext) {
    calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() + 1, 1);
    renderCalendar();
  } else if (b.dataset.calToday) {
    calMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    calSelected = dateKey(new Date());
    renderCalendar();
  } else if (b.dataset.calSelect) {
    calSelected = b.dataset.calSelect;
    renderCalendar();
  } else if (b.dataset.newEvent) addEvent();
  else if (b.dataset.toggleDone) toggleEventDone(b.dataset.toggleDone, b.dataset.doneDate);
  else if (b.dataset.editEvent) editEvent(b.dataset.editEvent, b.dataset.editDate);
};
$("#evSave").onclick = saveEvent;
$("#evCancel").onclick = requestCloseEvent;
$("#evDelete").onclick = deleteEvent;
$("#evFileBtn").onclick = () => canAttachToEvent() && $("#evFile").click();
$("#evCamBtn").onclick = () => canAttachToEvent() && $("#evCam").click();
$("#evFile").onchange = attachEventFiles;
$("#evCam").onchange = attachEventFiles;
$("#evFiles").onclick = (e) => {
  const o = e.target.closest("[data-ev-open]"),
    r = e.target.closest("[data-ev-rm]");
  if (o) openDoc(evFiles[+o.dataset.evOpen]);
  if (r) {
    // Takes effect when the event is saved; the file can then be restored from the trash.
    evRemovals.push(...evFiles.splice(+r.dataset.evRm, 1));
    renderEventFiles();
  }
};
$("#eventOv").onclick = (e) => {
  if (e.target === $("#eventOv")) requestCloseEvent();
};
$("#v-settings").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.editCat) manageCategory(b.dataset.editCat);
  else if (b.dataset.delCat) deleteCategory(b.dataset.delCat);
  else if (b.dataset.addCat) addCategory();
  else if (b.dataset.addListItem) addListItem();
  else if (b.dataset.editList !== undefined) editListItem(Number(b.dataset.editList));
  else if (b.dataset.delList !== undefined) deleteListItem(Number(b.dataset.delList));
  else if (b.dataset.notify) enableNotifications();
  else if (b.dataset.driveSettings) openSettings();
  else if (b.dataset.resort) resortDrive();
  else if (b.dataset.trashTab) {
    trashTab = b.dataset.trashTab;
    renderSettings();
  } else if (b.dataset.restore) restoreFromTrash(b.dataset.restore);
  else if (b.dataset.themeSet) {
    localStorage.setItem("hv_theme", b.dataset.themeSet);
    applyTheme();
    renderSettings();
  } else if (b.dataset.backup === "json") exportJson();
  else if (b.dataset.backup === "zip") exportZip();
  else if (b.dataset.backup === "import") $("#importFile").click();
  else if (b.dataset.backup === "print") printEmergency();
};
$("#v-settings").onchange = (e) => {
  if (e.target.id === "settingsList") renderSettingsList();
  if (e.target.id === "importFile" && e.target.files[0]) {
    const f = e.target.files[0];
    e.target.value = "";
    importBackup(f);
  }
};

const modalLockObserver = new MutationObserver(() => {
  const active = [...document.querySelectorAll(".ov,.doc-preview,.settings-dialog-backdrop")].some(
    (el) => el.classList.contains("on") || el.classList.contains("settings-dialog-backdrop"),
  );
  document.body.classList.toggle("modal-lock", active);
});
document
  .querySelectorAll(".ov,.doc-preview")
  .forEach((el) => modalLockObserver.observe(el, { attributes: true, attributeFilter: ["class"] }));

/* Main navigation + Android/browser back-button handling */
function navigateTo(nextTab, { push = true } = {}) {
  if (!["home", "list", "docs", "calendar", "settings", "stats"].includes(nextTab)) return;
  if (nextTab === "settings" && tab !== "settings") settingsOpen = [];
  tab = nextTab;
  render();
  if (push) {
    try {
      history.pushState({ narHome: true, tab: nextTab }, "", location.href);
    } catch (e) {}
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}
document.querySelector("nav").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.action === "new") {
    pickCategory();
    return;
  }
  if (b.dataset.action === "more") {
    openMore();
    return;
  }
  if (b.dataset.t) {
    navigateTo(b.dataset.t);
  }
});
document.querySelector("#v-home").addEventListener("click", (e) => {
  const b = e.target.closest("[data-open-calendar]");
  if (!b) return;
  const key = b.dataset.calDate;
  if (key) {
    calSelected = key;
    calMonth = new Date(parseLocalDate(key).getFullYear(), parseLocalDate(key).getMonth(), 1);
  }
  navigateTo("calendar");
});
try {
  history.replaceState({ narHome: true, tab: tab }, "", location.href);
  history.pushState({ narHome: true, tab: tab, guard: true }, "", location.href);
} catch (e) {}
window.addEventListener("popstate", (e) => {
  // Consume the first Back press inside the app instead of letting the browser close the page.
  const modal =
    document.querySelector(".settings-dialog-backdrop") ||
    document.querySelector(".doc-preview.on") ||
    document.querySelector(".ov.on");
  if (modal) {
    if (modal.classList.contains("doc-preview")) closePreview();
    else if (modal.classList.contains("settings-dialog-backdrop"))
      (modal.querySelector("[data-cancel]") || modal.querySelector("[data-ok]"))?.click();
    else if (modal.id === "eventOv") requestCloseEvent();
    else if (modal.id === "ov2") $("#cidX").click();
    else requestCloseSheet();
    try {
      history.pushState({ narHome: true, tab }, "", location.href);
    } catch (err) {}
    return;
  }
  if (tab !== "home") {
    navigateTo("home", { push: false });
    try {
      history.pushState({ narHome: true, tab: "home", guard: true }, "", location.href);
    } catch (err) {}
    return;
  }
  // At the home screen: the first Back shows a short hint, a second Back within 2 seconds leaves the app.
  if (Date.now() < exitArmedUntil) {
    exitArmedUntil = 0;
    history.back();
    return;
  }
  exitArmedUntil = Date.now() + 2000;
  try {
    history.pushState({ narHome: true, tab: "home", guard: true }, "", location.href);
  } catch (err) {}
  showToast("Zum Beenden erneut zurück");
});

/* ---- Einmaliges Einsortieren älterer Dateien in die Objekt-Ordner ---- */
const legacyDocCount = () => data.entries.reduce((s, e) => s + (e.docs || []).filter((d) => !d.inObj).length, 0);
async function resortDrive() {
  const n = legacyDocCount(),
    todo = data.entries.filter((e) => (e.docs || []).some((d) => !d.inObj)).map((e) => e.id);
  if (!n) {
    showToast("Alle Unterlagen sind bereits einsortiert");
    return;
  }
  if (!folderId) {
    showAlert("Google Drive nicht verbunden", "Zum Einsortieren muss Google Drive verbunden sein.");
    return;
  }
  const ok = await showConfirm(
    "Unterlagen neu einsortieren",
    n +
      (n === 1 ? " Dokument aus " : " Dokumente aus ") +
      todo.length +
      (todo.length === 1 ? " Objekt wird" : " Objekten werden") +
      " in Google Drive in die neue Ordnerstruktur verschoben, z. B. „Haushalt/Fahrzeug/Golf 7/TÜV & Inspektion/“. Dateinamen im alten Schema (TTMMJJ_…) werden dabei auf das neue Schema umgestellt. Alte Ordner, die danach leer sind, kommen in den Drive-Papierkorb.",
    "Jetzt einsortieren",
  );
  if (!ok || !(await ensureAuth())) return;
  let moved = 0,
    failed = 0;
  const oldParents = new Set();
  for (const id of todo) {
    const e = data.entries.find((x) => x.id === id);
    if (!e) continue;
    for (const d of (e.docs || []).filter((x) => !x.inObj)) {
      setSt("Einsortieren: " + (moved + failed + 1) + " von " + n, "busy");
      try {
        const sub = d.subcategory || "",
          target = await docTargetFolder(e, sub),
          info = await (await api(D + "/" + d.id + "?fields=parents")).json(),
          parents = info.parents || [],
          legacy = d.auto === undefined ? parseLegacyName(d.name, e.title) : null,
          oldDate = /^(\d{2})(\d{2})(\d{2})_(.+)$/.exec(d.name),
          // Old-scheme names: fully renamed if they match the title, otherwise only the date becomes sortable.
          name = legacy
            ? uniqueDocName(
                buildDocName({ date: legacy.docDate, title: e.title, type: sub, ext: fileExt(d.name) }),
                e,
                sub,
                d.id,
              )
            : oldDate && d.auto === undefined
              ? uniqueDocName("20" + oldDate[3] + "-" + oldDate[2] + "-" + oldDate[1] + "_" + oldDate[4], e, sub, d.id)
              : d.name;
        parents.forEach((p) => oldParents.add(p));
        await api(
          D +
            "/" +
            d.id +
            "?addParents=" +
            encodeURIComponent(target) +
            "&removeParents=" +
            encodeURIComponent(parents.join(",")),
          { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name }) },
        );
        Object.assign(d, {
          name,
          inObj: true,
          folderSub: sub,
          ...(legacy ? { auto: true, docDate: legacy.docDate, docType: sub, nameTitle: e.title } : {}),
        });
        moved++;
      } catch (err) {
        failed++;
      }
    }
    e.upd = Date.now();
  }
  // Old category/subcategory folders that are empty now go to the Drive trash (never the main folder).
  let cleaned = 0;
  for (const pid of oldParents) {
    if (pid === folderId) continue;
    try {
      const q = "'" + qEsc(pid) + "' in parents and trashed=false",
        j = await (await api(D + "?q=" + encodeURIComponent(q) + "&fields=files(id)&pageSize=1")).json();
      if (!(j.files || []).length) {
        await delDrive(pid);
        cleaned++;
      }
    } catch (err) {}
  }
  dirty();
  showAlert(
    failed ? "Teilweise einsortiert" : "Einsortiert",
    moved +
      " Dokument(e) wurden in ihre Objekt-Ordner verschoben" +
      (cleaned ? ", " + cleaned + " leere alte Ordner liegen im Drive-Papierkorb" : "") +
      "." +
      (failed
        ? " " + failed + " Dokument(e) konnten nicht verschoben werden – du kannst es später erneut versuchen."
        : ""),
  );
}

/* ---- Datensicherung ---- */
function backupPayload() {
  return {
    app: "NAR Home",
    format: 1,
    exportedAt: new Date().toISOString(),
    data: {
      entries: data.entries,
      events: data.events,
      settings: data.settings,
      del: data.del || [],
      deletedEvents: data.deletedEvents || [],
      trash: data.trash || [],
    },
  };
}
function downloadBlob(blob, name) {
  const u = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = u;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(u), 2000);
}
const backupName = (ext) => "NAR-Home-Backup-" + dateKey(new Date()) + "." + ext;
function markBackupDone() {
  localStorage.setItem("hv_last_backup", String(Date.now()));
  if (tab === "settings") renderSettings();
}
function exportJson() {
  commitPendingDeletes();
  downloadBlob(new Blob([JSON.stringify(backupPayload(), null, 2)], { type: "application/json" }), backupName("json"));
  markBackupDone();
  showToast("Backup heruntergeladen");
}
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(bytes) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
// Minimal ZIP writer without compression (documents are already compressed); readable by every unzip tool.
function buildZip(files) {
  const enc = new TextEncoder(),
    parts = [],
    central = [],
    d = new Date(),
    dosTime = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1),
    dosDate = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
  let offset = 0;
  for (const f of files) {
    const name = enc.encode(f.name),
      crc = crc32(f.bytes),
      size = f.bytes.length;
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true);
    lh.setUint16(4, 20, true);
    lh.setUint16(6, 0x0800, true); // UTF-8 file names
    lh.setUint16(10, dosTime, true);
    lh.setUint16(12, dosDate, true);
    lh.setUint32(14, crc, true);
    lh.setUint32(18, size, true);
    lh.setUint32(22, size, true);
    lh.setUint16(26, name.length, true);
    parts.push(new Uint8Array(lh.buffer), name, f.bytes);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true);
    ch.setUint16(4, 20, true);
    ch.setUint16(6, 20, true);
    ch.setUint16(8, 0x0800, true);
    ch.setUint16(12, dosTime, true);
    ch.setUint16(14, dosDate, true);
    ch.setUint32(16, crc, true);
    ch.setUint32(20, size, true);
    ch.setUint32(24, size, true);
    ch.setUint16(28, name.length, true);
    ch.setUint32(42, offset, true);
    central.push(new Uint8Array(ch.buffer), name);
    offset += 30 + name.length + size;
  }
  const cdSize = central.reduce((s, p) => s + p.length, 0),
    end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, cdSize, true);
  end.setUint32(16, offset, true);
  return new Blob([...parts, ...central, new Uint8Array(end.buffer)], { type: "application/zip" });
}
async function readJsonFromZip(buf) {
  const v = new DataView(buf),
    u8 = new Uint8Array(buf),
    dec = new TextDecoder();
  let eocd = -1;
  for (let i = buf.byteLength - 22; i >= Math.max(0, buf.byteLength - 65557); i--)
    if (v.getUint32(i, true) === 0x06054b50) {
      eocd = i;
      break;
    }
  if (eocd < 0) throw new Error("ZIP");
  let p = v.getUint32(eocd + 16, true);
  for (let n = 0, count = v.getUint16(eocd + 10, true); n < count; n++) {
    const method = v.getUint16(p + 10, true),
      size = v.getUint32(p + 20, true),
      nameLen = v.getUint16(p + 28, true),
      local = v.getUint32(p + 42, true),
      name = dec.decode(u8.subarray(p + 46, p + 46 + nameLen));
    if (/(^|\/)daten\.json$/i.test(name)) {
      const start = local + 30 + v.getUint16(local + 26, true) + v.getUint16(local + 28, true),
        raw = u8.subarray(start, start + size);
      if (method === 0) return dec.decode(raw);
      if (method === 8)
        return await new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
      throw new Error("ZIP method");
    }
    p += 46 + nameLen + v.getUint16(p + 30, true) + v.getUint16(p + 32, true);
  }
  throw new Error("no data");
}
async function exportZip() {
  commitPendingDeletes();
  const docs = [];
  data.entries.forEach((e) =>
    (e.docs || []).forEach((d) =>
      docs.push({
        d,
        dir: [
          safeFilePart(e.cat),
          e.objType ? safeFilePart(e.objType) : "",
          safeFilePart(e.title),
          d.subcategory ? safeFilePart(d.subcategory) : "",
        ],
      }),
    ),
  );
  (data.events || []).forEach((ev) =>
    (ev.files || []).forEach((d) => docs.push({ d, dir: ["Kalender", (ev.date || "").slice(0, 4)] })),
  );
  if (docs.length && !folderId) {
    showAlert(
      "Google Drive nicht verbunden",
      "Für ein Backup mit Dokumenten muss Google Drive verbunden sein. Ohne Verbindung kannst du das Backup ohne Dokumente (JSON) nutzen.",
    );
    return;
  }
  if (docs.length && !(await ensureAuth())) return;
  const files = [{ name: "daten.json", bytes: new TextEncoder().encode(JSON.stringify(backupPayload(), null, 2)) }],
    used = new Set(["daten.json"]),
    failed = [];
  for (const [i, x] of docs.entries()) {
    setSt("Backup: Dokument " + (i + 1) + " von " + docs.length, "busy");
    try {
      const blob = await (await api(D + "/" + x.d.id + "?alt=media")).blob();
      const base = ["Dokumente", ...x.dir, safeFilePart(x.d.name)].filter(Boolean).join("/");
      let path = base;
      for (let n = 2; used.has(path); n++) {
        const dot = base.lastIndexOf(".");
        path =
          dot > base.lastIndexOf("/") ? base.slice(0, dot) + " (" + n + ")" + base.slice(dot) : base + " (" + n + ")";
      }
      used.add(path);
      files.push({ name: path, bytes: new Uint8Array(await blob.arrayBuffer()) });
    } catch (err) {
      failed.push(x.d.name);
    }
  }
  downloadBlob(buildZip(files), backupName("zip"));
  markBackupDone();
  setSt("Backup erstellt", "ok");
  if (failed.length)
    showAlert(
      "Backup mit Lücken",
      failed.length + " Dokument(e) konnten nicht geladen werden und fehlen im ZIP: " + failed.join(", "),
    );
  else showToast("Backup mit " + docs.length + (docs.length === 1 ? " Dokument" : " Dokumenten") + " heruntergeladen");
}
async function importBackup(file) {
  let payload;
  try {
    const text = /\.zip$/i.test(file.name) ? await readJsonFromZip(await file.arrayBuffer()) : await file.text();
    payload = JSON.parse(text);
  } catch (e) {
    showAlert(
      "Import fehlgeschlagen",
      "Die Datei konnte nicht gelesen werden. Bitte eine NAR-Home-Sicherung (.json oder .zip) wählen.",
    );
    return;
  }
  const imp = payload && payload.data && Array.isArray(payload.data.entries) ? payload.data : payload;
  if (!imp || !Array.isArray(imp.entries)) {
    showAlert("Keine NAR-Home-Sicherung", "In dieser Datei wurden keine Einträge gefunden.");
    return;
  }
  const when = payload.exportedAt
    ? new Date(payload.exportedAt).toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" })
    : "unbekannt";
  const choice = await showChoiceDialog({
    title: "Sicherung wiederherstellen",
    description:
      "Sicherung vom " +
      when +
      ": " +
      imp.entries.length +
      " Einträge, " +
      (imp.events || []).length +
      " Termine. Zusammenführen ergänzt fehlende und zwischenzeitlich gelöschte Daten, neuere Änderungen bleiben erhalten. Ersetzen stellt exakt den Stand der Sicherung her.",
    choices: [
      { value: "merge", label: "Zusammenführen" },
      { value: "replace", label: "Alles durch die Sicherung ersetzen", danger: true },
    ],
  });
  if (!choice) return;
  commitPendingDeletes();
  const now = Date.now(),
    delSet = new Set(data.del || []),
    delEv = new Set(data.deletedEvents || []);
  // Deletions are synced as permanent tombstones, so restored items that were deleted meanwhile get a new id.
  const entries = imp.entries.map((e) => ({ ...e, id: delSet.has(e.id) ? e.id + "-r" + now : e.id }));
  const events = (imp.events || []).map((e) => ({ ...e, id: delEv.has(e.id) ? e.id + "-r" + now : e.id }));
  if (choice === "merge") {
    entries.forEach((e) => {
      if (e.id.endsWith("-r" + now)) e.upd = now;
    });
    data = merge({ entries, events, settings: data.settings, del: [], deletedEvents: [] }, data);
  } else {
    const keep = new Set(entries.map((e) => e.id)),
      keepEv = new Set(events.map((e) => e.id));
    entries.forEach((e) => (e.upd = now));
    events.forEach((e) => (e.updatedAt = now));
    data = {
      ...data,
      entries,
      events,
      settings: imp.settings ? { ...imp.settings, upd: now } : data.settings,
      del: [...delSet, ...data.entries.filter((e) => !keep.has(e.id)).map((e) => e.id)],
      deletedEvents: [...delEv, ...data.events.filter((e) => !keepEv.has(e.id)).map((e) => e.id)],
    };
  }
  normalizeData();
  applySettings();
  dirty();
  showToast("Sicherung übernommen");
}

/* ---- Notfallmappe (Druckansicht → „Als PDF speichern“) ---- */
function emergencyHtml() {
  const E = data.entries,
    today = new Date().toLocaleDateString("de-DE", { dateStyle: "long" }),
    upcoming = E.flatMap((e) => entryDeadlines(e).map((d) => ({ e, d })))
      .filter((x) => dleft(x.d.date) >= -30 && dleft(x.d.date) <= 365)
      .sort((a, b) => a.d.date.localeCompare(b.d.date));
  let h =
    '<header class="pm-head"><h1>NAR Home – Notfallmappe</h1><p>Stand: ' +
    esc(today) +
    " · " +
    E.length +
    " Einträge · Fixkosten " +
    fmt(sum(E)) +
    ' pro Monat</p><p class="pm-warn">Vertraulich – enthält Vertrags-, Versicherungs- und Ausweisdaten. Sicher aufbewahren.</p></header>';
  if (upcoming.length)
    h +=
      "<h2>Fristen der nächsten 12 Monate</h2><table><thead><tr><th>Datum</th><th>Frist</th><th>Eintrag</th></tr></thead><tbody>" +
      upcoming
        .map(
          (x) =>
            "<tr><td>" +
            esc(fmtD(x.d.date)) +
            "</td><td>" +
            esc(x.d.label) +
            "</td><td>" +
            esc(x.e.title) +
            " (" +
            esc(x.e.cat) +
            ")</td></tr>",
        )
        .join("") +
      "</tbody></table>";
  Object.keys(T).forEach((c) => {
    const L = E.filter((e) => e.cat === c).sort((a, b) => a.title.localeCompare(b.title, "de"));
    if (!L.length) return;
    h +=
      "<h2>" +
      esc(c) +
      "</h2>" +
      L.map((e) => {
        const x = e.x || {},
          rows = [];
        if (e.objType) rows.push(["Art", e.objType]);
        if (e.owner) rows.push(["Gehört zu", e.owner]);
        Object.keys(x).forEach((k) => x[k] && rows.push([k, x[k]]));
        costItems(e).forEach((c) =>
          rows.push([c.label ? "Kosten: " + c.label : "Kosten", fmt(+c.amount || 0) + " " + (c.iv || "monatlich")]),
        );
        if (e.cat === "Vertrag" && e.contractStart)
          rows.push([
            "Vertrag",
            "Beginn " +
              fmtD(e.contractStart) +
              (e.termMonths ? ", Laufzeit " + e.termMonths + " Monate" : "") +
              (e.noticeMonths ? ", Kündigungsfrist " + e.noticeMonths + " Monate" : ""),
          ]);
        entryDeadlines(e).forEach((d) => rows.push([d.label, fmtD(d.date)]));
        if (e.note) rows.push(["Notizen", e.note]);
        const groups = {};
        (e.docs || []).forEach((d) =>
          (groups[d.subcategory || "Allgemein"] = groups[d.subcategory || "Allgemein"] || []).push(d.name),
        );
        Object.entries(groups).forEach(([g, names]) => rows.push(["Unterlagen: " + g, names.join(", ")]));
        return (
          '<section class="pm-entry"><h3>' +
          (e.fav ? "★ " : "") +
          esc(e.title) +
          "</h3>" +
          (rows.length
            ? "<dl>" + rows.map((r) => "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>").join("") + "</dl>"
            : "") +
          "</section>"
        );
      }).join("");
  });
  return h;
}
async function printEmergency() {
  if (!data.entries.length) {
    showAlert("Noch keine Einträge", "Lege zuerst Einträge an – dann kann daraus eine Notfallmappe erstellt werden.");
    return;
  }
  const ok = await showConfirm(
    "Notfallmappe erstellen",
    "Die Notfallmappe fasst alle Einträge mit Nummern, Fristen, Kosten und Notizen übersichtlich zusammen. Im Druckdialog „Als PDF speichern“ wählen. Bitte sicher aufbewahren.",
    "Erstellen",
  );
  if (!ok) return;
  let el = $("#printArea");
  if (!el) {
    el = document.createElement("div");
    el.id = "printArea";
    document.body.appendChild(el);
  }
  el.innerHTML = emergencyHtml();
  // Wait for the dialog's closing animation before the print dialog takes a snapshot.
  setTimeout(() => window.print(), 250);
}
window.addEventListener("afterprint", () => $("#printArea")?.remove());

/* ---- Darstellung (Hell / Dunkel / Automatisch, je Gerät) ---- */
const themeSetting = () => localStorage.getItem("hv_theme") || "auto";
const darkQuery = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : null;
function applyTheme() {
  const s = themeSetting(),
    dark = s === "dark" || (s === "auto" && !!darkQuery && darkQuery.matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#11161f" : "#202b3a");
  const t = $("#themeToggle");
  t.innerHTML = icon(dark ? "sun" : "moon");
  t.setAttribute("aria-label", dark ? "Hellen Modus einschalten" : "Dunkelmodus einschalten");
  t.title = dark ? "Heller Modus" : "Dunkelmodus";
}
// The header button switches directly between light and dark (overrides "Automatisch").
$("#themeToggle").onclick = () => {
  localStorage.setItem("hv_theme", document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  applyTheme();
  if (tab === "settings") renderSettings();
};
darkQuery?.addEventListener?.("change", applyTheme);
applyTheme();

// Second step of "Neu": choose an existing object of the category (to add documents) or create a new one.
function pickObject(cat) {
  const objs = data.entries
    .filter((e) => e.cat === cat)
    .sort((a, b) => (a.objType || "").localeCompare(b.objType || "", "de") || a.title.localeCompare(b.title, "de"));
  if (!objs.length) return newEntry(cat);
  document.querySelector(".settings-dialog-backdrop")?.remove();
  const b = document.createElement("div");
  b.className = "settings-dialog-backdrop";
  b.innerHTML =
    '<div class="settings-dialog" role="dialog" aria-modal="true" aria-labelledby="nar-pickobj"><div class="settings-dialog-head"><div class="settings-dialog-kicker">' +
    esc(cat) +
    '</div><h3 id="nar-pickobj">Wofür?</h3></div><div class="settings-dialog-body"><button type="button" class="add" data-new-obj>＋ Neu anlegen</button>' +
    objs
      .map(
        (e) =>
          '<button type="button" class="row" data-obj="' +
          esc(e.id) +
          '"><span class="ic">' +
          icon(tp(e).i) +
          '</span><div class="m"><b>' +
          esc(e.title) +
          "</b><small>" +
          esc(
            [e.objType, e.owner, (e.docs || []).length ? e.docs.length + " Unterlagen" : ""]
              .filter(Boolean)
              .join(" · ") || cat,
          ) +
          "</small></div></button>",
      )
      .join("") +
    '</div><div class="settings-dialog-foot"><button type="button" class="dialog-secondary" data-cancel>Abbrechen</button></div></div>';
  document.body.appendChild(b);
  document.body.classList.add("modal-lock");
  requestAnimationFrame(() => b.classList.add("on"));
  const close = (cb) => {
    b.classList.remove("on");
    if (!document.querySelector(".ov.on,.doc-preview.on")) document.body.classList.remove("modal-lock");
    setTimeout(() => {
      b.remove();
      cb && cb();
    }, 180);
  };
  b.addEventListener("click", (e) => {
    const o = e.target.closest("[data-obj]");
    if (o)
      close(() => {
        open(o.dataset.obj);
        $("#docs").scrollIntoView({ block: "start" });
      });
    else if (e.target.closest("[data-new-obj]")) close(() => newEntry(cat));
    else if (e.target === b || e.target.closest("[data-cancel]")) close();
  });
  b.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  b.querySelector("[data-new-obj]").focus();
}
function pickCategory() {
  document.querySelector(".settings-dialog-backdrop")?.remove();
  const b = document.createElement("div");
  b.className = "settings-dialog-backdrop";
  b.innerHTML =
    '<div class="settings-dialog" role="dialog" aria-modal="true"><div class="settings-dialog-head"><div class="settings-dialog-kicker">Neuer Eintrag</div><h3>Welche Kategorie?</h3></div><div class="settings-dialog-body"><div class="grid pick-grid">' +
    Object.keys(T)
      .map(
        (c) =>
          '<button type="button" class="tile" data-pick="' +
          esc(c) +
          '"><span class="ic">' +
          icon(T[c].i) +
          "</span><b>" +
          esc(c) +
          "</b></button>",
      )
      .join("") +
    '</div></div><div class="settings-dialog-foot"><button type="button" class="dialog-secondary" data-cancel>Abbrechen</button></div></div>';
  document.body.appendChild(b);
  document.body.classList.add("modal-lock");
  requestAnimationFrame(() => b.classList.add("on"));
  const close = (cb) => {
    b.classList.remove("on");
    if (!document.querySelector(".ov.on,.doc-preview.on")) document.body.classList.remove("modal-lock");
    setTimeout(() => {
      b.remove();
      cb && cb();
    }, 180);
  };
  b.addEventListener("click", (e) => {
    const p = e.target.closest("[data-pick]");
    if (p) {
      close(() => pickObject(p.dataset.pick));
      return;
    }
    if (e.target === b || e.target.closest("[data-cancel]")) close();
  });
  b.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
async function deleteEventById(id, fromSheet, key) {
  const ev = (data.events || []).find((x) => x.id === id);
  if (!ev) return false;
  if (isRecurring(ev) && key) {
    const choice = await showChoiceDialog({
      title: "Wiederkehrenden Termin löschen?",
      description: "„" + (ev.title || "Termin") + "“ wiederholt sich. Was möchtest du löschen?",
      choices: [
        { value: "one", label: "Nur den Termin am " + fmtD(key) },
        { value: "all", label: "Alle Termine der Serie", danger: true },
      ],
    });
    if (!choice) return false;
    if (choice === "one") {
      if (fromSheet) closeEvent();
      const prevDone = (ev.doneDates || []).includes(key);
      deleteWithUndo({
        key: "occ:" + id + ":" + key,
        text: "Termin am " + fmtD(key) + " gelöscht",
        remove: () => {
          ev.exDates = [...(ev.exDates || []).filter((k) => k !== key), key];
          ev.doneDates = (ev.doneDates || []).filter((k) => k !== key);
          ev.updatedAt = Date.now();
          saveDataLocal();
        },
        restore: () => {
          ev.exDates = (ev.exDates || []).filter((k) => k !== key);
          if (prevDone) ev.doneDates = [...(ev.doneDates || []), key];
          ev.updatedAt = Date.now();
          saveDataLocal();
        },
        commit: () => {
          addToTrash({ kind: "occ", id: id + "@" + key, eventId: id, date: key, title: ev.title || "Termin" });
          saveDataLocal();
        },
      });
      return true;
    }
  }
  if (fromSheet) closeEvent();
  const index = data.events.indexOf(ev);
  deleteWithUndo({
    key: "event:" + id,
    text: "„" + (ev.title || "Termin") + "“ gelöscht",
    remove: () => (data.events = data.events.filter((x) => x.id !== id)),
    restore: () => {
      ev.updatedAt = Date.now();
      data.events.splice(Math.min(index, data.events.length), 0, ev);
      saveDataLocal();
    },
    commit: () => {
      data.deletedEvents = data.deletedEvents || [];
      if (!data.deletedEvents.includes(id)) data.deletedEvents.push(id);
      (ev.files || []).forEach((d) => delDrive(d.id));
      addToTrash({ kind: "event", id, title: ev.title || "Termin", item: JSON.parse(JSON.stringify(ev)) });
      saveDataLocal();
    },
  });
  return true;
}
(function () {
  const root = $("#v-calendar");
  let st = null;
  const reset = (s) => {
    s.row.style.transform = "";
    s.w.classList.remove("dragging", "to-right", "to-left");
  };
  root.addEventListener(
    "touchstart",
    (e) => {
      const w = e.target.closest(".swipe-wrap");
      if (!w || e.touches.length !== 1) {
        st = null;
        return;
      }
      st = {
        w,
        row: w.querySelector(".event-row"),
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        dx: 0,
        lock: null,
      };
    },
    { passive: true },
  );
  root.addEventListener(
    "touchmove",
    (e) => {
      if (!st) return;
      const dx = e.touches[0].clientX - st.x,
        dy = e.touches[0].clientY - st.y;
      if (!st.lock) {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        st.lock = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
        if (st.lock === "x") st.w.classList.add("dragging");
      }
      if (st.lock !== "x") return;
      st.dx = Math.max(-130, Math.min(130, dx));
      st.row.style.transform = "translateX(" + st.dx + "px)";
      st.w.classList.toggle("to-right", st.dx > 0);
      st.w.classList.toggle("to-left", st.dx < 0);
    },
    { passive: true },
  );
  root.addEventListener("touchend", async () => {
    if (!st) return;
    const s = st;
    st = null;
    if (s.lock !== "x") return;
    swipedAt = Date.now();
    const id = s.w.dataset.swipeId,
      key = s.w.dataset.swipeDate;
    if (s.dx >= 80) toggleEventDone(id, key);
    else if (s.dx <= -80) {
      reset(s);
      await deleteEventById(id, false, key);
    } else reset(s);
  });
  root.addEventListener("touchcancel", () => {
    if (st) {
      reset(st);
      st = null;
    }
  });
})();
$("#v-settings").addEventListener(
  "toggle",
  () => {
    settingsOpen = [...document.querySelectorAll("#v-settings details")].map((d) => d.open);
  },
  true,
);

// Google sign-in needs a tap (popup), so the app starts locally and offers a one-tap reconnect.
if (cid()) setSt("Nicht mit Google Drive verbunden – tippen zum Verbinden");
render();
checkReminders();
setInterval(checkReminders, 60000);
// While the app is open and visible, changes from the other device arrive about once a minute.
setInterval(backgroundSync, 60000);
