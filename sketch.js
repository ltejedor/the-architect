
/* to do
replace shapes with images and animations
collisions
*/

var gameLevel;
var t; // Counter resets on each level.
var startBtn;
var jelly;
var jellies;
var platforms;
var triangles;
var levelFloor;
var points;
var baddies;

function setup() {
	var cnv = createCanvas(windowWidth, windowHeight);
	platforms = new Group();
	triangles = new Group();
	jellies = new Group();
	baddies = new Group();

	textSize(52);
	textAlign(CENTER);
	background(5, 5, 10);

	gameLevel = 0;

}

function draw() {
	background(255);
	if(gameLevel == 0){
		startScreen();
	}
	else if (gameLevel == 1){
		levelOne();
	}
}


//if the user presses the start button, go up a level
function mousePressed() {
	if(startBtn.hoverBtn() == true && gameLevel == 0){
		gameLevel++;
		t=0;
	}
	else if(gameLevel == 1){
		createCircleDude();
	}
}

