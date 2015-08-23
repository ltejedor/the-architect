function levelOne(){
	// background(50, 220, 255);

	if (t==0) {
		setPlatforms(6, 0);
        createCursor();
        noCursor();
	}

    cursorSprite.position.x=mouseX;
    cursorSprite.position.y=50;


    triangles.bounce(triangles);



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

        //check it triangle is under first platform
        if(triangles[i].position.x > platforms[0].position.x - 100 && triangles[i].position.x < platforms[0].position.x + 100){
            triangles[i].overlap(triangles,stack);
        }

    }


    //triangles.bounce(platforms);

    for(var i=0; i<platforms.length;i++){
        triangles.overlap(platforms[i], jump);
    }

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
    updateQueue();


    t++;
}

function updateQueue() {
    if (t%100==0){
        cursorQueue.unshift("Minion");
    }
    if (cursorQueue.length == 0) {
        cursorSprite.changeAnimation("Nothing");
    }
    if (cursorQueue[0]=="Minion"){
        cursorSprite.changeAnimation("Minion");
    }
}