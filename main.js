const intervalId = setInterval(() => {
  const listDiv = document.querySelector("div[role='list']");
  let navigation = document.querySelector("div[role='navigation']");

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
  } else if (navigation) {
    console.log("Going to navigation");
    navigation = navigation.querySelector(".nfdoRb");

    if (navigation) {
      const anchors = Array.from(navigation.children).filter(
        (child) => child.tagName.toLowerCase() === "a"
      );

      const firstAnchorHasHref = anchors[0]?.hasAttribute("href");
      const secondAnchorHasHref = anchors[1]?.hasAttribute("href");

      if (firstAnchorHasHref && !secondAnchorHasHref) {
        console.log("Du befindest dich im 'News' Bereich.");
        news();
      }
    } else {
      //   console.log("Nope no navigation");
      /* Remove google search distraction at only search page */
      // Method 1: Using querySelector
      const element = document.querySelector(
        "form div[jscontroller][jsname].UUbT9.EyBRub"
      );
      if (element && element.children[4]) {
        element.removeChild(element.children[4]);
      }

      // Method 2: More verbose but explicit
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
