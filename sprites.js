function drawTriangleDude(){
	push();
	fill(230,30,0);
	triangle(0,0,30,0,15,-25);
	pop();
}

/*function drawJelly(){
	  fill(255,90,150);
	  push();
	  rotate(radians(this.getDirection()));
	  ellipse(0,0, 100+this.getSpeed(), 100-this.getSpeed());
	  pop();
}*/

function createTriangleDude(){
	triangledude = createSprite(-10,height-85);
	triangledude.draw = drawTriangleDude;
	//triangledude.velocity.x = Math.random() * 2;
	triangledude.setCollider("rectangle",0,0,30,15);
	triangledude.setSpeed(random(2, 3), 0);

	//triangles.overlap(triangles,stack);
	triangles.add(triangledude);
}


function stack(t1,t2){
	var top;
	var bottom;
	if (t1.position.y>=t2.position.y){
		top = t1;
		bottom = t2;
	}
	else{
		top = t2;
		bottom = t1;
	}
	if (top.position.y > bottom.position.y + bottom.height) {
		top.position.y+=10;
	}
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