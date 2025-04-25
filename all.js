function all() {
  /* To check if disclosed search or not */
  /* Indem geschaut wird ob sich bei der Überschrift dieser Person ein Link zu dessen Hauptseite sich befindet */
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
