//SteamPipe 7 DarkPad C3.wav by Jovica from Freesound.org\
//Moscow Metro Line 5 Buzzer/Chime 2 by Chungus43A
//Prague Metro Line B Chime by Chungus43A
//nyc subway

//X load all sounds
//X pick a random sound and play it when i click
//Xthen change it to happen after a random number of seconds
//add a click to start (so can play outside of p5 web editor)

let timeSinceStartInSeconds;

let randomTimer = 3000;

let subwaySounds = [];
// let timeSinceStart;
// let steampipeSnd;
// let pragueMetroSnd;
// let moscowMetroSnd;

function preload(){
  subwaySounds[0] = loadSound("1.mp3");
  subwaySounds[1] = loadSound("2.mp3");
  subwaySounds[2] = loadSound("3.mp3");
  subwaySounds[3] = loadSound("4.mp3");
   subwaySounds[4] = loadSound("5.mp3")
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
  fill(random(255), random(255), random(255));
  circle(random(width),random(height),70);
  circle(random(width),random(height),50);

}

