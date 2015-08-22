/*
  Empty example
 */



function setup() {
	var cnv = createCanvas(windowWidth, windowHeight);

	textSize(52);
	textAlign(CENTER);
	background(5, 5, 10);
}

function draw() {
	startScreen();
}

function startScreen(){
	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);


	fill(r, g , b);

	text("THE ARCHITECT", width/2, height/2);


	var startBtn = new NewButton(width/2, height/2 + 50, 'START');
	startBtn.showNewBtn();

}

function NewButton(posX, posY, text){
	this.posX = posX;
	this.posY = posY;
	this.butText = text;
}

NewButton.prototype.showNewBtn = function(){
	rectMode(CENTER);
	fill(50, 50, 150);
	rect(this.posX, this.posY, 100, 40);

	fill(255);
	textSize(12);
	text(this.butText, this.posX, this.posY + 4);
}