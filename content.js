// Constants for URL checks and selectors for DOM elements
const TARGET_URLS = [
  "https://www.google.com/search?sa",
  "https://www.google.fr/search?sa",
  "https://www.google.de/search?sa",
  "https://www.google.ch/search?sa",
];

const SELECTORS = {
  topNews: ".VNzqVe .e6hL7d > div:nth-child(2)",
  topSocial: ".VNzqVe .e6hL7d > div:nth-child(5)",
  xpost: ".g.eejeod",
};

// Function to check if current URL matches any target URL
const shouldRedirect = () =>
  TARGET_URLS.some((url) => window.location.href.startsWith(url));

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
  // Get all anchor tags with an href attribute
  const anchors = document.querySelectorAll("a[href]");

  for (let anchor of anchors) {
    // Check if the text content of the anchor matches the given text
    if (anchor.textContent.trim() === text) {
      return anchor;
    }
  }
  return null; // If no match is found
}

// Main execution function
const executeCleanup = () => {
  // Redirect if necessary
  if (shouldRedirect()) {
    window.location.href = "https://google.com";
    return;
  }

  // Hide specific elements
  Object.values(SELECTORS).forEach((selector) => hideElements(selector));

  // Hide the specific element with ID
  const specificElement = document.getElementById("_WzW2Z-zoBt2B9u8Pga3zgAk_3");
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

  // New code integration starts here
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
      // Set the found parent to display: none
      targetParent.style.display = "none";
      console.log("Successfully hid the 3rd parent div of the anchor.");

      // Print the entire targeted div element to the console
      console.log("Targeted div element:", targetParent.outerHTML);
    } else {
      console.log("Failed to hide the 3rd parent div.");
    }
  } else {
    console.log(`Anchor tag with "${textToFind}" not found.`);
  }
  // New code integration ends here
};

// Wait for 500ms before starting the interval which checks every 500ms
setTimeout(() => {
  setInterval(executeCleanup, 500);
}, 500);
