function all() {
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
        div.remove();
        break;
      }
    }
  }
  /* To check if disclosed search or not */
  let discloseProof = document.querySelector(
    "[aria-level='2'][data-attrid='title'][role='heading']"
  );

  // Check if element exists and has a parent
  if (discloseProof && discloseProof.parentElement) {
    const parent = discloseProof.parentElement;

    // Check if parent is an <a> tag and has role="link"
    if (
      parent.tagName.toLowerCase() === "a" &&
      parent.getAttribute("role") === "link"
    ) {
      console.log('Parent is an <a> element with role="link"');
      nonDisclosedProfile();
    } else {
      console.log('Parent is not an <a> element with role="link"');
      disclosedProfile();
    }
  } else {
    console.log("Element or parent not found");
  }
}
