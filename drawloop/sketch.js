function setup(){  
    createCanvas (500,500) ;
    background (200) ;
xSpeed=1 ; 
ySpeed=1 ; 
} 
  



var x = 0; 
var y = 0;
var xSpeed  ;
var ySpeed  ; 

function draw(){
    background(200); 
    ellipse(x,y,30,30);
  else if (x>=15){
        xSpeed = -1;
    }
        if (y>=15){
            ySpeed = -1; 

        }else if (y=15){
            ySpeed =1; 
        }
        
    
x= x+xSpeed; //x+=xSpeed;

y= y+ySpeed; //y+ySpeed; 
}
