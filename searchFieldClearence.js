function searchFieldRecoClear() {
  /* Für Google Home Page Seite mit nur dem Suchfeld ohne Suchergebnisse */
  const search = document.querySelector("[role='listbox']");
  if (search) {
    search.style.display = "none";
  }
  /* Für Google Suchfeld wenn schon Suchergebnisse angezeigt werden */
  const searchFieldReco = document.querySelector(
    "form div[jscontroller][jsname].UUbT9.EyBRub"
  );
  if (searchFieldReco && searchFieldReco.children[4]) {
    searchFieldReco.removeChild(searchFieldReco.children[4]);
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
        div.remove();
        break;
      }
    }
  }
}
