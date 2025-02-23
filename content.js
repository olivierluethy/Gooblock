// List of Google URLs to check
const GOOGLE_HOME_URLS = [
  "https://www.google.com/",
  "https://www.google.ch/",
  "https://www.google.fr/",
  "https://www.google.de/",
  "https://www.google.com/webhp?",
  "https://www.google.ch/webhp?",
  "https://www.google.fr/webhp?",
  "https://www.google.de/webhp?",
];

// List of Google search page URLs
const SEARCH_URLS = [
  "https://www.google.com/search?",
  "https://www.google.ch/search?",
  "https://www.google.fr/search?",
  "https://www.google.de/search?",
];

// Elements to hide on search pages
const ELEMENTS_TO_HIDE = {
  topNews: ".VNzqVe .e6hL7d > div:nth-child(2)", // News section
  topSocial: ".VNzqVe .e6hL7d > div:nth-child(5)", // Social section
  xpost: ".g.eejeod", // X posts
};

// Sections to hide based on their heading text and parent depth
const SECTIONS_TO_HIDE = [
  {
    texts: [
      "weitere fragen",
      "people also ask",
      "recherches associées",
      "autres questions",
    ],
    depth: 5,
  },
  { texts: ["schlagzeilen", "top stories", "à la une"], depth: 5 },
  { texts: ["Posts auf X"], depth: 12 },
  { texts: ["videos", "vidéos"], depth: 6 },
  { texts: ["Wird auch oft gesucht"], depth: 9 },
  {
    texts: [
      "andere suchten auch nach",
      "people also search for",
      "les internautes recherchent aussi",
    ],
    depth: 6,
  },
];

// Check if the current page is a Google search page
function isSearchPage() {
  return SEARCH_URLS.some((url) => window.location.href.startsWith(url));
}

// Check if the current page is a Google homepage
function isGoogleHomePage() {
  return GOOGLE_HOME_URLS.some((url) => window.location.href.startsWith(url));
}

// Hide a single element by its CSS selector
function hideElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = "none";
  }
}

// Hide a parent element by going up a specified number of levels
function hideParentElement(startElement, levelsUp) {
  let currentElement = startElement;
  for (let i = 0; i < levelsUp && currentElement; i++) {
    currentElement = currentElement.parentElement;
  }
  if (currentElement) {
    currentElement.style.display = "none";
  }
}

// Hide sections based on their heading text
function hideSectionByHeading(texts, depth) {
  const headings = document.querySelectorAll('div[role="heading"]');
  for (const heading of headings) {
    const span = heading.querySelector("span");
    if (
      span &&
      texts.some(
        (text) => text.toLowerCase() === span.textContent.toLowerCase()
      )
    ) {
      hideParentElement(heading, depth);
      return; // Stop after hiding the first match
    }
  }
}

// Main function to clean up the page
function cleanUpPage() {
  // If on a Google homepage, hide the .UUbT9 element
  if (isGoogleHomePage()) {
    const searchReco = document.querySelector(".aajZCb");
    if (searchReco) {
      searchReco.style.display = "none";
    }
    const searchReco2 = document.querySelector(".LRZwuc");
    if (searchReco2) {
      searchReco2.style.display = "none";
    }
  }

  // If on a search page, hide unwanted elements and sections
  if (isSearchPage()) {
    // Hide specific elements like news, social posts, etc.
    Object.values(ELEMENTS_TO_HIDE).forEach((selector) =>
      hideElement(selector)
    );

    // Hide a specific element by ID if it exists
    hideElement("#_WzW2Z-zoBt2B9u8Pga3zgAk_3");

    // Hide sections based on their headings
    SECTIONS_TO_HIDE.forEach((section) => {
      hideSectionByHeading(section.texts, section.depth);
    });

    // Special case: Hide a section linked to an anchor with "Weitere Informationen"
    const anchor = document.querySelector("a[href]");
    if (anchor && anchor.textContent.trim() === "Weitere Informationen") {
      hideParentElement(anchor, 3); // Go up 3 levels and hide
    }
  }
  peopleAlsoSearchForInENG();
  // Funktion ausführen
  hideSeventhParentDiv();
  // Funktion ausführen
  hideSeventhParentDiv2();
  hideSeventhParentDiv3();
}

// Funktion zum Verstecken des 7. übergeordneten divs
// Special FOR ENGLISH LANGAUGE PART
function hideSeventhParentDiv() {
  // Suche nach allen Elementen mit role="heading"
  const headings = document.querySelectorAll('div[role="heading"]');

  for (const heading of headings) {
    // Prüfe, ob ein span mit einem inneren span "What people are saying" existiert
    const outerSpan = heading.querySelector("span");
    if (outerSpan) {
      const innerSpan = outerSpan.querySelector("span");
      if (
        innerSpan &&
        innerSpan.textContent.trim() === "What people are saying"
      ) {
        let currentElement = heading;

        // Gehe 7 Ebenen nach oben
        for (let i = 0; i < 7; i++) {
          currentElement = currentElement.parentElement;
          if (!currentElement) {
            console.log(`Kein Eltern-Element in Ebene ${i + 1} gefunden.`);
            return;
          }

          // Ebene 4: Erwarte ein g-section-with-header
          if (i === 3) {
            // Ebene 4 (0-basiert: 0, 1, 2, 3)
            if (
              currentElement.tagName.toLowerCase() !== "g-section-with-header"
            ) {
              console.log("Ebene 4 ist kein g-section-with-header.");
              return;
            }
            console.log("Ebene 4: g-section-with-header gefunden.");
          }
          // Ebenen 5-7 sollten divs sein (oder zumindest Ebene 7)
          else if (i === 6 && currentElement.tagName.toLowerCase() !== "div") {
            // Ebene 7
            console.log("Ebene 7 ist kein div.");
            return;
          }
        }

        // Setze das 7. übergeordnete Element auf display: none
        currentElement.style.display = "none";
        console.log(
          "Das 7. übergeordnete div wurde auf display: none gesetzt."
        );
        return;
      }
    }
  }
  console.log("Kein passendes heading mit 'What people are saying' gefunden.");
}

