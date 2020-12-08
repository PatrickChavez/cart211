// NPC
//
// An object that disappears when the hero touches it

class NPC {
  // constructor
  //
  // A collection of the NPC's properties
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.radius = 50;
    this.image = image;
    this.maxHealth = 255;
    this.health = this.maxHealth;
  }

  // display
  //
  // Sets the appearance of the NPC
  display() {
    push();
    noStroke();
    imageMode(CENTER);
    // tint() added to make the images fade away
    tint(255, this.health);
    image(this.image, this.x, this.y, this.radius, this.radius);
    pop();
  }

}
