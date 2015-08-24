
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


function preload() {
  // add the path to your sound
	splashMusic = loadSound('assets/sound/pinecones.wav');
	gameBgMusic = loadSound('assets/sound/main-bg-tomb.mp3');
	baddieDropNoise1 = loadSound('assets/sound/scifi038.mp3');
	baddieDropNoise2 = loadSound('assets/sound/scifi039.mp3');
	baddieDropNoise3 = loadSound('assets/sound/scifi040.mp3');
	errorNoise = loadSound('assets/sound/paddlehit.mp3');
	deathNoise = loadSound('assets/sound/pop.wav');
}

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

	splashMusic.play();

}

function draw() {
	if(gameLevel == 0){
		frameRate(4);
		startScreen();
	}
	else if (gameLevel == 1){
		background(58,73,57);
		frameRate(30);
		levelOne();
	}
}


//if the user presses the start button, go up a level
function mousePressed() {
	if(startBtn.hoverBtn() == true && gameLevel == 0){
		gameLevel++;
		t=0;
		splashMusic.stop();
		gameBgMusic.play();
	}
	else if(gameLevel == 1){
		if(cursorQueue.length > 0){
			var next = cursorQueue.pop();
			if (next=="Minion") {
				var chance = random(1);
				createCircleDude();
				if(chance < .3){
					baddieDropNoise1.play();
				}
				else if(chance < .6){
					baddieDropNoise2.play();
				}
				else{
					baddieDropNoise3.play();
				}

			}
		}
		else{
			errorNoise.play();

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