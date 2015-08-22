function drawTriangleDude(){
	push();
	fill(0);
	triangle(0,0,30,0,15,-25);
	pop();
}

function drawJelly(){
	  fill(255,90,150);
	  push();
	  rotate(radians(this.getDirection()));
	  ellipse(0,0, 100+this.getSpeed(), 100-this.getSpeed());
	  pop();
}

function createPlatforms(numPlatforms){
	fill(0);
	var platformDist = height/numPlatforms;
	var platformHeight = 50;
	var xpos;
	var ypos;

	platforms.add(createSprite(0,height-platformHeight,width*2,platformHeight));
	platforms[0].setCollider("rectangle",0,height-platformHeight,width,platformHeight);
	platforms[0].shapeColor=(0,0,0);
	for (var i=1; i<numPlatforms; i++){
		// platformWidth = random(100,300);
		platformWidth = 200;
		xpos = random(0,width-platformWidth);
		ypos = height-platformDist*(i+1)+platformHeight;
		// console.log(ypos);
		platforms.add(createSprite(xpos,ypos,platformWidth,platformHeight));
		platforms[i].setCollider("rectangle",xpos,ypos,platformWidth,platformHeight);
		platforms[i].shapeColor=(0,0,0);
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