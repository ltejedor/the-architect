
/* to do
collisions
*/

var gameLevel;
var t; // Counter resets on each level.
var startBtn;
var cursorQueue;
var cursorSprite;
var cursors;
var platforms;
var triangles;
var levelFloor;
var lastPoints = 0;
var points = 0;
var baddies;
var web = [];
var tArray1 = [];
var tArray2 = [];
var tArray3 = [];
var tArray4 = [];

function setup() {
	createBigBad();

	var cnv = createCanvas(windowWidth, windowHeight);
	platforms = new Group();
	triangles = new Group();
	jellies = new Group();
	baddies = new Group();
	web = new Group();
	cursors = new Group();
	cursorQueue = ["Minion","Minion","Minion"];

	textSize(52);
	textAlign(CENTER);
	background(200);

	gameLevel = 0;

}

function draw() {
	if(gameLevel == 0){
		frameRate(4);
		startScreen();
	}
	else if (gameLevel == 1){
		background(255);
		frameRate(30);
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
		if(cursorQueue.length > 0){
			var next = cursorQueue.pop();
			if (next=="Minion") {
				createCircleDude();
			}
		}
	}
}

function updatePoints(){
	fill(0);
	textSize(35);
	if (points<10){
		var stringpts = "000"+str(points);
	}
	else if (points<100){
		var stringpts = "00"+str(points);
	}
	else if (points<1000){
		var stringpts = "0"+str(points);

	}
	else {
		var stringpts = str(points);
	}
	text(stringpts, 60, 50);
}