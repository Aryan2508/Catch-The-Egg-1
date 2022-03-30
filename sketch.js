var canvas;
var backgroundImage, bucket1_img, bucket2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player;
var playerCount = 0;
var allPlayers, bucket1, bucket2, fuels, powerCoins, obstacles;
var buckets = [];
var egg1img,egg2img,egg3img,egg4img,egg5img,egg6img,egg7img,goldeneggimg ;
var eggs;
var eggGroup;

function preload() {
  backgroundImage = loadImage("assets/Add a heading (1).png");
  bucket1_img = loadImage("assets/bucket.png");
  bucket2_img = loadImage("assets/bucket.png");
  track = loadImage("assets/Land.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  egg1img = loadImage("assets/egg 1.png");
  egg2img = loadImage("assets/egg 2.png");
  egg3img = loadImage("assets/egg 3.png");
  egg4img = loadImage("assets/egg 4.png");
  egg5img = loadImage("assets/egg 5.png");
  egg6img = loadImage("assets/egg 6.png");
  goldeneggimg = loadImage("assets/Golden egg.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  eggGroup = new Group();
  
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
