function startScreen(){
	makeWeb();
	displayText();

	textStyle(BOLD);

	startBtn = new NewButton(width/2, height/2 + 50, 'START');

	startBtn.showNewBtn();
	textStyle(NORMAL);

}

function makeWeb(){
	strokeWeight(3);
	stroke(random(0, 50));

	for(var i = 0; i < 5; i++){
		if (random(1) < .5){
			webLine = line(random(0, displayWidth), 0, random(0, displayWidth), displayHeight);
		}
		else{
			webLine = line(0, random(0, displayHeight), displayWidth, random(0, displayHeight));
		}
	}

	strokeWeight(0);
}





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

function displayText(){
		var chance = random(1);
		if(chance<.1){
			textCol = 200;
		}
		else if(chance<.2){
			textCol = 50;
		}
		else{
			textCol = 0;
		}
		//var g = Math.round(Math.random() * 255);
		//var b = Math.round(Math.random() * 255);

		fill(textCol);
		textFont("Georgia");
		textSize(55);
		strokeWeight(2);
		stroke(255);
		text("BLACKOUT", width/2, height/2);
		strokeWeight(0);

}