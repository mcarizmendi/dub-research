let timeSinceStartInSeconds;

let randomTimer = 3000;

let subwaySounds = [];
var wallpaper;
function preload(){
  subwaySounds[0] = loadSound("1.mp3");
  subwaySounds[1] = loadSound("2.mp3");
  subwaySounds[2] = loadSound("3.mp3");
  subwaySounds[3] = loadSound("4.mp3");
   subwaySounds[4] = loadSound("5.mp3")
  wallpaper=loadImage('wallpaper.png');
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw() {

  if (millis() > randomTimer){
    playRandomSound();
    drawRandom();
    randomTimer = randomTimer + random(2000,5000);
    print("current time "+millis() + " ,next timer: "+randomTimer)
  } 
   background(wallpaper);
}
function mousePressed(){
  print(timeSinceStartInSeconds);
  playRandomSound();
  drawRandom();
}
function playRandomSound(){
  let randNum = floor(random(0,5));
  print("playing sound number " + randNum)
  subwaySounds[randNum].play();
}
function drawRandom(){
  	noStroke();
  fill(0);
  circle(random(width),random(height),70);
  circle(random(width),random(height),50);

}
function button(){
  
}
