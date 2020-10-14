// Credits
//

// System 46/システム46 (Sound Effect)
// Maou Damashii
// https://maoudamashii.jokersounds.com/list/se6.html

// Sound 14/物音14 (Sound Effect)
// Maou Damashii
// https://maoudamashii.jokersounds.com/list/se5b.html

// Yume/Dream/夢 from Amacha Music Studio
// https://amachamusic.chagasi.com/image_gensouteki.html

// The script will start once the webpage has loaded
$(document).ready(setup);

// Music/Sound effect variables
let imageChangeSFXHappy = new Audio ("sounds/se_maoudamashii_system46.wav");
let imageChangeSFXSad = new Audio ("sounds/se_maoudamashii_se_sound14.wav");
let readingMusic = new Audio ("sounds/yume.mp3");

// setup()
//
// A function that activates once the webpage has loaded
function setup() {
$(".indexImage").on("click", indexImageChange);
$(".readingMusicButton").on("click", readingMusicPlayer);
}

// indexImageChange
//
// A function that changes the self portrait in the index page
function indexImageChange() {
  // If the portrait is sad, then it should change to a happy one
  if ($(this).attr("src") === "images/SiteSelfPortraitSad.png") {
    $(this).attr("src", "images/SiteSelfPortraitHappy.png");
    // A sound effect also plays
    imageChangeSFXHappy.play();
  }
  // If the portrait is happy, then it should change to a sad one
  else if ($(this).attr("src") === "images/SiteSelfPortraitHappy.png") {
    $(this).attr("src", "images/SiteSelfPortraitSad.png");
    // A sound effect also plays
    imageChangeSFXSad.play();
  }
}

// readingMusicPlayer
//
// Plays a song if the button is pressed
function readingMusicPlayer() {
    readingMusic.loop = true;
    readingMusic.play();
}
