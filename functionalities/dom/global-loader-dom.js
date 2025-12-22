// Adds a loader animation that triggers when the browser is loading.
const screenLoadingAnimation = () => {
  // Add loading class to body initially to hide content
  document.body.classList.add("loading");

  window.addEventListener("load", () => {
    // After page loads, wait 500ms then hide loader and show content
    setTimeout(() => {
      document.body.classList.remove("loading");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "none";
      }
    }, 500);
  });
};

export { screenLoadingAnimation };
