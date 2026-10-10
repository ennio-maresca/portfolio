// Extras only. The content is already in the page: node tools/build.mjs puts
// it there from site/content.json, so the page shows it without JavaScript,
// and search engines and AI agents read all of it. A small extra that needs
// JavaScript goes here, such as an effect; content never does.

// Staggered entrance fallback for browsers without sibling-index()
if (typeof CSS !== "undefined" && !CSS.supports("animation-delay: calc(sibling-index() * 0.1s)")) {
  const bio = document.getElementById("bio");
  if (bio) {
    [...bio.children].forEach((el, index) => el.style.setProperty("--sibling-index", index + 1));
  }
}
