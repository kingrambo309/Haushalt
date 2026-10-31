# NAR Home

NAR Home ist eine statische, mobile Web-App (PWA). Die Anwendung kann über GitHub Pages betrieben werden; Daten und Dokumente werden lokal zwischengespeichert und bei verbundener Anmeldung mit Google Drive synchronisiert.

## Datenbereiche

Beim Start kann zwischen NAR Home und NAR Family gewählt werden. NAR Home behält seine bestehenden lokalen Daten- und Synchronisationsschlüssel; NAR Family verwendet eigene `hv_family_*`-Schlüssel. Auch Erinnerungen, Darstellung und Berechtigungsrolle werden je Bereich getrennt. Das Google-Anmeldekonto und die OAuth-Clientkonfiguration bleiben geräteweit. Die Bereiche verwenden getrennte Google-Drive-Stammordner („Haushalt“ bzw. „Familienverwaltung“). Der Familienordner wird nicht automatisch angelegt; fehlt er oder sind mehrere passende Ordner erreichbar, wird keine Ablage ausgewählt.

Die Auswahl ist keine Zugriffssicherung. GitHub Pages und der JavaScript-Code sind öffentlich; tatsächliche Cloud-Zugriffe werden ausschließlich von Google Drive und dessen Berechtigungen durchgesetzt. Diese statische Anwendung kann weder serverseitige Autorisierung noch zuverlässige Konfliktsperren für gleichzeitige Bearbeitungen bereitstellen.

Automatische Synchronisation (jede Minute, nach Änderungen und beim Zurückkehren zur App) läuft ohne Ladeoverlay. Ein Klick auf die Statusampel startet bei bestehender Verbindung einen manuellen Abgleich mit Ladeanzeige. Die Statusampel und Fehlermeldungen bleiben auch bei automatischer Synchronisation verfügbar.

## Daten und Papierkorb

Das bestehende Datenformat 2 bleibt kompatibel. `purgedTrash` ist ein optionaler Synchronisationsmarker, der endgültig entfernte Papierkorbeinträge auf anderen Geräten ebenfalls entfernt. Bestehende Geräte sollten die aktuelle App-Version laden, bevor gemeinsam endgültige Löschungen vorgenommen werden.

Einträge und Termine können drei Sekunden lang rückgängig gemacht werden. Zugeordnete Dateien werden beim endgültigen Löschen eines Papierkorbeintrags nur dann über die Google Drive API dauerhaft gelöscht, wenn ihre Drive-Elternkette zum Stammordner des aktiven Bereichs gehört. Das ist irreversibel und hängt von den tatsächlichen Drive-Berechtigungen ab; bei einem Berechtigungs- oder Verbindungsfehler bleibt der Eintrag zur Wiederholung im Papierkorb.

## Objekte, Vermietung und Finanzen

Einträge lassen sich als Detailseite mit Stammdaten, Kosten, Fristen, Notizen und Unterlagen öffnen. Wohneinträge können als Mietobjekte geführt werden; dazu lassen sich Mieter, Kaltmiete, laufende Kosten, Kaution und Mietzeitraum erfassen sowie Zahlungseingänge monatsweise markieren. Das Einnahmen- und Ausgabenbuch ist manuell: Es gibt keinen Bankimport, keine automatische Kontenabstimmung und keine Steuer- oder Buchhaltungsfunktion. Buchungen und Mietdaten werden in der bestehenden Drive-Datei mitgesichert; Finanzbuchungen sind außerdem im JSON-/ZIP-Backup enthalten.

Die Monatsübersicht ist eine private Haushaltsplanung, keine rechtsverbindliche Nebenkostenabrechnung. Die monatliche Mieteingangserfassung ist ein einfacher Status pro Objekt und Monat, keine Teilzahlungs- oder Mahnverwaltung. Weil die App statisch auf GitHub Pages läuft, gibt es keine serverseitigen Benutzerkonten, Sitzungsverwaltung, Zugriffskontrolle oder zuverlässigen Bearbeitungssperren. Google Drive setzt nur den Zugriff auf die Dateien durch; gleichzeitige Änderungen können sich weiterhin überschneiden.

## Developer-Konsole

Die Konsole wird durch fünf schnelle Betätigungen des Logos geöffnet. Sie ist nur versteckt, nicht zugriffsgeschützt. Protokolle bleiben im Arbeitsspeicher des aktuellen Tabs, sind auf 200 Einträge begrenzt und dürfen keine Zugangsdaten oder Dokumentinhalte enthalten. Die Konsole ist deshalb keine Sicherheits- oder Überwachungsfunktion.

## Entwicklung

Es gibt derzeit keine separate Build-Konfiguration. JavaScript-Syntax lässt sich mit `node --check app.js` prüfen; `git diff --check` prüft Änderungen auf Whitespace-Fehler. `node --test tests/sync.test.js` prüft die Ladeanzeige bei automatischer und manueller Synchronisation.