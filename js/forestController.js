function goToForest(){
    model.currentPage = 'forest'
    updateView();
}

function forestSoundEffect() {
    // model.mySound[1]= new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663749483/ambience-night-field-cricket-01-7015_egkjan.mp3");
    model.mySound[1].play()
}
function stopSound(){
    model.mySound = []
}

function randomForest(){ 
   
    if(findUserDragon().lifeStage == "Baby"){
        let newNameList = model.ForestBabyList.filter( i => i != model.randomFind);
                let random = Math.floor(Math.random() * newNameList.length);
                model.randomFind = newNameList[random]
                updateView()
                // return  model.randomFind
                
                
    }
    if(findUserDragon().lifeStage == "Juvenile"){
        let newNameList = model.ForestJuvenileList.filter( i => i != model.randomFind);
                let random = Math.floor(Math.random() * newNameList.length);
                model.randomFind = newNameList[random]
                updateView()
                // return  model.randomFind
                
                
    }
    if(findUserDragon().lifeStage == "Adult"){
        let newNameList = model.ForestBabyList.filter( i => i != model.randomFind);
                let random = Math.floor(Math.random() * newNameList.length);
                model.randomFind = newNameList[random]
                updateView()
                // return  model.randomFind
                
               
    
    } }
    

function collectPotion(){
    model.PlayerItems.yourItems.push(model.randomFind)
    console.log("collect potion" + model.randomFind)
    
    updateView()
}

function collectCoins(){
    findUserCoins().coins += model.randomFind.coins
    console.log("collect coins" + model.randomFind.coins)
    
    updateView()
    
}

