const intervalId = setInterval(() => {
  try {
    // Entferne Google Suchempfehlungen im Google Such Input Feld
    if (typeof searchFieldRecoClear === "function") {
      searchFieldRecoClear();
    } else {
      console.warn("searchFieldRecoClear function is not defined");
    }

    const navigation = document.querySelector("[role='navigation']");

    if (!navigation) {
      console.warn("Navigation element with role='navigation' not found.");
      return;
    }

    const listDiv = navigation.querySelector("div[role='list']");

    if (listDiv && listDiv.children.length > 0) {
      const firstChild = listDiv.children[0];

      if (firstChild && firstChild.getAttribute("role") === "listitem") {
        const anchor = firstChild.querySelector("a");

        if (anchor && !anchor.hasAttribute("href")) {
          if (typeof all === "function") {
            all();
          } else {
            console.warn("Function 'all' is not defined");
          }
        }
      }
    } else {
      // Element mit role='list' nicht vorhanden -> vermutlich News-Bereich
      /* 
      Innerhalb dieses Elements befindet sich kein Element mit role='list', 
      sondern eine Navigation, aber oben wird geprüft, ob sich innerhalb von role='navigation' diese Liste befindet, 
      um zwischen Hauptseite und News zu unterscheiden. 
      */
      if (typeof news === "function") {
        news();
      } else {
        console.warn("Function 'news' is not defined");
      }
    }
  } catch (error) {
    console.error("Error in interval handler:", error);
  }
}, 1000);
