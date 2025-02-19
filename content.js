// Constants for URL checks
const GOOGLE_HOME_URLS = [
  "https://www.google.com/",
  "https://www.google.ch/",
  "https://www.google.fr/",
  "https://www.google.de/",
];

const SEARCH_URLS = [
  "https://www.google.com/search?q",
  "https://www.google.fr/search?q",
  "https://www.google.de/search?q",
  "https://www.google.ch/search?q",
];

const REDIRECT_URLS = [
  "https://www.google.com/search?sca_esv",
  "https://www.google.fr/search?sca_esv",
  "https://www.google.de/search?sca_esv",
  "https://www.google.ch/search?sca_esv",
];

const SELECTORS = {
  topNews: ".VNzqVe .e6hL7d > div:nth-child(2)",
  topSocial: ".VNzqVe .e6hL7d > div:nth-child(5)",
  xpost: ".g.eejeod",
};

// Function to check if current URL should trigger a redirect
const shouldRedirect = () =>
  REDIRECT_URLS.some((url) => window.location.href.startsWith(url));

// Function to check if current URL is for a search page where elements should be removed
const isSearchPage = () =>
  SEARCH_URLS.some((url) => window.location.href.startsWith(url));

// Function to check if current URL is a Google home page or other Google URL not to be modified
const isGoogleURL = () =>
  GOOGLE_HOME_URLS.some((url) => window.location.href.startsWith(url));

// Function to hide elements based on selectors
const hideElements = (selector) => {
  const element = document.querySelector(selector);
  if (element) element.style.display = "none";
};

// Function to hide parent elements of a specified depth
const hideParent = (element, depth) => {
  let parent = element;
  for (let i = 0; i < depth && parent.parentNode; i++) {
    parent = parent.parentNode;
  }
  if (parent) parent.style.display = "none";
};

// Function to check and hide sections based on heading text
const checkAndHideSection = (headingText, depth) => {
  const divs = document.querySelectorAll('div[role="heading"]');
  for (const div of divs) {
    const span = div.querySelector("span");
    if (
      span &&
      headingText.some(
        (text) => text.toLowerCase() === span.textContent.toLowerCase()
      )
    ) {
      console.log("Found the div:", div);
      hideParent(div, depth);
      return true; // Break the loop by returning
    }
  }
  return false;
};

// Function to find an anchor with specific text content
function findAnchorWithText(text) {
  const anchors = document.querySelectorAll("a[href]");
  for (let anchor of anchors) {
    if (anchor.textContent.trim() === text) {
      return anchor;
    }
  }
  return null;
}

// Main execution function
const executeCleanup = () => {
  if (isSearchPage()) {
    // Only execute if on a Google search page with 'q' parameter
    // Hide specific elements
    Object.values(SELECTORS).forEach((selector) => hideElements(selector));

    // Hide the specific element with ID
    const specificElement = document.getElementById(
      "_WzW2Z-zoBt2B9u8Pga3zgAk_3"
    );
    if (specificElement) specificElement.style.display = "none";

    // Check and hide sections
    const sections = [
      {
        texts: [
          "weitere fragen",
          "people also ask",
          "recherches associées",
          "autres questions",
          "people also search for",
        ],
        depth: 5,
      },
      { texts: ["schlagzeilen", "top stories", "à la une"], depth: 5 },
      { texts: ["Posts auf X"], depth: 12 },
      { texts: ["videos", "vidéos"], depth: 6 },
      { texts: ["Wird auch oft gesucht"], depth: 9 },
      {
        texts: ["What people are saying", "Latest posts from"],
        depth: 9,
        ariaLevel: "2",
      },
    ];

    sections.forEach(({ texts, depth, ariaLevel }) => {
      const selector = ariaLevel
        ? `div[role="heading"][aria-level="${ariaLevel}"]`
        : 'div[role="heading"]';
      const divs = document.querySelectorAll(selector);
      for (const div of divs) {
        const span = div.querySelector("span");
        if (
          span &&
          texts.some(
            (text) => text.toLowerCase() === span.textContent.toLowerCase()
          )
        ) {
          console.log("Found the div:", div);
          hideParent(div, depth);
          break; // Only hide one match per section
        }
      }
    });

    // Additional checks for "Andere suchten auch nach"
    checkAndHideSection(
      [
        "andere suchten auch nach",
        "people also search for",
        "les internautes recherchent aussi",
      ],
      6
    );

    // Check for specific anchor text
    const textToFind = "Weitere Informationen";
    const anchor = findAnchorWithText(textToFind);

    if (anchor) {
      let targetParent = anchor;

      // Jump 3 div elements upwards
      for (let i = 0; i < 3; i++) {
        if (
          targetParent.parentElement &&
          targetParent.parentElement.tagName.toLowerCase() === "div"
        ) {
          targetParent = targetParent.parentElement;
        } else {
          console.log("Could not find the third div parent or it is not a div");
          break;
        }
      }

      if (targetParent) {
        targetParent.style.display = "none";
        console.log("Successfully hid the 3rd parent div of the anchor.");
        console.log("Targeted div element:", targetParent.outerHTML);
      } else {
        console.log("Failed to hide the 3rd parent div.");
      }
    } else {
      console.log(`Anchor tag with "${textToFind}" not found.`);
    }
  } else if (shouldRedirect()) {
    // Redirect if URL contains 'sca_esv' parameter
    window.location.href = "https://google.com";
  }
  // If none of the above conditions match, no action is taken, including for Google home pages
};

// Wait for 500ms before starting the interval which checks every 500ms
setTimeout(() => {
  setInterval(executeCleanup, 500);
}, 500);
