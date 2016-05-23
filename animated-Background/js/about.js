console.log("animation page loaded!");

var bubbles = [];
var song, analyzer;
var rms = analyzer.getLevel();

function preload(){
    song = loadSound("assets/WalkingWithHappiness.mp3");}   

function setup(){
    createCanvas(600,700);

    song.loop();
    
    // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);   
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0);

  for (var i = 0; i < bubbles.length; i++){
    bubbles[i].display();
  };
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(255);
    fill(255, 0, 150, 50);
    ellipse(this.x, this.y,10+rms*200, 10+rms*200);
  }
}