// Funktion zum Verstecken des 7. übergeordneten divs
// Special for English langauge
function hideSeventhParentDiv2() {
  // Suche nach allen Elementen mit role="heading"
  const headings = document.querySelectorAll('div[role="heading"]');

  for (const heading of headings) {
    // Prüfe, ob ein span mit einem inneren span existiert
    const outerSpan = heading.querySelector("span");
    if (outerSpan) {
      const innerSpan = outerSpan.querySelector("span");
      if (innerSpan) {
        // Prüfe, ob der Text mit "Latest posts from" beginnt
        const textContent = innerSpan.textContent.trim();
        if (textContent.startsWith("Latest posts from")) {
          let currentElement = heading;

          // Gehe 7 Ebenen nach oben
          for (let i = 0; i < 7; i++) {
            currentElement = currentElement.parentElement;
            if (!currentElement) {
              console.log(`Kein Eltern-Element in Ebene ${i + 1} gefunden.`);
              return;
            }

            // Ebene 4: Erwarte ein g-section-with-header
            if (i === 3) {
              // Ebene 4 (0-basiert: 0, 1, 2, 3)
              if (
                currentElement.tagName.toLowerCase() !== "g-section-with-header"
              ) {
                console.log("Ebene 4 ist kein g-section-with-header.");
                return;
              }
              console.log("Ebene 4: g-section-with-header gefunden.");
            }
            // Ebene 7 sollte ein div sein
            else if (
              i === 6 &&
              currentElement.tagName.toLowerCase() !== "div"
            ) {
              console.log("Ebene 7 ist kein div.");
              return;
            }
          }

          // Setze das 7. übergeordnete Element auf display: none
          currentElement.style.display = "none";
          console.log(
            `Das 7. übergeordnete div für "${textContent}" wurde auf display: none gesetzt.`
          );
          return;
        }
      }
    }
  }
  console.log("Kein passendes heading mit 'Latest posts from ...' gefunden.");
}

// Run the cleanup every 500ms after an initial delay of 500ms
setTimeout(() => {
  setInterval(cleanUpPage, 500);
}, 500);

// Versteckt das 7. übergeordnete div eines headings mit "What people are saying"
// Special for english langauge
function peopleAlsoSearchForInENG() {
  // Alle Elemente mit role="heading" finden
  const headings = document.querySelectorAll(
    'div[role="heading"][aria-level="3"]'
  );

  // Durch jedes heading iterieren
  for (const heading of headings) {
    // Inneres span suchen und prüfen, ob der Text passt
    const innerSpan = heading.querySelector("span");
    if (
      innerSpan &&
      innerSpan.textContent.trim() === "People also search for"
    ) {
      let currentElement = heading;

      // 7 Ebenen nach oben navigieren und prüfen, ob alle divs sind
      for (let i = 0; i < 5; i++) {
        currentElement = currentElement.parentElement;
        if (!currentElement || currentElement.tagName.toLowerCase() !== "div") {
          console.log(`Kein div in Ebene ${i + 1} gefunden.`);
          return;
        }
      }

      // Das 7. div verstecken
      currentElement.style.display = "none";
      console.log("Das 7. übergeordnete div wurde versteckt.");
      return; // Abbruch nach erstem Treffer
    }
  }

  // Meldung, wenn nichts gefunden wurde
  console.log("Kein heading mit 'What people are saying' gefunden.");
}
// Versteckt das 7. übergeordnete div eines headings mit "What people are saying"
// spcial for french LANGAUGE
function hideSeventhParentDiv3() {
  // Alle Elemente mit role="heading" finden
  const headings = document.querySelectorAll('div[role="heading"][aria-level="2"]');
  
  // Durch jedes heading iterieren
  for (const heading of headings) {
    // Inneres span suchen und prüfen, ob der Text passt
    const innerSpan = heading.querySelector("span");
    if (innerSpan && innerSpan.textContent.trim() === "Recherches associées") {
      let currentElement = heading;
      
      // 7 Ebenen nach oben navigieren und prüfen, ob alle divs sind
      for (let i = 0; i < 3; i++) {
        currentElement = currentElement.parentElement;
        if (!currentElement || currentElement.tagName.toLowerCase() !== "div") {
          console.log(`Kein div in Ebene ${i + 1} gefunden.`);
          return;
        }
      }
      
      // Das 7. div verstecken
      currentElement.style.display = "none";
      console.log("Das 7. übergeordnete div wurde versteckt.");
      return; // Abbruch nach erstem Treffer
    }
  }
  
  // Meldung, wenn nichts gefunden wurde
  console.log("Kein heading mit 'What people are saying' gefunden.");
}