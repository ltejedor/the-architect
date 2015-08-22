function startScreen(){
	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);

	fill(r, g , b);

	text("BLACKOUT", width/2, height/2);

	startBtn = new NewButton(width/2, height/2 + 50, 'START');
	startBtn.showNewBtn();
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
