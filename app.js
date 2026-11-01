const $ = (s) => document.querySelector(s);

// Version shown under Einstellungen → Versionsinfo. Raise it with every release (also renews the offline cache).
const APP_VERSION = "14.9",
  APP_DATE = "2026-11-01",
  DATA_FORMAT = 2;
const CHANGELOG = [
  {
    v: "14.9",
    date: "2026-11-01",
    items: [
      "Ein Tipp auf das NAR-Logo öffnet die Übersicht; ein Tipp auf die grüne Statusampel öffnet „Abmelden“",
      "„Nach oben“-Knopf: erscheint auf langen Seiten nach etwa einer Bildschirmhöhe unten rechts und springt mit einem Tipp zum Seitenanfang",
      "Neue Symbole in den Einstellungen: Weitere Stammdaten (Kontaktkarte), App & Synchronisation (Cloud mit Zahnrad), Darstellung (Mond mit Stern) und Datensicherung (Cloud-Download)",
      "Bereich direkt in den Einstellungen wechseln (Umschalter „NAR Home | NAR Family“ statt Auswahlfenster); jeder Wechsel zeigt ein passendes Ladefenster mit den einzelnen Schritten",
      "Zahnrad oben im Kopfbereich öffnet direkt die Einstellungen",
      "Abmelden: Konto-Karte in den Einstellungen (zeigt das angemeldete Google-Konto) und „Abmelden“ im Menü „Mehr“. Vorher wird synchronisiert; danach sind die Daten des Bereichs vom Gerät entfernt und bleiben in Google Drive erhalten",
      "Neu gestalteter Dialog „Verlassen“ mit Logo, Synchronisationsstatus und Wechsel zum anderen Bereich; offene Änderungen werden vor dem Verlassen noch gesichert",
      "Bei der ersten Anmeldung und nach dem Abmelden fragt Google, welches Konto verwendet werden soll",
      "Übersicht anpassen: Kategorien und Bereiche (z. B. Finanzen, Einkaufsliste) per Ziehen oder Pfeilen sortieren und als Kachel in der Übersicht oder im Menü „Mehr“ anzeigen; Blöcke der Übersicht sortieren und ausblenden. Die Anordnung gilt pro Google-Konto auf allen Geräten",
      "Detailseite: Jede Karte (Objektdaten, Vertrag, Kosten, Fristen, Vermietung, Unterlagen) öffnet nur ihren eigenen Bereich; das komplette Formular erscheint nur beim Neuanlegen",
      "„Neu“: Ein bereits angelegtes Objekt (z. B. Fahrzeug) öffnet seine Detailseite",
      "„Wohnen“ ist nur noch für die eigene Wohnung; eigene Immobilien haben einen eigenen Bereich unter „Mehr“ (bestehende Einträge werden automatisch umgezogen)",
      "Wohnen: Kaltmiete, Nebenkosten- und Heizkosten-Vorauszahlung getrennt (mit Warmmiete) sowie direkt mit Versorgern abgerechnete Kosten wie Strom und Gas",
      "Vermietung als eigenes Einnahmen- und Ausgabenbuch je Immobilie (Monat und Jahr), getrennt von den Haushaltsfinanzen, Fixkosten und der Kostenstatistik",
      "Regelmäßige Kosten mit „Ab“ und „Bis“ werden in jedem fälligen Monat automatisch gebucht (Haushalt und Vermietung); einzelne Monate lassen sich anpassen oder überspringen",
      "Passende Beispiele je Kategorie in den Feldern für Bezeichnung, Kosten, Fristen, Notizen und Dokumentart",
      "Neue Symbole: Finanzamt für „Steuer“, Euro für „Finanzen“",
      "Einrichtung ohne Rollenauswahl: Hauptnutzer und Partner werden automatisch erkannt, Partner einladen und entfernen",
      "NAR Family nutzt eine eigene Google-Client-ID und damit eine eigene Google-Anmeldung",
      "Verständliche Meldung, wenn Google die Anmeldung blockiert (Konto nicht freigeschaltet), mit Wechsel zum anderen Bereich",
      "Geräte, die nur einen Bereich nutzen, öffnen ihn direkt ohne Bereichsauswahl",
      "Zurück-Taste: „Anwendung verlassen“ verlässt die App wieder zuverlässig (als installierte App mit einem weiteren Tippen auf Zurück); im Dialog lässt sich direkt zu NAR Home bzw. NAR Family wechseln",
      "NAR Family zeigt den eigenen Slogan „YOUR FAMILY. UNDER CONTROL.“",
    ],
  },
  {
    v: "14.8",
    date: "2026-10-31",
    items: [
      "Garage und Immobilien mit Fahrzeugarten, Eigentum und Nutzung",
      "Gemeinsame Einkaufsliste mit Standardartikeln ohne Preise",
    ],
  },
  {
    v: "14.7",
    date: "2026-10-31",
    items: ["Bereichsauswahl mit Lucide-Symbolen house und users-round, ohne Beschreibungstexte"],
  },
  {
    v: "14.6",
    date: "2026-10-31",
    items: ["Eigenes Häkchen-Symbol für erledigten Handlungsbedarf und neues Fahrzeug-Symbol in Seitenansicht"],
  },
  {
    v: "14.5",
    date: "2026-10-31",
    items: ["Automatische Synchronisation ohne Ladeanzeige; manueller Abgleich über die Statusampel"],
  },
  {
    v: "14.4",
    date: "2026-10-31",
    items: [
      "Objekt-Detailseiten mit Stammdaten, Kosten, Fristen und Unterlagen ergänzt",
      "Vermietungsübersicht mit Mietzeiträumen und monatlicher Zahlungserfassung ergänzt",
      "Manuelles Einnahmen- und Ausgabenbuch mit Monatsauswertung ergänzt",
    ],
  },
  {
    v: "14.3",
    date: "2026-10-31",
    items: [
      "NAR Home und NAR Family mit getrennten lokalen Datenbereichen ergänzt",
      "Google-Drive-Ablage pro Bereich getrennt; Familienordner wird nicht automatisch angelegt",
    ],
  },
  {
    v: "14.2",
    date: "2026-10-31",
    items: [
      "Undo-Löschungen auf drei Sekunden mit Countdown verkürzt",
      "Löschbestätigungen und endgültige Löschung im Papierkorb ergänzt",
      "Zentralen Loading-Overlay für zeitintensive Vorgänge ergänzt",
    ],
  },
  {
    v: "14.1",
    date: "2026-10-31",
    items: [
      "Google-Drive-Upload korrigiert (multipart/related statt multipart/form-data)",
      "Ausführlichere Fehlermeldungen bei Drive- und Synchronisationsfehlern",
    ],
  },
  {
    v: "14.0",
    date: "2026-10-31",
    items: [
      "Objekte: Fahrzeug, Wohnung, Vertrag usw. einmal anlegen und alle Unterlagen darunter ablegen – mit eigenem Drive-Ordner, Unterlagen-Arten, mehreren Kosten und „Gehört zu“",
      "Neue Dateinamen JJJJ-MM-TT_Titel_Art und Einsortieren älterer Dokumente",
      "Papierkorb für Einträge, Termine und Dokumente (Dateien landen im Drive-Papierkorb)",
      "Anhänge (Datei oder Foto) an Kalenderterminen",
      "Dokumentvorschau direkt in der App",
      "Mehrere Fristen pro Eintrag, Fristen im Kalender, Erinnerungen, Kündigungstermine mit Verlängerung",
      "Datensicherung (JSON/ZIP), Notfallmappe, Preisverlauf und Spar-Hinweise",
      "Automatische Synchronisation jede Minute und Konfliktvergleich",
      "Dunkelmodus, Logo, als App installierbar und offline startbar",
    ],
  },
  {
    v: "13",
    items: [
      "Fehlerbehebungen: Fristberechnung, Synchronisation der Einstellungen, abgelaufene Google-Anmeldung, wiederkehrende Termine",
    ],
  },
  { v: "12", items: ["Ausgangsversion als einzelne HTML-Datei"] },
];

const ICONS = {
  "shield-check": '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  "file-text":
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  "car-front":
    '<path d="m5 11 3-5h7l4 5 3 2v4h-3M5 17H2v-5l3-1h14M9 17h6M12 6v5"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
  house: '<path d="m3 10 9-7 9 7"/><path d="M5 9v12h14V9M9 21v-7h6v7"/>',
  landmark:
    '<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7"/><path d="M11.1 2.2a2 2 0 0 1 1.8 0l7.9 3.8c.5.3.3 1-.2 1H3.4c-.5 0-.7-.7-.2-1z"/>',
  building:
    '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4"/>',
  "receipt-text": '<path d="M4 2v20l4-2 4 2 4-2 4 2V2l-4 2-4-2-4 2z"/><path d="M8 9h8M8 13h8M8 17h5"/>',
  euro: '<path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>',
  "heart-pulse":
    '<path d="M20.8 8.6c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.8 2.4Z"/><path d="M3.5 12h4l2-3 3 6 2-3h5"/>',
  "contact-round":
    '<path d="M16 2v2"/><path d="M17.915 21a6 6 0 10-12 0"/><path d="M8 2v2"/><circle cx="12" cy="11" r="4"/><rect x="3" y="3" width="18" height="18" rx="2"/>',
  "id-card":
    '<rect x="2.5" y="4.5" width="19" height="15" rx="2.2"/><circle cx="8.2" cy="10" r="2.1"/><path d="M5.3 15.5c.7-1.6 1.7-2.3 2.9-2.3s2.2.7 2.9 2.3M13.5 9h4.5M13.5 12h4.5M13.5 15h3"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v12h14V9M9 21v-7h6v7"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
  paperclip:
    '<path d="m21.4 11.1-8.5 8.5a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',
  camera:
    '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3.5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  "circle-check": '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
  cloud: '<path d="M20 16.2A4.5 4.5 0 0 0 18.5 7.5 6 6 0 0 0 7 8.7 4 4 0 0 0 7 17h12"/>',
  "cloud-upload":
    '<path d="M20 16.2A4.5 4.5 0 0 0 18.5 7.5 6 6 0 0 0 7 8.7 4 4 0 0 0 7 17h5"/><path d="m10 14 3-3 3 3M13 11v9"/>',
  move: '<path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"/>',
  replace:
    '<path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5M3 21v-5h5"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
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
  grip: '<circle cx="9" cy="5" r=".9"/><circle cx="15" cy="5" r=".9"/><circle cx="9" cy="12" r=".9"/><circle cx="15" cy="12" r=".9"/><circle cx="9" cy="19" r=".9"/><circle cx="15" cy="19" r=".9"/>',
  "chevron-up": '<path d="m18 15-6-6-6 6"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  "eye-off":
    '<path d="M10.7 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-1.7 2.7M6.6 6.6A16.5 16.5 0 0 0 2 12s3.6 7 10 7a9.7 9.7 0 0 0 5.4-1.6M14.1 14.1a3 3 0 1 1-4.2-4.2"/><path d="m2 2 20 20"/>',
  more: '<circle cx="5" cy="12" r="1.1"/><circle cx="12" cy="12" r="1.1"/><circle cx="19" cy="12" r="1.1"/>',
  layout:
    '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "arrow-up": '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  alert:
    '<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3"/><path d="M12 9v4M12 17h.01"/>',
  // Same symbols as in the area picker (Lucide house and users-round).
  "area-home":
    '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  "area-family":
    '<path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>',
  // Settings sections (Lucide cloud-cog, moon-star, cloud-download).
  "cloud-cog":
    '<path d="m10.852 19.772-.383.924"/><path d="m13.148 14.228.383-.923"/><path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"/><path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"/><path d="m14.772 15.852.923-.383"/><path d="m14.772 18.148.923.383"/><path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"/><path d="m9.228 15.852-.923-.383"/><path d="m9.228 18.148-.923.383"/>',
  "moon-star":
    '<path d="M18 5h4"/><path d="M20 3v4"/><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
  "cloud-download":
    '<path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/>',
};
function icon(name, cls = "") {
  const p = ICONS[name] || ICONS.file;
  return '<svg class="ui-icon ' + cls + '" viewBox="0 0 24 24" aria-hidden="true">' + p + "</svg>";
}
// Static buttons in index.html declare their icon with data-icon="name".
document.querySelectorAll("[data-icon]").forEach((el) => el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon)));
let loadingSequence = 0,
  loadingTimer = null;
