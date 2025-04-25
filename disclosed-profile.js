function disclosedProfile() {
  /* Bilderpresentation dieser Person nach dessen Suche direkt unter ihrem Namen */
  const container = document.querySelector("div[role='complementary']");

  if (container?.children[0]?.children[0]) {
    const imagePresentation = container.children[0].children[0];

    for (let i = imagePresentation.children.length - 1; i >= 0; i--) {
      const child = imagePresentation.children[i];
      const links = child.querySelectorAll("a");

      // Ausgabe aller Links innerhalb dieses child-Elements
      console.log(`Element #${i} enthält ${links.length} Link(s):`);
      links.forEach((link, index) => {
        console.log(`  Link ${index + 1}: ${link.getAttribute("href")}`);
      });

      // Suche nach einem gültigen Link, der mit "/search?" beginnt
      const validLinkFound = Array.from(links).some((link) =>
        link.getAttribute("href")?.startsWith("/search?")
      );

      // Wenn ein Link vorhanden ist, aber keiner mit "/search?" beginnt → verstecken
      if (links.length > 0 && !validLinkFound) {
        child.style.display = "none";
        console.log(`  ➤ Element #${i} wurde versteckt.`);
      } else {
        console.log(`  ➤ Element #${i} bleibt sichtbar.`);
      }
    }
  }

  /* Remove all distrative feature inside of main page after search has been made */
  let cast = document.getElementById("kp-wp-tab-overview");
  if (cast) {
    // Durchlaufe jedes Kinder-Element von `cast`
    Array.from(cast.children).forEach((child) => {
      // Finde alle <a> Elemente innerhalb des aktuellen Kindes
      const links = child.querySelectorAll("a");

      // Wenn keine Links vorhanden sind, überspringe das Element
      if (links.length === 0) return;

      // Extrahiere alle href-Werte in ein Array
      const hrefs = Array.from(links).map((link) => link.getAttribute("href"));

      // Prüfe, ob alle URLs den gleichen Basis-Pfad haben
      const basePaths = hrefs.map((href) => {
        if (!href) return null;
        // Extrahiere den Basis-Pfad (z.B. "google.com" aus "google.com/blabla")
        const urlMatch = href.match(/^https?:\/\/[^/]+/);
        let basePath = urlMatch ? urlMatch[0] : href;
        // Behandle x.com und twitter.com als gleich
        if (basePath === "https://x.com" || basePath === "http://x.com") {
          basePath = "https://twitter.com";
        }
        return basePath;
      });

      // Prüfe, ob alle nicht-null Basis-Pfade gleich sind
      const allSameBase = basePaths.every(
        (path, _, arr) => path === null || arr[0] === null || path === arr[0]
      );

      // Finde div mit aria-level="2" und role="heading"
      const headingDiv = child.querySelector(
        'div[aria-level="2"][role="heading"]'
      );

      // Entscheide, ob das Element entfernt werden soll
      if (headingDiv) {
        // Entferne das Element, wenn das headingDiv existiert, unabhängig davon
        // ob die URLs gleich oder unterschiedlich sind
        child.remove();
      }
      // Wenn alle URLs den gleichen Basis-Pfad haben und kein headingDiv existiert,
      // bleibt das Element erhalten
    });
  }
  /* Zum überprüfen welche Option bei den Buttons von einem Profil ausgewählt wurde um direkt Massnahmen ergreifen zu können */
  // Alle Elemente auswählen, deren ID mit "kp-wp-tab-" beginnt
  // Alle Teile in einem Array speichern
  const parts = [
    "kp-wp-tab-PersonMovie",
    "kp-wp-tab-g:PeoplePersonEducation",
    "kp-wp-tab-default_tab:kc:/book/author:books only",
    "kp-wp-tab-ActorSong",
    "kp-wp-tab-OsrpAwards",
    "kp-wp-tab-PeoplePerson",
    "kp-wp-tab-OrgOverview",
    "kp-wp-tab-TVShows",
    "kp-wp-tab-PersonAlbum",
    "kp-wp-tab-Event",
    "kp-wp-tab-SportsCareer",
    "kp-wp-tab-Publications",
    "kp-wp-tab-RelatedEntities",
  ];

  parts.forEach((partId) => {
    let part = document.getElementById(partId);
    if (part && part.children.length > 1) {
      part = part.children[1];
      // Durchlaufe jedes Kinder-Element von `part`
      Array.from(part.children).forEach((child) => {
        // Finde alle <a> Elemente innerhalb des aktuellen Kindes
        const links = child.querySelectorAll("a");

        // Wenn keine Links vorhanden sind, überspringe das Element
        if (links.length === 0) return;

        // Extrahiere alle href-Werte in ein Array
        const hrefs = Array.from(links).map((link) =>
          link.getAttribute("href")
        );

        // Prüfe, ob alle URLs den gleichen Basis-Pfad haben
        const basePaths = hrefs.map((href) => {
          if (!href) return null;
          // Extrahiere den Basis-Pfad (z.B. "google.com" aus "google.com/blabla")
          const urlMatch = href.match(/^https?:\/\/[^/]+/);
          let basePath = urlMatch ? urlMatch[0] : href;
          // Behandle x.com und twitter.com als gleich
          if (basePath === "https://x.com" || basePath === "http://x.com") {
            basePath = "https://twitter.com";
          }
          return basePath;
        });

        // Prüfe, ob alle nicht-null Basis-Pfade gleich sind
        const allSameBase = basePaths.every(
          (path, _, arr) => path === null || arr[0] === null || path === arr[0]
        );

        // Finde div mit aria-level="2" und role="heading"
        const headingDiv = child.querySelector(
          'div[aria-level="2"][role="heading"]'
        );

        // Entscheide, ob das Element entfernt werden soll
        if (headingDiv) {
          // Entferne das Element, wenn das headingDiv existiert
          child.remove();
        } else if (links.length > 1 && !allSameBase) {
          // Entferne das Element, wenn mehrere unterschiedliche URLs vorhanden sind
          child.remove();
        }
      });
    }
  });

  /* Remove related people */
  const comp = document.querySelector(
    [5, 6].map((n) => `div[role='complementary']:nth-child(${n})`).join(", ")
  );

  if (comp) {
    Array.from(comp.children).forEach((child) => {
      if (
        child.querySelector('div[aria-level="3"][role="heading"]') &&
        child.querySelector('div[role="list"]') &&
        child.querySelector('div[role="listitem"]')
      ) {
        child.remove();
      }
    });
  }
}
