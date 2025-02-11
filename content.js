// Wait for 2 seconds before executing the code
setTimeout(function () {
  // Suchvorschläge - nicht so optimal
  let searchReco = document.querySelector(".aajZCb");
  if (searchReco) {
    searchReco.style.display = "none";
  }

  // News direkt
  let topNews = document.querySelector(".VNzqVe .e6hL7d > div:nth-child(2)");
  if (topNews) {
    topNews.style.display = "none";
  }

  // Select all div elements with role="heading"
  const headingDivsWF = document.querySelectorAll('div[role="heading"]');

  // Iterate through the selected divs
  for (const div of headingDivsWF) {
    // Check if the div contains a span element with the text "Weitere Fragen"
    const spanElement = div.querySelector("span");

    if (spanElement && spanElement.textContent === "Weitere Fragen") {
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
  const headingDivsX = document.querySelectorAll('div[role="heading"]');

  // Iterate through the selected divs
  for (const div of headingDivsX) {
    // Check if the div contains a span element with the text "Schlagzeilen"
    const spanElement = div.querySelector("span");

    if (spanElement && spanElement.textContent === "Schlagzeilen") {
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

    if (spanElement && spanElement.textContent === "Videos") {
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

  // Alle divs mit role="heading" durchsuchen
  const headingDivsAlsoCheck = document.querySelectorAll('div[role="heading"]');

  // Schleife durch alle gefundenen divs
  for (const div of headingDivsAlsoCheck) {
    // Überprüfen, ob das div ein span mit dem Text "Andere suchten auch nach" enthält
    const spanElement = div.querySelector("span");

    if (spanElement && spanElement.textContent === "Andere suchten auch nach") {
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
