const intervalId = setInterval(() => {
  const listDiv = document.querySelector("div[role='list']");
  let navigation = document.querySelector("[role='navigation']");

  // Handle listDiv
  if (listDiv) {
    console.log("Going to listDiv");
    Array.from(listDiv.children).forEach((child) => {
      if (child.getAttribute("role") === "listitem") {
        const anchor = child.querySelector("a");

        if (anchor && !anchor.hasAttribute("href")) {
          console.log("Du befindest dich im 'Alle' Bereich.");
          all();
        }
      }
    });
  }
  // Handle navigation
  else if (navigation) {
    console.log("Going to navigation");

    // For NON Disclosed Navigation
    let disclosedNavigation = navigation.querySelector(
      "div[jscontroller][data-hveid]"
    );

    // For disclosed navigation
    if (disclosedNavigation) {
      const fourthChild = disclosedNavigation.children[4];

      if (fourthChild && fourthChild.tagName.toLowerCase() === "a") {
        const hasHref = fourthChild.hasAttribute("href");

        if (!hasHref) {
          console.log("Your inside of NEWS");

          let newsObject = document.getElementById("search");
          if (newsObject) {
            newsObject = newsObject.querySelector("#rso");
            ad = newsObject.querySelector("[data-hveid][data-ved]");

            // Überprüfen, ob das `ad`-Element existiert
            if (ad) {
              // Iteriere durch alle children-Elemente des `ad`-Elements
              Array.from(ad.children).forEach((child) => {
                // Überprüfen, ob das aktuelle Kind ein <g-section-with-header> ist
                if (child.tagName.toLowerCase() === "g-section-with-header") {
                  child.remove(); // Entferne das <g-section-with-header>-Element
                }
                // Überprüfen, ob es ein normales div mit data-hveid Attribut ist
                else if (
                  child.tagName.toLowerCase() === "div" &&
                  child.hasAttribute("data-hveid")
                ) {
                  // Suche innerhalb des div nach einem Element mit role="heading" und einem aria-level Attribut
                  const heading = child.querySelector(
                    '[role="heading"][aria-level]'
                  );
                  if (heading) {
                    heading.remove(); // Entferne das <role="heading">-Element
                  }
                  // Suche nach einem <span>-Element mit exakt dem Text "LIVE"
                  const liveSpanElement = Array.from(
                    document.getElementsByTagName("span") // Nur <span>-Elemente
                  ).find((el) => el.textContent.trim() === "LIVE");

                  if (liveSpanElement) {
                    let overclass = liveSpanElement.parentElement;
                    if (overclass) {
                      overclass.remove();
                    }
                  } else {
                    // console.log("Kein Span-Element mit 'LIVE' gefunden.");
                  }
                  // Suche nach den Thumbnails von den Newsportalen und entferne sie
                  const thumbnails = Array.from(
                    document.getElementsByTagName("img")
                  );

                  thumbnails.forEach((img) => {
                    if (
                      img &&
                      img.parentElement &&
                      img.parentElement.tagName.toLowerCase() !== "g-img" &&
                      img.parentElement.parentElement &&
                      img.parentElement.parentElement.parentElement
                    ) {
                      img.parentElement.parentElement.parentElement.style.display =
                        "none";
                    }
                  });
                }
              });
            }
          }
        }
      }
    } else {
      // Handle no disclosed navigation scenario

      // Method 1: Using querySelector
      const element = document.querySelector(
        "form div[jscontroller][jsname].UUbT9.EyBRub"
      );
      if (element && element.children[4]) {
        element.removeChild(element.children[4]);
      }

      // Method 2: More explicit form handling
      const forms = document.getElementsByTagName("form");
      for (let form of forms) {
        const divs = form.getElementsByTagName("div");
        for (let div of divs) {
          if (
            div.hasAttribute("jscontroller") &&
            div.hasAttribute("jsname") &&
            div.classList.contains("UUbT9") &&
            div.classList.contains("EyBRub")
          ) {
            if (div.children[4]) {
              div.removeChild(div.children[4]);
            }
            console.log(div);
            break;
          }
        }
      }
    }
  }
}, 1000);
