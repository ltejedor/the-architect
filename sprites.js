function drawTriangleDude(){
	push();
	fill(230,30,0);
	triangle(0,0,30,0,15,-25);
	pop();
}

function createTriangleDude(){
	var triangledude;
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

function createCircleDude(){
	var circleDude;
	circleDude = createSprite(mouseX, mouseY,15, 15);
	circleDude.draw = drawCircleDude;
	//triangledude.velocity.x = Math.random() * 2;
	circleDude.setCollider("rectangle",0,0,30,15);
	//circleDude.setSpeed(random(2, 3), 90);
    //scale affects the size of the collider
    circleDude.scale = random(0.5, 1);
    //mass determines the force exchange in case of bounce
    circleDude.mass = circleDude.scale;
	//triangles.overlap(triangles,stack);
	baddies.add(circleDude);

}

function drawCircleDude(){
	push();
	fill(5,20,50);
	ellipse(0, 0, 15, 15);
	pop();
}


function stack(triangle1, triangle2){
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
	if(triangle1.overlap(triangles) && (triangle1.getSpeed() > 0 || triangle2.getSpeed() > 0)){
		triangle1.position.y = triangle1.position.y - 15;
		if(triangle1.getSpeed() < triangle2.getSpeed()){
			triangle1.position.x = triangle1.position.x + 20;
			triangle2.setSpeed(0, 0);
		}
		else{
			triangle1.position.x = triangle1.position.x - 20;
			triangle1.setSpeed(0, 0);
		}
	}
}

function jump(triangle, platform){
	//should go to the top of the platform and then not move anymore?
	//stacking is hard :(
}

function gravity(typeSprite, speed){
	for (var i = 0; i < typeSprite.length; i++){
		if(!(typeSprite[i].overlap(typeSprite)) && !(typeSprite[i].overlap(levelFloor)) && !(typeSprite[i].overlap(platforms))){
			typeSprite[i].position.y = typeSprite[i].position.y + speed;
		}
	}
}

function createPlatform(x,y,w,h){
	var platform;
	platform = createSprite(x,y,w,h);
	platform.immovable = true;
	platform.shapeColor = (0,0,0);
	platforms.add(platform);
}

function setPlatforms(numPlatforms){
	var padding = 100;
	var platformDist = (height-padding)/numPlatforms;
	var platformHeight = 35;
	var xpos;
	var ypos;

	levelFloor = createSprite(0,height-platformHeight,width*2,platformHeight);
	levelFloor.immovable = true;
	levelFloor.shapeColor = (0,0,0);
	for (var i=1; i<numPlatforms-1; i++){
		// platformWidth = random(100,300);
		platformWidth = 200;
		xpos = random(0,width-platformWidth);
		ypos = height-platformDist*(i+1)+platformHeight;
		createPlatform(xpos,ypos,platformWidth,platformHeight);
	}
	ypos = height-platformDist*(i+1)+platformHeight;
	createPlatform(width/2-100,ypos,200,platformHeight);
}


/*function drawJelly(){
	  fill(255,90,150);
	  push();
	  rotate(radians(this.getDirection()));
	  ellipse(0,0, 100+this.getSpeed(), 100-this.getSpeed());
	  pop();
}*/