const activeLoaders = new Map();
function renderLoading() {
  const overlay = $("#loadingOverlay");
  if (!overlay) return;
  const latest = [...activeLoaders.values()].pop();
  if (!latest) {
    clearTimeout(loadingTimer);
    loadingTimer = null;
    overlay.classList.remove("on");
    overlay.setAttribute("aria-hidden", "true");
    return;
  }
  $("#loadingTitle").textContent = latest.title;
  $("#loadingDescription").textContent = latest.description;
  $("#loadingIcon").innerHTML = icon(latest.iconName);
}
// Shows the loading window for an operation. Normally it only appears if the operation takes longer than 180 ms;
// `instant` shows it right away and keeps it for at least `minMs`, so short transitions (area switch) stay visible.
// The operation receives `step(text)` to show its current step as the description.
async function withLoading({ title, description = "", iconName = "replace", instant = false, minMs = 0 }, operation) {
  const id = ++loadingSequence,
    started = Date.now();
  activeLoaders.set(id, { title, description, iconName });
  const show = () => {
    if (!activeLoaders.size) return;
    const overlay = $("#loadingOverlay");
    overlay.classList.add("on");
    overlay.setAttribute("aria-hidden", "false");
    renderLoading();
  };
  if (instant) {
    clearTimeout(loadingTimer);
    show();
  } else if (activeLoaders.size === 1) loadingTimer = setTimeout(show, 180);
  else if ($("#loadingOverlay").classList.contains("on")) renderLoading();
  const step = (text) => {
    const loader = activeLoaders.get(id);
    if (!loader) return;
    loader.description = text;
    renderLoading();
  };
  try {
    return await operation(step);
  } finally {
    const rest = minMs - (Date.now() - started);
    if (rest > 0) await new Promise((r) => setTimeout(r, rest));
    activeLoaders.delete(id);
    renderLoading();
  }
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
  // Owned properties have their own section under "Mehr" (not shown among the main categories).
  Immobilien: { i: "building", c: "#8b5cf6", f: ["Objekt / Adresse", "Hausverwaltung"], dl: "Frist" },
  Steuer: { i: "landmark", c: "#16a34a", f: ["Steuerjahr", "Finanzamt"], dl: "Abgabe bis" },
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
    "Nebenkostenabrechnungen",
    "Übergabeprotokoll",
    "Kaution",
    "Korrespondenz",
    "Sonstige Wohnunterlagen",
  ],
  Immobilien: [
    "Kaufunterlagen",
    "Grundbuch",
    "Finanzierung",
    "Mietverträge",
    "Nebenkosten",
    "Handwerker & Reparaturen",
    "Grundsteuer",
    "Versicherung",
    "Sonstige Unterlagen",
  ],
  Steuer: ["Steuerbescheid", "Steuererklärung", "Belege", "Finanzamt-Schreiben", "Sonstige Steuerunterlagen"],
  Gesundheit: ["Arztunterlagen", "Rechnungen", "Krankenkasse", "Rezepte", "Sonstige Gesundheitsunterlagen"],
  Ausweise: ["Personalausweis", "Reisepass", "Führerschein", "Geburtsurkunde", "Aufenthaltstitel", "Sonstige Ausweise"],
  Sonstiges: ["Allgemeine Unterlagen", "Quittungen", "Korrespondenz", "Sonstige Dokumente"],
};
// Object kinds per category ("Objektarten", optional), e.g. Mobilfunk → objects "Handy Ich", "Handy Partner/in".
const OBJ = {
  Fahrzeug: ["Auto", "Motorrad", "Wohnmobil", "Fahrrad", "Anhänger", "Sonstiges Fahrzeug"],
  Immobilien: ["Wohnung", "Haus", "Mehrfamilienhaus", "Garage / Stellplatz", "Grundstück", "Sonstige Immobilie"],
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
// Keep persisted category keys and Drive paths compatible with existing devices.
const categoryName = (key) => (key === "Fahrzeug" ? "Garage" : key);
// Category-specific examples for the placeholders of the entry form (title, cost items, deadlines, notes).
const CATEGORY_EXAMPLES = {
  Versicherung: {
    title: "z. B. Haftpflicht HUK, Hausrat Allianz",
    cost: "z. B. Jahresbeitrag, Zusatzbaustein",
    deadline: "z. B. Kündigung bis, Beitragsanpassung",
    note: "z. B. Versicherungsnummer beim Makler, Schadenhotline …",
  },
  Vertrag: {
    title: "z. B. Handy Ich, Internet Telekom, Netflix",
    cost: "z. B. Grundgebühr, Handy-Rate, Zusatzoption",
    deadline: "z. B. Kündigung bis, Mindestlaufzeit endet",
    note: "z. B. Tarif, Kündigungsweg, Ansprechpartner …",
  },
  Fahrzeug: {
    title: "z. B. Golf 7, E-Bike, Wohnmobil",
    cost: "z. B. Kfz-Versicherung, Kfz-Steuer, Leasingrate",
    deadline: "z. B. TÜV fällig, Inspektion, Reifenwechsel",
    note: "z. B. Werkstatt, Reifengröße, Ölsorte …",
  },
  Wohnen: {
    title: "z. B. Wohnung Musterstr. 5",
    cost: "z. B. Stellplatz, Kellerabteil",
    deadline: "z. B. Nebenkostenabrechnung prüfen, Kündigungsfrist",
    note: "z. B. Hausmeister, Notdienst, Zählerstände …",
  },
  Immobilien: {
    title: "z. B. ETW Köln, Haus Ahlen, Grundstück Ostsee",
    cost: "z. B. Hausgeld, Kreditrate, Grundsteuer",
    deadline: "z. B. Nebenkostenabrechnung erstellen, Zinsbindung endet",
    note: "z. B. Hausverwaltung, Handwerker, Zählernummern …",
  },
  Steuer: {
    title: "z. B. Steuererklärung 2025, Grundsteuer",
    cost: "z. B. Steuerberater, Vorauszahlung",
    deadline: "z. B. Abgabe bis, Einspruchsfrist",
    note: "z. B. Steuernummer, Steuerberater, offene Belege …",
  },
  Gesundheit: {
    title: "z. B. Zahnarzt Dr. Müller, Krankenkasse TK",
    cost: "z. B. Zusatzversicherung, Eigenanteil",
    deadline: "z. B. Kontrolltermin, Impfung auffrischen",
    note: "z. B. Praxis-Telefon, Medikamente, Allergien …",
  },
  Ausweise: {
    title: "z. B. Personalausweis Ich, Reisepass Kind",
    cost: "z. B. Gebühr",
    deadline: "z. B. Gültig bis, Neuantrag stellen",
    note: "z. B. Ausstellende Behörde, Ausstellungsdatum …",
  },
  Sonstiges: {
    title: "z. B. Garantie Waschmaschine, Vereinsmitgliedschaft",
    cost: "z. B. Beitrag, Rate",
    deadline: "z. B. Garantie endet",
    note: "z. B. Ansprechpartner, Hinweise …",
  },
};
// Own categories get neutral examples; the deadline example is the label used when the field stays empty.
const examplesFor = (cat) => ({
  title: "z. B. Name des Eintrags",
  cost: "z. B. Beitrag, Rate",
  deadline: T[cat] && T[cat].dl ? "z. B. " + T[cat].dl : "z. B. Frist",
  note: "z. B. Ansprechpartner, Hinweise …",
  ...(CATEGORY_EXAMPLES[cat] || {}),
});
// Categories with their own section under "Mehr"; they are left out of the main category lists.
const SECTION_CATS = ["Immobilien"];
const mainCats = () => Object.keys(T).filter((c) => !SECTION_CATS.includes(c));
const OLD_WOHNEN_SUB = [
    "Mietvertrag",
    "Nebenkosten",
    "Kaufunterlagen",
    "Finanzierung",
    "Übergabeprotokoll",
    "Sonstige Wohnunterlagen",
  ],
  OLD_WOHNEN_OBJ = ["Wohnung", "Haus", "Garage / Stellplatz", "Grundstück", "Sonstige Immobilie"];
const PROPERTY_USAGE = ["Selbst bewohnt", "Vermietet", "Leerstehend"];
const SHOPPING_DEFAULTS = {
  "Obst & Gemüse": [
    "Äpfel",
    "Bananen",
    "Orangen",
    "Zitronen",
    "Beeren",
    "Trauben",
    "Tomaten",
    "Gurken",
    "Paprika",
    "Karotten",
    "Kartoffeln",
    "Zwiebeln",
    "Knoblauch",
    "Salat",
    "Brokkoli",
    "Zucchini",
    "Pilze",
  ],
  "Brot & Frühstück": ["Brot", "Brötchen", "Toast", "Haferflocken", "Müsli", "Marmelade", "Honig", "Nusscreme"],
  "Milchprodukte & Eier": ["Milch", "Haferdrink", "Joghurt", "Quark", "Butter", "Käse", "Frischkäse", "Sahne", "Eier"],
  "Fleisch, Fisch & Alternativen": [
    "Hähnchen",
    "Hackfleisch",
    "Wurst",
    "Schinken",
    "Lachs",
    "Thunfisch",
    "Tofu",
    "Veggie-Burger",
  ],
  "Vorrat & Kochen": [
    "Nudeln",
    "Reis",
    "Mehl",
    "Zucker",
    "Salz",
    "Pfeffer",
    "Olivenöl",
    "Essig",
    "Passierte Tomaten",
    "Tomatenmark",
    "Linsen",
    "Bohnen",
    "Mais",
    "Brühe",
    "Backpulver",
  ],
  Getränke: ["Wasser", "Saft", "Kaffee", "Tee", "Kakao"],
  "Tiefkühl & Snacks": ["Tiefkühlgemüse", "Pizza", "Eis", "Nüsse", "Schokolade", "Chips", "Kekse"],
  "Haushalt & Pflege": [
    "Toilettenpapier",
    "Küchenrolle",
    "Taschentücher",
    "Müllbeutel",
    "Spülmittel",
    "Spülmaschinentabs",
    "Waschmittel",
    "Allzweckreiniger",
    "Schwämme",
    "Seife",
    "Duschgel",
    "Shampoo",
    "Zahnpasta",
    "Deo",
    "Windeln",
    "Feuchttücher",
    "Tierfutter",
  ],
};
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
// Devices that have only ever been connected to one area open it directly; otherwise the area picker is shown.
const connectedAreas = ["home", "family"].filter((a) =>
  localStorage.getItem((a === "home" ? "hv_" : "hv_family_") + "connected"),
);
if (connectedAreas.length === 1) localStorage.setItem("hv_active_area", connectedAreas[0]);
let activeArea = localStorage.getItem("hv_active_area") === "family" ? "family" : "home";
const areaStorageKey = (name) => (activeArea === "home" ? "hv_" + name : "hv_family_" + name),
  areaLabel = () => (activeArea === "family" ? "NAR Family" : "NAR Home"),
  areaFolderName = () => (activeArea === "family" ? "Familienverwaltung" : "Haushalt");
let data = JSON.parse(localStorage.getItem(areaStorageKey("data")) || "null") || { entries: [] };
function normalizeData() {
  data.entries = data.entries || [];
  data.events = data.events || [];
  data.financeTransactions = data.financeTransactions || [];
  data.shoppingItems = data.shoppingItems || [];
  data.deletedEvents = data.deletedEvents || [];
  data.trash = data.trash || [];
  data.purgedTrash = data.purgedTrash || [];
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
  // "Wohnen" is now only the home the family lives in; owned properties moved to the section "Immobilien".
  // Untouched default lists of the former combined category are replaced (deterministic on every device).
  const same = (a, b) => JSON.stringify(a || []) === JSON.stringify(b);
  if (same(s.subcategories.Wohnen, OLD_WOHNEN_SUB)) s.subcategories.Wohnen = SUB0.Wohnen.slice();
  if (same(s.objectTypes.Wohnen, OLD_WOHNEN_OBJ)) s.objectTypes.Wohnen = [];
  for (const cat of ["Fahrzeug", "Immobilien"]) {
    s.objectTypes[cat] = [...new Set([...(s.objectTypes[cat] || []), ...OBJ0[cat]])];
  }
  data.entries.forEach(migrateEntry);
  data.entries.forEach(moveOwnedProperty);
}
// Former "Wohnen" entries that are owned (or let/vacant) belong to "Immobilien". upd is kept, so this runs
// identically on all devices without creating sync changes; Drive folders follow on the next save.
function moveOwnedProperty(e) {
  if (e.cat !== "Wohnen") return;
  const usage = e.propertyUsage || (e.rental && e.rental.active ? "Vermietet" : "");
  if (e.propertyOwnership !== "Eigentum" && usage !== "Vermietet" && usage !== "Leerstehend") return;
  e.cat = "Immobilien";
  const x = e.x || {};
  if (x["Vermieter / Verwaltung"] && !x.Hausverwaltung) x.Hausverwaltung = x["Vermieter / Verwaltung"];
  delete x["Vermieter / Verwaltung"];
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
let allowExit = false;
// Every history entry of the app carries its distance ("depth") to the first app entry, so "Anwendung verlassen"
// knows exactly how far back the page before the app lies.
const histDepth = () => (history.state && history.state.narHome && history.state.depth) || 0;
function pushHist(state) {
  try {
    history.pushState({ ...state, narHome: true, depth: histDepth() + 1 }, "", location.href);
  } catch (e) {}
}
function replaceHist(state) {
  try {
    history.replaceState({ ...state, narHome: true, depth: histDepth() }, "", location.href);
  } catch (e) {}
}
let swipedAt = 0;
let settingsOpen = [];
let token = null,
  exp = 0,
  folderId = null,
  fileId = null,
  tab = "home",
  developerMode = false,
  filter = "Alle",
  q = "",
  qd = "",
  so = "n",
  cur = null,
  detailEntryId = null,
  detailPreviousTab = "list",
  editingFinanceId = null,
  financeMonth = dateKey(new Date()).slice(0, 7),
  rentalMonth = dateKey(new Date()).slice(0, 7),
  shoppingQuery = "",
  propertyUsageFilter = "",
  isNew = false,
  timer = null,
  tc = null,
  res = null,
  authExpired = false;
let sheetUploads = [],
  sheetRemovals = [];
// Local changes not yet confirmed in Drive are flagged per area ("unsynced"), so logging out never loses them.
let changeSeq = 0;
function markUnsynced() {
  changeSeq++;
  localStorage.setItem(areaStorageKey("unsynced"), "1");
}
// Built-in Google OAuth clients, one per area (each with its own Google Cloud project). They are public by design;
// an own ID can still be entered per area in the Drive settings.
const DEFAULT_CLIENT_IDS = {
  home: "340909526339-j4kf4uj6urrsq3umjh4sqmj19v48q6nr.apps.googleusercontent.com",
  family: "878494377104-paest90ouv54crk4vnded2hq5mg56onl.apps.googleusercontent.com",
};
const cid = () => localStorage.getItem(areaStorageKey("cid")) || DEFAULT_CLIENT_IDS[activeArea];
// A Google sign-in belongs to one client, so each area keeps its own session while the app is open.
const areaAuth = {};
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
// Costs whose end date has passed no longer count as running fixed costs.
const costRunning = (c) => !c.end || c.end >= dateKey(new Date());
const mo1 = (e) =>
  costItems(e)
    .filter(costRunning)
    .reduce((s, c) => s + monthly(c.amount, c.iv), 0);
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
// Failures of the Google sign-in window carry their reason (e.g. popup_closed, access_denied) for a clear message.
const authError = (reason) => Object.assign(new Error("AUTH_FAILED"), { reason });
function initTc() {
  if (tc || !window.google || !google.accounts || !cid()) return;
  const okKey = areaStorageKey("ok");
  tc = google.accounts.oauth2.initTokenClient({
    client_id: cid(),
    scope: "https://www.googleapis.com/auth/drive",
    callback: (r) => {
      if (r.error) {
        res && res.rej(authError(r.error));
        return;
      }
      token = r.access_token;
      exp = Date.now() + (r.expires_in - 60) * 1000;
      localStorage.setItem(okKey, "1");
      res && res.ok(token);
    },
    error_callback: (e) => res && res.rej(authError(e.type || "error")),
  });
}
// Explains a failed Google sign-in. A Google project in test mode blocks accounts that are not listed as test
// users ("Zugriff blockiert") – the app only sees the closed window then, so this case is explained as well.
function explainAuthFailure(e) {
  const area = areaLabel(),
    otherArea = activeArea === "family" ? "home" : "family",
    otherLabel = otherArea === "family" ? "NAR Family" : "NAR Home";
  setSt("Google-Anmeldung nicht abgeschlossen – tippen zum Verbinden", "err");
  if (e.reason === "popup_failed_to_open") {
    showAlert(
      "Anmeldefenster blockiert",
      "Das Google-Anmeldefenster konnte nicht geöffnet werden. Bitte erlaube Pop-ups für diese Seite und tippe erneut auf „Verbinden“.",
    );
    return;
  }
  showChoiceDialog({
    title: e.reason === "access_denied" ? "Zugriff nicht erlaubt" : "Google-Anmeldung nicht abgeschlossen",
    description:
      e.reason === "access_denied"
        ? "Ohne Zugriff auf Google Drive kann " +
          area +
          " nicht synchronisieren. Melde dich erneut an und erlaube den Zugriff."
        : "Hat Google „Zugriff blockiert“ (Fehler 403: access_denied) angezeigt, ist dieses Google-Konto für " +
          area +
          " nicht freigeschaltet. Bitte den Hauptnutzer, dich im Google-Projekt von " +
          area +
          " als Testnutzer einzutragen. Hast du das Fenster nur geschlossen, melde dich einfach erneut an.",
    kicker: area,
    danger: false,
    choices: [
      { value: "retry", label: "Erneut anmelden" },
      { value: "switch", label: "Zu " + otherLabel + " wechseln" },
    ],
  }).then((choice) => {
    if (choice === "retry") connect();
    else if (choice === "switch") selectArea(otherArea);
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
    // Without an earlier sign-in (first start, after "Abmelden" or "Neu verbinden") Google asks for the account.
    tc.requestAccessToken({ prompt: localStorage.getItem(areaStorageKey("ok")) ? "" : "select_account consent" });
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
      recordDeveloperLog("error", "drive", "Google-Authentifizierung fehlgeschlagen.");
      if (e.message === "AUTH_FAILED") explainAuthFailure(e);
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
    recordDeveloperLog("error", "drive", "Google-Authentifizierung fehlgeschlagen.");
    if (e.message === "AUTH_FAILED") explainAuthFailure(e);
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
  let r;
  try {
    r = await fetch(url, { ...opt, headers: { ...(opt.headers || {}), Authorization: "Bearer " + t } });
  } catch (e) {
    recordDeveloperLog("error", "network", "Google-Drive-Netzwerkverbindung fehlgeschlagen.");
    throw e;
  }
  if (r.status === 401) {
    token = null;
    exp = 0;
    throw new Error("NEEDS_AUTH");
  }
  if (!r.ok) {
    recordDeveloperLog("error", "drive", "Google-Drive-API-Fehler · HTTP " + r.status);
    let detail = "";
    try {
      const payload = await r.clone().json();
      detail = payload?.error?.message || payload?.error?.errors?.[0]?.reason || "";
    } catch (_) {
      try {
        detail = (await r.clone().text()).slice(0, 500);
      } catch (_) {}
    }
    throw new Error("Drive " + r.status + (detail ? ": " + detail : ""));
  }
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
// Owner = the account that owns the area's root folder (detected automatically); everyone else is a partner.
let isOwner = false,
  folderOwner = "";
const folderChoiceKey = () => areaStorageKey("folder");
async function ensureFolder() {
  const folderName = areaFolderName(),
    fq = "name='" + qEsc(folderName) + "' and mimeType='application/vnd.google-apps.folder' and trashed=false";
  const fl = await (
    await api(
      D +
        "?q=" +
        encodeURIComponent(fq) +
        "&pageSize=50&fields=files(id,ownedByMe,createdTime,owners(displayName,emailAddress))",
    )
  ).json();
  const folders = fl.files || [];
  let f = folders.length === 1 ? folders[0] : null;
  if (folders.length > 1) {
    if (activeArea === "family") throw new Error("MULTIPLEFOLDERS");
    // Several candidates (e.g. an own folder plus the shared household): ask once and remember the answer.
    f = folders.find((x) => x.id === localStorage.getItem(folderChoiceKey())) || (await chooseHouseholdFolder(folders));
    if (!f) throw new Error("CANCELLED");
    localStorage.setItem(folderChoiceKey(), f.id);
  }
  if (!f) {
    // Only the main user ever creates the household; partners wait for the invitation instead.
    if (activeArea === "family" || !(await confirmCreateHousehold())) throw new Error("NOFOLDER");
    const r = await api(D, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: folderName, mimeType: "application/vnd.google-apps.folder" }),
    });
    f = { id: (await r.json()).id, ownedByMe: true, owners: [] };
  }
  folderId = f.id;
  isOwner = !!f.ownedByMe;
  folderOwner = isOwner ? "" : (f.owners && f.owners[0] && (f.owners[0].emailAddress || f.owners[0].displayName)) || "";
  fileId = await find("daten.json", folderId);
}
async function confirmCreateHousehold() {
  const choice = await showChoiceDialog({
    title: "Noch kein Haushalt gefunden",
    description:
      "Für " +
      (who || "dieses Google-Konto") +
      " ist kein Ordner „" +
      areaFolderName() +
      "“ sichtbar. Als Partner bitte den Hauptnutzer, dich in NAR Home unter „Google Drive → Partner“ einzuladen – und hier nichts anlegen, sonst entsteht ein getrennter Haushalt.",
    kicker: "Einrichtung",
    danger: false,
    choices: [
      { value: "wait", label: "Ich bin Partner – auf Einladung warten" },
      { value: "create", label: "Ich bin Hauptnutzer – neuen Haushalt anlegen" },
    ],
  });
  if (choice !== "create") return false;
  return showConfirm(
    "Neuen Haushalt anlegen?",
    "In deinem Google Drive wird der Ordner „" + areaFolderName() + "“ angelegt. Danach kannst du Partner einladen.",
    "Anlegen",
  );
}
async function chooseHouseholdFolder(folders) {
  const label = (x) =>
    (x.ownedByMe
      ? "Mein Ordner"
      : "Von " +
        ((x.owners && x.owners[0] && (x.owners[0].displayName || x.owners[0].emailAddress)) || "anderem Konto")) +
    (x.createdTime ? " · angelegt " + fmtD(x.createdTime.slice(0, 10)) : "");
  const id = await showChoiceDialog({
    title: "Welchen Haushalt verwenden?",
    description:
      "Für dieses Konto gibt es mehrere Ordner „" +
      areaFolderName() +
      "“. Wähle den gemeinsamen Haushalt – die Auswahl wird auf diesem Gerät gespeichert.",
    kicker: "Einrichtung",
    danger: false,
    choices: folders.map((x) => ({ value: x.id, label: label(x) })),
  });
  return folders.find((x) => x.id === id) || null;
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
      '</h3></div><div class="settings-dialog-body"><label for="dn-date">Datum des Dokuments</label><input id="dn-date" type="date"><label for="dn-type">Dokumentart (optional)</label><input id="dn-type" type="text" list="dn-types" placeholder="' +
      esc(types.length ? "z. B. " + types.slice(0, 3).join(", ") : "z. B. Rechnung, Vertrag, Schreiben") +
      '"><datalist id="dn-types">' +
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
  const boundary = "narhome_" + Date.now() + "_" + Math.random().toString(16).slice(2);
  const meta = id ? { name } : { name, parents: [parent] };
  const fileBlob = blob instanceof Blob ? blob : new Blob([blob], { type: "application/octet-stream" });
  const body = new Blob(
    [
      "--" + boundary + "\r\n",
      "Content-Type: application/json; charset=UTF-8\r\n\r\n",
      JSON.stringify(meta),
      "\r\n--" + boundary + "\r\n",
      "Content-Type: " + (fileBlob.type || "application/octet-stream") + "\r\n\r\n",
      fileBlob,
      "\r\n--" + boundary + "--",
    ],
    { type: "multipart/related; boundary=" + boundary },
  );
  return api(
    "https://www.googleapis.com/upload/drive/v3/files" +
      (id ? "/" + encodeURIComponent(id) : "") +
      "?uploadType=multipart&fields=id,name,mimeType,webViewLink",
    {
      method: id ? "PATCH" : "POST",
      headers: { "Content-Type": "multipart/related; boundary=" + boundary },
      body,
    },
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
const syncBase = () => JSON.parse(localStorage.getItem(areaStorageKey("synced")) || "null");
function rememberSyncBase() {
  localStorage.setItem(
    areaStorageKey("synced"),
    JSON.stringify(Object.fromEntries(data.entries.map((e) => [e.id, e.upd || 0]))),
  );
}
// Conflicts from older versions have no stored versions and cannot be compared, so they are dropped.
const loadConflicts = () =>
  JSON.parse(localStorage.getItem(areaStorageKey("conflicts")) || "[]").filter((c) => c.local && c.remote);
const storeConflicts = (list) => localStorage.setItem(areaStorageKey("conflicts"), JSON.stringify(list));
function merge(a, b) {
  const del = new Set([...(a.del || []), ...(b.del || [])]),
    purgedTrash = new Set([...(a.purgedTrash || []), ...(b.purgedTrash || [])]),
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
  return {
    ...a,
    ...b,
    entries: [...m.values()],
    del: [...del],
    events: mergedEvents,
    financeTransactions: mergeSimple(a.financeTransactions || [], b.financeTransactions || []),
    shoppingItems: mergeSimple(a.shoppingItems || [], b.shoppingItems || []),
    deletedEvents,
    settings: mergeSettings(sa, sb),
    purgedTrash: [...purgedTrash],
    trash: mergeTrash(a.trash, b.trash).filter((t) => !purgedTrash.has(trashKey(t))),
  };
}
// Settings are synced as a whole: the most recently changed version wins (ties keep the remote version).
// The overview layouts belong to single Google accounts and are merged per account instead.
function mergeSettings(sa, sb) {
  const s = (sb.upd || 0) > (sa.upd || 0) ? sb : sa,
    la = sa.layouts || {},
    lb = sb.layouts || {},
    accounts = [...new Set([...Object.keys(la), ...Object.keys(lb)])];
  if (!accounts.length) return s;
  return {
    ...s,
    layouts: Object.fromEntries(
      accounts.map((k) => [k, ((lb[k] || {}).upd || 0) > ((la[k] || {}).upd || 0) ? lb[k] : la[k] || lb[k]]),
    ),
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
    rFinance = new Map((remote.financeTransactions || []).map((t) => [t.id, t.updatedAt || 0])),
    rShopping = new Map((remote.shoppingItems || []).map((t) => [t.id, t.updatedAt || 0])),
    rDel = new Set(remote.del || []),
    rDelEv = new Set(remote.deletedEvents || []);
  return (
    local.entries.some((e) => !rEntries.has(e.id) || rEntries.get(e.id) < (e.upd || 0)) ||
    (local.events || []).some((e) => !rEvents.has(e.id) || rEvents.get(e.id) < (e.updatedAt || 0)) ||
    (local.financeTransactions || []).some((t) => !rFinance.has(t.id) || rFinance.get(t.id) < (t.updatedAt || 0)) ||
    (local.shoppingItems || []).some((t) => !rShopping.has(t.id) || rShopping.get(t.id) < (t.updatedAt || 0)) ||
    (local.del || []).some((id) => !rDel.has(id)) ||
    (local.deletedEvents || []).some((id) => !rDelEv.has(id)) ||
    (local.purgedTrash || []).some((key) => !(remote.purgedTrash || []).includes(key)) ||
    (local.settings?.upd || 0) > (remote.settings?.upd || 0) ||
    Object.entries(local.settings?.layouts || {}).some(
      ([k, l]) => ((l || {}).upd || 0) > ((remote.settings?.layouts || {})[k]?.upd || 0),
    ) ||
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
    localStorage.setItem(areaStorageKey("data"), JSON.stringify(data));
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
    recordDeveloperLog("error", "sync", "Synchronisation fehlgeschlagen.");
    if (e.message === "NEEDS_AUTH") markAuthExpired();
    else setSt("Synchronisierung fehlgeschlagen: " + (e.message || "Unbekannter Fehler"), "err");
  } finally {
    syncing = false;
  }
  if (push) {
    clearTimeout(timer);
    timer = setTimeout(save, 300);
  }
}
// `quiet`: part of a larger operation with its own loading window (e.g. the area switch).
async function connect({ quiet = false } = {}) {
  const run = async () => {
    try {
      setSt("Verbinde mit Google Drive …", "busy");
      await getToken();
      const u = (await (await api("https://www.googleapis.com/drive/v3/about?fields=user")).json()).user;
      who = u.emailAddress || u.displayName || "Google-Konto";
      // The overview layout belongs to this account (see currentLayout).
      if (u.emailAddress) localStorage.setItem(areaStorageKey("account"), u.emailAddress.toLowerCase());
      await ensureFolder();
      // Remembered per area: devices that only ever used one area skip the area picker at start.
      localStorage.setItem(areaStorageKey("connected"), "1");
      authExpired = false;
      if (await save()) adoptDeviceLayout();
      render();
    } catch (e) {
      recordDeveloperLog("error", "drive", "Google-Drive-Verbindung fehlgeschlagen.");
      if (e.message === "AUTH_FAILED") explainAuthFailure(e);
      else if (e.message === "NOFOLDER") {
        folderId = null;
        setSt("Warte auf Einladung zum " + (activeArea === "family" ? "Familienordner" : "Haushalt"), "err");
        showAlert(
          "Noch keine Einladung",
          activeArea === "family"
            ? "Der Ordner „Familienverwaltung“ ist für dieses Google-Konto nicht erreichbar. Bitte prüfe die Drive-Freigabe."
            : "Sobald der Hauptnutzer dich in NAR Home unter „Google Drive → Partner“ eingeladen hat, tippe erneut auf „Verbinden“ – der gemeinsame Haushalt wird dann automatisch gefunden.",
        );
      } else if (e.message === "CANCELLED") {
        folderId = null;
        setSt("Nicht verbunden – kein Haushalt ausgewählt");
      } else if (e.message === "MULTIPLEFOLDERS") {
        setSt("Mehrere Familienordner gefunden", "err");
        showAlert(
          "Familienordner nicht eindeutig",
          "Es sind mehrere zugängliche Ordner mit dem Namen „Familienverwaltung“ vorhanden. Zum Schutz der Daten wurde keine Ablage ausgewählt.",
        );
      } else if (e.message === "NEEDS_AUTH" && folderId) markAuthExpired();
      else setSt("Nicht verbunden", "err");
      render();
    }
  };
  return quiet
    ? run()
    : withLoading(
        {
          title: "Verbinde Google Drive",
          description: "Anmeldung und Datenordner werden geprüft.",
          iconName: "cloud",
        },
        run,
      );
}
async function save({ manual = false } = {}) {
  const operation = async () => {
    if (!folderId) {
      setSt("Nicht verbunden – Änderungen nur auf diesem Gerät gespeichert");
      return false;
    }
    if (syncing) {
      clearTimeout(timer);
      timer = setTimeout(() => save({ manual }), 500);
      return false;
    }
    syncing = true;
    const seq = changeSeq;
    try {
      const push = await pullRemote();
      if (push || !fileId) {
        const r = await up("daten.json", new Blob([JSON.stringify(data)], { type: "application/json" }), fileId);
        fileId = (await r.json()).id;
      }
      rememberSyncBase();
      // Everything changed before this sync started is now in Drive.
      if (seq === changeSeq) localStorage.removeItem(areaStorageKey("unsynced"));
      setSt("Synchronisiert · " + who, "ok");
      return true;
    } catch (e) {
      recordDeveloperLog("error", "sync", "Synchronisation fehlgeschlagen.");
      if (e.message === "NEEDS_AUTH") markAuthExpired();
      else setSt("Synchronisierung fehlgeschlagen: " + (e.message || "Unbekannter Fehler"), "err");
      return false;
    } finally {
      syncing = false;
    }
  };
  if (!manual) return operation();
  return withLoading(
    {
      title: "Synchronisiere Daten",
      description: "Änderungen werden mit Google Drive abgeglichen.",
      iconName: "replace",
    },
    operation,
  );
}
function updateAreaBrand() {
  const label = areaLabel();
  $("#appAreaName").textContent = label.replace("NAR ", "");
  $("#appAreaTagline").textContent =
    activeArea === "family" ? "YOUR FAMILY. UNDER CONTROL." : "YOUR HOME. UNDER CONTROL.";
  document.title = label;
}
function openAreaPicker(canCancel = true) {
  $("#areaCancel").classList.toggle("hide", !canCancel);
  $("#areaPicker").classList.remove("hide");
}
// Switches between NAR Home and NAR Family. A loading window matching the change shows each step and stays
// visible for a moment even when nothing has to be synchronised, so the change of the data area is noticeable.
async function selectArea(nextArea) {
  if (!["home", "family"].includes(nextArea)) return;
  if (nextArea === activeArea) {
    $("#areaPicker").classList.add("hide");
    render();
    return;
  }
  if (activeLoaders.size) {
    showToast("Bitte warte, bis der aktuelle Vorgang abgeschlossen ist.");
    return;
  }
  const fromLabel = areaLabel(),
    toLabel = nextArea === "family" ? "NAR Family" : "NAR Home",
    // Chosen in the area picker at start (nothing to switch from yet).
    opening = !$("#areaPicker").classList.contains("hide") && $("#areaCancel").classList.contains("hide");
  // The area picker lies above the loading window.
  $("#areaPicker").classList.add("hide");
  await withLoading(
    {
      title: (opening ? "Öffne " : "Wechsle zu ") + toLabel,
      description: "Einen Moment bitte …",
      iconName: nextArea === "family" ? "area-family" : "area-home",
      instant: true,
      minMs: 800,
    },
    async (step) => {
      clearTimeout(timer);
      commitPendingDeletes();
      clearTimeout(timer);
      if (folderId) {
        step("Änderungen in " + fromLabel + " werden gesichert …");
        // A running background sync is finished first instead of failing the switch.
        for (let i = 0; syncing && i < 60; i++) await new Promise((r) => setTimeout(r, 150));
        if (!(await save())) {
          showAlert(
            "Bereich nicht gewechselt",
            "Die aktuellen Änderungen konnten nicht bestätigt synchronisiert werden. Bitte prüfe die Verbindung und versuche es erneut.",
          );
          return;
        }
      }
      step(toLabel + " wird geladen …");
      // Remember this area's Google session; the other area uses its own client and therefore its own sign-in.
      const previousClient = cid();
      areaAuth[activeArea] = { token, exp, tc };
      localStorage.setItem("hv_active_area", nextArea);
      activeArea = nextArea;
      const auth =
        areaAuth[nextArea] || (cid() === previousClient ? areaAuth[nextArea === "home" ? "family" : "home"] : {});
      token = auth.token || null;
      exp = auth.exp || 0;
      tc = auth.tc || null;
      tokenPromise = null;
      res = null;
      data = JSON.parse(localStorage.getItem(areaStorageKey("data")) || "null") || { entries: [] };
      normalizeData();
      applySettings();
      folderId = null;
      fileId = null;
      who = "";
      isOwner = false;
      folderOwner = "";
      authExpired = false;
      tab = "home";
      settingsOpen = [];
      updateAreaBrand();
      applyTheme();
      replaceHist({ tab: "home" });
      render();
      setSt("Nicht mit Google Drive verbunden – tippen zum Verbinden");
      if (tokenValid()) {
        step("Verbindung mit Google Drive wird hergestellt …");
        await connect({ quiet: true });
      }
    },
  );
}
function dirty() {
  localStorage.setItem(areaStorageKey("data"), JSON.stringify(data));
  markUnsynced();
  render();
  clearTimeout(timer);
  if (folderId) setSt("Änderungen werden synchronisiert …", "busy");
  else setSt("Nicht verbunden – Änderungen nur auf diesem Gerät gespeichert");
  timer = setTimeout(save, 800);
  checkReminders();
}

/* ---- Konto: Abmelden und Verlassen ---- */
// Once connected, the device stays linked to the area's Google account (also after a restart) until "Abmelden".
const isLinked = () =>
  !!(
    folderId ||
    layoutAccount() ||
    localStorage.getItem(areaStorageKey("connected")) ||
    localStorage.getItem(areaStorageKey("ok"))
  );
const hasUnsynced = () => !!localStorage.getItem(areaStorageKey("unsynced"));
// Short sync status for the exit and logout dialogs: [kind, text].
function syncSummary() {
  if (!isLinked()) return ["off", "Gespeichert auf diesem Gerät"];
  if (!hasUnsynced()) return ["ok", "Alle Änderungen sind in Google Drive gesichert"];
  if (folderId && tokenValid()) return ["busy", "Letzte Änderungen werden noch gesichert"];
  return ["warn", "Einige Änderungen sind noch nicht in Google Drive"];
}
// Final sync (waits for a running background sync first). Returns whether Drive is up to date.
async function syncNow() {
  for (let i = 0; syncing && i < 60; i++) await new Promise((r) => setTimeout(r, 150));
  if (syncing) return false;
  clearTimeout(timer);
  return save({ manual: true });
}
// "Verlassen": pending deletions become final and open changes are saved first (for at most a few seconds).
async function exitApp() {
  commitPendingDeletes();
  if (folderId && tokenValid() && hasUnsynced())
    await Promise.race([syncNow(), new Promise((r) => setTimeout(r, 5000))]);
  leaveApp();
}
async function logout() {
  const area = areaLabel(),
    account = who || layoutAccount();
  const ok = await showActionDialog({
    visual: "logout",
    danger: true,
    title: "Von " + area + " abmelden?",
    text:
      (account || "Dein Google-Konto") +
      " wird auf diesem Gerät abgemeldet. Die Daten von " +
      area +
      " werden dabei von diesem Gerät entfernt – in Google Drive bleiben sie vollständig erhalten und werden beim nächsten Anmelden wieder geladen.",
    status: syncSummary(),
    confirmText: "Abmelden",
  });
  if (ok !== "ok") return;
  commitPendingDeletes();
  let safe = !hasUnsynced();
  if (!safe && folderId && tokenValid()) safe = await syncNow();
  if (!safe) {
    const force = await showActionDialog({
      visual: "alert",
      danger: true,
      title: "Änderungen noch nicht gesichert",
      text: "Einige Änderungen sind noch nicht in Google Drive gespeichert und gehen beim Abmelden verloren. Tippe auf „Abbrechen“ und dann auf die Statusampel, um dich zu verbinden und sie zu sichern.",
      confirmText: "Trotzdem abmelden",
    });
    if (force !== "ok") return;
  }
  signOutArea();
  recordDeveloperLog("info", "drive", area + " abgemeldet.");
  showToast("Von " + area + " abgemeldet");
}
// Forgets the Google sign-in of the active area on this device and removes its local data (Drive keeps all).
// Device settings (theme, own client ID, folded sections) stay. The next sign-in asks for the account again.
function signOutArea() {
  clearTimeout(timer);
  areaAuth[activeArea] = {};
  token = null;
  exp = 0;
  tc = null;
  tokenPromise = null;
  res = null;
  folderId = null;
  fileId = null;
  who = "";
  isOwner = false;
  folderOwner = "";
  authExpired = false;
  [
    "data",
    "synced",
    "conflicts",
    "reminders",
    "unsynced",
    "account",
    "connected",
    "ok",
    "folder",
    "layout",
    "last_backup",
  ].forEach((k) => localStorage.removeItem(areaStorageKey(k)));
  data = { entries: [] };
  normalizeData();
  applySettings();
  filter = "Alle";
  settingsOpen = [];
  tab = "home";
  replaceHist({ tab: "home" });
  render();
  setSt("Abgemeldet – tippen zum Anmelden");
}
// Account card at the top of the settings: who is signed in, role and the buttons to connect or log out.
function accountCardHtml() {
  if (!isLinked())
    return (
      '<div class="account-card"><span class="account-avatar is-off">' +
      icon("cloud") +
      '</span><div class="account-meta"><b>Nicht angemeldet</b><small>Daten nur auf diesem Gerät · ' +
      esc(areaLabel()) +
      '</small></div><div class="account-actions"><button type="button" class="btn s" data-account-connect="1">Anmelden</button></div></div>'
    );
  const account = who || layoutAccount(),
    state = folderId ? (isOwner ? "Hauptnutzer" : "Partner") : authExpired ? "Anmeldung abgelaufen" : "Nicht verbunden";
  return (
    '<div class="account-card"><span class="account-avatar" aria-hidden="true">' +
    esc((account || "G").charAt(0).toUpperCase()) +
    '</span><div class="account-meta"><b>' +
    esc(account || "Google-Konto") +
    "</b><small>" +
    esc(state + " · " + areaLabel()) +
    '</small></div><div class="account-actions">' +
    (folderId ? "" : '<button type="button" class="btn s" data-account-connect="1">Verbinden</button>') +
    '<button type="button" class="btn s account-logout" data-logout="1">' +
    icon("logout") +
    "Abmelden</button></div></div>"
  );
}

/* ---- Erinnerungen (laufen, solange die App geöffnet ist) ---- */
const REMINDER_DEFAULT_TIME = "09:00";
const loadReminders = () => JSON.parse(localStorage.getItem(areaStorageKey("reminders")) || "[]");
const storeReminders = (list) => localStorage.setItem(areaStorageKey("reminders"), JSON.stringify(list.slice(-100)));
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
    new Notification(areaLabel() + " · " + r.title, { body: r.body, tag: activeArea + ":" + r.key });
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
          '" aria-label="Erinnerung ausblenden" title="Ausblenden">' +
          icon("x") +
          "</button></div>",
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
          title:
            (isRentCost(c) ? "Miete gestiegen: " : "Preis gestiegen: ") + e.title + (c.label ? " – " + c.label : ""),
          text:
            pctTxt(ch.pct) +
            (ch.since ? " seit " + fmtD(ch.since) : "") +
            ", jetzt " +
            fmt(ch.to) +
            " pro Monat." +
            (isRentCost(c)
              ? " Prüfe die Erhöhung, z. B. anhand von Mietvertrag, Mietspiegel oder Nebenkostenabrechnung."
              : " Ein Vergleich lohnt sich."),
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
    (e.fav ? icon("star", "inline-ic fav-ic") : "") +
    esc(e.title) +
    "</b><small>" +
    esc(e.objType || categoryName(e.cat)) +
    (e.owner ? " · " + esc(e.owner) : "") +
    (first ? " · " + esc(first) : "") +
    (k ? " · " + k + icon("paperclip", "inline-ic") : "") +
    "</small>" +
    fr +
    '</div><div class="pr">' +
    pr +
    "</div></button>"
  );
}
// Collapsible home sections; the open/closed state is remembered on this device.
const homeFolds = () => JSON.parse(localStorage.getItem(areaStorageKey("home_folds")) || "{}");
function homeFold(key, title, count, content, first = false) {
  const open = homeFolds()[key] !== false;
  return (
    '<details class="home-fold' +
    (first ? " first" : "") +
    '" data-fold="' +
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
/* ---- Übersicht & „Mehr“ anpassen ---- */
// Areas that can be a tile in the overview or a row under "Mehr" ("Einstellungen" always stays under "Mehr").
const HOME_VIEWS = {
  docs: { i: "file", name: "Dokumente", desc: "Alle Dateien durchsuchen und öffnen" },
  stats: { i: "chart", name: "Statistik", desc: "Kosten, Fristen und Spar-Hinweise" },
  properties: { i: "building", name: "Immobilien", desc: "Eigene Immobilien, Nutzung und Vermietung" },
  finances: { i: "euro", name: "Finanzen", desc: "Einnahmen, Ausgaben und Fixkosten" },
  shopping: { i: "list", name: "Einkaufsliste", desc: "Gemeinsam planen und Standardartikel hinzufügen" },
  emergency: { i: "lifebuoy", name: "Notfallmappe", desc: "Alle wichtigen Daten als PDF" },
};
// Blocks of the overview in their default order: [name, description]. Notes and reminders always stay on top.
const HOME_BLOCKS = {
  attention: ["Handlungsbedarf", "Fristen der nächsten 30 Tage"],
  summary: ["Fixkosten", "Monatliche Fixkosten und Kennzahlen"],
  fav: ["Wichtig", "Als wichtig markierte Einträge"],
  recent: ["Zuletzt hinzugefügt", "Die neuesten Einträge"],
  upcoming: ["Nächste Termine", "Die nächsten Kalendertermine"],
  tiles: ["Kacheln", "Kategorien und Bereiche aus „Kacheln & Mehr“"],
};
const defaultLayout = () => ({
  tiles: mainCats().map((c) => "cat:" + c),
  more: Object.keys(HOME_VIEWS).map((v) => "view:" + v),
  blocks: Object.keys(HOME_BLOCKS),
  hidden: [],
});
// The layout belongs to the Google account last connected in this area (synced in settings.layouts, so
// partners keep their own); a device that was never connected keeps it locally.
const layoutAccount = () => localStorage.getItem(areaStorageKey("account")) || "";
function storedLayout() {
  const own = layoutAccount() && (data.settings.layouts || {})[layoutAccount()];
  if (own) return own;
  try {
    return JSON.parse(localStorage.getItem(areaStorageKey("layout")) || "null");
  } catch (e) {
    return null;
  }
}
// The saved layout completed with the current categories: new categories join the tiles, new areas "Mehr".
function currentLayout() {
  const saved = storedLayout() || {},
    def = defaultLayout(),
    known = new Set([...def.tiles, ...def.more]),
    tiles = [...new Set(saved.tiles || def.tiles)].filter((k) => known.has(k)),
    more = [...new Set(saved.more || def.more)].filter((k) => known.has(k) && !tiles.includes(k)),
    blocks = [...new Set(saved.blocks || [])].filter((b) => HOME_BLOCKS[b]);
  def.tiles.forEach((k) => !tiles.includes(k) && !more.includes(k) && tiles.push(k));
  def.more.forEach((k) => !tiles.includes(k) && !more.includes(k) && more.push(k));
  def.blocks.forEach((b) => !blocks.includes(b) && blocks.push(b));
  return { tiles, more, blocks, hidden: (saved.hidden || []).filter((b) => HOME_BLOCKS[b]) };
}
function saveLayout(L) {
  const value = { tiles: L.tiles, more: L.more, blocks: L.blocks, hidden: L.hidden, upd: Date.now() },
    acc = layoutAccount();
  if (acc) {
    data.settings.layouts = { ...(data.settings.layouts || {}), [acc]: value };
    saveDataLocal();
  } else localStorage.setItem(areaStorageKey("layout"), JSON.stringify(value));
  render();
}
// A layout arranged before the first connection becomes the account's layout, unless the account already has one.
function adoptDeviceLayout() {
  const acc = layoutAccount(),
    local = localStorage.getItem(areaStorageKey("layout"));
  if (!acc || !local) return;
  localStorage.removeItem(areaStorageKey("layout"));
  if ((data.settings.layouts || {})[acc]) return;
  try {
    data.settings.layouts = { ...(data.settings.layouts || {}), [acc]: { ...JSON.parse(local), upd: Date.now() } };
    saveDataLocal();
  } catch (e) {}
}
const layoutScopeText = () =>
  layoutAccount()
    ? "Gilt für dein Google-Konto " + layoutAccount() + " auf all deinen Geräten. Partner haben ihre eigene Anordnung."
    : "Gilt vorerst nur auf diesem Gerät. Sobald Google Drive verbunden ist, gilt sie für dein Google-Konto auf all deinen Geräten.";
// Categories in the user's order: overview tiles first, then those under "Mehr".
const orderedCats = (L = currentLayout()) =>
  [...L.tiles, ...L.more].filter((k) => k.startsWith("cat:")).map((k) => k.slice(4));
// A category ("cat:…") or area ("view:…") of the layout with its display data.
function layoutItem(key) {
  const p = key.indexOf(":"),
    kind = key.slice(0, p),
    id = key.slice(p + 1);
  if (kind === "cat") {
    if (!T[id]) return null;
    const L = data.entries.filter((e) => e.cat === id),
      s = sum(L),
      d = nDocs(L);
    return {
      key,
      kind,
      id,
      i: T[id].i,
      name: categoryName(id),
      lines: [
        L.length + (L.length === 1 ? " Eintrag" : " Einträge") + (d ? " · " + d + " Dok." : ""),
        s ? fmt0(s) + " pro Monat" : "",
      ],
    };
  }
  const v = HOME_VIEWS[id];
  return v ? { key, kind, id, i: v.i, name: v.name, lines: [v.desc] } : null;
}
// Short live information on the tiles of the areas.
function viewTileLines(id) {
  if (id === "docs") {
    const n = nDocs(data.entries);
    return [n + (n === 1 ? " Dokument" : " Dokumente")];
  }
  if (id === "properties") {
    const P = data.entries.filter((e) => e.cat === "Immobilien"),
      let_ = P.filter((e) => propertyUsage(e) === "Vermietet").length;
    return [P.length + (P.length === 1 ? " Objekt" : " Objekte"), let_ ? let_ + " vermietet" : ""];
  }
  if (id === "finances") {
    const month = dateKey(new Date()).slice(0, 7),
      L = [
        ...data.financeTransactions.filter(
          (t) => !t.deletedAt && !t.skipped && !t.propertyId && (t.date || "").slice(0, 7) === month,
        ),
        ...autoBookings(householdEntries(), month),
      ],
      saldo = Math.round(L.reduce((s, t) => s + (t.type === "income" ? 1 : -1) * (+t.amount || 0), 0));
    return ["Saldo " + new Date().toLocaleDateString("de-DE", { month: "long" }), fmt0(saldo || 0)];
  }
  if (id === "shopping") {
    const n = shoppingVisible().filter((x) => !x.done).length;
    return [n ? n + " Artikel offen" : "Liste ist leer"];
  }
  if (id === "stats") return ["Kosten & Fristen"];
  if (id === "emergency") return ["Alle Daten als PDF"];
  return [];
}
function homeTileHtml(it) {
  const lines = it.kind === "cat" ? it.lines : viewTileLines(it.id);
  return (
    '<button class="tile" ' +
    (it.kind === "cat"
      ? 'data-go="' + esc(it.id) + '" style="--c:' + esc(T[it.id].c) + '"'
      : 'data-view="' + esc(it.id) + '"') +
    '><span class="ic">' +
    icon(it.i) +
    "</span><b>" +
    esc(it.name) +
    "</b><small>" +
    lines.filter(Boolean).map(esc).join("<br>") +
    "</small></button>"
  );
}
function homeTiles(keys, first) {
  const items = keys.map(layoutItem).filter(Boolean),
    cats = items.filter((it) => it.kind === "cat").length;
  if (!items.length) return "";
  return (
    '<div class="home-head"' +
    (first ? ' style="margin-top:8px"' : "") +
    "><h2>" +
    esc(cats === items.length ? "Kategorien" : cats ? "Kategorien & Bereiche" : "Bereiche") +
    '</h2><button type="button" class="btn s" data-customize-home="1">Anpassen</button></div><div class="grid">' +
    items.map(homeTileHtml).join("") +
    "</div>"
  );
}
function openView(id) {
  if (id === "emergency") printEmergency();
  else navigateTo(id);
}
function renderHome() {
  const E = data.entries,
    mo = sum(householdEntries()),
    rentalsApart = data.entries.some((e) => isInvestmentProperty(e) && mo1(e) > 0);
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
      '<div class="card note"><b>Nicht mit Drive verbunden</b><p style="margin:6px 0 12px">Aktuell nur auf diesem Gerät gespeichert. Hauptnutzer und eingeladene Partner werden beim Verbinden automatisch erkannt.</p><button class="btn w" data-con="1">Mit Google Drive verbinden</button></div>';
  else if (authExpired)
    h +=
      '<div class="card note"><b>Google-Anmeldung abgelaufen</b><p style="margin:6px 0 12px">Deine Änderungen sind auf diesem Gerät gespeichert und werden nach der Anmeldung synchronisiert.</p><button class="btn w" data-con="1">Erneut anmelden</button></div>';
  h += renderReminders();
  const layout = currentLayout();
  // Every block knows whether it is the first one on the page; the first one sits closer to the top.
  const blocks = {
    attention: (first) =>
      !E.length
        ? ""
        : "<h2" +
          (first ? ' style="margin-top:8px"' : "") +
          ">Handlungsbedarf</h2>" +
          (urgent.length
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
              icon("circle-check") +
              '</span><div class="m"><b>Alles im grünen Bereich</b><small>Keine Frist in den nächsten 30 Tagen.</small></div></div>'),
    summary: (first) =>
      !E.length
        ? ""
        : '<div class="hero" style="margin-top:' +
          (first ? 8 : 20) +
          'px">' +
          (mo > 0
            ? '<small>Fixkosten pro Monat</small><div class="big">' +
              fmt(mo) +
              "</div><div>" +
              fmt(mo * 12) +
              " pro Jahr" +
              (rentalsApart ? " · ohne vermietete Immobilien" : "") +
              "</div>"
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
          "</div></div>",
    fav: (first) =>
      fav.length ? homeFold("fav", "Wichtig", fav.length, fav.slice(0, 5).map(rowHtml).join(""), first) : "",
    recent: (first) =>
      !E.length
        ? ""
        : homeFold(
            "recent",
            "Zuletzt hinzugefügt",
            Math.min(E.length, 4),
            E.slice()
              .sort((a, b) => (b.ts || 0) - (a.ts || 0))
              .slice(0, 4)
              .map(rowHtml)
              .join(""),
            first,
          ),
    upcoming: (first) => renderUpcoming(first),
    tiles: (first) => homeTiles(layout.tiles, first),
  };
  let first = true;
  layout.blocks.forEach((k) => {
    if (layout.hidden.includes(k)) return;
    const html = blocks[k](first);
    if (html) {
      h += html;
      first = false;
    }
  });
  // Without visible tiles the "Anpassen" button of the tile heading is missing, so it is offered at the end.
  if (layout.hidden.includes("tiles") || !layout.tiles.length)
    h +=
      '<p class="home-customize"><button type="button" class="link-btn" data-customize-home="1">Übersicht anpassen</button></p>';
  $("#v-home").innerHTML = h;
}
function renderUpcoming(first = false) {
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
    '<div class="mini-calendar-head" style="margin:' +
    (first ? 8 : 27) +
    'px 0 11px"><h2 style="margin:0">Nächste Termine</h2><button class="btn s" data-open-calendar="1">Kalender öffnen</button></div>' +
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
  const row = (attr, ic, name, sub) =>
    '<button type="button" class="row" ' +
    attr +
    '><span class="ic">' +
    icon(ic) +
    '</span><div class="m"><b>' +
    esc(name) +
    "</b><small>" +
    esc(sub) +
    "</small></div></button>";
  const b = document.createElement("div");
  b.className = "settings-dialog-backdrop";
  b.innerHTML =
    '<div class="settings-dialog" role="dialog" aria-modal="true"><div class="settings-dialog-head"><div class="settings-dialog-kicker">Mehr</div><h3>Weitere Bereiche</h3></div><div class="settings-dialog-body">' +
    currentLayout()
      .more.map(layoutItem)
      .filter(Boolean)
      .map((it) =>
        row(
          (it.kind === "cat" ? "data-more-cat" : "data-more") + '="' + esc(it.id) + '"',
          it.i,
          it.name,
          it.lines.filter(Boolean).join(" · "),
        ),
      )
      .join("") +
    row('data-more="settings"', "settings", "Einstellungen", "Kategorien, Backup, Darstellung und Google Drive") +
    (isLinked()
      ? row(
          'data-more="logout"',
          "logout",
          "Abmelden",
          (who || layoutAccount() || "Google-Konto") + " · " + areaLabel(),
        )
      : "") +
    '</div><div class="settings-dialog-foot"><button type="button" class="dialog-secondary" data-customize-home="1">Anpassen</button><button type="button" class="dialog-secondary" data-cancel>Schließen</button></div></div>';
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
    const m = e.target.closest("[data-more]"),
      c = e.target.closest("[data-more-cat]");
    if (m) close(() => (m.dataset.more === "logout" ? logout() : openView(m.dataset.more)));
    else if (c)
      close(() => {
        filter = c.dataset.moreCat;
        navigateTo("list");
      });
    else if (e.target.closest("[data-customize-home]")) close(openLayoutDialog);
    else if (e.target === b || e.target.closest("[data-cancel]")) close();
  });
  b.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
// Dialog "Übersicht anpassen": tiles vs. "Mehr" (one list, divided by a separator) and the overview blocks.
// Rows can be dragged by their grip or moved with the arrow buttons; nothing is stored before "Speichern".
function openLayoutDialog() {
  document.querySelector(".settings-dialog-backdrop")?.remove();
  const start = currentLayout();
  let seq = [...start.tiles, "|", ...start.more],
    blocks = start.blocks.slice(),
    hidden = new Set(start.hidden),
    pane = "items",
    dragEnd = 0;
  const b = document.createElement("div");
  b.className = "settings-dialog-backdrop";
  b.innerHTML =
    '<div class="settings-dialog layout-dialog" role="dialog" aria-modal="true" aria-labelledby="nar-layout-title"><div class="settings-dialog-head"><div class="settings-dialog-kicker">' +
    esc(areaLabel()) +
    '</div><h3 id="nar-layout-title">Übersicht anpassen</h3><div class="seg seg-2"><button type="button" data-pane="items">Kacheln &amp; Mehr</button><button type="button" data-pane="blocks">Blöcke</button></div></div><div class="settings-dialog-body"></div><div class="settings-dialog-foot"><button type="button" class="dialog-secondary" data-cancel>Abbrechen</button><button type="button" class="dialog-primary" data-save>Speichern</button></div></div>';
  const body = b.querySelector(".settings-dialog-body");
  const grip = '<span class="layout-grip" title="Ziehen zum Verschieben">' + icon("grip") + "</span>";
  const btn = (attr, ic, label, disabled = false) =>
    '<button type="button" class="icon-btn" ' +
    attr +
    ' aria-label="' +
    esc(label) +
    '" title="' +
    esc(label) +
    '"' +
    (disabled ? " disabled" : "") +
    ">" +
    icon(ic) +
    "</button>";
  const arrows = (name, idx, len) =>
    btn('data-move="-1"', "chevron-up", name + " nach oben", idx === 0) +
    btn('data-move="1"', "chevron-down", name + " nach unten", idx === len - 1);
  const itemRow = (k, idx) => {
    const it = layoutItem(k),
      home = idx < seq.indexOf("|");
    return (
      '<li class="layout-row" data-key="' +
      esc(k) +
      '">' +
      grip +
      '<span class="layout-ic">' +
      icon(it.i) +
      '</span><span class="layout-name"><b>' +
      esc(it.name) +
      "</b><small>" +
      (it.kind === "cat" ? "Kategorie" : "Bereich") +
      "</small></span>" +
      arrows(it.name, idx, seq.length) +
      btn(
        'data-swap="1"',
        home ? "more" : "home",
        home ? it.name + " ins Menü „Mehr“ verschieben" : it.name + " in die Übersicht holen",
      ) +
      "</li>"
    );
  };
  const blockRow = (k, idx) => {
    const [name, sub] = HOME_BLOCKS[k],
      off = hidden.has(k);
    return (
      '<li class="layout-row' +
      (off ? " is-off" : "") +
      '" data-key="' +
      k +
      '">' +
      grip +
      '<span class="layout-name"><b>' +
      esc(name) +
      "</b><small>" +
      esc(off ? "Ausgeblendet" : sub) +
      "</small></span>" +
      arrows(name, idx, blocks.length) +
      btn(
        'data-toggle="1" aria-pressed="' + !off + '"',
        off ? "eye-off" : "eye",
        off ? name + " einblenden" : name + " ausblenden",
      ) +
      "</li>"
    );
  };
  const paint = (focus) => {
    b.querySelectorAll("[data-pane]").forEach((x) => {
      x.classList.toggle("on", x.dataset.pane === pane);
      x.setAttribute("aria-pressed", x.dataset.pane === pane);
    });
    const top = body.scrollTop;
    body.innerHTML =
      (pane === "items"
        ? '<p class="layout-hint">Am Griff ziehen oder mit den Pfeilen sortieren. Alles über der Linie erscheint als Kachel in der Übersicht, alles darunter im Menü „Mehr“.</p><div class="layout-group">In der Übersicht</div><ul class="layout-list">' +
          seq
            .map((k, i) => (k === "|" ? '<li class="layout-sep" data-key="|">Im Menü „Mehr“</li>' : itemRow(k, i)))
            .join("") +
          '</ul><div class="layout-row is-fixed"><span class="layout-grip"></span><span class="layout-ic">' +
          icon("settings") +
          '</span><span class="layout-name"><b>Einstellungen</b><small>Bleibt immer im Menü „Mehr“</small></span></div>' +
          (hidden.has("tiles")
            ? '<p class="layout-hint is-warn">Der Block „Kacheln“ ist unter „Blöcke“ ausgeblendet. Die Kacheln erscheinen erst wieder, wenn du ihn einblendest.</p>'
            : "")
        : '<p class="layout-hint">Reihenfolge der Blöcke in der Übersicht. Mit dem Auge blendest du einen Block aus oder wieder ein. Hinweise und Erinnerungen stehen immer ganz oben.</p><ul class="layout-list">' +
          blocks.map(blockRow).join("") +
          "</ul>") +
      '<button type="button" class="btn s layout-reset" data-reset="1">Standard wiederherstellen</button><p class="layout-scope">' +
      esc(layoutScopeText()) +
      "</p>";
    body.scrollTop = top;
    const el = focus && body.querySelector(focus);
    if (el) (el.disabled ? el.closest(".layout-row").querySelector("button:not(:disabled)") : el)?.focus();
  };
  const close = () => {
    b.classList.remove("on");
    if (!document.querySelector(".ov.on,.doc-preview.on")) document.body.classList.remove("modal-lock");
    setTimeout(() => b.remove(), 180);
  };
  b.addEventListener("click", (e) => {
    // A drag that ends outside the dialog must not count as a click on the backdrop.
    if (Date.now() - dragEnd < 400) return;
    const t = e.target.closest("button");
    if (e.target === b || (t && t.hasAttribute("data-cancel"))) return close();
    if (!t) return;
    if (t.dataset.pane) {
      pane = t.dataset.pane;
      body.scrollTop = 0;
      paint();
    } else if (t.dataset.reset) {
      const d = defaultLayout();
      if (pane === "items") seq = [...d.tiles, "|", ...d.more];
      else {
        blocks = d.blocks;
        hidden = new Set();
      }
      paint();
    } else if (t.hasAttribute("data-save")) {
      const s = seq.indexOf("|");
      saveLayout({ tiles: seq.slice(0, s), more: seq.slice(s + 1), blocks, hidden: [...hidden] });
      close();
      showToast("Übersicht gespeichert");
    } else {
      const row = t.closest(".layout-row[data-key]");
      if (!row) return;
      const k = row.dataset.key,
        list = pane === "items" ? seq : blocks,
        i = list.indexOf(k),
        sel = '[data-key="' + CSS.escape(k) + '"] ';
      if (t.dataset.move) {
        const j = i + +t.dataset.move;
        if (j < 0 || j >= list.length) return;
        [list[i], list[j]] = [list[j], list[i]];
        paint(sel + '[data-move="' + t.dataset.move + '"]');
      } else if (t.dataset.swap) {
        const home = i < seq.indexOf("|");
        seq.splice(i, 1);
        const s = seq.indexOf("|");
        seq.splice(home ? s + 1 : s, 0, k);
        paint(sel + "[data-swap]");
      } else if (t.dataset.toggle) {
        if (hidden.has(k)) hidden.delete(k);
        else hidden.add(k);
        paint(sel + "[data-toggle]");
      }
    }
  });
  // Drag & drop: the row follows the finger/mouse live; near the edges the list scrolls along.
  body.addEventListener("pointerdown", (e) => {
    const row = e.target.closest(".layout-grip") && e.target.closest(".layout-row[data-key]");
    if (!row || e.button > 0) return;
    e.preventDefault();
    const list = row.parentElement,
      id = e.pointerId;
    let y = e.clientY,
      raf = 0;
    row.classList.add("dragging");
    list.classList.add("is-sorting");
    const place = () => {
      const next = [...list.children].find((x) => {
        if (x === row) return false;
        const rr = x.getBoundingClientRect();
        return y < rr.top + rr.height / 2;
      });
      if (next ? row.nextElementSibling !== next : list.lastElementChild !== row) list.insertBefore(row, next || null);
    };
    const step = () => {
      const r = body.getBoundingClientRect(),
        edge = 44,
        top = body.scrollTop;
      if (y < r.top + edge) body.scrollTop -= Math.ceil((r.top + edge - y) / 5);
      else if (y > r.bottom - edge) body.scrollTop += Math.ceil((y - r.bottom + edge) / 5);
      if (body.scrollTop !== top) place();
      raf = requestAnimationFrame(step);
    };
    const move = (ev) => {
      if (ev.pointerId !== id) return;
      y = ev.clientY;
      ev.preventDefault();
      place();
    };
    const end = (ev) => {
      if (ev.pointerId !== id) return;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      dragEnd = Date.now();
      const order = [...list.children].map((x) => x.dataset.key);
      if (pane === "items") seq = order;
      else blocks = order;
      paint();
    };
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    raf = requestAnimationFrame(step);
  });
  b.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  document.body.appendChild(b);
  document.body.classList.add("modal-lock");
  paint();
  requestAnimationFrame(() => b.classList.add("on"));
}
const propertyUsage = (e) => e.propertyUsage || (e.rental?.active ? "Vermietet" : "");
function renderPropertyFilter() {
  $("#propertyFilter").classList.toggle("hide", filter !== "Immobilien");
  $("#propertyFilter").innerHTML =
    '<label class="f"><span>Nutzung</span><select id="propertyUsageFilter">' +
    optionsHtml(PROPERTY_USAGE, propertyUsageFilter, "Alle Immobilien") +
    "</select></label>";
}
$("#propertyFilter").onchange = (e) => {
  propertyUsageFilter = e.target.value;
  renderList();
};
function renderList() {
  $("#chips").innerHTML = ["Alle", ...orderedCats()]
    .map(
      (c) =>
        '<button class="chip' +
        (c === filter ? " on" : "") +
        '" data-c="' +
        esc(c) +
        '">' +
        esc(categoryName(c)) +
        "</button>",
    )
    .join("");
  $("#q").placeholder =
    filter === "Fahrzeug"
      ? "Fahrzeuge in der Garage durchsuchen"
      : filter === "Immobilien"
        ? "Immobilien durchsuchen"
        : "Einträge durchsuchen";
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
    (e) =>
      (filter === "Alle" || e.cat === filter) &&
      (!person || e.owner === person) &&
      (filter !== "Immobilien" || !propertyUsageFilter || propertyUsage(e) === propertyUsageFilter) &&
      hay(e).includes(q),
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
  renderPropertyFilter();
  if (kinds.length && l.length && filter !== "Fahrzeug") {
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
      .map((c) => '<option value="' + esc(c) + '">' + esc(categoryName(c)) + "</option>")
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
          esc(categoryName(x.e.cat)) +
          (x.d.subcategory ? " / " + esc(x.d.subcategory) : "") +
          '</small></div><button class="ib" data-dl="' +
          esc(x.d.id) +
          '" data-de="' +
          esc(x.e.id) +
          '" title="Herunterladen" aria-label="' +
          esc(x.d.name) +
          ' herunterladen">' +
          icon("download") +
          "</button></div>"
        );
      })
      .join("") || '<p class="mu">' + (L.length ? "Keine Treffer." : "Noch keine Dokumente.") + "</p>";
}
// Card heading with the button that opens only this section of the entry sheet.
const detailCardHead = (title, section, filled) =>
  '<div class="card-head"><h3>' +
  title +
  '</h3><button type="button" class="card-edit" data-edit-section="' +
  section +
  '">' +
  icon(filled ? "pencil" : "plus") +
  (filled ? "Bearbeiten" : "Hinzufügen") +
  "</button></div>";
const REMINDER_NAMES = {
  "90,30,7": "90, 30 und 7 Tage vorher",
  "30,7": "30 und 7 Tage vorher",
  7: "7 Tage vorher",
  none: "Keine",
};
function contractDetailLines(e) {
  const line = (label, value) =>
      value === "" || value == null
        ? ""
        : '<div class="detail-line"><span>' + label + "</span><b>" + esc(String(value)) + "</b></div>",
    next = nextCancelBy(e),
    renew = e.renewMonths === "" || e.renewMonths == null ? "" : +e.renewMonths;
  return (
    line("Vertragsbeginn", e.contractStart ? fmtD(e.contractStart) : "") +
    line("Laufzeit", e.termMonths ? e.termMonths + " Monate" : "") +
    line("Kündigungsfrist", e.noticeMonths ? e.noticeMonths + " Monate" : "") +
    line(
      next && next !== e.cancelBy ? "Nächster Kündigungstermin" : "Spätester Kündigungstermin",
      next ? fmtD(next) : "",
    ) +
    line(
      "Verlängerung",
      renew === "" ? "" : renew === 0 ? "Vertrag endet" : "um " + renew + (renew === 1 ? " Monat" : " Monate"),
    ) +
    line("Erinnerungen", e.cancelBy ? REMINDER_NAMES[e.reminders || "90,30,7"] || e.reminders : "")
  );
}
function renderObjectDetail() {
  const e = data.entries.find((x) => x.id === detailEntryId);
  if (!e) {
    navigateTo(detailPreviousTab, { push: false });
    return;
  }
  const metadata = Object.entries(e.x || {}).filter(([, value]) => String(value || "").trim());
  const costs = costItems(e).filter((c) => +c.amount > 0);
  const docs = e.docs || [];
  const deadlines = entryDeadlines(e);
  const contract = e.cat === "Vertrag" ? contractDetailLines(e) : "";
  const rental = e.rental && e.rental.active && propertyUsage(e) === "Vermietet" ? e.rental : null;
  $("#v-object").innerHTML =
    '<div class="detail-head"><button type="button" class="btn s" data-detail-back>← Zurück</button></div>' +
    '<div class="detail-title"><span class="ic" style="--c:' +
    esc(tp(e).c) +
    '">' +
    icon(tp(e).i) +
    "</span><div><small>" +
    esc(categoryName(e.cat)) +
    (e.objType ? " · " + esc(e.objType) : "") +
    "</small><h2>" +
    (e.fav ? icon("star", "inline-ic fav-ic") : "") +
    esc(e.title) +
    "</h2>" +
    (e.owner ? '<p class="mu">' + esc(e.owner) + "</p>" : "") +
    "</div></div>" +
    '<div class="card">' +
    detailCardHead("Objektdaten", "grund", true) +
    (e.cat === "Immobilien"
      ? '<div class="detail-line"><span>Nutzung</span><b>' + esc(propertyUsage(e) || "Nicht angegeben") + "</b></div>"
      : "") +
    (metadata.length
      ? metadata
          .map(
            ([label, value]) =>
              '<div class="detail-line"><span>' + esc(label) + "</span><b>" + esc(value) + "</b></div>",
          )
          .join("")
      : '<p class="mu">Keine zusätzlichen Angaben.</p>') +
    (e.note ? '<h4>Notizen</h4><p class="detail-note">' + esc(e.note).replace(/\n/g, "<br>") + "</p>" : "") +
    "</div>" +
    (e.cat === "Vertrag"
      ? '<div class="card">' +
        detailCardHead("Vertrag", "vertrag", !!contract) +
        (contract || '<p class="mu">Keine Vertragsdaten hinterlegt.</p>') +
        "</div>"
      : "") +
    '<div class="card">' +
    detailCardHead("Kosten", "kosten", costs.length > 0) +
    costsDetailHtml(e, costs) +
    "</div>" +
    '<div class="card">' +
    detailCardHead(
      "Fristen",
      "fristen",
      (e.deadlines || []).some((d) => d.date),
    ) +
    (deadlines.length
      ? deadlines
          .map(
            (d) =>
              '<div class="detail-line"><span>' +
              esc(d.label || "Frist") +
              "</span><b>" +
              esc(fmtD(d.date)) +
              "</b></div>",
          )
          .join("")
      : '<p class="mu">Keine Fristen hinterlegt.</p>') +
    "</div>" +
    (e.cat === "Immobilien"
      ? '<div class="card">' +
        detailCardHead("Vermietung", "vermietung", !!rental) +
        (rental
          ? '<div class="detail-line"><span>Mieter/in</span><b>' +
            esc(rental.tenant || "Nicht angegeben") +
            '</b></div><div class="detail-line"><span>Kaltmiete</span><b>' +
            fmt(+rental.monthlyRent || 0) +
            " / Monat</b></div>" +
            (rental.leaseStart
              ? '<div class="detail-line"><span>Mietbeginn</span><b>' + esc(fmtD(rental.leaseStart)) + "</b></div>"
              : "") +
            '<button type="button" class="btn s w" data-detail-rentals>Zur Vermietungsübersicht</button>'
          : '<p class="mu">Nicht vermietet.</p>') +
        "</div>"
      : "") +
    '<div class="card">' +
    detailCardHead('Unterlagen <span class="fold-count">' + docs.length + "</span>", "unterlagen", docs.length > 0) +
    (docs.length
      ? docs
          .map(
            (d, i) =>
              '<button type="button" class="detail-doc" data-detail-doc="' +
              i +
              '">' +
              icon(fileIcon(d.name) === "▤" ? "file-text" : "image") +
              "<span><b>" +
              esc(d.name) +
              "</b><small>" +
              esc(d.subcategory || "Allgemein") +
              "</small></span></button>",
          )
          .join("")
      : '<p class="mu">Noch keine Unterlagen.</p>') +
    "</div>" +
    '<button type="button" class="btn x w detail-delete" data-detail-delete>' +
    icon("trash") +
    "Eintrag löschen</button>";
}
const activeRentals = () =>
  data.entries.filter((e) => e.cat === "Immobilien" && propertyUsage(e) === "Vermietet" && e.rental);
// Cost card of the detail page; "Wohnen" is split into rent (with Warmmiete), utilities and other costs.
function costsDetailHtml(e, costs) {
  if (!costs.length) return '<p class="mu">Keine Kosten hinterlegt.</p>';
  const line = (c) =>
      '<div class="detail-line"><span>' +
      esc(c.label || "Kosten") +
      " · " +
      esc(c.iv || "monatlich") +
      (c.end ? " · " + (costRunning(c) ? "bis " : "beendet ") + esc(fmtD(c.end)) : "") +
      "</span><b>" +
      fmt(+c.amount) +
      "</b></div>",
    total = (label) =>
      '<div class="detail-line detail-total"><span>' + label + "</span><b>" + fmt(mo1(e)) + " / Monat</b></div>";
  if (e.cat !== "Wohnen") return costs.map(line).join("") + total("Regelmäßige Kosten");
  const rent = RENT_ROLES.map((r) => costs.find((c) => c.role === r)).filter(Boolean),
    utilities = costs.filter(isUtilityCost),
    others = costs.filter((c) => !isRentCost(c) && !isUtilityCost(c)),
    group = (title, list, extra = "") =>
      list.length ? '<h4 class="detail-sub">' + title + "</h4>" + list.map(line).join("") + extra : "";
  return (
    group(
      "Miete an den Vermieter",
      rent,
      rent.length > 1
        ? '<div class="detail-line detail-subtotal"><span>Warmmiete</span><b>' +
            fmt(rentTotal(rent)) +
            " / Monat</b></div>"
        : "",
    ) +
    group("Direkt an Versorger", utilities) +
    group("Weitere Kosten", others) +
    total("Wohnkosten gesamt")
  );
}
const propertyEntries = () => data.entries.filter((e) => e.cat === "Immobilien");
let propertyViewFilter = "";
// Section "Immobilien" (under Mehr): owned properties grouped by usage, with access to the rental overview.
function renderProperties() {
  const all = propertyEntries(),
    shown = all.filter((e) => !propertyViewFilter || (propertyUsage(e) || "Ohne Angabe") === propertyViewFilter),
    rentals = activeRentals(),
    rent = rentals.reduce((s, e) => s + (+e.rental.monthlyRent || 0), 0),
    groups = [...PROPERTY_USAGE, "Ohne Angabe"]
      .map((u) => [u, shown.filter((e) => (propertyUsage(e) || "Ohne Angabe") === u)])
      .filter(([, L]) => L.length);
  $("#v-properties").innerHTML =
    '<div class="detail-head"><button type="button" class="btn s" data-prop-back>← Zurück</button><button type="button" class="btn" data-prop-new>＋ Immobilie</button></div>' +
    "<h2>Immobilien</h2>" +
    '<p class="mu">Deine eigenen Immobilien – selbst bewohnt, vermietet oder leerstehend. Die Wohnung, in der ihr zur Miete wohnt, gehört in die Kategorie „Wohnen“.</p>' +
    (all.length
      ? '<div class="facts"><div><b>' +
        all.length +
        "</b><small>" +
        (all.length === 1 ? "Immobilie" : "Immobilien") +
        "</small></div><div><b>" +
        rentals.length +
        "</b><small>vermietet</small></div><div><b>" +
        fmt(rent) +
        "</b><small>Kaltmiete / Monat</small></div><div><b>" +
        fmt(sum(all)) +
        "</b><small>Kosten / Monat</small></div></div>" +
        (rentals.length
          ? '<button type="button" class="btn s w" data-prop-rentals style="margin:4px 0 12px">Vermietung &amp; Mieteingänge</button>'
          : "") +
        '<div class="seg seg-4" role="radiogroup" aria-label="Nach Nutzung filtern">' +
        [["", "Alle"], ...PROPERTY_USAGE.map((u) => [u, u])]
          .map(
            ([v, l]) =>
              '<button type="button" role="radio" aria-checked="' +
              (propertyViewFilter === v) +
              '" class="' +
              (propertyViewFilter === v ? "on" : "") +
              '" data-prop-filter="' +
              esc(v) +
              '">' +
              esc(l) +
              "</button>",
          )
          .join("") +
        "</div>" +
        (groups.length
          ? groups.map(([u, L]) => '<h3 class="list-group">' + esc(u) + "</h3>" + L.map(rowHtml).join("")).join("")
          : '<p class="mu">Keine Immobilien mit dieser Nutzung.</p>')
      : '<div class="card"><b>Noch keine Immobilien</b><p class="mu">Lege deine erste eigene Immobilie an, z. B. eine vermietete Wohnung oder ein Grundstück.</p><button type="button" class="btn w" data-prop-new>Immobilie anlegen</button></div>');
}
function rentalMonthActive(rental, month) {
  const first = month + "-01";
  const last = month + "-31";
  return (!rental.leaseStart || rental.leaseStart <= last) && (!rental.leaseEnd || rental.leaseEnd >= first);
}
// Owned properties that are let or vacant are an investment: their income and costs are kept apart from the
// household (fixed costs, household book, statistics) and shown under "Immobilien → Vermietung" instead.
const isInvestmentProperty = (e) => e.cat === "Immobilien" && ["Vermietet", "Leerstehend"].includes(propertyUsage(e));
const householdEntries = () => data.entries.filter((e) => !isInvestmentProperty(e));
// Bookings of a rental property are finance transactions with a propertyId; the household book never shows them.
const rentalBookings = () => data.financeTransactions.filter((t) => !t.deletedAt && !t.skipped && t.propertyId);
/* ---- Regelmäßige Kosten als automatische Monatsbuchungen ----
   Every cost item with an amount becomes a booking in each month it is due, from its start ("Ab") to its end
   ("Bis"). They are computed, not stored; a stored transaction with the same autoKey replaces (adjusted) or hides
   (skipped) the automatic booking of that one month. */
const IV_MONTHS = { monatlich: 1, vierteljährlich: 3, halbjährlich: 6, jährlich: 12 };
const monthIndex = (key) => +key.slice(0, 4) * 12 + +key.slice(5, 7) - 1;
// Start of a cost item: the entered date, otherwise when the item (or its entry) was created.
function costStart(e, c) {
  if (c.start) return c.start;
  const fromId = /^c(\d{13})$/.exec(c.id || ""),
    t = fromId ? +fromId[1] : e.ts || e.upd;
  return t ? dateKey(new Date(t)) : dateKey(new Date());
}
// Date on which the cost item is due in the month ("2026-11"), or "" if it is not due in that month.
function costDueDate(e, c, month) {
  const start = costStart(e, c),
    s = monthIndex(start),
    m = monthIndex(month),
    iv = c.iv || "monatlich";
  if (m < s || (iv === "einmalig" ? m !== s : (m - s) % (IV_MONTHS[iv] || 1))) return "";
  const day = Math.min(+start.slice(8, 10) || 1, new Date(+month.slice(0, 4), +month.slice(5, 7), 0).getDate()),
    date = month + "-" + String(day).padStart(2, "0");
  return c.end && date > c.end ? "" : date;
}
// Amount valid on a date according to the price history (e.g. before and after a rent increase).
function costAmountAt(c, date) {
  const iv = c.iv || "monatlich",
    hist = (c.history || []).filter((p) => p.amount && (p.iv || "monatlich") === iv);
  let pick = hist[0] || null;
  hist.forEach((p) => {
    if (!p.date || p.date <= date) pick = p;
  });
  return +(pick ? pick.amount : c.amount) || 0;
}
const householdCategoryFor = (e) =>
  ({
    Wohnen: "Wohnen",
    Immobilien: "Wohnen",
    Fahrzeug: "Mobilität",
    Gesundheit: "Gesundheit",
    Vertrag: "Verträge",
    Versicherung: "Verträge",
  })[e.cat] || "Sonstiges";
function rentalCategoryFor(c) {
  const l = (c.label || "").toLowerCase();
  return /hausgeld/.test(l)
    ? "Hausgeld"
    : /grundsteuer/.test(l)
      ? "Grundsteuer"
      : /versicherung/.test(l)
        ? "Versicherung"
        : /zins/.test(l)
          ? "Kreditzinsen"
          : /tilgung/.test(l)
            ? "Tilgung"
            : /verwalt/.test(l)
              ? "Verwaltung"
              : /reparatur|instand/.test(l)
                ? "Reparatur & Instandhaltung"
                : "Sonstige Ausgabe";
}
const autoKeyOf = (e, c, month) => e.id + ":" + c.id + ":" + month;
function autoBooking(e, c, month) {
  const date = costDueDate(e, c, month);
  if (!date || !(+c.amount > 0)) return null;
  const rental = isInvestmentProperty(e),
    key = autoKeyOf(e, c, month);
  return {
    id: "auto:" + key,
    auto: true,
    autoKey: key,
    entryId: e.id,
    ...(rental ? { propertyId: e.id } : {}),
    description: e.title + (c.label ? " – " + c.label : ""),
    amount: costAmountAt(c, date),
    date,
    type: "expense",
    category: rental ? rentalCategoryFor(c) : householdCategoryFor(e),
  };
}
// Automatic bookings of the given entries for one month, without months that were adjusted or skipped.
function autoBookings(entries, month) {
  const stored = new Set(data.financeTransactions.filter((t) => t.autoKey && !t.deletedAt).map((t) => t.autoKey));
  const out = [];
  entries.forEach((e) =>
    costItems(e).forEach((c) => {
      const b = autoBooking(e, c, month);
      if (b && !stored.has(b.autoKey)) out.push(b);
    }),
  );
  return out;
}
// Months of a period: one month ("2026-11") or the months of a year up to the current month.
function periodMonths(period) {
  if (period.length === 7) return [period];
  const now = dateKey(new Date()).slice(0, 7);
  return Array.from({ length: 12 }, (_, i) => period + "-" + String(i + 1).padStart(2, "0")).filter((m) => m <= now);
}
const bookingTag = (t) => (t.auto ? " · regelmäßig" : t.autoKey ? " · regelmäßig, angepasst" : "");
const bookingButtons = (t) =>
  t.auto
    ? '<button type="button" class="ib" data-auto-edit="' +
      esc(t.autoKey) +
      '" aria-label="Nur diesen Monat anpassen" title="Nur diesen Monat anpassen">' +
      icon("pencil") +
      '</button><button type="button" class="ib" data-auto-skip="' +
      esc(t.autoKey) +
      '" aria-label="Diesen Monat überspringen" title="Diesen Monat überspringen">' +
      icon("trash") +
      "</button>"
    : '<button type="button" class="ib" data-finance-edit="' +
      esc(t.id) +
      '" aria-label="Buchung bearbeiten">' +
      icon("pencil") +
      '</button><button type="button" class="ib" data-finance-remove="' +
      esc(t.id) +
      '" aria-label="Buchung löschen">' +
      icon("trash") +
      "</button>";
const HOUSEHOLD_CATEGORIES = [
  "Wohnen",
  "Lebensmittel",
  "Mobilität",
  "Gesundheit",
  "Verträge",
  "Freizeit",
  "Gehalt",
  "Sonstiges",
];
const RENTAL_CATEGORIES = {
  income: ["Kaltmiete", "Nebenkostenvorauszahlung", "Nebenkostennachzahlung", "Sonstige Einnahme"],
  expense: [
    "Hausgeld",
    "Reparatur & Instandhaltung",
    "Grundsteuer",
    "Versicherung",
    "Kreditzinsen",
    "Tilgung",
    "Verwaltung",
    "Nebenkostenerstattung an Mieter",
    "Sonstige Ausgabe",
  ],
};
const rentalPropertyList = () =>
  data.entries.filter((e) => isInvestmentProperty(e) || rentalBookings().some((t) => t.propertyId === e.id));
// Planned monthly costs of a property: its cost list plus the additional running costs of the rental details.
const plannedPropertyCosts = (e) => mo1(e) + (+(e.rental && e.rental.monthlyExpenses) || 0);
// Actual figures of one property for a month ("2026-10") or a year ("2026"): received rent, own bookings and the
// automatic bookings of its recurring costs (for a year only up to the current month).
function rentalTotals(e, period) {
  const payments = (e.rental && e.rental.payments) || {},
    rentIn = Object.entries(payments)
      .filter(([m, p]) => m.startsWith(period) && p && p.paid)
      .reduce((s, [, p]) => s + (+p.amount || +e.rental.monthlyRent || 0), 0),
    own = rentalBookings().filter((t) => t.propertyId === e.id && (t.date || "").startsWith(period)),
    auto = isInvestmentProperty(e) ? periodMonths(period).flatMap((m) => autoBookings([e], m)) : [],
    bookings = [...own, ...auto],
    income = rentIn + bookings.filter((t) => t.type === "income").reduce((s, t) => s + (+t.amount || 0), 0),
    expense = bookings.filter((t) => t.type !== "income").reduce((s, t) => s + (+t.amount || 0), 0);
  return { rentIn, income, expense, result: income - expense, bookings };
}
function rentalBookingRow(t) {
  return (
    '<div class="rental-booking' +
    (t.auto ? " is-auto" : "") +
    '"><div><b>' +
    esc(t.description || t.category) +
    "</b><small>" +
    esc(fmtD(t.date)) +
    " · " +
    esc(t.category || "") +
    bookingTag(t) +
    (t.note ? " · " + esc(t.note) : "") +
    '</small></div><b class="' +
    (t.type === "income" ? "finance-income" : "finance-expense") +
    '">' +
    (t.type === "income" ? "+ " : "− ") +
    fmt(+t.amount || 0) +
    "</b>" +
    bookingButtons(t) +
    "</div>"
  );
}
function renderRentals() {
  const props = rentalPropertyList(),
    year = rentalMonth.slice(0, 4),
    monthName = new Date(+year, +rentalMonth.slice(5, 7) - 1, 1).toLocaleDateString("de-DE", {
      month: "long",
      year: "numeric",
    }),
    month = props.map((e) => rentalTotals(e, rentalMonth)),
    yearly = props.map((e) => rentalTotals(e, year)),
    total = (list, key) => list.reduce((s, x) => s + x[key], 0),
    outstanding =
      rentalMonth <= dateKey(new Date()).slice(0, 7)
        ? props
            .filter((e) => e.rental && e.rental.active && rentalMonthActive(e.rental, rentalMonth))
            .reduce((s, e) => s + ((e.rental.payments || {})[rentalMonth]?.paid ? 0 : +e.rental.monthlyRent || 0), 0)
        : 0;
  $("#v-rentals").innerHTML =
    '<div class="detail-head"><button type="button" class="btn s" data-rent-back>← Zurück</button></div><h2>Vermietung</h2>' +
    '<p class="mu">Einnahmen und Ausgaben deiner vermieteten und leerstehenden Immobilien – getrennt von den Haushaltsfinanzen.</p>' +
    '<label class="month-pick">Monat <input id="rentalMonth" type="month" value="' +
    esc(rentalMonth) +
    '"></label>' +
    (props.length
      ? '<div class="facts"><div><b>' +
        fmt(total(month, "income")) +
        "</b><small>Einnahmen</small></div><div><b>" +
        fmt(total(month, "expense")) +
        "</b><small>Ausgaben</small></div><div><b>" +
        fmt(total(month, "result")) +
        "</b><small>Ergebnis " +
        esc(monthName) +
        "</small></div><div><b>" +
        fmt(outstanding) +
        "</b><small>Miete noch offen</small></div></div>" +
        '<div class="card"><h3>Jahr ' +
        esc(year) +
        '</h3><div class="detail-line"><span>Einnahmen</span><b class="finance-income">+ ' +
        fmt(total(yearly, "income")) +
        '</b></div><div class="detail-line"><span>Ausgaben</span><b class="finance-expense">− ' +
        fmt(total(yearly, "expense")) +
        '</b></div><div class="detail-line detail-total"><span>Ergebnis</span><b>' +
        fmt(total(yearly, "result")) +
        "</b></div></div>" +
        "<h3>Objekte</h3>" +
        props
          .map((e, i) => {
            const rental = e.rental || {},
              let_ = rental.active && propertyUsage(e) === "Vermietet",
              payment = (rental.payments || {})[rentalMonth],
              paid = !!(payment && payment.paid),
              future = rentalMonth > dateKey(new Date()).slice(0, 7),
              due = let_ && rentalMonthActive(rental, rentalMonth),
              m = month[i],
              planned = (let_ ? +rental.monthlyRent || 0 : 0) - plannedPropertyCosts(e),
              list = m.bookings.slice().sort((a, b) => b.date.localeCompare(a.date));
            return (
              '<article class="card rental-card"><button type="button" class="rental-object" data-rental-detail="' +
              esc(e.id) +
              '"><b>' +
              esc(e.title) +
              "</b><small>" +
              esc(
                [propertyUsage(e), (e.x || {})["Objekt / Adresse"], let_ ? rental.tenant : ""]
                  .filter(Boolean)
                  .join(" · "),
              ) +
              "</small></button>" +
              (let_
                ? '<div class="detail-line"><span>Kaltmiete</span><b>' +
                  fmt(+rental.monthlyRent || 0) +
                  " / Monat</b></div>"
                : "") +
              (due
                ? '<div class="detail-line"><span>' +
                  (paid ? "Miete eingegangen" : future ? "Miete noch nicht fällig" : "Miete noch offen") +
                  "</span><b>" +
                  (paid
                    ? fmt(+payment.amount || +rental.monthlyRent || 0) +
                      (payment.paidAt ? " · " + esc(fmtD(payment.paidAt)) : "")
                    : "") +
                  '</b></div><button type="button" class="btn s w ' +
                  (paid ? "secondary" : "") +
                  '" data-rent-toggle="' +
                  esc(e.id) +
                  '">' +
                  (paid ? "Eingang zurücknehmen" : "Miete als eingegangen markieren") +
                  "</button>"
                : let_
                  ? '<p class="mu">Für diesen Monat besteht laut Mietzeitraum kein Mietverhältnis.</p>'
                  : "") +
              '<h4 class="detail-sub">Buchungen ' +
              esc(monthName) +
              "</h4>" +
              (list.length ? list.map(rentalBookingRow).join("") : '<p class="mu">Keine weiteren Buchungen.</p>') +
              '<div class="rental-add"><button type="button" class="btn s" data-rbook="income" data-property="' +
              esc(e.id) +
              '">+ Einnahme</button><button type="button" class="btn s" data-rbook="expense" data-property="' +
              esc(e.id) +
              '">+ Ausgabe</button></div>' +
              '<div class="detail-line"><span>Ergebnis ' +
              esc(monthName) +
              "</span><b>" +
              fmt(m.result) +
              '</b></div><div class="detail-line"><span>Ergebnis ' +
              esc(year) +
              "</span><b>" +
              fmt(yearly[i].result) +
              '</b></div><div class="detail-line"><span>Geplant pro Monat (Miete − regelmäßige Kosten)</span><b>' +
              fmt(planned) +
              "</b></div></article>"
            );
          })
          .join("")
      : '<div class="card"><b>Noch keine vermieteten Objekte</b><p class="mu">Lege unter „Mehr → Immobilien“ eine Immobilie mit der Nutzung „Vermietet“ an.</p></div>');
}
// The household book only contains bookings without a property (skipped automatic months are hidden).
const visibleTransactions = () =>
  data.financeTransactions.filter(
    (t) => !t.deletedAt && !t.skipped && !t.propertyId && (t.date || "").slice(0, 7) === financeMonth,
  );
const shoppingNameKey = (name) => name.trim().toLocaleLowerCase("de-DE").replace(/\s+/g, " ");
const shoppingVisible = () => data.shoppingItems.filter((item) => !item.deletedAt);
function addShoppingItem(name, quantity = "") {
  name = name.trim();
  if (!name) {
    showToast("Bitte einen Artikel eingeben.");
    return;
  }
  const existing = shoppingVisible().find((item) => shoppingNameKey(item.name) === shoppingNameKey(name));
  if (existing && !existing.done) {
    showToast("Dieser Artikel steht bereits auf der Liste.");
    return;
  }
  if (existing) {
    existing.done = false;
    existing.quantity = quantity.trim() || existing.quantity;
    existing.updatedAt = Math.max(Date.now(), (existing.updatedAt || 0) + 1);
  } else {
    data.shoppingItems.push({
      id: "shop-" + crypto.randomUUID(),
      name,
      quantity: quantity.trim(),
      done: false,
      updatedAt: Date.now(),
    });
  }
  saveDataLocal();
  renderShopping();
}
function renderShopping() {
  const items = shoppingVisible(),
    open = items.filter((item) => !item.done),
    done = items.filter((item) => item.done);
  const row = (item) =>
    '<div class="shopping-row' +
    (item.done ? " shopping-done" : "") +
    '">' +
    '<label><input type="checkbox" data-shopping-check="' +
    esc(item.id) +
    '"' +
    (item.done ? " checked" : "") +
    "><span><b>" +
    esc(item.name) +
    "</b>" +
    (item.quantity ? "<small>" + esc(item.quantity) + "</small>" : "") +
    '</span></label><button class="ib" type="button" data-shopping-quantity="' +
    esc(item.id) +
    '" aria-label="Menge ändern">' +
    icon("pencil") +
    '</button><button class="ib" type="button" data-shopping-delete="' +
    esc(item.id) +
    '" aria-label="Artikel entfernen">' +
    icon("trash") +
    "</button></div>";
  $("#v-shopping").innerHTML =
    '<h2>Einkaufsliste</h2><p class="mu">Gemeinsam planen, beim Einkaufen abhaken. Ohne Preise.</p>' +
    '<form id="shoppingAdd" class="shopping-add"><label class="f"><span>Artikel</span><input id="shoppingName" maxlength="120" required placeholder="z. B. Milch"></label>' +
    '<label class="f"><span>Menge (optional)</span><input id="shoppingQuantity" maxlength="60" placeholder="z. B. 2 Liter"></label>' +
    '<button class="btn" type="submit">Hinzufügen</button></form>' +
    "<h3>Offen · " +
    open.length +
    '</h3><div class="card">' +
    (open.map(row).join("") || '<p class="mu">Alles eingekauft – oder füge neue Artikel hinzu.</p>') +
    "</div>" +
    (done.length
      ? '<details class="card"><summary>Erledigt · ' +
        done.length +
        "</summary>" +
        done.map(row).join("") +
        '<button type="button" class="btn s w" data-shopping-clear>Erledigte entfernen</button></details>'
      : "") +
    '<h3>Standardartikel schnell hinzufügen</h3><input type="search" id="shoppingSearch" placeholder="Standardartikel suchen" value="' +
    esc(shoppingQuery) +
    '"><div id="shoppingSuggestions"></div>';
  renderShoppingSuggestions();
}
function renderShoppingSuggestions() {
  const keys = new Set(
    shoppingVisible()
      .filter((item) => !item.done)
      .map((item) => shoppingNameKey(item.name)),
  );
  $("#shoppingSuggestions").innerHTML =
    Object.entries(SHOPPING_DEFAULTS)
      .map(([group, names]) => {
        const matching = names.filter((name) => shoppingNameKey(name).includes(shoppingNameKey(shoppingQuery)));
        return matching.length
          ? '<details class="shopping-group"' +
              (shoppingQuery ? " open" : "") +
              "><summary>" +
              esc(group) +
              '</summary><div class="shopping-suggestions">' +
              matching
                .map(
                  (name) =>
                    '<button type="button" class="chip" data-shopping-add="' +
                    esc(name) +
                    '"' +
                    (keys.has(shoppingNameKey(name)) ? " disabled" : "") +
                    ">" +
                    esc(name) +
                    "</button>",
                )
                .join("") +
              "</div></details>"
          : "";
      })
      .join("") || '<p class="mu">Keine Standardartikel gefunden. Du kannst oben einen eigenen Artikel hinzufügen.</p>';
}
$("#v-shopping").onsubmit = (e) => {
  if (e.target.id !== "shoppingAdd") return;
  e.preventDefault();
  addShoppingItem($("#shoppingName").value, $("#shoppingQuantity").value);
};
$("#v-shopping").oninput = (e) => {
  if (e.target.id !== "shoppingSearch") return;
  shoppingQuery = e.target.value;
  renderShoppingSuggestions();
};
$("#v-shopping").onchange = (e) => {
  const id = e.target.dataset.shoppingCheck;
  const item = shoppingVisible().find((item) => item.id === id);
  if (!item) return;
  item.done = e.target.checked;
  item.updatedAt = Math.max(Date.now(), (item.updatedAt || 0) + 1);
  saveDataLocal();
  renderShopping();
};
$("#v-shopping").onclick = async (e) => {
  const button = e.target.closest("button");
  if (!button) return;
  if (button.dataset.shoppingAdd) {
    addShoppingItem(button.dataset.shoppingAdd);
    return;
  }
  if (button.hasAttribute("data-shopping-clear")) {
    if (!(await showConfirm("Erledigte Artikel entfernen?", "Nur abgehakte Artikel werden entfernt.", "Entfernen")))
      return;
    shoppingVisible()
      .filter((item) => item.done)
      .forEach((item) => {
        item.updatedAt = Math.max(Date.now(), (item.updatedAt || 0) + 1);
        item.deletedAt = item.updatedAt;
      });
  } else {
    const item = shoppingVisible().find(
      (item) => item.id === (button.dataset.shoppingDelete || button.dataset.shoppingQuantity),
    );
    if (!item) return;
    if (button.dataset.shoppingQuantity) {
      const quantity = await showPrompt("Menge ändern", item.name, item.quantity || "", "Speichern");
      if (quantity === null) return;
      item.quantity = quantity.trim();
    }
    item.updatedAt = Math.max(Date.now(), (item.updatedAt || 0) + 1);
    if (button.dataset.shoppingDelete) item.deletedAt = item.updatedAt;
  }
  saveDataLocal();
  renderShopping();
};
function renderFinances() {
  const autoList = autoBookings(householdEntries(), financeMonth),
    monthTransactions = [...visibleTransactions(), ...autoList],
    income = monthTransactions.filter((t) => t.type === "income").reduce((s, t) => s + (+t.amount || 0), 0),
    expenses = monthTransactions.filter((t) => t.type !== "income").reduce((s, t) => s + (+t.amount || 0), 0),
    recurring = sum(householdEntries()),
    hasRentals = rentalPropertyList().length > 0;
  $("#v-finances").innerHTML =
    '<div class="detail-head"><button type="button" class="btn s" data-finance-back>← Zurück</button><button type="button" class="btn" data-finance-new>+ Buchung</button></div>' +
    '<h2>Finanzen</h2><p class="mu">Einnahmen- und Ausgabenbuch des Haushalts. Regelmäßige Kosten aus deinen Einträgen werden je nach „Ab“ und „Bis“ automatisch in jedem Monat gebucht; alles andere trägst du selbst ein. Es werden keine Bankkonten verbunden.</p>' +
    '<label class="month-pick">Monat <input id="financeMonth" type="month" value="' +
    esc(financeMonth) +
    '"></label>' +
    '<div class="facts"><div><b>' +
    fmt(income) +
    "</b><small>Einnahmen</small></div><div><b>" +
    fmt(expenses) +
    "</b><small>Ausgaben</small></div><div><b>" +
    fmt(income - expenses) +
    "</b><small>Saldo</small></div></div>" +
    '<div class="card"><h3>Regelmäßige Planung</h3><div class="detail-line"><span>Erfasste regelmäßige Kosten</span><b>− ' +
    fmt(recurring) +
    " / Monat</b></div>" +
    '<p class="mu">Diese Planung ist getrennt von den tatsächlich erfassten Monatsbuchungen.</p>' +
    (hasRentals
      ? '<p class="mu">Vermietete und leerstehende Immobilien sind hier nicht enthalten. Ihre Einnahmen und Ausgaben führst du getrennt unter „Immobilien → Vermietung“.</p><button type="button" class="btn s w" data-finance-rentals>Zur Vermietung</button>'
      : "") +
    "</div><h3>Buchungen · " +
    esc(
      new Date(+financeMonth.slice(0, 4), +financeMonth.slice(5, 7) - 1, 1).toLocaleDateString("de-DE", {
        month: "long",
        year: "numeric",
      }),
    ) +
    "</h3>" +
    (monthTransactions.length
      ? monthTransactions
          .slice()
          .sort((a, b) => b.date.localeCompare(a.date) || (b.updatedAt || 0) - (a.updatedAt || 0))
          .map(
            (t) =>
              '<article class="card finance-row' +
              (t.auto ? " is-auto" : "") +
              '"><div><b>' +
              esc(t.description) +
              "</b><small>" +
              esc(fmtD(t.date)) +
              " · " +
              esc(t.category || "Sonstiges") +
              bookingTag(t) +
              (t.note ? " · " + esc(t.note) : "") +
              '</small></div><b class="' +
              (t.type === "income" ? "finance-income" : "finance-expense") +
              '">' +
              (t.type === "income" ? "+ " : "− ") +
              fmt(+t.amount || 0) +
              "</b>" +
              bookingButtons(t) +
              "</article>",
          )
          .join("")
      : '<div class="card mu">Für diesen Monat gibt es noch keine Buchungen.</div>');
}
function renderStats() {
  const E = data.entries;
  if (!E.length) {
    $("#v-stats").innerHTML =
      '<div class="card"><b>Noch keine Daten</b><p class="mu" style="margin:6px 0 0">Sobald du Einträge angelegt hast, siehst du hier Auswertungen.</p></div>';
    return;
  }
  // Costs are household costs only; let/vacant properties are summarised separately below.
  const H = householdEntries(),
    mo = sum(H),
    priced = H.filter((e) => mo1(e) > 0),
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
          esc(categoryName(x.c)) +
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
      .map((c) => ({ c, v: sum(H.filter((e) => e.cat === c)) }))
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
      once = H.reduce((s, e) => s + onceSum(e), 0);
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
            esc(categoryName(x.c)) +
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
      H.length +
      "</b><small>Einträge mit Betrag</small></div><div><b>" +
      fmt0(mo / priced.length) +
      "</b><small>Ø pro Posten und Monat</small></div></div>";
  }
  const rentalProps = rentalPropertyList();
  if (rentalProps.length) {
    const rent = rentalProps.reduce(
        (s, e) =>
          s + (e.rental && e.rental.active && propertyUsage(e) === "Vermietet" ? +e.rental.monthlyRent || 0 : 0),
        0,
      ),
      costs = rentalProps.reduce((s, e) => s + plannedPropertyCosts(e), 0),
      year = dateKey(new Date()).slice(0, 4),
      result = rentalProps.reduce((s, e) => s + rentalTotals(e, year).result, 0);
    h +=
      '<h2>Vermietung (getrennt)</h2><div class="card"><div class="detail-line"><span>Geplante Kaltmiete</span><b>' +
      fmt(rent) +
      ' / Monat</b></div><div class="detail-line"><span>Regelmäßige Kosten der Objekte</span><b>− ' +
      fmt(costs) +
      ' / Monat</b></div><div class="detail-line detail-total"><span>Geplanter Überschuss</span><b>' +
      fmt(rent - costs) +
      ' / Monat</b></div><div class="detail-line"><span>Tatsächliches Ergebnis ' +
      esc(year) +
      "</span><b>" +
      fmt(result) +
      '</b></div><p class="mu">Nicht in den Haushaltskosten oben enthalten.</p><button type="button" class="btn s w" data-stats-rentals>Zur Vermietung</button></div>';
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
        esc(categoryName(x.e.cat)) +
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
            ((e.files || []).length ? " · " + e.files.length + icon("paperclip", "inline-ic") : "") +
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
            '">' +
            icon("check") +
            "</button></div></div>"
          );
        })
        .join("")
    : selDls.length
      ? ""
      : '<div class="card mu">Keine Termine an diesem Tag.</div>';
  h +=
    '</div><div class="settings-note" style="margin:12px 2px">Gemeinsame Familientermine. Abhaken mit dem Kreis rechts oder nach rechts wischen, löschen durch Wischen nach links.</div>';
  $("#v-calendar").innerHTML = h;
}
function renderSettings() {
  const cats = Object.keys(T);
  const iconSvg = (d) => '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true">' + d + "</svg>";
  let h =
    '<h2 style="margin-top:8px">Einstellungen</h2><p class="settings-note">Verwalte Kategorien, Gesellschaften und weitere Stammdaten an einem Ort.</p><div class="area-switch" role="radiogroup" aria-label="Aktiver Bereich">' +
    [
      ["home", "area-home", "NAR Home"],
      ["family", "area-family", "NAR Family"],
    ]
      .map(
        ([a, ic, label]) =>
          '<button type="button" role="radio" aria-checked="' +
          (a === activeArea) +
          '" class="' +
          (a === activeArea ? "on" : "") +
          '" data-area-switch="' +
          a +
          '">' +
          icon(ic) +
          "<span>" +
          label +
          "</span></button>",
      )
      .join("") +
    "</div>" +
    accountCardHtml();
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
      esc(categoryName(c)) +
      '</b><small class="doc-meta">' +
      subs.length +
      " Unterlagen-Arten" +
      (kinds.length ? " · " + kinds.length + " Objektarten" : "") +
      '</small></span><button type="button" class="icon-btn" data-edit-cat="' +
      esc(c) +
      '" aria-label="' +
      esc(categoryName(c)) +
      ' bearbeiten" title="Bearbeiten">' +
      icon("pencil") +
      '</button><button type="button" class="icon-btn danger" data-del-cat="' +
      esc(c) +
      '" aria-label="' +
      esc(categoryName(c)) +
      ' löschen" title="Löschen">' +
      icon("trash") +
      "</button></div>";
  });
  h +=
    '<div class="settings-tools"><button class="btn" data-add-cat="1">＋ Hauptkategorie hinzufügen</button></div></div></details>';
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    icon("layout") +
    '</span><span><span class="set-title">Übersicht &amp; Menü</span><span class="set-sub">Kacheln, Reihenfolge und Menü „Mehr“</span></span></summary><div class="settings-content"><p class="settings-note">Lege fest, welche Kategorien und Bereiche als Kachel in der Übersicht oder im Menü „Mehr“ erscheinen, in welcher Reihenfolge, und welche Blöcke die Übersicht zeigt. ' +
    esc(layoutScopeText()) +
    '</p><div class="settings-tools"><button class="btn s" data-customize-home="1">Übersicht anpassen</button></div></div></details>';
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    iconSvg(ICONS["contact-round"]) +
    '</span><span><span class="set-title">Weitere Stammdaten</span><span class="set-sub">Personen, Gesellschaften, Anbieter und Fahrzeugdaten</span></span></summary><div class="settings-content"><label class="f"><span>Liste auswählen</span><select id="settingsList" class="settings-select">' +
    Object.keys(SETTINGS_LISTS)
      .map((k) => '<option value="' + k + '">' + SETTINGS_LISTS[k].label + "</option>")
      .join("") +
    '</select></label><div id="settingsListItems"></div><div class="settings-tools"><button class="btn" data-add-list-item="1">＋ Eintrag hinzufügen</button></div></div></details>';
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    iconSvg(ICONS["cloud-cog"]) +
    '</span><span><span class="set-title">App & Synchronisation</span><span class="set-sub">Verbindung, Erinnerungen und weitere Funktionen</span></span></summary><div class="settings-content"><p class="settings-note">Einträge, Termine und Einstellungen werden in ' +
    esc(areaLabel()) +
    ' gespeichert und – sobald Google Drive verbunden ist – mit den für diesen Ordner berechtigten Nutzern synchronisiert.</p><p class="settings-note">Erinnerungen erscheinen in der Übersicht, solange ' +
    esc(areaLabel()) +
    " geöffnet ist. Benachrichtigungen: <b>" +
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
    '<button class="btn s" data-drive-settings="1">' +
    (isOwner && folderId ? "Google Drive &amp; Partner" : "Google Drive") +
    "</button>" +
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
    last = +localStorage.getItem(areaStorageKey("last_backup")) || 0,
    lastTxt = last
      ? new Date(last).toLocaleDateString("de-DE", { dateStyle: "medium" }) +
        " (vor " +
        Math.max(0, Math.round((Date.now() - last) / 864e5)) +
        " Tagen)"
      : "noch nie";
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    iconSvg(ICONS["moon-star"]) +
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
    iconSvg(ICONS["cloud-download"]) +
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
  h +=
    '<details class="settings-section"><summary><span class="set-icon">' +
    icon("info") +
    '</span><span><span class="set-title">Versionsinfo</span><span class="set-sub">Version ' +
    esc(APP_VERSION) +
    " · Stand " +
    esc(fmtD(APP_DATE)) +
    '</span></span></summary><div class="settings-content"><dl class="version-list">' +
    versionInfo()
      .map(([k, v]) => "<dt>" + esc(k) + "</dt><dd>" + esc(v) + "</dd>")
      .join("") +
    '</dl><div class="settings-tools"><button class="btn s" data-copy-version="1">Versionsinfo kopieren</button></div><div class="changelog">' +
    CHANGELOG.map(
      (c) =>
        "<h4>Version " +
        esc(c.v) +
        (c.date ? " · " + esc(fmtD(c.date)) : "") +
        "</h4><ul>" +
        c.items.map((i) => "<li>" + esc(i) + "</li>").join("") +
        "</ul>",
    ).join("") +
    "</div></div></details>";
  $("#v-settings").innerHTML = h;
  document.querySelectorAll("#v-settings details").forEach((d, i) => {
    d.open = !!settingsOpen[i];
  });
  renderSettingsList();
}
function versionInfo() {
  const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true,
    docs =
      data.entries.reduce((n, e) => n + (e.docs || []).length, 0) +
      (data.events || []).reduce((n, e) => n + (e.files || []).length, 0);
  return [
    ["Version", APP_VERSION],
    ["Stand", fmtD(APP_DATE)],
    ["Datenformat", String(DATA_FORMAT)],
    ["Läuft als", standalone ? "Installierte App" : "Webseite im Browser"],
    ["Offline-Start", navigator.serviceWorker?.controller ? "aktiv" : "nicht aktiv"],
    [
      "Google Drive",
      folderId
        ? "verbunden" + (who ? " (" + who + ")" : "") + (isOwner ? " · Hauptnutzer" : " · Partner")
        : "nicht verbunden",
    ],
    // The project number in front of the client ID identifies the Google Cloud project of the area.
    [
      "Google-Client",
      (localStorage.getItem(areaStorageKey("cid")) ? "Eigene ID" : "Eingebaut für " + areaLabel()) +
        " · Projekt " +
        cid().split("-")[0],
    ],
    [
      "Auf diesem Gerät",
      data.entries.length + " Einträge · " + (data.events || []).length + " Termine · " + docs + " Dokumente",
    ],
  ];
}
async function copyVersionInfo() {
  const text =
    areaLabel() +
    "\n" +
    versionInfo()
      .map(([k, v]) => k + ": " + v)
      .join("\n") +
    "\nBrowser: " +
    navigator.userAgent;
  try {
    await navigator.clipboard.writeText(text);
    showToast("Versionsinfo kopiert");
  } catch (e) {
    showAlert("Versionsinfo", text);
  }
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
  localStorage.setItem(areaStorageKey("data"), JSON.stringify(data));
  markUnsynced();
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
            ' entfernen">' +
            icon("x") +
            "</button></span></div>",
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
    const folder = await withLoading(
      { title: "Bereite Ablage vor", description: "Kalenderordner wird geprüft.", iconName: "cloud" },
      () => folderFor("Kalender", date.slice(0, 4)),
    );
    for (const f of files) {
      const name = uniqueDocName(
        buildDocName({ date, title, type: "", ext: fileExt(f.name, f.type) }),
        { docs: evFiles },
        "",
      );
      try {
        setSt("Lade hoch: " + name, "busy");
        const j = await withLoading(
          { title: "Lade Anhang hoch", description: name, iconName: "cloud-upload" },
          async () => (await up(name, f, null, folder)).json(),
        );
        evUploads.push(j.id);
        evFiles.push({ id: j.id, name: j.name || name, mimeType: j.mimeType || f.type || "" });
        renderEventFiles();
      } catch (err) {
        recordDeveloperLog("error", "upload", "Kalenderanhang fehlgeschlagen.");
        await showAlert("Upload fehlgeschlagen", "„" + f.name + "“ konnte nicht hochgeladen werden.");
      }
    }
    setSt("Anhang gespeichert", "ok");
  } catch (err) {
    recordDeveloperLog("error", "upload", "Kalenderordner konnte nicht vorbereitet werden.");
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
// Modern dialog with a centred head (app logo or icon, title, text, sync status), optional option cards and two
// buttons. Resolves with the value of the chosen card, "ok" for the main button or null (cancel, Esc, Back).
function showActionDialog({
  visual = "logo",
  title,
  text = "",
  status = null,
  cards = [],
  confirmText = "OK",
  cancelText = "Abbrechen",
  danger = false,
}) {
  return new Promise((resolve) => {
    document.querySelector(".settings-dialog-backdrop")?.remove();
    const id = "nar-action-" + ++dialogSeq,
      backdrop = document.createElement("div");
    backdrop.className = "settings-dialog-backdrop";
    backdrop.innerHTML =
      '<div class="settings-dialog action-dialog' +
      (danger ? " is-danger" : "") +
      '" role="dialog" aria-modal="true" aria-labelledby="' +
      id +
      '-title"' +
      (text ? ' aria-describedby="' + id + '-text"' : "") +
      '><div class="action-head">' +
      (visual === "logo"
        ? '<img class="action-logo" src="logo-128.png" alt="" width="60" height="60">'
        : '<span class="action-icon">' + icon(visual) + "</span>") +
      '<h3 id="' +
      id +
      '-title">' +
      esc(title) +
      "</h3>" +
      (text ? '<p id="' + id + '-text">' + esc(text) + "</p>" : "") +
      (status
        ? '<span class="action-status is-' + status[0] + '"><i aria-hidden="true"></i>' + esc(status[1]) + "</span>"
        : "") +
      "</div>" +
      (cards.length
        ? '<div class="action-cards">' +
          cards
            .map(
              (c) =>
                '<button type="button" class="action-card" data-choice="' +
                esc(c.value) +
                '"><span class="action-card-ic">' +
                icon(c.icon) +
                '</span><span class="action-card-text"><b>' +
                esc(c.title) +
                "</b>" +
                (c.sub ? '<small class="' + (c.brand ? "is-brand" : "") + '">' + esc(c.sub) + "</small>" : "") +
                '</span><span class="action-card-go">' +
                icon("chevron-right") +
                "</span></button>",
            )
            .join("") +
          "</div>"
        : "") +
      '<div class="settings-dialog-foot"><button type="button" class="dialog-secondary" data-cancel>' +
      esc(cancelText) +
      '</button><button type="button" class="' +
      (danger ? "dialog-danger" : "dialog-primary") +
      '" data-choice="ok">' +
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
      const c = e.target.closest("[data-choice]");
      if (c) finish(c.dataset.choice);
      else if (e.target === backdrop || e.target.closest("[data-cancel]")) finish(null);
    });
    backdrop.addEventListener("keydown", (e) => {
      if (e.key === "Escape") finish(null);
    });
    // Risky actions start on "Abbrechen", everything else on the main button.
    backdrop.querySelector(danger ? "[data-cancel]" : '[data-choice="ok"]').focus();
  });
}
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
function showToast(text, { ms = 2000, action = "", onAction = null, progress = false } = {}) {
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
  t.classList.toggle("has-progress", progress);
  t.style.setProperty("--toast-duration", ms + "ms");
  if (action)
    t.querySelector("button").onclick = () => {
      clearTimeout(toastTimer);
      t.classList.remove("on");
      onAction && onAction();
    };
  t.classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("on"), ms);
}
// Deletions wait a few seconds before they become final, so they can be undone from the toast.
const pendingDeletes = new Map();
const UNDO_MS = 3000;
function removeUndoToast(toast) {
  const stack = toast.parentElement;
  toast.remove();
  if (stack && !stack.children.length) stack.remove();
}
function deleteWithUndo({ key, text, remove, restore, commit }) {
  const existing = pendingDeletes.get(key);
  if (existing) return;
  remove();
  render();
  const finish = () => {
    if (!pendingDeletes.has(key)) return;
    const pending = pendingDeletes.get(key);
    clearTimeout(pending.timer);
    pendingDeletes.delete(key);
    if (pending.toast) removeUndoToast(pending.toast);
    commit();
  };
  const cancel = () => {
    if (!pendingDeletes.has(key)) return;
    const pending = pendingDeletes.get(key);
    clearTimeout(pending.timer);
    pendingDeletes.delete(key);
    if (pending.toast) removeUndoToast(pending.toast);
    restore();
    render();
    showToast("Wiederhergestellt");
  };
  const toast = document.createElement("div");
  let stack = document.querySelector(".undo-toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "undo-toast-stack";
    document.body.appendChild(stack);
  }
  toast.className = "toast has-action has-progress on";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  toast.style.setProperty("--toast-duration", UNDO_MS + "ms");
  toast.innerHTML = "<span>" + esc(text) + '</span><button type="button">Rückgängig</button>';
  toast.querySelector("button").onclick = cancel;
  stack.appendChild(toast);
  pendingDeletes.set(key, { finish, timer: setTimeout(finish, UNDO_MS), toast });
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
  if (SECTION_CATS.includes(cat)) {
    await showAlert(
      "Kategorie kann nicht gelöscht werden",
      "„" + categoryName(cat) + "“ ist ein eigener Bereich unter „Mehr“. Du kannst aber die Unterlagen-Arten anpassen.",
    );
    return;
  }
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
  const sections = [...document.querySelectorAll("main > section")];
  sections.forEach((section) => {
    section.classList.toggle("hide", developerMode || section.id !== "v-" + tab);
  });
  $("#developerView").classList.toggle("hide", !developerMode);
  document.querySelector("nav").classList.toggle("hide", developerMode);
  if (developerMode) {
    renderDeveloperConsole();
    return;
  }
  [
    "home",
    "list",
    "object",
    "properties",
    "rentals",
    "finances",
    "shopping",
    "docs",
    "stats",
    "calendar",
    "settings",
  ].forEach((t) => $("#v-" + t).classList.toggle("hide", t !== tab));
  document
    .querySelectorAll("nav button")
    .forEach((b) =>
      b.classList.toggle(
        "on",
        b.dataset.t === tab ||
          (b.dataset.action === "more" &&
            ["docs", "stats", "settings", "properties", "rentals", "finances", "shopping", "object"].includes(tab)),
      ),
    );
  $("#settingsBtn").classList.toggle("on", tab === "settings");
  if (tab === "settings") $("#settingsBtn").setAttribute("aria-current", "page");
  else $("#settingsBtn").removeAttribute("aria-current");
  ({
    home: renderHome,
    list: renderList,
    object: renderObjectDetail,
    properties: renderProperties,
    rentals: renderRentals,
    finances: renderFinances,
    shopping: renderShopping,
    docs: renderDocs2,
    stats: renderStats,
    calendar: renderCalendar,
    settings: renderSettings,
  })[tab]();
}
const developerLogs = [];
const developerLogLimit = 200;
function recordDeveloperLog(level, category, message) {
  const safeMessage = String(message || "")
    .replace(/Bearer\s+\S+/gi, "Bearer [redigiert]")
    .replace(
      /\b(access[_-]?token|refresh[_-]?token|password|passwort|secret|authorization)\b\s*[:=]\s*\S+/gi,
      "$1=[redigiert]",
    )
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[E-Mail redigiert]")
    .replace(/https?:\/\/[^\s?]+(?:\?[^\s]*)?/gi, "[URL redigiert]")
    .slice(0, 240);
  developerLogs.push({ time: new Date().toISOString(), level, category, message: safeMessage });
  if (developerLogs.length > developerLogLimit) developerLogs.shift();
  if (developerMode) renderDeveloperConsole();
}
function renderDeveloperConsole() {
  const filter = $("#developerFilter")?.value || "all";
  $("#developerDriveStatus").textContent = folderId ? "Verbunden" : "Nicht verbunden";
  $("#developerSyncStatus").textContent = syncing ? "Aktiv" : $("#st").classList.contains("err") ? "Fehler" : "Bereit";
  $("#developerLogCount").textContent = String(developerLogs.length);
  $("#developerVersion").textContent = APP_VERSION;
  $("#developerRuntime").textContent =
    matchMedia("(display-mode: standalone)").matches || navigator.standalone === true
      ? "Installierte PWA"
      : "Webbrowser";
  const visible = developerLogs.filter(
    (entry) => filter === "all" || entry.level === filter || entry.category === filter,
  );
  const categoryLabel = (category) =>
    ({
      drive: "Google Drive",
      sync: "Synchronisation",
      network: "Netzwerk",
      upload: "Upload",
      download: "Download",
      system: "System",
    })[category] || category;
  $("#developerLogs").innerHTML = visible.length
    ? visible
        .slice()
        .reverse()
        .map(
          (entry) =>
            '<article class="developer-log" data-level="' +
            esc(entry.level) +
            '"><b>' +
            esc(categoryLabel(entry.category)) +
            " · " +
            esc(entry.level === "error" ? "Fehler" : entry.level === "warning" ? "Warnung" : "Info") +
            "</b><small>" +
            esc(new Date(entry.time).toLocaleString("de-DE")) +
            "</small><div>" +
            esc(entry.message) +
            "</div></article>",
        )
        .join("")
    : '<p class="settings-note">Keine Protokolleinträge in dieser Kategorie.</p>';
}
let logoTapCount = 0,
  logoTapTimer = null;
