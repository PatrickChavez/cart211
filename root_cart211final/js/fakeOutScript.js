// FakeOut
//
// Wish it were real...

// Game based on the Predator-Prey Simulation by Pippin Barr
// https://github.com/pippinbarr/cart253-2019/blob/master/games/game-oop-predator-prey.zip

// Canvas position based on p5 reference
// https://p5js.org/reference/#/p5.Element/position

//

// Preventing use of undeclared variables
"use strict";

// Preparing a function that starts once the document has loaded
$(document).ready(setupDocument);

// Making variables for the objects
// Our Hero
let hero;
let heroImage;
// The NPC
let friend;
let friendImage;

// The background
let fakeOutBG;

// The title and ending images
let titleImage;
let endingImage;

// Creating variables the various game states
let currentState = "TITLE";

// Adding image variables
let titleArray = [];
let titleImageNumber = 2;
let titleIndex = 0;

// Adding music variables
let fakeOutMusic = new Audio("assets/sounds/yumenonagori.mp3");
let alarmSFX = new Audio("assets/sounds/alarm1.wav");
let npcSFX;

// setupDocument
//
// Calls functions once the webpage has loaded
function setupDocument() {
  // The music plays during the game
  handleMusic();
}

// preload
//
// Sets up images, music, etc. before the webpage loads
function preload() {
  // Object images
  heroImage = loadImage("assets/images/Chapter4Fakeout/FakeOutHeroS.gif");
  friendImage = loadImage("assets/images/Chapter4Fakeout/FakeOutNPCS.png");
  // The background
  fakeOutBG = loadImage("assets/images/Chapter4Fakeout/FakeOutBG.png");
  // The music
  npcSFX = loadSound("assets/sounds/NES-RPG03-12(Run).mp3");
  // The title and ending images
  titleImage = loadImage("assets/images/Chapter4Fakeout/FakeOutTitle.png");
  endingImage = loadImage("assets/images/Chapter4Fakeout/trappedp5.png");
}

// setup
//
// Initializes the p5 canvas, sets objects and activates functions for 1 frame
function setup() {
  // Repositioning the canvas
  let cnv = createCanvas(1200, 340);
  cnv.position(75, -650, "relative");
  createCanvas(1200, 340);

  // The objects
  hero = new Hero(75, 275, 0.8, heroImage);
  friend = new NPC(1000, 275, friendImage);
}

// draw
//
// Makes objects move every frame
function draw() {
  // Adding the functions
  gameStates();
  showEnding();
}

// gameStates
//
// Activates various images and gameplay depending on the game state
function gameStates() {
  if (currentState === "TITLE") {
    titleState();
  } else if (currentState === "PLAY") {
    playState();
  } else if (currentState === "ENDING") {
    endingState();
    handleMusic();
  }
  console.log(currentState);
}

// titleState
//
// Displays the title
function titleState() {
  image(titleImage, 0, 0, width, height);
}

// endingState
//
// Displays the ending
function endingState() {
  currentState === "ENDING";
  image(endingImage, 0, 0);
}

// showEnding
//
// Shows the ending once the hero gets to a certain point
function showEnding() {
  if (hero.x >= 900) {
    currentState = "ENDING";
  }
}

// playState
//
// Displays the game proper
function playState() {
  // Background
  image(fakeOutBG, 0, 0);
  // The hero
  hero.moveRight();
  hero.display();
  // The NPCs
  friend.display();
}

// keyPressed()
//
// Cycles through game states with the "z" key
function keyPressed() {
  if (keyCode === 90) {

    if (currentState === "TITLE") {
      currentState = "PLAY";
    } else if (currentState === "ENDING") {
      // The webpage changes
      location.href = "chapter5.html";
    }
  }
}

// handleMusic
//
// Makes the webpage play music depending on the state
function handleMusic() {
  if (currentState === "TITLE") {
    fakeOutMusic.loop = true;
    fakeOutMusic.volume = 0.5;
    fakeOutMusic.currentTime = 0;
    fakeOutMusic.play();
  } else if (currentState === "ENDING") {
    // The current music stops
    fakeOutMusic.pause();
    alarmSFX.loop = true;
    alarmSFX.volume = 0.5;
    alarmSFX.play();
  }
}
