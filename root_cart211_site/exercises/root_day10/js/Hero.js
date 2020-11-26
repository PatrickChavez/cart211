// hero
//
// A class that the player can move -- can interact with NPCs
class Hero {
  // constructor
  //
  // A collection of the hero's properties
  constructor(x, y, speed, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    this.image = image;
    this.radius = 50;
    this.upKey = UP_ARROW;
    this.downKey = DOWN_ARROW;
    this.leftKey = LEFT_ARROW;
    this.rightKey = RIGHT_ARROW;
  }

  // handleInput
  //
  // Allows the hero to move based on the key pressed
  handleInput() {
  if (keyIsDown(this.leftKey)) {
    this.vx = -this.speed;
  }
  else if (keyIsDown(this.rightKey)) {
    this.vx = this.speed;
  }
  else {
    this.vx = 0;
  }

  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else {
    this.vy = 0;
  }
}

// move
//
// Allows the hero's position to change thanks to velocity
move() {
    this.x += this.vx;
    this.y += this.vy;

    this.handleWrapping(); // Calls the handleWrapping method, note the use of "this"
  }

// handleWrapping
//
// Allows the hero to end up on one end of the canvas when they reach its width/height
handleWrapping() {
  if (this.x < 0) {
    this.x += width;
  }
  else if (this.x > width) {
    this.x -= width;
  }
  if (this.y < 0) {
    this.y += height;
  }
  else if (this.y > height) {
    this.y -= height;
  }
}

// handleDisappearing
//
// Makes an NPC slowly fade out if the hero touches them
  handleDisappearing(npc) {
  let d = dist(this.x,this.y,npc.x,npc.y);
  if (d < this.radius + npc.radius) {
    npc.health -= 5;
    if (npc.health <= 0) {
      // The score increases
      gameScore -= 1;
      // NPCs teleport in order for the score to stop decreasing
      npc.x = width + 200;
      npc.y = height + 200;
      // A sound effect plays
      npcSFX.play();
    }
  }
}

// moveRight
//
// Makes the hero move only right with the right arrow key
moveRight() {
  this.x += this.vx;

  if (keyIsDown(this.rightKey)) {
    this.vx = this.speed;
  }
  else {
    this.vx = 0;
  }
}

// display
//
// Sets the appearance of the hero
display() {
  push();
  noStroke();
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.radius, this.radius);
  pop();
}

}
