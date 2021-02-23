window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");

  const numericButtonPressed = function (event) {
    console.log("number pressed", numberPressed);
    console.log("number pressed", event);
  };

  const numericButtons = document.getElementsByClassName("numericButton");
  const functionButtons = document.getElementsByClassName("functionButton");

  for (let button of numericButtons) {
    button.addEventListener("click", numericButtonPressed);
  }

  for (let button of functionButtons) {
    button.addEventListener("click", functionButtonPressed);
  }
});
