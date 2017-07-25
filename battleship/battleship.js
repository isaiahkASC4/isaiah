function setup(){

createCanvas(400,400); 
var tile = 100; 
for(var i=0; i<17; i++) 
{rect(tile+100,tile ++, 100,100);} 
//var x=0;
//var y=0;
var h=200;
// rect(i*w,j*h,w,h);
background(200);
// rect(0,100,100);
// rect(100,100,100,100);
// rect(0,100,100,100);
// rect(100,0,100,100);
// rect(300,200,100,100);
// rect(0,200,100,100);
// rect(0)300,100,100)
// rect(300,0,100,100);
// rect(400,400,100,100);
// rect(0,400,100,100);//
}

var row1 = ["su","nu","nu","nu"];
var row2 = ["nu","nu","nu","nu"];
var row3 = ["nu","nu","su","nu"];
var row4 = ["su","nu","nu","nu"];
var board = (row1,row2,row3,row4);

function draw(){
    stroke(0);
    var score=0;
    for (var i=0; i<board.legnth; i++){
        for (var j=0; j<board.length;j++){
            if(board[i][j]=="nu"||board[i][j]=="su"){
                fill(200);
            }
            else if (board[i][j]=="sc"){
                fill(255,0,0);
                score++;
            }
            rect(j*100,i*100,100,100,);//
        }
    }fill(100);
noStroke();
rect(190,401,100,100);
fill(0);

}


