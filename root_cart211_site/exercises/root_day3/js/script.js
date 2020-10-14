// Credits
// Yume/Dream/夢 from Amacha Music Studio
// https://amachamusic.chagasi.com/image_gensouteki.html

// The script will start once the webpage has loaded
$(document).ready(setup);

// Adding the audio variable
let siteBGM = new Audio("sounds/yume.mp3");

// setup()
//
// A function that activates once the webpage has loaded
function setup() {
  $(".assignmentsImage").one("mousedown", playMusic);

}

// playMusic
//
// A function that activates and loops the music
function playMusic() {
  siteBGM.loop = true;
  siteBGM.play();
}
