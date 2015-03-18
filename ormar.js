  pollblan = new RoboroCanvas("pollblan");
  
  count = 0;
  shift = 5;
  snake1x = 10;
  snake1y = pollblan.random(pollblan.height);
  snake2x = 600;
  snake2y = pollblan.random(pollblan.height);
  snake3x = pollblan.random(pollblan.width);
  snake3y = 10;
  snake4x = pollblan.random(pollblan.width);
  snake4y = 600;
  
  
  snake1xSpeed = 10;
  snake1ySpeed = 10;
  
  snake2xSpeed = -10;
  snake2ySpeed = -10;
  
  snake3xSpeed = -10;
  snake3ySpeed = -10;
  
  snake4xSpeed = 10;
  snake4ySpeed = 10;
  
  grisX = 400;
  grisY = 400;
  
  points = 0;
  
    rx = 0;
    ry = 0;
    pollblan.circle(rx, ry, 20, "white");
  
    pollblan.update = function(){
  	with(pollblan){
   clearScreen();
    text(50, 50, 18, "You have hit " + points + " snakes!", "black");
    circle(grisX, grisY, 20, "pink");
   count++;
    //Här kör vi touchscreen
    if(touchscreen.currentlyTouched)
    {
      rx=touchscreen.points[0].x;
      ry=touchscreen.points[0].y;
    }
		if(mouse.left == true)
	{
		rx = mouse.x;
		ry = mouse.y;
	}
   if(count<shift)
    picture(snake1x, snake1y, "http://marmeladov.com/gif/snRD.png");
   else
    picture(snake1x, snake1y, "http://marmeladov.com/gif/snRU.png");
   if(count<shift)
    picture(snake2x, snake2y, "http://marmeladov.com/gif/snLD.png");
   else
    picture(snake2x, snake2y, "http://marmeladov.com/gif/snLU.png");
   if(count<shift)
    picture(snake3x, snake3y, "http://marmeladov.com/gif/snUD.png");
   else
    picture(snake3x, snake3y, "http://marmeladov.com/gif/snUU.png");
   if(count<shift)
    picture(snake4x, snake4y, "http://marmeladov.com/gif/snDD.png");
   else
    picture(snake4x, snake4y, "http://marmeladov.com/gif/snDU.png");
   if(count > shift * 2)
    count = 0;
    
    snake1x += snake1xSpeed;
    snake1y += snake1ySpeed;
    
    snake2x += snake2xSpeed;
    snake2y += snake2ySpeed;
    
    snake3x += snake3xSpeed;
    snake3y += snake3ySpeed;
    
    snake4x += snake4xSpeed;
    snake4y += snake4ySpeed;
    
     //Väggstuds
    if(snake1x < 10)
      snake1xSpeed *= -1;
    if(snake1y < 10)
      snake1ySpeed *= -1;
    if(snake1x > width - 10)
      snake1xSpeed *= -1;
    if(snake1y > height - 10)
      snake1ySpeed *= -1;
    
     //Väggstuds
    if(snake2x < 10)
      snake2xSpeed *= -1;
    if(snake2y < 10)
      snake2ySpeed *= -1;
    if(snake2x > width - 10)
      snake2xSpeed *= -1;
    if(snake2y > height - 10)
      snake2ySpeed *= -1;
    
      //Väggstuds
     if(snake3x < 10)
      snake3xSpeed *= -1;
    if(snake3y < 10)
      snake3ySpeed *= -1;
    if(snake3x > width - 10)
      snake3xSpeed *= -1;
    if(snake3y > height - 10)
      snake3ySpeed *= -1; 
        
      //Väggstuds
     if(snake4x < 10)
      snake4xSpeed *= -1;
    if(snake4y < 10)
      snake4ySpeed *= -1;
    if(snake4x > width - 10)
      snake4xSpeed *= -1;
    if(snake4y > height - 10)
      snake4ySpeed *= -1; 
    
     if(distance(snake1x, snake1y, rx, ry) < 19)
    {
        snake1x = 10;
  		snake1y = random(height);
      	points++;
    }
    
     if(distance(snake2x, snake2y, rx, ry) < 19)
    {
        snake2x = 10;
  		snake2y = random(height);
        points++;
    }
         if(distance(snake3x, snake3y, rx, ry) < 19)
    {
        snake3x = 10;
  		snake3y = random(height);
        points++;
    }
         if(distance(snake4x, snake4y, rx, ry) < 19)
    {
        snake4x = 10;
  		snake4y = random(height);
        points++;
    }
    //Ifall ormen nuddar grisen
     if(distance(grisX, grisY, snake1x, snake1y) < 19)
    {
    	stopUpdate(); 
    }
    
        //Ifall ormen nuddar grisen
     if(distance(grisX, grisY, snake2x, snake2y) < 19)
    {
    	stopUpdate(); 
    }
            //Ifall ormen nuddar grisen
     if(distance(grisX, grisY, snake3x, snake3y) < 19)
    {
    	stopUpdate(); 
    }
    
    
        //Ifall ormen nuddar grisen
     if(distance(grisX, grisY, snake4x, snake4y) < 19)
    {
    	stopUpdate(); 
    }
   }  
  }