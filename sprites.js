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
	var triangleDude;
	triangledude = createSprite(-10,height-85);
	triangledude.draw = drawTriangleDude;
	//triangledude.velocity.x = Math.random() * 2;
	triangledude.setCollider("rectangle",0,0,30,15);
	triangledude.setSpeed(random(2, 3), 0);
  //scale affects the size of the collider
  triangledude.scale = random(0.5, 1);
  //mass determines the force exchange in case of bounce
  triangledude.mass = triangledude.scale;
	//triangles.overlap(triangles,stack);
	triangles.add(triangledude);

}


function stack(triangle1, platform1){
	var top;
	var bottom;
	/*if (t1.position.y>=t2.position.y){
		top = t1;
		bottom = t2;
	}
	else{
		top = t2;
		bottom = t1;
	}
	if (top.position.y > bottom.position.y + bottom.height) {
		top.position.y+=10;
	}*/
	triangle1.setSpeed(0, 0);
	if(triangle1.overlap(triangles)){
		triangle1.position.y = triangle1.position.y - 10;
		triangle1.position.x = triangle1.position.x + 10;
	}

}

function createPlatform(x,y,w,h){
	var platform;
	platform = createSprite(x,y,w,h);
	platform.immovable = true;
	platform.shapeColor = (0,0,0);
	platforms.add(platform);
	println("1");
}

function setPlatforms(numPlatforms){
	var padding = 100;
	var platformDist = (height-padding)/numPlatforms;
	var platformHeight = 35;
	var xpos;
	var ypos;

	createPlatform(0,height-platformHeight,width*2,platformHeight);
	for (var i=1; i<numPlatforms-1; i++){
		// platformWidth = random(100,300);
		platformWidth = 200;
		xpos = random(0,width-platformWidth);
		ypos = height-platformDist*(i+1)+platformHeight;
		createPlatform(xpos,ypos,platformWidth,platformHeight);
	}
	ypos = height-platformDist*(i+1)+platformHeight;
	// ypos = height;
	createPlatform(width/2-100,ypos,200,platformHeight);

	//make them black twice, rectangle still not black
	for (i=0; i<platforms.legnth; i++) {
		platforms[i].shapeColor = (0,0,0);
	}

}