// One tap on the logo opens the overview (inside it: back to the top); five quick taps open the developer console.
function logoTap() {
  logoTapCount++;
  clearTimeout(logoTapTimer);
  logoTapTimer = setTimeout(() => (logoTapCount = 0), 1800);
  if (logoTapCount < 5) {
    if (tab === "home" && !developerMode) window.scrollTo({ top: 0, behavior: "smooth" });
    else {
      developerMode = false;
      navigateTo("home");
    }
    return;
  }
  logoTapCount = 0;
  developerMode = true;
  recordDeveloperLog("info", "system", "Developer-Konsole geöffnet.");
  pushHist({ developer: true });
  render();
}
document.querySelector(".brand-logo").addEventListener("click", logoTap);
document.querySelector(".brand-logo").addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  e.preventDefault();
  logoTap();
});
$("#developerView").addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.hasAttribute("data-dev-back")) {
    if (history.state?.developer) history.back();
    else {
      developerMode = false;
      render();
    }
  } else if (button.hasAttribute("data-dev-copy")) {
    try {
      await navigator.clipboard.writeText(JSON.stringify(developerLogs, null, 2));
      showToast("Protokolle kopiert");
    } catch (e) {
      showAlert("Kopieren nicht möglich", "Bitte erlaube den Zugriff auf die Zwischenablage.");
    }
  } else if (button.hasAttribute("data-dev-export")) {
    downloadBlob(
      new Blob([JSON.stringify(developerLogs, null, 2)], { type: "application/json" }),
      "NAR-Home-Developer-Log.json",
    );
    showToast("Protokolle exportiert");
  } else if (button.hasAttribute("data-dev-clear")) {
    if (
      !(await showConfirm(
        "Protokolle löschen?",
        "Alle technischen Protokolle auf diesem Gerät werden gelöscht.",
        "Löschen",
        true,
      ))
    )
      return;
    developerLogs.length = 0;
    renderDeveloperConsole();
  }
});
$("#developerFilter").addEventListener("change", renderDeveloperConsole);
window.addEventListener("error", (event) => {
  const source = String(event.filename || "")
    .split(/[?#]/)[0]
    .split(/[\\/]/)
    .pop();
  recordDeveloperLog(
    "error",
    "system",
    "JavaScript-Fehler" + (source ? " in " + source : "") + (event.lineno ? " · Zeile " + event.lineno : ""),
  );
});
window.addEventListener("unhandledrejection", (event) => {
  const name = event.reason && event.reason.name ? event.reason.name : "Promise-Fehler";
  recordDeveloperLog("error", "system", "Unbehandelte Promise-Ablehnung: " + name);
});
const originalConsoleWarn = console.warn.bind(console);
console.warn = (...args) => {
  recordDeveloperLog("warning", "system", "JavaScript-Warnung");
  originalConsoleWarn(...args);
};

/* ---- Eintrag bearbeiten ---- */
const optionsHtml = (list, selected, emptyLabel) =>
  (emptyLabel !== undefined ? '<option value="">' + esc(emptyLabel) + "</option>" : "") +
  list
    .map(
      (x) =>
        '<option value="' +
        esc(x) +
        '"' +
        (x === selected ? " selected" : "") +
        ">" +
        esc(categoryName(x)) +
        "</option>",
    )
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
// "Wohnen": the rent paid to the landlord is split into fixed monthly parts (role), utilities billed directly by a
// supplier are own rows (role "versorger"). All of them stay normal cost items, so totals and price history work.
const RENT_PARTS = [
  ["kaltmiete", "Kaltmiete"],
  ["nebenkosten", "Nebenkosten-Vorauszahlung"],
  ["heizkosten", "Heizkosten-Vorauszahlung"],
];
const RENT_ROLES = RENT_PARTS.map((p) => p[0]);
const UTILITY_KINDS = ["Strom", "Gas", "Fernwärme", "Wasser", "Sonstiges"];
const isRentCost = (c) => RENT_ROLES.includes(c.role);
const isUtilityCost = (c) => c.role === "versorger";
const utilityLabel = (c) => (c.kind || "Versorger") + (c.provider ? " – " + c.provider : "");
// Older "Wohnen" entries only have free cost labels; obvious ones (monthly "Kaltmiete", "Strom" …) get their role.
function assignCostRoles(e) {
  if (e.cat !== "Wohnen") return;
  const taken = (role) => e.costs.some((c) => c.role === role);
  e.costs.forEach((c) => {
    if (c.role) return;
    const l = (c.label || "").trim().toLowerCase(),
      monthlyIv = (c.iv || "monatlich") === "monatlich",
      kind = UTILITY_KINDS.find((k) => k !== "Sonstiges" && l.startsWith(k.toLowerCase()));
    if (monthlyIv && /^(netto)?(kaltmiete|grundmiete)/.test(l) && !taken("kaltmiete")) c.role = "kaltmiete";
    else if (monthlyIv && /^(neben|betriebs)kosten/.test(l) && !taken("nebenkosten")) c.role = "nebenkosten";
    else if (monthlyIv && /^heiz/.test(l) && !taken("heizkosten")) c.role = "heizkosten";
    else if (kind) {
      c.role = "versorger";
      c.kind = kind;
      c.provider = c.label
        .trim()
        .slice(kind.length)
        .replace(/^[\s–\-:·(]+|\)$/g, "")
        .trim();
    }
  });
}
const amountInput = (c, i) =>
  '<input type="number" inputmode="decimal" step="0.01" min="0" data-cost-amount="' +
  i +
  '" value="' +
  esc(c.amount || "") +
  '">';
const costRemoveBtn = (i) =>
  '<button type="button" class="icon-btn danger" data-cost-remove="' +
  i +
  '" aria-label="Kosten entfernen" title="Kosten entfernen">' +
  icon("trash") +
  "</button>";
// "Ab" (first payment, also the due month of quarterly/yearly costs) and the optional end of a cost item.
const costPeriodFields = (c, i) =>
  '<label class="f cost-start"><span>Ab (erste Zahlung)</span><input type="date" data-cost-start="' +
  i +
  '" value="' +
  esc(c.start || costStart(cur, c)) +
  '"></label><label class="f cost-end"><span>Bis (optional)</span><input type="date" data-cost-end="' +
  i +
  '" value="' +
  esc(c.end || "") +
  '"></label>';
function genericCostRow(c, i) {
  return (
    '<div class="cost-row"><label class="f cost-label"><span>Bezeichnung</span><input data-cost-label="' +
    i +
    '" value="' +
    esc(c.label || "") +
    '" placeholder="' +
    esc(examplesFor(cur.cat).cost) +
    '"></label><label class="f"><span>Betrag in €</span>' +
    amountInput(c, i) +
    '</label><label class="f"><span>Zahlweise</span><select data-cost-iv="' +
    i +
    '">' +
    optionsHtml(IV_NAMES, c.iv || "monatlich") +
    "</select></label>" +
    costRemoveBtn(i) +
    costPeriodFields(c, i) +
    "</div>"
  );
}
function utilityCostRow(c, i) {
  const kinds = UTILITY_KINDS.includes(c.kind) || !c.kind ? UTILITY_KINDS : [...UTILITY_KINDS, c.kind];
  return (
    '<div class="utility-row"><label class="f u-kind"><span>Art</span><select data-cost-kind="' +
    i +
    '">' +
    optionsHtml(kinds, c.kind || "Strom") +
    '</select></label><label class="f u-prov"><span>Versorger</span><input data-cost-provider="' +
    i +
    '" list="dl-providers" value="' +
    esc(c.provider || "") +
    '" placeholder="z. B. Stadtwerke"></label><label class="f u-amount"><span>Abschlag in €</span>' +
    amountInput(c, i) +
    '</label><label class="f u-iv"><span>Zahlweise</span><select data-cost-iv="' +
    i +
    '">' +
    optionsHtml(IV_NAMES, c.iv || "monatlich") +
    "</select></label>" +
    costRemoveBtn(i) +
    costPeriodFields(c, i) +
    "</div>"
  );
}
function rentTotal(list) {
  return list.filter(isRentCost).reduce((s, c) => s + monthly(c.amount, c.iv), 0);
}
function renderCostFields() {
  const wohnen = cur.cat === "Wohnen";
  $("#costHead").textContent = wohnen ? "Wohnkosten" : "Kosten (optional)";
  $("#addc").textContent = wohnen ? "+ Weitere Kosten hinzufügen" : "+ Kosten hinzufügen";
  const rows = cur.costs.map((c, i) => [c, i]);
  if (!wohnen) {
    $("#costList").innerHTML =
      rows.map(([c, i]) => genericCostRow(c, i)).join("") + (rows.length ? COST_PERIOD_HINT : "");
    return;
  }
  // Every rent part has a field; parts left empty are dropped again when saving.
  RENT_PARTS.forEach(([role, label]) => {
    if (!cur.costs.some((c) => c.role === role))
      cur.costs.push({ id: "rent-" + role, role, label, amount: "", iv: "monatlich" });
  });
  const part = (role) => cur.costs.findIndex((c) => c.role === role),
    rentField = (role, label) =>
      '<label class="f"><span>' + label + "</span>" + amountInput(cur.costs[part(role)], part(role)) + "</label>",
    utilities = cur.costs.map((c, i) => [c, i]).filter(([c]) => isUtilityCost(c)),
    others = cur.costs.map((c, i) => [c, i]).filter(([c]) => !isRentCost(c) && !isUtilityCost(c)),
    energyContracts = data.entries.filter(
      (e) => e.cat === "Vertrag" && e.objType === "Strom & Gas" && e.id !== cur.id && mo1(e) > 0,
    );
  $("#costList").innerHTML =
    '<div class="rent-box"><div class="cost-group-head">Miete an den Vermieter <small>€ pro Monat</small></div><div class="two">' +
    rentField("kaltmiete", "Kaltmiete") +
    rentField("nebenkosten", "Nebenkosten") +
    "</div>" +
    rentField("heizkosten", "Heizkosten (falls getrennt ausgewiesen)") +
    '<div class="two"><label class="f"><span>Mietbeginn</span><input type="date" data-rent-start value="' +
    esc(cur.costs[part("kaltmiete")].start || costStart(cur, cur.costs[part("kaltmiete")])) +
    '"></label><label class="f"><span>Mietende (optional)</span><input type="date" data-rent-end value="' +
    esc(cur.costs[part("kaltmiete")].end || "") +
    '"></label></div>' +
    '<div class="rent-total"><span>Warmmiete</span><b id="rentTotal">' +
    fmt(rentTotal(cur.costs)) +
    '</b></div><p class="cost-hint">Nebenkosten = monatliche Vorauszahlung für Betriebskosten laut Mietvertrag. Mieterhöhungen erscheinen später im Preisverlauf.</p></div>' +
    '<div class="cost-group-head">Direkt mit Versorgern abgerechnet</div><p class="cost-hint">Strom, Gas & Co. mit eigenem Vertrag beim Versorger – den Abschlag eintragen.</p>' +
    utilities.map(([c, i]) => utilityCostRow(c, i)).join("") +
    '<button type="button" class="add" data-add-utility>+ Versorger hinzufügen (Strom, Gas …)</button>' +
    (energyContracts.length
      ? '<p class="cost-hint warn-hint">Unter „Vertrag → Strom & Gas“ ist bereits ' +
        esc(energyContracts.map((e) => e.title).join(", ")) +
        " mit Kosten erfasst. Abschläge nur an einer Stelle eintragen, sonst zählen sie doppelt.</p>"
      : "") +
    (others.length
      ? '<div class="cost-group-head">Weitere Kosten</div>' + others.map(([c, i]) => genericCostRow(c, i)).join("")
      : "") +
    COST_PERIOD_HINT;
}
const COST_PERIOD_HINT =
  '<p class="cost-hint">Regelmäßige Kosten werden ab „Ab“ bis „Bis“ in jedem fälligen Monat automatisch unter „Finanzen“ gebucht. Bei vierteljährlichen, halbjährlichen und jährlichen Kosten bestimmt „Ab“ auch den Fälligkeitsmonat.</p>';
function readCostFields() {
  document
    .querySelectorAll("#costList [data-cost-label]")
    .forEach((el) => (cur.costs[+el.dataset.costLabel].label = el.value));
  document
    .querySelectorAll("#costList [data-cost-amount]")
    .forEach((el) => (cur.costs[+el.dataset.costAmount].amount = el.value));
  document.querySelectorAll("#costList [data-cost-iv]").forEach((el) => (cur.costs[+el.dataset.costIv].iv = el.value));
  document
    .querySelectorAll("#costList [data-cost-kind]")
    .forEach((el) => (cur.costs[+el.dataset.costKind].kind = el.value));
  document
    .querySelectorAll("#costList [data-cost-provider]")
    .forEach((el) => (cur.costs[+el.dataset.costProvider].provider = el.value.trim()));
  document
    .querySelectorAll("#costList [data-cost-start]")
    .forEach((el) => (cur.costs[+el.dataset.costStart].start = el.value));
  document
    .querySelectorAll("#costList [data-cost-end]")
    .forEach((el) => (cur.costs[+el.dataset.costEnd].end = el.value));
  // Start and end of the lease apply to all rent parts.
  const rentStart = $("#costList [data-rent-start]"),
    rentEnd = $("#costList [data-rent-end]");
  if (rentStart)
    cur.costs.filter(isRentCost).forEach((c) => {
      c.start = rentStart.value;
      c.end = rentEnd.value;
    });
  // Labels of rent parts and utilities are derived, so lists, history and the Notfallmappe show them readably.
  cur.costs.forEach((c) => {
    if (isUtilityCost(c)) c.label = utilityLabel(c);
    else if (isRentCost(c)) c.label = RENT_PARTS.find((p) => p[0] === c.role)[1];
  });
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
        esc(examplesFor(cur.cat).deadline) +
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
function applyCategoryExamples() {
  const ex = examplesFor(cur.cat);
  $("#ft").placeholder = ex.title;
  $("#fn").placeholder = ex.note;
}
// Sections of the entry sheet. New entries get the whole form; existing ones open only the section to edit.
const SHEET_SECTIONS = {
  grund: "Objektdaten",
  vertrag: "Vertrag",
  kosten: "Kosten",
  fristen: "Fristen",
  vermietung: "Vermietung",
  unterlagen: "Unterlagen",
};
let sheetSection = "";
function openSheet(e, nw, section = "") {
  cur = JSON.parse(JSON.stringify(e));
  migrateEntry(cur);
  cur.docs = cur.docs || [];
  cur.x = cur.x || {};
  cur.costs = cur.costs || [];
  assignCostRoles(cur);
  cur.deadlines = cur.deadlines || (cur.due ? [{ label: cur.dl || "", date: cur.due }] : []);
  isNew = nw;
  sheetUploads = [];
  sheetRemovals = [];
  sheetCreatedFolder = null;
  $("#sht").textContent = nw ? "Neu: " + categoryName(cur.cat) : cur.title || "Bearbeiten";
  $("#fc").innerHTML = optionsHtml(Object.keys(T), cur.cat);
  $("#ft").value = cur.title || "";
  applyCategoryExamples();
  $("#docSub").innerHTML = "";
  renderObjectSelects();
  $("#fx").innerHTML = fieldsHtml();
  $("#rentalFields").classList.toggle("hide", cur.cat !== "Immobilien");
  $("#propertyFields").classList.toggle("hide", cur.cat !== "Immobilien");
  $("#propertyUsage").value = propertyUsage(cur);
  $("#rentalActive").checked = propertyUsage(cur) === "Vermietet";
  $("#rentalDetails").classList.toggle("hide", !$("#rentalActive").checked);
  $("#rentalTenant").value = cur.rental?.tenant || "";
  $("#rentalRent").value = cur.rental?.monthlyRent ?? "";
  $("#rentalExpenses").value = cur.rental?.monthlyExpenses ?? "";
  $("#rentalDeposit").value = cur.rental?.deposit ?? "";
  $("#rentalLeaseStart").value = cur.rental?.leaseStart || "";
  $("#rentalLeaseEnd").value = cur.rental?.leaseEnd || "";
  syncContractFields();
  renderCostFields();
  renderDeadlineFields();
  renderPriceHistory();
  $("#fn").value = cur.note || "";
  $("#ff").checked = !!cur.fav;
  renderDocs();
  // Section mode: every field stays in the form (so saving keeps all data), only the chosen section is visible.
  sheetSection = !nw && SHEET_SECTIONS[section] ? section : "";
  document
    .querySelectorAll("#ov [data-sec]")
    .forEach((el) => el.classList.toggle("sec-hide", !!sheetSection && el.dataset.sec !== sheetSection));
  if (sheetSection) $("#sht").textContent = (cur.title || "Eintrag") + " · " + SHEET_SECTIONS[sheetSection];
  $("#fdel").classList.toggle("hide", nw || !!sheetSection);
  $("#ov").classList.add("on");
  $("#ov .sh").scrollTop = 0;
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
              ' verschieben">' +
              icon("move") +
              '</button><button type="button" class="ib" data-rep="' +
              i +
              '" title="Datei ersetzen" aria-label="' +
              esc(d.name) +
              ' ersetzen">' +
              icon("replace") +
              '</button><button type="button" class="ib" data-r="' +
              i +
              '" title="Aus Eintrag entfernen" aria-label="' +
              esc(d.name) +
              ' entfernen">' +
              icon("x") +
              "</button></span></div>",
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
function restoreFromTrash(key) {
  return withLoading(
    {
      title: "Stelle Eintrag wieder her",
      description: "Daten und zugehörige Dokumente werden wiederhergestellt.",
      iconName: "restore",
    },
    () => restoreFromTrashTask(key),
  );
}
async function restoreFromTrashTask(key) {
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
    // Rental bookings of a restored property follow its new id.
    if (e.id !== t.id)
      data.financeTransactions.forEach((x) => {
        if (x.propertyId !== t.id) return;
        x.propertyId = e.id;
        x.updatedAt = now;
      });
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
async function belongsToActiveDriveArea(fileId) {
  if (!folderId) return false;
  const pending = [fileId],
    visited = new Set();
  while (pending.length) {
    const id = pending.pop();
    if (id === folderId) return true;
    if (visited.has(id)) continue;
    visited.add(id);
    const info = await (await api(D + "/" + encodeURIComponent(id) + "?fields=parents")).json();
    pending.push(...(info.parents || []));
  }
  return false;
}
async function permanentlyDeleteFromTrash(key) {
  const t = (data.trash || []).find((x) => trashKey(x) === key && !x.restoredAt);
  if (!t) return;
  const docIds = [
    ...new Set(
      (t.kind === "doc"
        ? [t.id]
        : t.kind === "entry"
          ? (t.item.docs || []).map((d) => d.id)
          : t.kind === "event"
            ? (t.item.files || []).map((d) => d.id)
            : []
      ).filter(Boolean),
    ),
  ];
  if (docIds.length && !folderId) {
    showAlert(
      "Google Drive nicht verbunden",
      "Zum endgültigen Löschen der Dokumente muss Google Drive verbunden sein.",
    );
    return;
  }
  if (docIds.length && !(await ensureAuth())) return;
  const description =
    "„" +
    t.title +
    "“ und " +
    (docIds.length
      ? docIds.length + (docIds.length === 1 ? " zugehöriges Dokument" : " zugehörige Dokumente")
      : " die gespeicherten Eintragsdaten") +
    " werden dauerhaft gelöscht und können nicht wiederhergestellt werden.";
  if (!(await showDeleteDialog("Endgültig löschen?", description))) return;
  setSt("Lösche endgültig …", "busy");
  const failed = await withLoading(
    {
      title: "Lösche endgültig",
      description: "Papierkorb und Google-Drive-Dateien werden dauerhaft bereinigt.",
      iconName: "trash",
    },
    async () => {
      const failures = [];
      for (const id of docIds) {
        try {
          if (!(await belongsToActiveDriveArea(id))) {
            failures.push(id);
            continue;
          }
          await api(D + "/" + encodeURIComponent(id), { method: "DELETE" });
        } catch (e) {
          if (!/^Drive 404\b/.test(e.message || "")) failures.push(id);
        }
      }
      return failures;
    },
  );
  if (failed.length) {
    setSt("Endgültiges Löschen fehlgeschlagen", "err");
    showAlert(
      "Nicht vollständig gelöscht",
      failed.length +
        " Dokument(e) konnten wegen fehlender Berechtigung, eines anderen Datenbereichs oder eines Verbindungsfehlers nicht endgültig gelöscht werden. Der Papierkorbeintrag bleibt zur Wiederholung erhalten.",
    );
    return;
  }
  const removedKeys = new Set([
    key,
    ...(docIds.length ? (data.trash || []).filter((x) => x.kind === "doc" && docIds.includes(x.id)).map(trashKey) : []),
  ]);
  data.purgedTrash = [...new Set([...(data.purgedTrash || []), ...removedKeys])];
  data.trash = (data.trash || []).filter((x) => !removedKeys.has(trashKey(x)));
  dirty();
  setSt("Endgültig gelöscht", "ok");
  showToast("Dauerhaft gelöscht");
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
              '</button><button type="button" class="icon-btn danger" data-purge="' +
              esc(trashKey(t)) +
              '" aria-label="' +
              esc(t.title) +
              ' endgültig löschen" title="Endgültig löschen">' +
              icon("trash") +
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
  return withLoading(
    {
      title: "Lade Dokument",
      description: "Vorschau wird aus Google Drive geladen.",
      iconName: "download",
    },
    async () => {
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
        recordDeveloperLog("error", "drive", "Dokumentvorschau fehlgeschlagen.");
        $("#previewBody").innerHTML =
          '<div class="preview-msg"><b>Vorschau nicht verfügbar</b><p class="mu">Bitte prüfe die Google-Drive-Verbindung und versuche es erneut.</p></div>';
        setSt("Dokument nicht ladbar", "err");
      }
    },
  );
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
function showObjectDetail(id, { push = true } = {}) {
  if (!data.entries.some((e) => e.id === id)) return;
  if (tab !== "object") detailPreviousTab = tab;
  detailEntryId = id;
  tab = "object";
  render();
  if (push) pushHist({ tab: "object", id });
  window.scrollTo({ top: 0, behavior: "instant" });
}

$("#v-home").addEventListener(
  "toggle",
  (e) => {
    const d = e.target;
    if (!d.matches || !d.matches("details[data-fold]")) return;
    localStorage.setItem(areaStorageKey("home_folds"), JSON.stringify({ ...homeFolds(), [d.dataset.fold]: d.open }));
  },
  true,
);
$("#v-home").onclick = (e) => {
  const r = e.target.closest("[data-id]"),
    g = e.target.closest("[data-go]"),
    v = e.target.closest("[data-view]"),
    n = e.target.closest("[data-new]"),
    rm = e.target.closest("[data-dismiss-reminder]");
  if (rm) dismissReminder(rm.dataset.dismissReminder);
  else if (r) showObjectDetail(r.dataset.id);
  else if (n) newEntry(n.dataset.new);
  else if (e.target.closest("[data-customize-home]")) openLayoutDialog();
  else if (v) openView(v.dataset.view);
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
  if (e.target.closest("[data-stats-rentals]")) {
    navigateTo("rentals");
    return;
  }
  const h = e.target.closest("[data-id]");
  if (h) showObjectDetail(h.dataset.id);
};
$("#list").onclick = (e) => {
  const r = e.target.closest(".row");
  if (r) showObjectDetail(r.dataset.id);
};
$("#v-object").onclick = (e) => {
  if (e.target.closest("[data-detail-back]")) {
    navigateTo(detailPreviousTab);
    return;
  }
  const sectionButton = e.target.closest("[data-edit-section]");
  if (sectionButton) {
    const entry = data.entries.find((x) => x.id === detailEntryId);
    if (entry) openSheet(entry, false, sectionButton.dataset.editSection);
    return;
  }
  if (e.target.closest("[data-detail-delete]")) {
    deleteEntryWithConfirm(detailEntryId);
    return;
  }
  if (e.target.closest("[data-detail-rentals]")) {
    navigateTo("rentals");
    return;
  }
  const documentButton = e.target.closest("[data-detail-doc]");
  if (documentButton) {
    const entry = data.entries.find((x) => x.id === detailEntryId),
      doc = entry && (entry.docs || [])[+documentButton.dataset.detailDoc];
    if (doc) openDoc(doc);
  }
};
$("#v-rentals").onclick = async (e) => {
  if (e.target.closest("[data-rent-back]")) {
    navigateTo("properties");
    return;
  }
  const book = e.target.closest("[data-rbook]");
  if (book) {
    openFinanceTransaction("", { propertyId: book.dataset.property, type: book.dataset.rbook });
    return;
  }
  if (await handleBookingClick(e)) return;
  const detail = e.target.closest("[data-rental-detail]");
  if (detail) {
    showObjectDetail(detail.dataset.rentalDetail);
    return;
  }
  const toggle = e.target.closest("[data-rent-toggle]");
  if (toggle) {
    const entry = activeRentals().find((x) => x.id === toggle.dataset.rentToggle);
    if (!entry || !rentalMonthActive(entry.rental, rentalMonth)) return;
    entry.rental.payments = entry.rental.payments || {};
    const previous = entry.rental.payments[rentalMonth];
    entry.rental.payments[rentalMonth] =
      previous && previous.paid
        ? { paid: false, paidAt: "", updatedAt: Date.now() }
        : { paid: true, paidAt: dateKey(new Date()), amount: +entry.rental.monthlyRent || 0, updatedAt: Date.now() };
    entry.upd = entry.rental.payments[rentalMonth].updatedAt;
    entry.updatedAt = entry.upd;
    entry.updatedBy = who || "Dieses Gerät";
    saveDataLocal();
    renderRentals();
    return;
  }
};
$("#v-properties").onclick = (e) => {
  if (e.target.closest("[data-prop-back]")) navigateTo("home");
  else if (e.target.closest("[data-prop-new]")) newEntry("Immobilien");
  else if (e.target.closest("[data-prop-rentals]")) navigateTo("rentals");
  else if (e.target.closest("[data-prop-filter]")) {
    propertyViewFilter = e.target.closest("[data-prop-filter]").dataset.propFilter;
    renderProperties();
  } else {
    const r = e.target.closest(".row[data-id]");
    if (r) showObjectDetail(r.dataset.id);
  }
};
$("#v-rentals").onchange = (e) => {
  if (e.target.id !== "rentalMonth") return;
  const month = e.target.value;
  if (/^\d{4}-\d{2}$/.test(month)) {
    rentalMonth = month;
    renderRentals();
  }
};
// The booking dialog serves the household book and the rental book; financePropertyId decides which one.
// financeAutoKey is set while one month of an automatic (recurring) booking is being adjusted.
let financePropertyId = null,
  financeAutoKey = null;
function fillFinanceCategories(keep) {
  const list = financePropertyId ? RENTAL_CATEGORIES[$("#financeType").value] || [] : HOUSEHOLD_CATEGORIES,
    options = keep && !list.includes(keep) ? [...list, keep] : list;
  $("#financeCategory").innerHTML = options.map((c) => "<option>" + esc(c) + "</option>").join("");
  $("#financeCategory").value = keep && options.includes(keep) ? keep : financePropertyId ? list[0] : "Sonstiges";
}
const monthTitle = (month) =>
  new Date(+month.slice(0, 4), +month.slice(5, 7) - 1, 1).toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
function openFinanceTransaction(id = "", { propertyId = null, type = "expense", preset = null } = {}) {
  editingFinanceId = id || null;
  const transaction = data.financeTransactions.find((t) => t.id === id),
    source = transaction || preset;
  financeAutoKey = (source && source.autoKey) || null;
  financePropertyId = source ? source.propertyId || null : propertyId;
  const property = financePropertyId && data.entries.find((e) => e.id === financePropertyId);
  $("#financeType").value = (source ? source.type : type) === "income" ? "income" : "expense";
  $("#financeTitle").textContent = preset
    ? "Regelmäßige Buchung anpassen"
    : transaction
      ? "Buchung bearbeiten"
      : financePropertyId
        ? $("#financeType").value === "income"
          ? "Neue Einnahme"
          : "Neue Ausgabe"
        : "Neue Buchung";
  const context = [
    financePropertyId
      ? "Vermietung · " + (property ? property.title : "Immobilie") + " – getrennt von den Haushaltsfinanzen"
      : "",
    financeAutoKey ? "Regelmäßige Kosten: Die Änderung gilt nur für " + monthTitle(source.date) + "." : "",
  ].filter(Boolean);
  $("#financeContext").classList.toggle("hide", !context.length);
  $("#financeContext").textContent = context.join(" ");
  $("#financeDescription").value = source?.description || "";
  $("#financeDescription").placeholder = financePropertyId ? "Optional, sonst wird die Kategorie verwendet" : "";
  $("#financeAmount").value = source?.amount ?? "";
  $("#financeDate").value = source?.date || (financePropertyId ? rentalMonth + "-01" : dateKey(new Date()));
  if (!source && financePropertyId && rentalMonth === dateKey(new Date()).slice(0, 7))
    $("#financeDate").value = dateKey(new Date());
  fillFinanceCategories(source?.category || "");
  $("#financeNote").value = source?.note || "";
  $("#financeDelete").classList.toggle("hide", !transaction);
  $("#financeOv").classList.add("on");
  $("#financeDescription").focus();
}
$("#financeType").onchange = () => fillFinanceCategories($("#financeCategory").value);
// Rebuilds the automatic booking of one month from its key ("entryId:costId:YYYY-MM").
function autoBookingByKey(key) {
  const [entryId, costId, month] = key.split(":"),
    e = data.entries.find((x) => x.id === entryId),
    c = e && costItems(e).find((x) => x.id === costId);
  return c ? autoBooking(e, c, month) : null;
}
function openAutoBooking(key) {
  const b = autoBookingByKey(key);
  if (b) openFinanceTransaction("", { preset: b });
}
// Hides the automatic booking of one month; the recurring cost itself stays unchanged.
async function skipAutoBooking(key) {
  const b = autoBookingByKey(key);
  if (
    !b ||
    !(await showConfirm(
      "Diesen Monat überspringen?",
      "„" +
        b.description +
        "“ wird für " +
        monthTitle(b.date) +
        " nicht gebucht. Die regelmäßigen Kosten im Eintrag bleiben unverändert.",
      "Überspringen",
      true,
    ))
  )
    return;
  const now = Date.now(),
    stored = data.financeTransactions.find((t) => t.autoKey === key);
  const record = {
    id: "auto-" + key,
    autoKey: key,
    ...(b.propertyId ? { propertyId: b.propertyId } : {}),
    description: b.description,
    amount: b.amount,
    date: b.date,
    type: b.type,
    category: b.category,
    skipped: true,
    deletedAt: 0,
    updatedAt: now,
    updatedBy: who || "Dieses Gerät",
  };
  if (stored) Object.assign(stored, record, { id: stored.id });
  else data.financeTransactions.push(record);
  saveDataLocal();
  render();
}
async function removeFinanceTransaction(id) {
  const transaction = data.financeTransactions.find((t) => t.id === id);
  if (
    !transaction ||
    !(await showConfirm("Buchung löschen?", "Die Buchung wird aus der Monatsübersicht entfernt.", "Löschen", true))
  )
    return false;
  // An adjusted month of a recurring cost stays as "skipped", otherwise the automatic booking would come back.
  if (transaction.autoKey) transaction.skipped = true;
  else transaction.deletedAt = Date.now();
  transaction.updatedAt = Date.now();
  saveDataLocal();
  render();
  return true;
}
// Clicks on bookings are handled the same way in the household and in the rental book.
async function handleBookingClick(e) {
  const autoEdit = e.target.closest("[data-auto-edit]"),
    autoSkip = e.target.closest("[data-auto-skip]"),
    edit = e.target.closest("[data-finance-edit]"),
    remove = e.target.closest("[data-finance-remove]");
  if (autoEdit) openAutoBooking(autoEdit.dataset.autoEdit);
  else if (autoSkip) await skipAutoBooking(autoSkip.dataset.autoSkip);
  else if (edit) openFinanceTransaction(edit.dataset.financeEdit);
  else if (remove) await removeFinanceTransaction(remove.dataset.financeRemove);
  else return false;
  return true;
}
$("#v-finances").onclick = async (e) => {
  if (e.target.closest("[data-finance-back]")) {
    navigateTo("stats");
    return;
  }
  if (e.target.closest("[data-finance-rentals]")) {
    navigateTo("rentals");
    return;
  }
  if (e.target.closest("[data-finance-new]")) {
    openFinanceTransaction();
    return;
  }
  await handleBookingClick(e);
};
$("#v-finances").onchange = (e) => {
  if (e.target.id !== "financeMonth") return;
  const month = e.target.value;
  if (/^\d{4}-\d{2}$/.test(month)) {
    financeMonth = month;
    renderFinances();
  }
};
$("#financeSave").onclick = () => {
  const amount = Number($("#financeAmount").value),
    date = $("#financeDate").value,
    // Rental bookings may leave the description empty; the category then names the booking.
    description = $("#financeDescription").value.trim() || (financePropertyId ? $("#financeCategory").value : "");
  if (!description || !Number.isFinite(amount) || amount <= 0 || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    showAlert(
      "Buchung unvollständig",
      "Bitte gib eine Bezeichnung, ein gültiges Datum und einen Betrag größer als 0 ein.",
    );
    return;
  }
  const now = Date.now(),
    transaction =
      data.financeTransactions.find((t) => t.id === editingFinanceId) ||
      (financeAutoKey && data.financeTransactions.find((t) => t.autoKey === financeAutoKey));
  if (transaction) {
    Object.assign(transaction, {
      description,
      amount,
      date,
      type: $("#financeType").value,
      category: $("#financeCategory").value,
      note: $("#financeNote").value.trim(),
      updatedAt: now,
      updatedBy: who || "Dieses Gerät",
      deletedAt: 0,
      skipped: false,
    });
  } else {
    data.financeTransactions.push({
      // Adjusted months of a recurring cost get a fixed id, so two devices never create it twice.
      id: financeAutoKey ? "auto-" + financeAutoKey : "fin-" + now + "-" + Math.random().toString(36).slice(2, 8),
      ...(financeAutoKey ? { autoKey: financeAutoKey } : {}),
      ...(financePropertyId ? { propertyId: financePropertyId } : {}),
      description,
      amount,
      date,
      type: $("#financeType").value,
      category: $("#financeCategory").value,
      note: $("#financeNote").value.trim(),
      createdAt: now,
      updatedAt: now,
      updatedBy: who || "Dieses Gerät",
    });
  }
  if (financePropertyId) rentalMonth = date.slice(0, 7);
  else financeMonth = date.slice(0, 7);
  $("#financeOv").classList.remove("on");
  saveDataLocal();
  render();
};
$("#financeCancel").onclick = () => $("#financeOv").classList.remove("on");
$("#financeDelete").onclick = async () => {
  if (await removeFinanceTransaction(editingFinanceId)) $("#financeOv").classList.remove("on");
};
$("#rentalActive").onchange = () => {
  $("#propertyUsage").value = $("#rentalActive").checked ? "Vermietet" : "";
  $("#rentalDetails").classList.toggle("hide", !$("#rentalActive").checked);
};
$("#propertyUsage").onchange = () => {
  $("#rentalActive").checked = $("#propertyUsage").value === "Vermietet";
  $("#rentalDetails").classList.toggle("hide", !$("#rentalActive").checked);
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
      const blob = await withLoading(
        { title: "Lade Dokument herunter", description: d.name, iconName: "download" },
        async () => await (await api(D + "/" + d.id + "?alt=media")).blob(),
      );
      const u = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = u;
      a.download = d.name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(u), 1000);
    } catch (err) {
      recordDeveloperLog("error", "download", "Dokument-Download fehlgeschlagen.");
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
  $("#rentalFields").classList.toggle("hide", cur.cat !== "Immobilien");
  $("#propertyFields").classList.toggle("hide", cur.cat !== "Immobilien");
  cur.objType = "";
  // Empty rent fields only exist for "Wohnen"; filled ones stay as normal cost items in other categories.
  cur.costs = cur.costs.filter((c) => !isRentCost(c) || String(c.amount ?? "").trim() !== "");
  assignCostRoles(cur);
  renderCostFields();
  applyCategoryExamples();
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
  cur.costs.push({ id: "c" + Date.now(), label: "", amount: "", iv: "monatlich", start: dateKey(new Date()) });
  renderCostFields();
  [...document.querySelectorAll("#costList [data-cost-label]")].pop()?.focus();
};
$("#costList").onclick = (e) => {
  if (e.target.closest("[data-add-utility]")) {
    readCostFields();
    cur.costs.push({
      id: "c" + Date.now(),
      role: "versorger",
      kind: "Strom",
      provider: "",
      label: "Strom",
      amount: "",
      iv: "monatlich",
      start: dateKey(new Date()),
    });
    renderCostFields();
    [...document.querySelectorAll("#costList [data-cost-provider]")].pop()?.focus();
    return;
  }
  const b = e.target.closest("[data-cost-remove]");
  if (!b) return;
  readCostFields();
  cur.costs.splice(+b.dataset.costRemove, 1);
  renderCostFields();
};
// Live sum of the rent parts ("Warmmiete") while typing.
$("#costList").addEventListener("input", (e) => {
  if (!e.target.matches("[data-cost-amount]") || !$("#rentTotal")) return;
  readCostFields();
  $("#rentTotal").textContent = fmt(rentTotal(cur.costs));
});
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
    const j = await withLoading(
      { title: "Ersetze Dokument", description: f.name, iconName: "cloud-upload" },
      async () => (await up(clean, f, replaceTarget.id)).json(),
    );
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
    recordDeveloperLog("error", "upload", "Dokumentersetzung fehlgeschlagen.");
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
      const targetFolder = await withLoading(
        {
          title: "Bereite Dokumentordner vor",
          description: "Der passende Ablageordner wird geprüft.",
          iconName: "cloud",
        },
        () => docTargetFolder(cur, sub),
      );
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
      const j = await withLoading(
        { title: "Lade Dokument hoch", description: cleanName, iconName: "cloud-upload" },
        async () => (await up(cleanName, f, null, targetFolder)).json(),
      );
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
      recordDeveloperLog("error", "upload", "Dokument-Upload fehlgeschlagen.");
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
      await showConfirm(
        "Dokument löschen?",
        "Das Dokument wird beim Speichern aus diesem Eintrag entfernt und in den Google-Drive-Papierkorb verschoben. Dort ist es bis zu 30 Tage wiederherstellbar.",
        "Ja, löschen",
        true,
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
  const badPeriod = cur.costs.find((c) => String(c.amount ?? "").trim() !== "" && c.start && c.end && c.end < c.start);
  if (badPeriod) {
    showAlert(
      "Zeitraum prüfen",
      "Bei „" + (badPeriod.label || "Kosten") + "“ liegt „Bis“ vor „Ab“. Bitte die Daten korrigieren.",
    );
    return;
  }
  cur.cat = $("#fc").value;
  cur.title = $("#ft").value.trim();
  cur.objType = $("#fobj").value;
  cur.owner = $("#fown").value;
  if (cur.cat === "Immobilien") {
    cur.propertyOwnership = "Eigentum";
    cur.propertyUsage = $("#propertyUsage").value;
    const rentalValues = ["#rentalRent", "#rentalExpenses", "#rentalDeposit"].map((selector) => $(selector).value);
    if (rentalValues.some((value) => value !== "" && (!Number.isFinite(+value) || +value < 0))) {
      showAlert("Ungültige Mietdaten", "Miete, laufende Kosten und Kaution müssen gültige Beträge ab 0 sein.");
      return;
    }
    const leaseStart = $("#rentalLeaseStart").value,
      leaseEnd = $("#rentalLeaseEnd").value;
    if (leaseStart && leaseEnd && leaseEnd < leaseStart) {
      showAlert("Ungültiger Mietzeitraum", "Das Mietende darf nicht vor dem Mietbeginn liegen.");
      return;
    }
    cur.rental = {
      ...(cur.rental || {}),
      active: $("#rentalActive").checked,
      tenant: $("#rentalTenant").value.trim(),
      monthlyRent: rentalValues[0] === "" ? 0 : +rentalValues[0],
      monthlyExpenses: rentalValues[1] === "" ? 0 : +rentalValues[1],
      deposit: rentalValues[2] === "" ? 0 : +rentalValues[2],
      leaseStart,
      leaseEnd,
      payments: (cur.rental && cur.rental.payments) || {},
    };
  } else {
    // A plain "Wohnen" (or other) entry must not be moved back to "Immobilien" by moveOwnedProperty().
    delete cur.propertyOwnership;
    delete cur.propertyUsage;
    if (cur.rental) cur.rental.active = false;
  }
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
$("#fdel").onclick = () => cur && deleteEntryWithConfirm(cur.id);
// Deletes an entry (from the detail page or the sheet) with undo; documents go to the Drive trash on commit.
async function deleteEntryWithConfirm(id) {
  const stored = data.entries.find((x) => x.id === id);
  if (!stored) return;
  const docCount = (stored.docs || []).length;
  const confirmed = await showConfirm(
    "Eintrag löschen?",
    "Möchtest du „" +
      stored.title +
      "“ wirklich löschen?" +
      (docCount
        ? " Zugehörige Dokumente werden nach Ablauf der Rückgängig-Frist in den Google-Drive-Papierkorb verschoben und sind dort bis zu 30 Tage wiederherstellbar."
        : " Es sind keine Dokumente zugeordnet."),
    "Ja, löschen",
    true,
  );
  if (!confirmed) return;
  if (cur && cur.id === id) {
    // Files uploaded in this session are not part of the stored entry, so they go right away.
    sheetUploads.forEach((fid) => delDrive(fid));
    sheetUploads = [];
    sheetRemovals = [];
    closeSheet();
  }
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
}
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
  $("#cid").value = localStorage.getItem(areaStorageKey("cid")) || "";
  $("#acctInfo").classList.toggle("hide", !folderId);
  $("#acctInfo").innerHTML = folderId
    ? "<b>Angemeldet als " +
      esc(who || "Google-Konto") +
      '</b><p class="mu" style="margin:4px 0 0;font-size:13px">' +
      (isOwner
        ? "Hauptnutzer – dir gehört der Ordner „" + esc(areaFolderName()) + "“. Du kannst unten Partner einladen."
        : "Partner – gemeinsamer " +
          (activeArea === "family" ? "Familienordner" : "Haushalt") +
          (folderOwner ? " von " + esc(folderOwner) : "") +
          ".") +
      "</p>"
    : "";
  $("#cidSave").textContent = folderId ? "Neu verbinden" : "Verbinden";
  $("#shr").classList.toggle("hide", !(isOwner && folderId));
  renderPartners();
  $("#ov2").classList.add("on");
}
// Lists everyone the area's root folder is shared with (only visible for the main user).
async function renderPartners() {
  const box = $("#partnerList");
  if (!isOwner || !folderId) return;
  box.innerHTML = '<p class="mu">Freigaben werden geladen …</p>';
  try {
    const j = await (
      await api(D + "/" + folderId + "/permissions?fields=permissions(id,type,role,emailAddress,displayName)")
    ).json();
    const L = (j.permissions || []).filter((p) => p.role !== "owner");
    box.innerHTML = L.length
      ? L.map(
          (p) =>
            '<div class="settings-item"><span><b>' +
            esc(p.displayName || p.emailAddress || "Unbekanntes Konto") +
            '</b><small class="doc-meta">' +
            esc(p.emailAddress || (p.type === "anyone" ? "Jeder mit dem Link" : p.type)) +
            " · " +
            (p.role === "writer" ? "kann bearbeiten" : p.role === "reader" ? "kann nur lesen" : esc(p.role)) +
            '</small></span><button type="button" class="icon-btn danger" data-unshare="' +
            esc(p.id) +
            '" data-name="' +
            esc(p.emailAddress || p.displayName || "dieses Konto") +
            '" aria-label="Freigabe entfernen" title="Freigabe entfernen">' +
            icon("trash") +
            "</button></div>",
        ).join("")
      : '<p class="mu">Noch keine Partner eingeladen.</p>';
  } catch (e) {
    box.innerHTML = '<p class="mu">Freigaben konnten nicht geladen werden.</p>';
  }
}
$("#partnerList").addEventListener("click", async (e) => {
  const b = e.target.closest("[data-unshare]");
  if (!b) return;
  const ok = await showConfirm(
    "Freigabe entfernen?",
    b.dataset.name +
      " hat danach keinen Zugriff mehr auf den Ordner „" +
      areaFolderName() +
      "“ und kann sich mit NAR Home nicht mehr verbinden. Die Daten auf deinem Gerät und in Drive bleiben erhalten.",
    "Entfernen",
    true,
  );
  if (!ok || !(await ensureAuth())) return;
  try {
    await api(D + "/" + folderId + "/permissions/" + encodeURIComponent(b.dataset.unshare), { method: "DELETE" });
    showToast("Freigabe entfernt");
  } catch (err) {
    showAlert("Entfernen fehlgeschlagen", "Die Freigabe konnte nicht entfernt werden. Bitte später erneut versuchen.");
  }
  renderPartners();
});
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
  ["cat", "Kategorie", categoryName],
  ["propertyOwnership", "Eigentumsverhältnis"],
  ["propertyUsage", "Nutzung"],
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
  [
    "rental",
    "Vermietung",
    (v) =>
      v && v.active
        ? [
            v.tenant || "",
            fmt(+v.monthlyRent || 0),
            fmt(+v.monthlyExpenses || 0),
            v.leaseStart || "",
            v.leaseEnd || "",
          ].join(" · ")
        : "",
  ],
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
  localStorage.setItem(areaStorageKey("synced"), JSON.stringify(base));
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
  else if ($("#financeOv").classList.contains("on")) $("#financeCancel").click();
  else if ($("#ov2").classList.contains("on")) $("#cidX").click();
  else if ($("#ov").classList.contains("on")) requestCloseSheet();
});
$("#ov").onclick = (e) => {
  if (e.target === $("#ov")) requestCloseSheet();
};
$("#ov2").onclick = (e) => {
  if (e.target === $("#ov2")) $("#cidX").click();
};
$("#financeOv").onclick = (e) => {
  if (e.target === $("#financeOv")) $("#financeCancel").click();
};
$("#cidX").onclick = () => {
  $("#ov2").classList.remove("on");
  const sheet = $("#ov2 .sh");
  if (sheet) sheet.scrollTop = 0;
};
$("#cidSave").onclick = () => {
  const ownId = $("#cid").value.trim();
  // The own client ID applies to the current area only (NAR Home keeps the former key "hv_cid").
  if (ownId) localStorage.setItem(areaStorageKey("cid"), ownId);
  else localStorage.removeItem(areaStorageKey("cid"));
  localStorage.removeItem(areaStorageKey("ok"));
  delete areaAuth[activeArea];
  tc = null;
  token = null;
  tokenPromise = null;
  authExpired = false;
  folderId = null;
  fileId = null;
  isOwner = false;
  folderOwner = "";
  $("#ov2").classList.remove("on");
  const sheet = $("#ov2 .sh");
  if (sheet) sheet.scrollTop = 0;
  connect();
};
$("#shb").onclick = async () => {
  const m = $("#shm").value.trim();
  if (!m || !folderId || !isOwner) return;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) {
    showAlert("E-Mail-Adresse prüfen", "Bitte die Google-E-Mail-Adresse des Partners vollständig eintragen.");
    return;
  }
  if (!(await ensureAuth())) return;
  try {
    await api(D + "/" + folderId + "/permissions?sendNotificationEmail=true", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "user", role: "writer", emailAddress: m }),
    });
    showAlert(
      "Partner eingeladen",
      m +
        " bekommt von Google eine E-Mail. Danach auf dessen Handy NAR Home öffnen, „Mit Google Drive verbinden“ tippen und mit diesem Konto anmelden – der gemeinsame Haushalt wird automatisch gefunden.",
    );
    $("#shm").value = "";
    renderPartners();
  } catch (e) {
    showAlert("Einladung fehlgeschlagen", "Bitte die E-Mail-Adresse prüfen und erneut versuchen.");
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
  } else if (folderId && $("#st").classList.contains("ok")) logout();
  else if (folderId) {
    // Busy or error: synchronise manually.
    clearTimeout(timer);
    save({ manual: true });
  } else showToast($("#st").title);
});

