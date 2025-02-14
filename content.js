// Wait for 2 seconds before executing the code
setTimeout(function () {
  // Suchvorschläge - nicht so optimal
  let searchReco = document.querySelector(".UUbT9");
  if (searchReco) {
    searchReco.style.display = "none";
  }

  // Person's introduction fully conceived with news
  let topNews = document.querySelector(".VNzqVe .e6hL7d > div:nth-child(2)");
  if (topNews) {
    topNews.style.display = "none";
  }

  let topSocial = document.querySelector(".VNzqVe .e6hL7d > div:nth-child(5)");
  if (topSocial) {
    topSocial.style.display = "none";
  }

  let xpost = document.querySelector(".g.eejeod");
  if (xpost) {
    xpost.style.display = "none";
  }

  // Select all div elements with role="heading"
  const headingDivsWF = document.querySelectorAll('div[role="heading"]');

  // Iterate through the selected divs
  for (const div of headingDivsWF) {
    // Check if the div contains a span element with the text "Weitere Fragen"
    const spanElement = div.querySelector("span");

    const targetPhrases = [
      "weitere fragen",
      "people also search for",
      "recherches associées",
      "autres questions",
      "people also ask",
    ];

    if (
      spanElement &&
      targetPhrases.includes(spanElement.textContent.toLowerCase())
    ) {
      console.log("Found the div:", div);

      // Navigate 5 divs upwards
      let parentDiv = div;
      for (let i = 0; i < 5; i++) {
        if (parentDiv.parentNode) {
          parentDiv = parentDiv.parentNode;
        } else {
          console.log("Reached the top of the DOM, no more parents.");
          break;
        }
      }

      // Now that we have the parent div 6 levels up, set it to display:none
      if (parentDiv) {
        parentDiv.style.display = "none";
        console.log("Set the parent div to display:none");
      }

      break; // Stop the loop once the div is found
    }
  }

  // Select all div elements with role="heading"
  const headingDivsX = document.querySelectorAll('div[role="heading"]');

  // Iterate through the selected divs
  for (const div of headingDivsX) {
    // Check if the div contains a span element with the text "Schlagzeilen"
    const spanElement = div.querySelector("span");

    if (
      spanElement &&
      (spanElement.textContent.toLowerCase() === "schlagzeilen" ||
        spanElement.textContent.toLowerCase() === "top stories" ||
        spanElement.textContent.toLowerCase() === "à la une")
    ) {
      console.log("Found the div:", div);

      // Navigate 5 divs upwards
      let parentDiv = div;
      for (let i = 0; i < 5; i++) {
        if (parentDiv.parentNode) {
          parentDiv = parentDiv.parentNode;
        } else {
          console.log("Reached the top of the DOM, no more parents.");
          break;
        }
      }

      // Now that we have the parent div 5 levels up, set it to display:none
      if (parentDiv) {
        parentDiv.style.display = "none";
        console.log("Set the parent div to display:none");
      }

      break; // Stop the loop once the div is found
    }
  }

  // Select all div elements with role="heading"
  const headingDivsSchlag = document.querySelectorAll('div[role="heading"]');

  // Iterate through the selected divs
  for (const div of headingDivsSchlag) {
    // Check if the div contains a span element with the text "Posts auf X"
    const spanElement = div.querySelector("span");

    if (spanElement && spanElement.textContent === "Posts auf X") {
      console.log("Found the div:", div);

      // Navigate 13 divs upwards
      let parentDiv = div;
      for (let i = 0; i < 12; i++) {
        if (parentDiv.parentNode) {
          parentDiv = parentDiv.parentNode;
        } else {
          console.log("Reached the top of the DOM, no more parents.");
          break;
        }
      }

      // Now that we have the parent div 13 levels up, set it to display:none
      if (parentDiv) {
        parentDiv.style.display = "none";
        console.log("Set the parent div to display:none");
      }

      break; // Stop the loop once the div is found
    }
  }

  // Select all div elements with role="heading"
  const headingDivsVideos = document.querySelectorAll('div[role="heading"]');

  // Iterate through the selected divs
  for (const div of headingDivsVideos) {
    // Check if the div contains a span element with the text "Videos"
    const spanElement = div.querySelector("span");

    if (
      spanElement &&
      (spanElement.textContent.toLowerCase() === "videos" ||
        spanElement.textContent.toLowerCase() === "vidéos")
    ) {
      console.log("Found the div:", div);

      // Navigate 6 divs upwards
      let parentDiv = div;
      for (let i = 0; i < 6; i++) {
        if (parentDiv.parentNode) {
          parentDiv = parentDiv.parentNode;
        } else {
          console.log("Reached the top of the DOM, no more parents.");
          break;
        }
      }

      // Now that we have the parent div 6 levels up, set it to display:none
      if (parentDiv) {
        parentDiv.style.display = "none";
        console.log("Set the parent div to display:none");
      }

      break; // Stop the loop once the div is found
    }
  }

  // Select all div elements with role="heading"
  const headingDivsAlso = document.querySelectorAll('div[role="heading"]');

  // Iterate through the selected divs
  for (const div of headingDivsAlso) {
    // Check if the div contains a span element with the text "Wird auch oft gesucht"
    const spanElement = div.querySelector("span");

    if (spanElement && spanElement.textContent === "Wird auch oft gesucht") {
      console.log("Found the div:", div);

      // Navigate 9 divs upwards
      let parentDiv = div;
      for (let i = 0; i < 9; i++) {
        if (parentDiv.parentNode) {
          parentDiv = parentDiv.parentNode;
        } else {
          console.log("Reached the top of the DOM, no more parents.");
          break;
        }
      }

      // Now that we have the parent div 9 levels up, set it to display:none
      if (parentDiv) {
        parentDiv.style.display = "none";
        console.log("Set the parent div to display:none");
      }

      break; // Stop the loop once the div is found
    }
  }

  // Select all div elements with role="heading"
  const headingDivsWPAS = document.querySelectorAll(
    'div[role="heading"][aria-level="2"]'
  );

  // Iterate through the selected divs
  for (const div of headingDivsWPAS) {
    // Check if the div contains a span element with the text "Wird auch oft gesucht"
    const spanElement = div.querySelector("span");

    if (
      spanElement &&
      (spanElement.textContent === "What people are saying" ||
        spanElement.textContent.startsWith("Latest posts from "))
    ) {
      console.log("Found the div:", div);

      // Navigate 9 divs upwards
      let parentDiv = div;
      for (let i = 0; i < 9; i++) {
        if (parentDiv.parentNode) {
          parentDiv = parentDiv.parentNode;
        } else {
          console.log("Reached the top of the DOM, no more parents.");
          break;
        }
      }

      // Now that we have the parent div 9 levels up, set it to display:none
      if (parentDiv) {
        parentDiv.style.display = "none";
        console.log("Set the parent div to display:none");
      }

      break; // Stop the loop once the div is found
    }
  }

  // Suche nach dem div mit aria-level="2" und role="heading"
  const headingDivFooterReco = Array.from(
    document.querySelectorAll('div[aria-level="2"][role="heading"]')
  ).find((div) => {
    const spanElement = div.querySelector("span");
    return (
      spanElement &&
      (spanElement.textContent === "People also search for" ||
        spanElement.textContent === "Recherches associées")
    );
  });

  if (headingDivFooterReco) {
    // Gehe 9 div-Ebenen nach oben
    let parentDiv = headingDivFooterReco;
    for (let i = 0; i < 9; i++) {
      if (parentDiv.parentElement) {
        parentDiv = parentDiv.parentElement;
      } else {
        console.warn("Es gibt nicht genug übergeordnete Elemente.");
        break;
      }
    }

    // Setze das oberste div auf display: none
    if (parentDiv) {
      parentDiv.style.display = "none";
    }
  }

  // Alle divs mit role="heading" und aria-level="3" durchsuchen
  const headingDivsAlsoCheck = document.querySelectorAll(
    'div[role="heading"][aria-level="3"]'
  );

  // Schleife durch alle gefundenen divs
  for (const div of headingDivsAlsoCheck) {
    // Überprüfen, ob das div ein span mit dem Text "Andere suchten auch nach" enthält
    const spanElement = div.querySelector("span");

    if (
      spanElement &&
      (spanElement.textContent.toLowerCase() === "andere suchten auch nach" ||
        spanElement.textContent.toLowerCase() === "people also search for" ||
        spanElement.textContent.toLowerCase() ===
          "les internautes recherchent aussi")
    ) {
      console.log("Gefundenes div:", div);

      // 6 Etagen nach oben navigieren
      let parentDiv = div;
      for (let i = 0; i < 6; i++) {
        if (parentDiv.parentNode) {
          parentDiv = parentDiv.parentNode;
        } else {
          console.log("Erreicht das oberste Element, keine weiteren Eltern.");
          break;
        }
      }

      // Setze das oberste div auf display:none
      if (parentDiv) {
        parentDiv.style.display = "none";
        console.log("Das oberste div wurde auf display:none gesetzt");
      }

      break; // Schleife abbrechen, nachdem das div gefunden wurde
    }
  }
}, 500); // Delay of 2000 milliseconds (2 seconds)
