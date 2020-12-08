// Initializing the variables
let navBar = document.querySelector("#navigationIcon");
let navCloser = document.querySelector("#closeButton");
let mainNav = document.querySelector(".mainNavigation");
let pageBody = document.querySelector("body");

// Week 9 example "show-on-scroll"
// Detect request animation frame
let scroll = window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  };
let elementsToShow = document.querySelectorAll('.show-on-scroll');

// Week 10 example
let letterRoom = document.querySelectorAll(".roomLetter");

// Adding music variables
let pageMusic;
let indexMusic = new Audio("assets/sounds/amenoyoru.mp3");
let chapter1Music = new Audio("assets/sounds/bgm_maoudamashii_piano34.mp3");
let chapter6Music = new Audio("assets/sounds/bgm_maoudamashii_piano40.mp3");
let endingMusic = new Audio("assets/sounds/anoharunohinoyouni.mp3");

// Adding a setup that activates when the webpage has loaded
window.onload = setupDocument;

function setupDocument() {
  handlePageMusic();
  warmUI();
}

// Adding functions

// Code based on week 9 exercises
// Clicking on the naviagation icon brings up the menu
navBar.onclick = function() {
  mainNav.style.width = "50%";
}

// Clicking on the "x" icon closes the menu
navCloser.onclick = function() {
  mainNav.style.width = "0%";
}

// Week 10 example: Clicking on the letter in the hub makes it zoom in
letterRoom.forEach(function(c) {
  console.log(c);
  c.addEventListener('click', function() {
    this.classList.toggle("zoom");
  });
});

// handleMusic
//
// Plays a specific song based on the webpage class
// Code refined thanks to C-Lab/Sabine Rosenburg
function handlePageMusic() {
  // The changing variable
  // An array is used in order to select the first class of the body
  pageBody = document.querySelector("body").classList[0];

  console.log(pageBody);
  if (pageBody === "indexBody") {
    pageMusic = indexMusic;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "chapter1Body") {
    pageMusic = chapter1Music;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "chapter6Body") {
    pageMusic = chapter6Music;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  } else if (pageBody === "endingBody") {
    pageMusic = endingMusic;
    pageMusic.loop = true;
    pageMusic.volume = 0.5;
    pageMusic.currentTime = 0;
    pageMusic.play();
  }
}

// warmUI
//
// Checks if the body has the class .warmBody and changes the colors of certain elements
function warmUI() {
  // The changing variable
  // An array is used in order to select the second class of the body
  pageBody = document.querySelector("body").classList[1];

  console.log(pageBody);
  if (pageBody === "warmBody") {
    // Footer
    document.querySelector("footer").style.background = "#392A00";
    document.querySelector("footer").style.color = "#FFFFFF";
    // Navigation Bar
    mainNav.style.background = "#E5AB00";
  }
}

// Week 9 example "show-on-scroll"
function loop() {

  elementsToShow.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  let rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 &&
      rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
