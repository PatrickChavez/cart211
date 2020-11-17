// Initializing the variables
let colorEntry = document.querySelector("#textInput").value;
let theCircle = document.querySelector("#circle");
let htmlBody = document.querySelector("body");
let checkInputButton = document.querySelector("#inputButton");
let message = document.querySelector("#inputMessage");

// Adding a function for the input button
checkInputButton.onclick = function() {
  inputFunction();
}


// inputFunction
//
// Changes the circle color and background depending on the word typed, as well as a message change
function inputFunction() {
  // Adding the text entry variable
  // The variable will always convert to lowercase
  colorEntry = document.querySelector("#textInput").value.toLowerCase();
  // Entering "blue" will have the circle and BG become blue and orange, respectively
  if (colorEntry === "blue") {
    theCircle.style.background = "#2c40bf";
    htmlBody.style.background = "#ffb04f";
    message.textContent = "I'm feeling mellow...";
  }
  // Entering "yellow" will have the circle and BG become yellow and purple, respectively
  else if (colorEntry === "yellow") {
    theCircle.style.background = "#e6c837";
    htmlBody.style.background = "#b68bc9";
    message.textContent = "I'm feeling warm..!";
  }

  // Entering "red" will have the circle and BG become red and green, respectively
  else if (colorEntry === "red") {
    theCircle.style.background = "#e62e2e";
    htmlBody.style.background = "#a4e37f";
    message.textContent = "I'm feeling passionate!";
  }

  // A simple message will be displayed if none of the above are typed in
  else {
    message.textContent = "Nothing's happening!?";
  }
}
