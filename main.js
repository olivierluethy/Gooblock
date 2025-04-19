const intervalId = setInterval(() => {
  /* Entferne Google Suchempfehlungen im Google Such Input Feld */
  searchFieldRecoClear();
  const navigation = document.querySelector("[role='navigation']");
  const listDiv = navigation.querySelector("div[role='list']");
  if (listDiv && listDiv.children.length > 0) {
    const firstChild = listDiv.children[0];

    if (firstChild.getAttribute("role") === "listitem") {
      const anchor = firstChild.querySelector("a");

      if (anchor && !anchor.hasAttribute("href")) {
        // console.log("Du befindest dich im 'Alle' Bereich.");
        all();
      }
    }
  } else {
    /* 
    Innerhalb dieses Elements befindet sich kein Element mit role='list', 
    sondern eine Navigation, aber oben wird geprüft, ob sich innerhalb von role='navigation' diese Liste befindet, 
    um zwischen Hauptseite und News zu unterscheiden. 
    */
    // console.log("Your within the news");
    news();
  }
}, 1000);
