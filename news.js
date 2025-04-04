function news() {
  /* If inside of Google News Section */
  // Suche nach dem div-Element mit dem Attribut data-async-context
  const divWithAsyncContext = document.querySelector(
    "div[data-async-context]:nth-child(2)"
  );

  // Überprüfen, ob das Element gefunden wurde
  if (divWithAsyncContext) {
    let ad = divWithAsyncContext.querySelector("[data-hveid]");
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
          const heading = child.querySelector('[role="heading"][aria-level]');
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
          const thumbnails = Array.from(document.getElementsByTagName("img"));

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
  } else {
    // console.log("Kein Div mit data-async-context Attribut gefunden.");
  }
}
