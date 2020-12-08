// Separated from "script.js" to prevent bugs with images and text fading in

// Initializing the variables
let pageEnvelope = document.querySelector(".envelope");
let chapter7Music = new Audio("assets/sounds/haruenoakogare.mp3");
let envelopeSFX = new Audio("assets/sounds/Book01-1(Flip).mp3");

// Clicking on the envelope changes it into a letter
// Code from week 9 exercises
pageEnvelope.onclick = function() {
  let imageSrc = pageEnvelope.getAttribute("src");

  if (imageSrc === "assets/images/Chapter7Letter/lettercropped.png") {
    pageEnvelope.setAttribute("src", "assets/images/Chapter7Letter/ericLetter.png");

    pageEnvelope.style.width = "50%";
    pageEnvelope.style.cursor = "default";

    // Figcaption disappears
    document.querySelector("figcaption").style.display = "none";

    // Music and SFX play
    envelopeSFX.play();

    chapter7Music.loop = true;
    chapter7Music.volume = 0.5;
    chapter7Music.currentTime = 0;
    chapter7Music.play();

  }

}
