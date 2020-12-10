// FELLOWSHIP!
//
// Gather your friends and defeat the Demon Lord!

// Game based on the Predator-Prey Simulation by Pippin Barr
// https://github.com/pippinbarr/cart253-2019/blob/master/games/game-oop-predator-prey.zip

// Canvas position based on p5 reference
// https://p5js.org/reference/#/p5.Element/position

// Preventing use of undeclared variables
"use strict";

// Preparing a function that starts once the document has loaded
$(document).ready(setupDocument);

// Variable for the font
let gameFont;

// Making variables for the objects
// Our Hero
let hero;
let heroImage;
// The NPCs
let mage;
let mageImage;
let thief;
let thiefImage;
let cleric;
let clericImage;
let knight;
let knightImage;

// The score
let gameScore = 0;

// The game background
let gameBG;

// Creating variables the various game states
let currentState = "TITLE";

// Adding image variables
let titleArray = [];
let titleImageNumber = 2;
let titleIndex = 0;

// Adding music variables
let currentMusic;
let titleMusic = new Audio("assets/sounds/bgm_maoudamashii_8bit21.mp3");
let gameplayMusic = new Audio("assets/sounds/bgm_maoudamashii_8bit20.mp3");
let npcSFX;
let titleSFX;

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
  heroImage = loadImage("assets/images/Chapter2Minigame/GameHeroS.gif");
  mageImage = loadImage("assets/images/Chapter2Minigame/GameMageS.gif");
  thiefImage = loadImage("assets/images/Chapter2Minigame/GameThiefS.gif");
  clericImage = loadImage("assets/images/Chapter2Minigame/GameClericS.gif");
  knightImage = loadImage("assets/images/Chapter2Minigame/GameKnightS.gif");
  // Background image
  gameBG = loadImage("assets/images/Chapter2Minigame/GameBGSpooky.gif");
  // The font
  gameFont = loadFont("assets/fonts/PressStart2P.ttf");
  // The sound effects
  npcSFX = loadSound("assets/sounds/NES-RPG03-12(Run).mp3");
  titleSFX = loadSound("assets/sounds/GB-RPG01-8(Select).mp3");
  // The title images
  // The title screen images require a for loop
  for (let i = 1; i <= titleImageNumber; i++) {
    // Making the file path
    let filePath = "assets/images/Chapter2Minigame/title" + i + ".gif";
    // Loading the images into the array
    titleArray.push(loadImage(filePath));
  }
}

// setup
//
// Initializes the p5 canvas, sets objects and activates functions for 1 frame
function setup() {
  // Repositioning the canvas
  let cnv = createCanvas(540, 340);
  cnv.position(393, -648, "relative");


  // The objects
  hero = new Hero(width / 2, height / 2, 3, heroImage);
  thief = new NPC(50, 50, thiefImage);
  mage = new NPC(width - 50, 50, mageImage);
  cleric = new NPC(50, height - 50, clericImage);
  knight = new NPC(width - 50, height - 50, knightImage);
}

// draw
//
// Makes objects move every frame
function draw() {
  // Adding the functions
  gameStates();
  webpageChange();
}

// gameStates
//
// Activates various images and gameplay depending on the game state
function gameStates() {
  if (currentState === "TITLE") {
    titleState();
  } else if (currentState === "PLAY") {
    playState();
  }
}

// titleState
//
// Displays the title and instruction images
function titleState() {
  image(titleArray[titleIndex], 0, 0, width, height);

}

// playState
//
// Displays the game proper
function playState() {
  // Background
  image(gameBG, 0, 0);
  // The hero
  hero.handleInput();
  hero.move();
  hero.display();
  hero.handleDisappearing(thief);
  hero.handleDisappearing(mage);
  hero.handleDisappearing(cleric);
  hero.handleDisappearing(knight);
  // The NPCs
  thief.display();
  mage.display();
  cleric.display();
  knight.display();
  // The score
  displayScore();
}

// keyPressed()
//
// Cycles through game states with the "z" key
function keyPressed() {
  if (keyCode === 90) {

    if (currentState === "TITLE") {
      // Go through title screens if the title index is less than 1
      if (titleIndex < 1) {
        // Play a sound also
        titleSFX.play();
        titleIndex += 1;
        console.log(titleIndex);
      }
      // The current state is play otherwise
      else {
        titleSFX.play();
        currentState = "PLAY";
        // The music changes
        handleMusic();
      }
    }

  }
}

// endingState
//
// Displays the "ending" as black screen
function endingState() {
  currentState === "ENDING";
  gameplayMusic.pause();
  background("#0F153C");
}

// webpageChange
//
// The weppage changes once the score reaches a certain value
function webpageChange() {
  if (gameScore === -4) {
    // Show a black screen
    endingState();
    // Go to another HTML
    location.href = "chapter3.html";
  }
}

// displayScore
//
// Show's the game's score
function displayScore() {
  textFont(gameFont);
  textSize(22);
  textAlign(CENTER, BOTTOM);
  fill(15, 37, 60);
  text("COMPANIONS: " + gameScore, width / 2, height - 5);
}

// handleMusic
//
// Makes the webpage play music depending on the state
function handleMusic() {
  if (currentState === "TITLE") {
    titleMusic.loop = true;
    titleMusic.volume = 0.3;
    titleMusic.currentTime = 0;
    titleMusic.play();
    // The title music becomes the current music
    currentMusic = titleMusic;
  } else if (currentState === "PLAY") {
    // The current music stops
    currentMusic.pause();
    // Setting the gameplay music
    gameplayMusic.loop = true;
    gameplayMusic.volume = 0.3;
    gameplayMusic.currentTime = 0;
    gameplayMusic.play();
    // The gameplay music becomes the current music
    currentMusic = gameplayMusic;
  }
}