$("#v-calendar").onclick = (e) => {
  const b = e.target.closest("button,[data-edit-event],[data-open-entry]");
  if (!b || Date.now() - swipedAt < 400) return;
  if (b.dataset.openEntry) {
    showObjectDetail(b.dataset.openEntry);
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
  else if (b.dataset.customizeHome) openLayoutDialog();
  else if (b.dataset.logout) logout();
  else if (b.dataset.accountConnect) connect();
  else if (b.dataset.areaSwitch) selectArea(b.dataset.areaSwitch);
  else if (b.dataset.resort) resortDrive();
  else if (b.dataset.trashTab) {
    trashTab = b.dataset.trashTab;
    renderSettings();
  } else if (b.dataset.restore) restoreFromTrash(b.dataset.restore);
  else if (b.dataset.purge) permanentlyDeleteFromTrash(b.dataset.purge);
  else if (b.dataset.themeSet) {
    localStorage.setItem(areaStorageKey("theme"), b.dataset.themeSet);
    applyTheme();
    renderSettings();
  } else if (b.dataset.backup === "json") exportJson();
  else if (b.dataset.backup === "zip") exportZip();
  else if (b.dataset.backup === "import") $("#importFile").click();
  else if (b.dataset.backup === "print") printEmergency();
  else if (b.dataset.copyVersion) copyVersionInfo();
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
  if (
    ![
      "home",
      "list",
      "object",
      "properties",
      "rentals",
      "finances",
      "shopping",
      "docs",
      "calendar",
      "settings",
      "stats",
    ].includes(nextTab)
  )
    return;
  if (nextTab === "settings" && tab !== "settings") settingsOpen = [];
  tab = nextTab;
  render();
  if (push) pushHist({ tab: nextTab });
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
$("#areaPicker").addEventListener("click", (e) => {
  const button = e.target.closest("[data-area-select]");
  if (button) selectArea(button.dataset.areaSelect);
});
$("#areaCancel").addEventListener("click", () => $("#areaPicker").classList.add("hide"));
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
  // Remembered per browser tab: was NAR Home the first page in this tab (e.g. opened from the home screen)?
  if (!(history.state && history.state.narHome))
    sessionStorage.setItem("nar_first_entry", history.length <= 1 ? "1" : "0");
  replaceHist({ tab });
  pushHist({ tab, guard: true });
} catch (e) {}
window.addEventListener("pageshow", (e) => {
  if (e.persisted) allowExit = false;
});
function leaveApp() {
  allowExit = true;
  const depth = histDepth();
  if (sessionStorage.getItem("nar_first_entry") !== "1") {
    // A page lies before NAR Home in this tab: go straight back to it.
    history.go(-(depth + 1));
    return;
  }
  // Opened as first page (installed app, new tab): browsers do not let a page close itself, so jump to the
  // first app entry – the next Back press then closes NAR Home.
  try {
    window.close();
  } catch (e) {}
  if (depth > 0) history.go(-depth);
  showToast("Zum Schließen jetzt noch einmal Zurück drücken", { ms: 5000 });
  document.addEventListener(
    "pointerdown",
    () => {
      if (!allowExit) return;
      allowExit = false;
      pushHist({ tab, guard: true });
    },
    { once: true, capture: true },
  );
}
window.addEventListener("popstate", (e) => {
  if (allowExit) return;
  if (developerMode) {
    developerMode = false;
    render();
    pushHist({ tab, guard: true });
    return;
  }
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
    else if (modal.id === "financeOv") $("#financeCancel").click();
    else if (modal.id === "ov2") $("#cidX").click();
    else requestCloseSheet();
    pushHist({ tab });
    return;
  }
  if (tab !== "home") {
    const backTab =
      tab === "object" ? detailPreviousTab : tab === "rentals" ? "properties" : tab === "finances" ? "stats" : "home";
    navigateTo(backTab, { push: false });
    pushHist({ tab: backTab, guard: true });
    return;
  }
  pushHist({ tab: "home", guard: true });
  const otherArea = activeArea === "family" ? "home" : "family",
    otherLabel = otherArea === "family" ? "NAR Family" : "NAR Home";
  showActionDialog({
    title: areaLabel() + " verlassen?",
    status: syncSummary(),
    cards: [
      {
        value: "switch",
        icon: otherArea === "family" ? "area-family" : "area-home",
        title: "Zu " + otherLabel + " wechseln",
        sub: otherArea === "family" ? "YOUR FAMILY. UNDER CONTROL." : "YOUR HOME. UNDER CONTROL.",
        brand: true,
      },
    ],
    confirmText: "Verlassen",
  }).then((choice) => {
    if (choice === "ok") exitApp();
    else if (choice === "switch") selectArea(otherArea);
  });
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
    app: areaLabel(),
    format: 1,
    exportedAt: new Date().toISOString(),
    data: {
      entries: data.entries,
      events: data.events,
      settings: data.settings,
      del: data.del || [],
      deletedEvents: data.deletedEvents || [],
      trash: data.trash || [],
      purgedTrash: data.purgedTrash || [],
      financeTransactions: data.financeTransactions || [],
      shoppingItems: data.shoppingItems || [],
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
  localStorage.setItem(areaStorageKey("last_backup"), String(Date.now()));
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
    data = merge(
      {
        entries,
        events,
        financeTransactions: imp.financeTransactions || [],
        shoppingItems: imp.shoppingItems || [],
        settings: data.settings,
        del: [],
        deletedEvents: [],
      },
      data,
    );
  } else {
    const keep = new Set(entries.map((e) => e.id)),
      keepEv = new Set(events.map((e) => e.id));
    entries.forEach((e) => (e.upd = now));
    events.forEach((e) => (e.updatedAt = now));
    const restoredFinance = (imp.financeTransactions || []).map((t) => ({ ...t, updatedAt: now }));
    const restoredFinanceIds = new Set(restoredFinance.map((t) => t.id));
    const restoredShopping = (imp.shoppingItems || []).map((item) => ({ ...item, updatedAt: now }));
    const restoredShoppingIds = new Set(restoredShopping.map((item) => item.id));
    data = {
      ...data,
      entries,
      events,
      financeTransactions: [
        ...restoredFinance,
        ...data.financeTransactions
          .filter((t) => !restoredFinanceIds.has(t.id))
          .map((t) => ({ ...t, deletedAt: now, updatedAt: now })),
      ],
      shoppingItems: [
        ...restoredShopping,
        ...data.shoppingItems
          .filter((item) => !restoredShoppingIds.has(item.id))
          .map((item) => ({ ...item, deletedAt: now, updatedAt: now })),
      ],
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
    '<header class="pm-head"><h1>' +
    esc(areaLabel()) +
    " – Notfallmappe</h1><p>Stand: " +
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
            esc(categoryName(x.e.cat)) +
            ")</td></tr>",
        )
        .join("") +
      "</tbody></table>";
  Object.keys(T).forEach((c) => {
    const L = E.filter((e) => e.cat === c).sort((a, b) => a.title.localeCompare(b.title, "de"));
    if (!L.length) return;
    h +=
      "<h2>" +
      esc(categoryName(c)) +
      "</h2>" +
      L.map((e) => {
        const x = e.x || {},
          rows = [];
        if (e.objType) rows.push(["Art", e.objType]);
        if (e.cat === "Immobilien" && propertyUsage(e)) rows.push(["Nutzung", propertyUsage(e)]);
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
const themeSetting = () => localStorage.getItem(areaStorageKey("theme")) || "auto";
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
  localStorage.setItem(areaStorageKey("theme"), document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  applyTheme();
  if (tab === "settings") renderSettings();
};
// The gear in the header opens the settings (also from the developer console); inside them it scrolls to the top.
$("#settingsBtn").onclick = () => {
  if (tab === "settings" && !developerMode) window.scrollTo({ top: 0, behavior: "smooth" });
  else {
    developerMode = false;
    navigateTo("settings");
  }
};
// "Nach oben": appears on long pages once scrolled down more than a screen height and jumps back to the top.
const updateToTop = () => $("#toTop").classList.toggle("on", window.scrollY > Math.max(600, window.innerHeight));
window.addEventListener("scroll", updateToTop, { passive: true });
window.addEventListener("resize", updateToTop);
$("#toTop").onclick = () =>
  window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
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
    esc(categoryName(cat)) +
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
              .join(" · ") || categoryName(cat),
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
        // An existing object opens its detail page; every card there has its own edit button.
        showObjectDetail(o.dataset.obj);
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
    orderedCats()
      .map(
        (c) =>
          '<button type="button" class="tile" data-pick="' +
          esc(c) +
          '"><span class="ic">' +
          icon(T[c].i) +
          "</span><b>" +
          esc(categoryName(c)) +
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
      if (
        !(await showConfirm(
          "Termin löschen?",
          "Möchtest du „" + (ev.title || "Termin") + "“ am " + fmtD(key) + " wirklich löschen?",
          "Ja, löschen",
          true,
        ))
      )
        return false;
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
  if (
    !(await showConfirm(
      isRecurring(ev) ? "Terminserie löschen?" : "Termin löschen?",
      "Möchtest du „" +
        (ev.title || "Termin") +
        "“ wirklich löschen?" +
        ((ev.files || []).length
          ? " Zugehörige Anhänge werden nach Ablauf der Rückgängig-Frist in den Google-Drive-Papierkorb verschoben und sind dort bis zu 30 Tage wiederherstellbar."
          : " Es sind keine Anhänge zugeordnet."),
      "Ja, löschen",
      true,
    ))
  )
    return false;
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
recordDeveloperLog("info", "system", areaLabel() + " gestartet · Sprache " + (navigator.language || "unbekannt"));
updateAreaBrand();
if (connectedAreas.length !== 1) openAreaPicker(false);
render();
checkReminders();
setInterval(checkReminders, 60000);
// While the app is open and visible, changes from the other device arrive about once a minute.
setInterval(backgroundSync, 60000);
// Makes NAR Home installable as an app (PWA) and lets it start without a connection.
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost"))
  navigator.serviceWorker.register("sw.js?v=" + APP_VERSION).catch(() => {});
