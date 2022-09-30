function updateViewBattle() {
    let html = "";

 html+=    `
 <div style=" display: flex;
 justify-content: center;">
 <div style="float:left;"> <img src="${model.randomFind.picture}" style="height:300px;width:200px;"><br></div>
    
 <div style="float:left; margin:50px; margin-left:10px; font-size:20px;">
     <div > Life Stage: ${model.randomFind.name} </div><br> 
     <div > Health: ${model.randomFind.health} </div> <br>
     <div > Strength:${model.randomFind.strength} </div> <br>
     <div > Agility:${model.randomFind.agility} </div></div> </div>


     <div style="clear:left;"><hr><div style=" display: flex;
     justify-content: center;" >  <button onclick="attack()">Attack</button></div><hr></div>

  <div style=" display: flex;
  justify-content: center;"> 
  <div style="float:left;"> <img src="${findUserDragon().picture}" style="height:300px;width:200px;"><br></div>
    
<div style="float:left; margin:50px; margin-left:10px; font-size:20px;">
    <div > Life Stage: ${findUserDragon().lifeStage} </div><br>
    <div > <img src="imgs/cardiogram.png" style="height:30px;width:30px;">  
     Health: ${findUserDragon().health} </div> <br>
    <div > <img src="imgs/muscle.png" style="height:30px;width:30px;">
    Strength:${findUserDragon().strength} </div> <br>
    <div ><img src="imgs/faster.png" style="height:30px;width:30px;"></img>
     Agility:${findUserDragon().agility} </div> </div>



    


</div>`

return html;


}


