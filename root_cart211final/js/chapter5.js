// Separated from "script.js" to prevent bugs with images and text fading in

// Initializing the variables
let curtainImage = document.querySelector(".chapter5Curtain");
let openCurtainSFX = new Audio("assets/sounds/Curtain01-1.mp3");
let closeCurtainSFX = new Audio("assets/sounds/Curtain01-2.mp3");

// Clicking on the image changes it twice
// Code from week 9 exercises
curtainImage.onclick = function() {
  let imageSrc = curtainImage.getAttribute("src");

  if (imageSrc === "assets/images/Chapter5Trapped/trapped4.png") {
    curtainImage.setAttribute("src", "assets/images/Chapter5Trapped/trapped5.gif");
    openCurtainSFX.play();
  } else if (imageSrc === "assets/images/Chapter5Trapped/trapped5.gif") {
    curtainImage.setAttribute("src", "assets/images/Chapter5Trapped/trapped6.png");
    curtainImage.style.cursor = "default";
    closeCurtainSFX.play();
    // Figcaption disappears
    document.querySelector("figcaption").style.display = "none";
  }
}
