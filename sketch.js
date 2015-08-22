
var gameLevel;
var t; // Counter that resets on each level.
var startBtn;
var jelly;
var triangledude;
var jellies;
var platforms;
var triangles;

function setup() {
	var cnv = createCanvas(windowWidth, windowHeight);
	platforms = new Group();
	triangles = new Group();
	jellies = new Group();

	textSize(52);
	textAlign(CENTER);
	background(5, 5, 10);

	gameLevel = 0;

	//makes a jelly
	jelly = createSprite(400, 200, 10, 10);
	jelly.draw = drawJelly;
    jelly.maxSpeed = 10;
    jelly.setCollider("circle", -2,2,55);
	jellies.add(jelly);

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


//if the user presses the start button, go up a level
function mousePressed() {
	if(startBtn.hoverBtn() == true){
		gameLevel++;
		t=0;
	}
}

