var canvas,playerCount;
var database,form;

var player,game;
var allPlayers;

var gamestate = 0;

function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth-20,displayHeight-20);      
  game = new Game ()
  game.getState() 
  game.start()
}     

function draw(){
  
if(playerCount === 4){
  game.update(1)
}

 if(gamestate === 1){
  clear()
  game.play()
 }

    drawSprites();
}
