document.addEventListener("DOMContentLoaded", () => {
  const htmlTag = document.querySelector("html");
  const modeToggler = document.querySelector(".toggle-mode-input");

  modeToggler !== undefined &&
    modeToggler.addEventListener("click", () => {
      const boolState = modeToggler.querySelector("input").checked;
      htmlTag.setAttribute("data-mode", boolState !== true ? "light" : "dark");
    });
});
