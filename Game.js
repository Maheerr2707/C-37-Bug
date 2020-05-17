class Game {
   constructor(){}

 getState(){
    var gamestateref = database.ref('gamestate');
    gamestateref.on('value',function(data){
       gamestate = data.val()
    })
 }
   update(state){
database.ref('/').update({
   gamestate:state
})
   }
async start(){
   if(gamestate === 0){
   player = new Player()
   
   var playerCountref = await database.ref('playerCount').once("value")

   if(playerCountref.exists()){
      playerCount = playerCountref.val()
      player.getCount()
   }

   form = new Form ()
   form.display()
 }
   }

play(){
 form.hide()
 textSize(30)
 text("Game Start",120,100)
 Player.getPlayerinfo()
 
console.log("allPlayers "+allPlayers)

   if(allPlayers !== undefined){
      var displayPosition = 130;
      for(var plr in allPlayers){
         console.log("plr is "+plr)
         console.log("index "+player.index)
        if(plr === "player"+player.index){
          fill("red");
        } 
     else{
        fill("black")
     } 
    displayPosition = displayPosition + 20;
    textSize(15);
    text(allPlayers[plr].name + ":", + allPlayers[plr].distance,120,displayPosition) 
      }  
   } 
if(keyIsDown(UP_ARROW)&&(player.index!==null)){
  player.distance = playerdistance + 50;
  player.update
}
   }
}
