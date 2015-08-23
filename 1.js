function levelOne(){
	// background(50, 220, 255);
	if (t==0) {
		setPlatforms(6, 0);
        //makes a jelly
        //jelly = createSprite(400, 200, 10, 10);
        //jelly.draw = drawJelly;
        //jelly.maxSpeed = 10;
        //jelly.setCollider("circle", -2,2,55);
        //jellies.add(jelly);
	}

    //jelly.velocity.x = (mouseX-jelly.position.x)/10;
    //jelly.velocity.y = (mouseY-jelly.position.y)/10;

    triangles.overlap(triangles,stack);


    if (t%100==0) {
        createTriangleDude();
    }



    for (var i=0;i<triangles.length;i++){
    	if (triangles[i].position.x < 0){
            triangles[i].setSpeed(random(2, 3), 0);
    	}
    	if (triangles[i].position.x > width - triangles[i].width/4){
            triangles[i].setSpeed(random(-2, -3), 0);
    	}
    }


    triangles.bounce(triangles);
    //triangles.bounce(platforms);

    for(var i=0; i<platforms.length;i++){
        triangles.overlap(platforms[i], stack);
    }



    //drawSprites(jellies);
    drawSprites();




    t++;
}
