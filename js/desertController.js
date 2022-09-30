function goToDesert() {
    model.currentPage = 'desert';
    updateView();
}

function randomDesert(){ 
   
    if(findUserDragon().lifeStage == "Baby"){
        let newNameList = model.DesertBabyList.filter( i => i != model.randomFind);
                let random = Math.floor(Math.random() * newNameList.length);
                model.randomFind = newNameList[random]
                updateView()
                // return  model.randomFind
                
                
    }
    if(findUserDragon().lifeStage == "Juvenile"){
        let newNameList = model.DesertJuvenileList.filter( i => i != model.randomFind);
                let random = Math.floor(Math.random() * newNameList.length);
                model.randomFind = newNameList[random]
                updateView()
                // return  model.randomFind
                
                
    }
    if(findUserDragon().lifeStage == "Adult"){
        let newNameList = model.DesertAdultList.filter( i => i != model.randomFind);
                let random = Math.floor(Math.random() * newNameList.length);
                model.randomFind = newNameList[random]
                updateView()
                // return  model.randomFind
                
               
    
    } }