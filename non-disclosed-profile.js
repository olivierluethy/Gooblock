function nonDisclosedProfile() {
  /* Remove all distractive feature inside of non disclosed profile search */
  let non = document.querySelector("[data-async-context^='query']");
  if (non) {
    // Durchlaufe jedes Kinder-Element von `cast`
    Array.from(non.children).forEach((child) => {
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
        child.style.display = "none";
      } else if (links.length > 1 && !allSameBase) {
        // Entferne das Element, wenn mehrere unterschiedliche URLs vorhanden sind
        child.style.display = "none";
      }
    });
  }
  /* Remove showing what get's searched to */
  let bres = document.getElementById("bres");
  if (bres) {
    bres.remove();
  }
  /* Right side recommendations blocking */
  let overview = document.getElementById("kp-wp-tab-overview");
  if (overview) {
    Array.from(overview.children).forEach((child) => {
      // Check if both conditions are true
      if (
        child.querySelector('div[aria-level="3"][role="heading"]') &&
        child.querySelector('div[role="list"]')
      ) {
        // Add the code you want to run when both conditions are true
        // console.log("Found a matching child:", child);
        child.remove();
      }
    });
  }
}
