var wall, thickness;
var bullet, speed;
var damage;


function setup() {
  createCanvas(800, 400);

  //creating thickness, speed and weight
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  // creating the bullet and wall sprites
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";

  wall = createSprite(700, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);

}

function draw() {
  background(0);

  //velocity of the bullet
  bullet.velocityX = speed;

//dectecting if the bullet has touched the wall
if (bullet.isTouching(wall)) {

    bullet.velocityX = 0;

    // creating the damage equation
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = "red";
    }
    if (damage < 10) {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}
