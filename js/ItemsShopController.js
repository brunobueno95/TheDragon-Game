function openItemShop(){
    model.currentPage = "itemShop"
    updateView()
}

function buyItem(index) {
   
    if (findUserDiamonds().diamonds < model.allItems[index].price ){
        
        setTimeout(() => {swal({text:"You dont have enough diamonds ",icon:"imgs/no-diamonds.png " } ) }, 100);
        
    }

    else{ 

    model.PlayerItems.yourItems.push(model.allItems[index])
    findUserDiamonds().diamonds -= model.allItems[index].price
    setTimeout(()=> {model.mySound[13].play() },100 )
    setTimeout(() => {swal({text:"You bought " + model.allItems[index].potionName, icon:model.allItems[index].picture, button:"Collect" } ).then(function() {
        updateView();
    } ) }, 100);
    }
    
    
}

function buyDiamonds(index){
    if(findUserCoins().coins < model.diamondsToSell[index].price){
        
        setTimeout(() => {swal({text:"You dont have enough gold coins ",icon:"imgs/no-coins.png " } ) }, 100);
    }
    else{
        findUserDiamonds().diamonds += model.diamondsToSell[index].diamonds
        findUserCoins().coins -= model.diamondsToSell[index].price
        setTimeout(() => {swal({text:"You bought " + model.diamondsToSell[index].diamondsName ,icon:model.diamondsToSell[index].picture, button:"Collect" } ).then(function() {
       
            updateView();
        } 
        )  }, 100);
       

    }
}



