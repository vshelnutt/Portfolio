var r=255,g=0,b=0;

setInterval(function(){
  if(r > 0 && b == 0){
    r--;
    g++;
  }
  if(g > 0 && r == 0){
    g--;
    b++;
  }
  if(b > 0 && g == 0){
    r++;
    b--;
  }
  $("#colorFade").text("HI I'm Vince and I want to build you a website!");
  $("#colorFade").css("color","rgb("+r+","+g+","+b+")");
},50);
