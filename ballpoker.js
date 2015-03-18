  pollblan = new RoboroCanvas("pollblan");

    rx = 400;
    ry = 300;
    pollblan.circle(rx, ry, 20, "red");
  
    gx = 200;
    gy = 200;
    pollblan.circle(gx, gy, 18, "green");
  
    gxspeed = 6;
    gyspeed = 6;
    
    points = 0;
  
  pollblan.update = function()
  {
  	with(pollblan){
    clearScreen();
    
    //HÃ¤r kÃ¶r vi touchscreen
    if(touchscreen.currentlyTouched)
      {
        rx=touchscreen.points[0].x;
        ry=touchscreen.points[0].y;
      }
	circle(rx, ry, 20, "red");
    
    gx += gxspeed;
    gy += gyspeed;
    circle(gx, gy, 18, "green");
    
    //VÃ¤ggstuds
    if(gx < 10)
      gxspeed *= -1;
    if(gy < 10)
      gyspeed *= -1;
    if(gx > width - 10)
      gxspeed *= -1;
    if(gy > height - 10)
      gyspeed *= -1;
    
    //Om det Ã¤r en trÃ¤ff
    if(distance(gx, gy, rx, ry) < 19)
    {
      points++; //Du fick en poÃ¤ng
      
      //Den grÃ¶na bollen blir snabbare
      if(gxspeed > 0)
        gxspeed += 5;
      else
        gxspeed -=5;
      if(gyspeed > 0)
        gyspeed += 5;
      else
        gyspeed -=5;      

      //Den grÃ¶na bollen startar om pÃ¥ random stÃ¤lle, if-satserna hindrar den frÃ¥n att hamna utanfÃ¶r skÃ¤rmen
      gx = random(width);
      if(gx < 12)
        gx = 100;
      if(gx > width - 12)
        gx = 400;
      
      gy = random(height);
      if(gy < 12)
        gy = 100;
      if(gy > height - 12)
        gy = 400;   
    }
    
    text(50, 50, 18, "You have hit " + points + " times!", "black");
    
    //NÃ¤r man trÃ¤ffat fem gÃ¥nger lÃ¤gger den av
    if(points > 4)
      stopUpdate();
    }	  
  }