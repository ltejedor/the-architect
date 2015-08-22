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
  //scale affects the size of the collider
  triangledude.scale = random(0.5, 1);
  //mass determines the force exchange in case of bounce
  triangledude.mass = triangledude.scale;
	//triangles.overlap(triangles,stack);
	triangles.add(triangledude);

}


function stack(triange1, platform1){
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
	triange1.setSpeed(0, 0);

}

function createPlatforms(numPlatforms){
	fill(0);
	var platformDist = height/numPlatforms;
	var platformHeight = 50;
	var xpos;
	var ypos;

	platforms.add(createSprite(0,height-platformHeight,width*2,platformHeight));
	platforms[0].setCollider("rectangle",-30,height-platformHeight,width+60,platformHeight);
	platforms[0].shapeColor=(0,0,0);
	for (var i=1; i<numPlatforms-1; i++){
		// platformWidth = random(100,300);
		platformWidth = 200;
		xpos = random(0,width-platformWidth);
		ypos = height-platformDist*(i+1)+platformHeight;
		var platform = createSprite(xpos,ypos,platformWidth,platformHeight);

		platform.immovable = true;
		// console.log(ypos);
		platforms.add(platform);
		platforms[i].shapeColor=(0,0,0);
		//platforms[i].setCollider("rectangle",xpos,ypos,platformWidth,platformHeight);
	}
	// println(i);
	// ypos = height-platformDist*(i)+platformHeight;
	// platforms.add(createSprite(width-100,ypos,200,platformHeight));
	// //println(platforms.length);
	// platforms[i+1].setCollider("rectangle",xpos,ypos,platformWidth,platformHeight);
	// platforms[i+1].immovable = true;
	// platforms[i+1].shapeColor = (0,0,0);
}