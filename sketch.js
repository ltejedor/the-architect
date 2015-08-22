/*
  I love you! meoww

  also, do literally whatever you want, I'm open to this being super weird and unrelated by the end!
 */

var gameLevel;
var startBtn;
var jelly;

function setup() {
	var cnv = createCanvas(windowWidth, windowHeight);

	textSize(52);
	textAlign(CENTER);
	background(5, 5, 10);

	gameLevel = 0;


	jelly = createSprite(400, 200, 10, 10);


	jelly.draw = function() {

	  //the center of the sprite will be point 0,0
	  //"this" in this function will reference the sprite itself
	  fill(255,90,150);

	  //make the ellipse stretch in the sprite direction
	  //proportionally to its speed
	  push();
	  rotate(radians(this.getDirection()));
	  ellipse(0,0, 100+this.getSpeed(), 100-this.getSpeed());
	  pop();
	}

  jelly.maxSpeed = 10;
}

function draw() {
	if(gameLevel == 0){
		startScreen();
	}
	else{
		levelOne();
	}


}

function startScreen(){
	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);


	fill(r, g , b);

	text("THE ARCHITECT", width/2, height/2);


	startBtn = new NewButton(width/2, height/2 + 50, 'START');
	startBtn.showNewBtn();


}

//button class

function NewButton(posX, posY, text){
	this.posX = posX;
	this.posY = posY;
	this.butText = text;
	this.butWidth = 100;
	this.butHeight = 40;
}

NewButton.prototype.showNewBtn = function(){
	rectMode(CENTER);

	//change color on button hover
	if(this.hoverBtn() == false){
		fill(50, 50, 150);
	}
	else{
		fill(80, 80, 150);
	}

	rect(this.posX, this.posY, this.butWidth, this.butHeight);
	fill(255);
	textSize(16);
	text(this.butText, this.posX, this.posY + 6);
}

NewButton.prototype.hoverBtn = function(){
	 if (mouseX >= this.posX - this.butWidth/2 && mouseX <= this.posX + this.butWidth/2 &&
     mouseY >= this.posY - this.butHeight/2 && mouseY <= this.posY + this.butHeight/2) {
    return true;
  } else {
    return false;
  }
}


//if the user presses the start button, go up a level
function mousePressed() {
	if(startBtn.hoverBtn() == true){
		gameLevel++;
	}
}


//level class (sorry, I know not a class yet)
function levelOne(){
	background(50, 220, 255);

	//jelly!
	var jr = Math.random() * 255;
	var jb = Math.random() * 80;
	var jg = Math.random() * 200;
	fill(jr, jb, jg);
	stroke(jr, jb, jg);
	strokeWeight(3);


	//mouse trailer, the speed is inversely proportional to the mouse distance
  jelly.velocity.x = (mouseX-jelly.position.x)/10;
  jelly.velocity.y = (mouseY-jelly.position.y)/10;

  drawSprites();

}


