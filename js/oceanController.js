function goToOcean() {
    model.currentPage = 'ocean';
    updateView();
}



function randomOcean(){ 
   
    if(findUserDragon().lifeStage == "Baby"){
        let newNameList = model.OceanBabyList.filter( i => i != model.randomFind);
                let random = Math.floor(Math.random() * newNameList.length);
                model.randomFind = newNameList[random]
                updateView()
                // return  model.randomFind
                
                
    }
    if(findUserDragon().lifeStage == "Juvenile"){
        let newNameList = model.OceanJuvenileList.filter( i => i != model.randomFind);
                let random = Math.floor(Math.random() * newNameList.length);
                model.randomFind = newNameList[random]
                updateView()
                // return  model.randomFind
                
                
    }
    if(findUserDragon().lifeStage == "Adult"){
        let newNameList = model.OceanAdultList.filter( i => i != model.randomFind);
                let random = Math.floor(Math.random() * newNameList.length);
                model.randomFind = newNameList[random]
                updateView()
                // return  model.randomFind
                
               
    
    } }