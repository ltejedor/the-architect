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



    if (t%25==0) {
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


    //triangles.bounce(platforms);

    for(var i=0; i<platforms.length;i++){
        triangles.overlap(platforms[i], jump);
    }




    //drawSprites
    drawSprites();

    gravity(triangles, 1);
    gravity(baddies, 3);

    //once the baddies stop falling have them choose a direction to go
    for (var i=0;i<baddies.length;i++){
        if((baddies[i].position.y == baddies[i].previousPosition.y) && (baddies[i].position.x == baddies[i].previousPosition.x)){
            baddies[i].setSpeed(random(-2, 2), 0);
        }
        else if(!(baddies[i].position.y == baddies[i].previousPosition.y)){
            baddies[i].setSpeed(0, 0);
        }

        //also don't let them run off the edge of the screen
        if (baddies[i].position.x < 0){
            baddies[i].setSpeed(random(2, 3), 0);
        }
        if (baddies[i].position.x > width - baddies[i].width/4){
            baddies[i].setSpeed(random(-2, -3), 0);
        }

        //if a baddie hits a triangle the triangle goes away
        triangles.overlap(baddies[i], explosion);

        //if a circle baddie gets hit 3 times it disappears
        if(baddies[i].hits > 3){
            baddies[i].remove();
        }
    }

    updatePoints();



    t++;
}

