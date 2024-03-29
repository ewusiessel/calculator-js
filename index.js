window.addEventListener("DOMContentLoaded", function () {
  // MEMORY OF OUR APPLICATION
  // HERE WE STORE VALUES WE WANT TO BE ABLE TO USE LATER
  let operation = "";
  let previousResult = 0; //First operand
  const result = document.getElementById("result"); // Reference to the input #result DOM element to use later

  // Helper functions for operations
  const sum = function (x, y) {
    return x + y;
  };

  const diff = function (x, y) {
    return x - y;
  };

  const mul = function (x, y) {
    return x * y;
  };

  const div = function (x, y) {
    return x / y;
  };

  // Button of function was pressed
  // Event-handler "click" is going to fire this function (numericButtonPressed) and passes in the event object of the element clicked
  const numericButtonPressed = function (event) {
    const numberPressed = event.target.value;

    // First time you click a number and value is "0" do:
    if (result.value === "0") {
      result.value = numberPressed;
    } else {
      // Next time result.value will not be "0" anymore, then do this:
      // Assigns a new value to the #result input by doing result.value + numberPressed
      result.value += numberPressed;
    }
  };

  // Button of function was pressed
  // Event-handler "click" is going to fire this function (functionButtonPressed) and passes in the event object of the element clicked
  const functionButtonPressed = function (event) {
    // Storing the value of the single button (eg "*")
    const keyPressed = event.target.value;

    // Evaluating which button was pressed
    switch (keyPressed) {
      //2) the second time this gets fired it is probably when you ask for the result of the operation "="
      case "=":
        //3) Evaluates then what operation symbol was previously stored for eg *
        switch (operation) {
          case "+":
            result.value = sum(previousResult, parseFloat(result.value));
            break;
          case "-":
            result.value = diff(previousResult, parseFloat(result.value));
            break;
          //4) Falling under this condition (operation === "*") it will perform a multiplication and reassigns the value of the input #result as result of mul(x,y)
          case "*":
            result.value = mul(previousResult, parseFloat(result.value));
            //5) you can see the result of the operation being displayed in the #result input as it's new result.value
            break;
          case "/":
            result.value = div(previousResult, parseFloat(result.value));
            break;
          default:
            console.log("Default case");
        }
        break;
      case "C":
        //Resets everything to the default
        result.value = 0;
        previousResult = 0;
        operation = "";

        console.log("previousResult", previousResult);
        console.log("operation", operation);
        break;

      // 1) If the case is neither "=" or "C" it performs the default operation (for eg when the first time you press: +, -, *, /)
      default:
        previousResult = parseFloat(result.value);
        console.log("previousResult", previousResult);

        operation = keyPressed;
        console.log("operation", operation);

        result.value = "0";
    }
  };

  // Grabbing the DOM references of numericButtons and functionButtons, it will return and HTMLCollection of HTML elements which you can cycle through
  const numericButtons = document.getElementsByClassName("numericButton");
  const functionButtons = document.getElementsByClassName("functionButton");

  //Cycling the elements to attach to the single <input onclick="function()" /> an onclick event handler
  for (let button of numericButtons) {
    //The event handler knows what function to fire when the single button is pressed
    button.addEventListener("click", numericButtonPressed);
  }

  for (let button of functionButtons) {
    button.addEventListener("click", functionButtonPressed);
  }
});
