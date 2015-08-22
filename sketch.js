/*
  I love you! meoww
  also, do literally whatever you want, I'm open to this being super weird and unrelated by the end!
 */

var gameLevel;
var t; // Counter that resets on each level.
var startBtn;
var jelly;
var GRAVITY = 0.2;

function setup() {
	var cnv = createCanvas(windowWidth, windowHeight);

	textSize(52);
	textAlign(CENTER);
	background(5, 5, 10);

	gameLevel = 0;



	//makes a jelly
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
    jelly.setCollider("circle", -2,2,55);
}

function draw() {
	background(255);
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
		t=0;
	}
}


function levelOne(){
	// background(50, 220, 255);

	if (t==0) {
		createPlatforms(6, 0);
	}

	//jelly!
	//mouse trailer, the speed is inversely proportional to the mouse distance
    jelly.velocity.x = (mouseX-jelly.position.x)/10;
    jelly.velocity.y = (mouseY-jelly.position.y)/10;
    // jelly.velocity.y += GRAVITY;
    //will make jelly appear
    drawSprites();
    t++;
}

function createPlatforms(numPlatforms){
	//lol I'm so sorry. should obv be only written once and with a random x position, but couldn't figure out how to make them permanent? Or how to do like any math man w/e it's like 1am here.
	fill(200, 200, 50);
	var platformDist = height/numPlatforms;
	var platformHeight = 50;
	var xpos;
	var ypos;

	var platforms = [createSprite(0,height-platformHeight,width*2,platformHeight)];
	platforms[0].setCollider("rectangle",0,height-platformHeight,width,platformHeight);
	for (var i=1; i<numPlatforms; i++){
		// platformWidth = random(100,300);
		platformWidth = 200;
		xpos = random(0,width-platformWidth);
		ypos = height-platformDist*(i+1)+platformHeight;
		// console.log(ypos);
		platforms.push(createSprite(xpos,ypos,platformWidth,platformHeight));
		platforms[i].setCollider("rectangle",xpos,ypos,platformWidth,platformHeight);
	}

	// platformPosY = height - 100;
	// platform1 = createSprite(50, height - 100, width/5, 30);
	// platform1.setCollider ( "rectangle", platformPosX, platformPosY, width/5, 30)
	// //sorry starts here for real
	// platform2 = createSprite(400, height - 200, width/3, 30);
	// platform2.setCollider("rectangle",400, height - 200, width/3, 30);
	// platform3 = createSprite(100, height - 300, width/2, 30);
	// platform3.setCollider("rectangle",100, height - 300, width/2, 30);
	// platform4 = createSprite(700, height - 400, width/6, 30);
	// platform4.setCollider("rectangle",700, height - 400, width/6, 30);


	// jelly.collide(platform1);
	// jelly.collide(platform2);
	// jelly.collide(platform3);
	// jelly.collide(platform4);
	// jelly.bounce(platform1);
}