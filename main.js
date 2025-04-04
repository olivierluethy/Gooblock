const intervalId = setInterval(() => {
  const listDiv = document.querySelector("div[role='list']");

  // Function to check for 'Alle' section
  const checkForAlleSection = () => {
    if (listDiv) {
      Array.from(listDiv.children).forEach((child) => {
        if (child.getAttribute("role") === "listitem") {
          const anchor = child.querySelector("a");

          if (anchor && !anchor.hasAttribute("href")) {
            //   console.log("Du befindest dich im 'Alle' Bereich.");
            all();
          }
        }
      });
    }
  };

  // Function to check for 'News' section
  const checkForNewsSection = () => {
    let navigation = document.querySelector("div[role='navigation']");

    if (navigation) {
      navigation = navigation.querySelector(".nfdoRb");

      if (navigation) {
        const anchors = Array.from(navigation.children).filter(
          (child) => child.tagName.toLowerCase() === "a"
        );

        const firstAnchorHasHref = anchors[0]?.hasAttribute("href");
        const secondAnchorHasHref = anchors[1]?.hasAttribute("href");

        if (firstAnchorHasHref && !secondAnchorHasHref) {
          //   console.log("Du befindest dich im 'News' Bereich.");
          news();
        }
      }
    }
  };

  // Execute both checks
  checkForAlleSection();
  checkForNewsSection();
}, 1000);
