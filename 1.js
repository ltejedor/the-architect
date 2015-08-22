function levelOne(){
	// background(50, 220, 255);
	if (t==0) {
		createPlatforms(6, 0);
	}

    jelly.velocity.x = (mouseX-jelly.position.x)/10;
    jelly.velocity.y = (mouseY-jelly.position.y)/10;


    if (t%100==0) {
		triangledude = createSprite(width/2,height/2);
		triangledude.draw = drawTriangleDude;
		triangledude.velocity.x = 1;
		triangles.add(triangledude);
    }

    for (i=0;i<triangles.length;i++){
    	if (triangles[i].position.x < 0){
    		triangles[i].velocity.x = 1;
    	}
    	if (triangles[i].position.x > width*2){
    		triangles[i].velocity.x = -1;
    		console.log(triangles[i].position.x)
    	}
    }

    drawSprites(jellies);
    drawSprites(triangles);
    drawSprites(platforms);
    t++;
}