function makePotion(index){

    

    if(model.allItems[index].potionName == "Power Potion"){
        let firstMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Eagle Feather" )
        let secondMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Bear Fur")
        let thirdMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Shark Tooth" )
        if(firstMaterial && secondMaterial && thirdMaterial ){
           
            setTimeout(() => {swal({title: "Power Potion", text:"Making your Potion ",icon:"imgs/cauldron.png " } ) }, 100);
            
            setTimeout(()=> {model.mySound[2].play() },100 );
            setTimeout(()=> {model.mySound[2].pause() },3900 );
            setTimeout(()=> {model.mySound[3].play() },3901 )
            // setTimeout(()=> {model.mySound[3].pause() },5015 )
  
            setTimeout(() => {swal({title: "Power Potion", text:"Your potion is ready ",icon:"imgs/power.png " ,button:"Collect" } ) .then(function() {
                model.currentPage = "mainPage"
                updateView();
            } 
            )}, 4010); 
            model.PlayerItems.yourItems.push(model.allItems[index])
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == firstMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == secondMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == ginseng.Mname), 1)
     
        }
        else{
            if(!firstMaterial){
                setTimeout(() => {swal({ text:"you dont have Eagle Feather"  ,icon:"imgs/materials-feather.png" } ) }, 100);

            }
            if(!secondMaterial){
                setTimeout(() => {swal({ text:"you dont have Bear Fur"  ,icon:"imgs/materials-bear.png" } ) }, 2010);

            }
            if(!ginseng){
                setTimeout(() => {swal({ text:"you dont have Shark Tooth"  ,icon:"imgs/materials-sharkTooth.png" } ) }, 3000);

            }
           
        }
    }

    if(model.allItems[index].potionName == "Speed Potion"){
        let firstMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Ginseng" )
        let secondMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Shell")
        let thirdMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Eagle Feather" )
        if(firstMaterial && secondMaterial && thirdMaterial ){
            setTimeout(()=> {model.mySound[2].play() },100 );
            setTimeout(()=> {model.mySound[2].pause() },3900 );
            setTimeout(()=> {model.mySound[3].play() },3901 )
            
            setTimeout(() => {swal({title: "Speed Potion", text:"Making your Potion ",icon:"imgs/cauldron.png " } ) }, 100);
            setTimeout(() => {swal({title: "Speed Potion", text:"Your potion is ready ",icon:"imgs/speed.png " ,button:"Collect" } ) .then(function() {
                model.currentPage = "mainPage"
                updateView();
            } 
            )}, 4010); 
            model.PlayerItems.yourItems.push(model.allItems[index])
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == firstMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == secondMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == thirdMaterial.Mname), 1)
      
        }
        else{
            if(!firstMaterial){
                setTimeout(() => {swal({ text:"you dont have Ginseng"  ,icon:"imgs/materials-ginseng.png" } ) }, 100);

            }
            if(!secondMaterial){
                setTimeout(() => {swal({ text:"you dont have Shell"  ,icon:"imgs/materials-shell.png" } ) }, 2010);

            }
            if(!thirdMaterial){
                setTimeout(() => {swal({ text:"you dont have Eagle Feather"  ,icon:"imgs/materials-feather.png" } ) }, 3000);

            }
        }
    }

    if(model.allItems[index].potionName == "Recovery Potion"){
        let firstMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Shell" )
        let secondMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Ginseng")
        let thirdMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Snake Skin" )
        if(firstMaterial && secondMaterial && thirdMaterial ){
            setTimeout(()=> {model.mySound[2].play() },100 );
            setTimeout(()=> {model.mySound[2].pause() },3900 );
            setTimeout(()=> {model.mySound[3].play() },3901 )
          
            setTimeout(() => {swal({title: "Recovery Potion", text:"Making your Potion ",icon:"imgs/cauldron.png " } ) }, 100);
            setTimeout(() => {swal({title: "Recovery Potion", text:"Your potion is ready ",icon:"imgs/recovery.png " ,button:"Collect" } ) .then(function() {
                model.currentPage = "mainPage"
                updateView();
            } 
            )}, 4010); 
            model.PlayerItems.yourItems.push(model.allItems[index])
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == firstMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == secondMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == thirdMaterial.Mname), 1)
            
            

        }
        else{
            if(!firstMaterial){
                setTimeout(() => {swal({ text:"you dont have Shell"  ,icon:"imgs/materials-shell.png" } ) }, 100);

            }
            if(!secondMaterial){
                setTimeout(() => {swal({ text:"you dont have Ginseg"  ,icon:"imgs/materials-ginseng.png" } ) }, 2010);

            }
            if(!thirdMaterial){
                setTimeout(() => {swal({ text:"you dont have Snake Skin"  ,icon:"imgs/materials-snakeskin.png" } ) }, 3000);

            }
        }
    }

    if(model.allItems[index].potionName == "Bear Potion"){
        let firstMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Bear Fur" )
        let secondMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Shark Tooth")
        let thirdMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Scorpion Tail" )
        let firstAmount = false;
        let thirdAmount = false;
        if(firstMaterial){
            if(firstMaterial.amount >= 2){
                firstAmount = true
            }
        }
        if(thirdMaterial){
            if(thirdMaterial.amount >= 2){
                thirdAmount = true
            }
        }
        if(firstAmount && secondMaterial && thirdAmount ){
            setTimeout(()=> {model.mySound[2].play() },100 );
            setTimeout(()=> {model.mySound[2].pause() },3900 );
            setTimeout(()=> {model.mySound[3].play() },3901 )
          
            setTimeout(() => {swal({title: "Bear Potion", text:"Making your Potion ",icon:"imgs/cauldron.png " } ) }, 100);
            setTimeout(() => {swal({title: "Bear Potion", text:"Your potion is ready ",icon:"imgs/bear.png " ,button:"Collect" }  ).then(function() {
                model.currentPage = "mainPage"
                updateView();
            } 
            )}, 4010); 
            model.PlayerItems.yourItems.push(model.allItems[index])
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == firstMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == firstMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == secondMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == thirdMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == thirdMaterial.Mname), 1)
            
      
        }
        else{
            
                if(!firstMaterial || firstMaterial.amount <= 1){
                    setTimeout(() => {swal({ text:"you dont have enough Bear Fur"  ,icon:"imgs/materials-bear.png" } ) }, 100);
    
                }
                if(!secondMaterial){
                    setTimeout(() => {swal({ text:"you dont have Shark Tooth"  ,icon:"imgs/materials-sharkTooth.png" } ) }, 2010);
    
                }
                if(!thirdMaterial || thirdMaterial.amount <= 1){
                    setTimeout(() => {swal({ text:"you dont have enough Scorpion Tail"  ,icon:"imgs/materials-scorpio.png" } ) }, 3000);
    
                }
            
        }
    }

    
    if(model.allItems[index].potionName == "Fire Potion"){
        let firstMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Scorpion Tail" )
        let secondMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Lobster Claw")
        let thirdMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Snake Skin" )
        let firstAmount = false;
        let secondAmount = false;
        if(firstMaterial){
            if(firstMaterial.amount >= 2){
                firstAmount = true
            }
        }
        if(secondMaterial){
            if(secondMaterial.amount >= 2){
                secondAmount = true
            }
        }
        if(firstAmount && secondAmount  && thirdMaterial ){
            setTimeout(()=> {model.mySound[2].play() },100 );
            setTimeout(()=> {model.mySound[2].pause() },3900 );
            setTimeout(()=> {model.mySound[3].play() },3901 )
          
            setTimeout(() => {swal({title: "Fire Potion", text:"Making your Potion ",icon:"imgs/cauldron.png " } ) }, 100);
            setTimeout(() => {swal({title: "Fire Potion", text:"Your potion is ready ",icon:"imgs/fire.png " ,button:"Collect" } ).then(function() {
                model.currentPage = "mainPage"
                updateView();
            } 
            )}, 4010); 
            model.PlayerItems.yourItems.push(model.allItems[index])
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == firstMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == firstMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == secondMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == secondMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == thirdMaterial.Mname), 1)
           
      
        }
        else{
            if(!firstMaterial || firstMaterial.amount <= 1){
                setTimeout(() => {swal({ text:"you dont have enough Scorpion Tail"  ,icon:"imgs/materials-scorpio.png" } ) }, 100);

            }
            if(!secondMaterial || secondMaterial.amount <= 1){
                setTimeout(() => {swal({ text:"you dont have enough Lobster Claws"  ,icon:"imgs/materials-lobster.png" } ) }, 2010);

            }
            if(!thirdMaterial ){
                setTimeout(() => {swal({ text:"you dont have Snake Skin"  ,icon:"imgs/materials-snakeskin.png" } ) }, 3000);

            }
        }
    }
    

    if(model.allItems[index].potionName == "Evil Potion"){
        let firstMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Human Skull" )
        let secondMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Lobster Claw")
        let thirdMaterial = model.noRepeatPlayerMaterials.find(value => value.Mname == "Bear Fur" )
        let firstAmount = false;
        let secondAmount = false;
        let thirdAmount = false;
        if(firstMaterial){
            if(firstMaterial.amount >= 3){
                firstAmount = true
            }
        }
        if(secondMaterial){
            if(secondMaterial.amount >= 3){
                secondAmount = true
            }
        }
        if(thirdMaterial){
            if(thirdMaterial.amount >= 3){
                thirdAmount = true
            }
        }
        if(firstAmount  && secondAmount  && thirdAmount ){
            setTimeout(()=> {model.mySound[2].play() },100 );
            setTimeout(()=> {model.mySound[2].pause() },3900 );
            setTimeout(()=> {model.mySound[3].play() },3901 )
          
            setTimeout(() => {swal({title: "Evil Potion", text:"Making your Potion ",icon:"imgs/cauldron.png " } ) }, 100);
            setTimeout(() => {swal({title: "Evil Potion", text:"Your potion is ready ",icon:"imgs/evil.png " ,button:"Collect" } ).then(function() {
                model.currentPage = "mainPage"
                updateView();
            } 
            )}, 4010); 
            model.PlayerItems.yourItems.push(model.allItems[index])
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == firstMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == firstMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == secondMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == secondMaterial.Mname), 1)
            model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourMaterials.findIndex(value => value.Mname  == thirdMaterial.Mname), 1)
           
      
        }
        else{
            if(!firstMaterial || firstMaterial.amount <= 2){
                setTimeout(() => {swal({ text:"you dont have enough Human Skull"  ,icon:"imgs/materials-humanSkull.png" } ) }, 100);

            }
            if(!secondMaterial || secondMaterial.amount <= 2){
                setTimeout(() => {swal({ text:"you dont have enough Lobster Claws"  ,icon:"imgs/materials-lobster.png" } ) }, 2010);

            }
            if(!thirdMaterial || thirdMaterial.amount <= 2 ){
                setTimeout(() => {swal({ text:"you dont have enough Bear Fur"  ,icon:"imgs/materials-bear.png" } ) }, 4000);

            }
        }
    }
}



function buyHatching(){
   

    model.PlayerItems.yourItems.push(model.eggLifePotion)
    findUserDiamonds().diamonds -= model.eggLifePotion.price
    setTimeout(()=> {model.mySound[13].play() },100 )
    setTimeout(() => {swal({text:"You bought " + model.eggLifePotion.potionName, icon:model.eggLifePotion.picture, button:"Collect" } ).then(function() {
        model.currentPage = "mainPage"
        updateView();
    } ) }, 100);
    }

