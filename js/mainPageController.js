function goToMain(){
    model.currentPage = "mainPage"
    updateView()
}


function useItem(x) {
    let thisPotion = model.noRepeatPlayerItems[x].potionName
     model.PlayerItems.yourItems.splice(model.PlayerItems.yourItems.findIndex(value => value.potionName  == thisPotion), 1)
     
     if(thisPotion == "Hatching Potion"){
        findUserDragon().level ++
        
        setTimeout(() => {swal({ text:"Your egg is hatching" ,icon:"imgs/hatch.png", button:"ok" } )}
        , 100);

        findUserDragon().property()
        findUserDiamonds().diamonds+=5
        findUserDragon().agility=150
        findUserDragon().strength=110
        findUserDragon().health=150

        setTimeout(()=> {swal({ title: "Congratulations!", text:"Your egg hatched, you gained 3 Materials and 5 diamonds as a gift"
    ,icon:"imgs/dragon-baby.png", button:"ok"} ).then(function() {
        updateView(); } ) }, 2000);
    setTimeout(()=> {model.mySound[8].play() },2000 )
    model.PlayerItems.yourMaterials.push(new Materials("Shell", 1,30,"imgs/materials-shell.png"),
     new Materials("Ginseng", 1,30,"imgs/materials-ginseng.png"), new Materials("Snake Skin", 1,30,"imgs/materials-snakeskin.png"))
        
       

    }

     if(thisPotion.includes("Power")){
       
            findUserDragon().strength  += 50
            findUserDragon().xp += 100
            findUserDragon().property()
            setTimeout(()=> {model.mySound[14].play() },10 );

            setTimeout(() => {swal({ text:"The " + thisPotion + " gave you + 50 on strength and +100 on xp" ,icon:"imgs/muscle.png", button:"ok" } ).then(function() {
                updateView();
            } 
            ) }
            , 100);
            
            
           
            
        }
   

     if(thisPotion.includes("Speed")){
        
            findUserDragon().agility+= 50
            findUserDragon().xp += 100
            findUserDragon().property()
            setTimeout(()=> {model.mySound[14].play() },10 );

            setTimeout(() => {swal({ text:"The " + thisPotion + " gave you +50 on agility and +100 on xp" ,icon:"imgs/faster.png", } ).then(function() {
                updateView();
            } 
            ) }
            , 100);
            
           
        }
 
        
        if(thisPotion.includes("Recovery")){
            findUserDragon().health += 120
            findUserDragon().xp += 100
            findUserDragon().property()
            setTimeout(()=> {model.mySound[14].play() },10 );
            setTimeout(() => {swal({ text:"The " + thisPotion + " gave you +120 on health and +100 on xp" ,icon:"imgs/cardiogram.png", } ) .then(function() {
                updateView();
            } 
            ) }
            , 100);
           
        }

        if(thisPotion.includes("Bear")){
            findUserDragon().health += 100
            findUserDragon().strength  += 60
            findUserDragon().xp += 200
            findUserDragon().property()
            setTimeout(()=> {model.mySound[14].play() },10 );
            setTimeout(() => {swal({ text:"The " + thisPotion + " gave you +100 on health, +60 on strength and +200 on xp" ,icon:"imgs/facebear.png", } ) .then(function() {
                updateView();
            } 
            ) }
            , 100);

            
        }

        if(thisPotion.includes("Fire")){
            findUserDragon().agility += 60
            findUserDragon().strength  += 60
            findUserDragon().xp += 200
            findUserDragon().property()
            setTimeout(()=> {model.mySound[14].play() },10 );
            setTimeout(() => {swal({ text:"The " + thisPotion + " gave you +60 on agility, +60 on strength and +200 on xp" ,icon:"imgs/facebear.png", } ).then(function() {
                updateView();
            } 
            ) }
            , 100);
           
        }

        if(thisPotion.includes("Evil")){
            findUserDragon().agility += 60
            findUserDragon().strength  += 60
            findUserDragon().health += 80
            findUserDragon().xp += 200
            setTimeout(()=> {model.mySound[14].play() },10 );
          
            findUserDragon().property()
            setTimeout(() => {swal({ text:"The " + thisPotion + " gave you +60 on agility, +60 on strength,+80 on health and +200 on xp" ,icon:"imgs/demon.png", } ).then(function() {
                updateView();
            } 
            ) }
            , 100);
           
        }
        
     }


    



function sellItem(i) {
    let sellPrice = 500;
     findUserCoins().coins += sellPrice
     let thisPotion = model.noRepeatPlayerItems[i].potionName
     
     
     model.PlayerItems.yourItems.splice(model.PlayerItems.yourItems.findIndex(value => value.potionName  == thisPotion), 1)
     setTimeout(() => {swal({ text:"you sold " + thisPotion + " for " + sellPrice + " gold coins",icon:"imgs/gold-coins.png", button:"Collect gold"} ) .then(function() {
        updateView();
    } 
    ) }
    , 100);
    setTimeout(()=> {model.mySound[1].play() },100 );
     

  
    updateView()
}







function sellMaterial(index){
    findUserCoins().coins += model.noRepeatPlayerMaterials[index].sellPrice
    let thisMaterial = model.noRepeatPlayerMaterials[index].Mname
    model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == thisMaterial), 1)
    setTimeout(() => {swal({ text:"you sold " + thisMaterial + " for " + model.noRepeatPlayerMaterials[index].sellPrice + " gold coins"
     ,icon:"imgs/gold-coins.png", button:"Collect gold"} ).then(function() {
        updateView();
    } 
    ) }
    , 100);
     setTimeout(()=> {model.mySound[1].play() },100 );
    
    
   
}


