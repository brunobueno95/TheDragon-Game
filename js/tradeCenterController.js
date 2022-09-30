function goToTradeCenterView(){
    model.currentPage = "tradeCenterView"
    updateView()
}

function goToTradeCenterAll(){
    model.currentPage = "tradeCenterAll"
    updateView()
}

function goToTradeCenterPost(){
    model.currentPage = "tradeCenterPost"
    updateView()
}


function postTrade(){
   
    if(model.tradeTypeOf == "Items"){
        urTradeProduct =  model.allItems.find(i => i.potionName == model.tradeUrs)
        model.PlayerItems.yourItems.splice(model.PlayerItems.yourItems.findIndex(i=>i.potionName == urTradeProduct.potionName),1)
       

        wantTradeProduct =  model.allItems.find(i => i.potionName == model.tradeWant)
    }

    if(model.tradeTypeOf == "Materials"){
        urTradeProduct =  model.allMaterials.find(i => i.Mname == model.tradeUrs)
        model.PlayerItems.yourMaterials.splice(model.PlayerItems.yourItems.findIndex(i=>i.Mname == urTradeProduct.Mname),1)
        wantTradeProduct =  model.allMaterials.find(i => i.Mname == model.tradeWant)
    }


    let tradeObject = {};
    tradeObject.typeOfTrade = model.tradeTypeOf,
    tradeObject.userName = model.currentUser,
    tradeObject.urTrade = model.tradeUrs,
    tradeObject.wantTrade = model.tradeWant,
    tradeObject.urTradeObj = urTradeProduct,
    tradeObject.urTradePic = urTradeProduct.picture,
    tradeObject.wantTradePic = wantTradeProduct.picture,
    tradeObject.wantTradeObj = wantTradeProduct


    console.log(tradeObject)
    model.tradeCenterAllList.push(tradeObject)

}

function deleteOffer(index){
    if(model.tradeCenterAllList[index].urTradePic.includes("materials")){
        model.PlayerItems.yourMaterials.push(model.tradeCenterAllList[index].urTradeObj)  
    }
    else{
        model.PlayerItems.yourItems.push(model.tradeCenterAllList[index].urTradeObj)
    }
    
    model.tradeCenterAllList.splice(index, 1)

    updateView()

}


function tradeProduct(index){
    let logedOutTrader = model.playerList.find(i => i.userName == model.tradeCenterAllList[index].userName );
    let logedInTrader = model.playerList.find(i => i.userName == model.currentUser )

   

    if(model.tradeCenterAllList[index].typeOfTrade == "Items"){
        if(logedInTrader.yourItems.some(v => v.potionName == model.tradeCenterAllList[index].wantTrade )){
            let notificationToLogedOutTrader ={
                title: "Trade of "+ model.tradeCenterAllList[index].typeOfTrade,
                text:"Your trade went smoothly!You gave "+ model.tradeCenterAllList[index].urTrade +
                " and received " +  model.tradeCenterAllList[index].wantTrade,
                collectTrade: model.tradeCenterAllList[index].wantTradeObj,
                gavePicture: model.tradeCenterAllList[index].urTradePic,
                receivedPicture: model.tradeCenterAllList[index].wantTradePic
                
            }
        
            logedOutTrader.yourNotifications.push(notificationToLogedOutTrader)
          
    
            logedInTrader.yourItems.splice( logedInTrader.yourItems.findIndex(v=> v.potionName == model.tradeCenterAllList[index].wantTrade ), 1)
            logedInTrader.yourItems.push(model.tradeCenterAllList[index].urTradeObj)
    
            swal({ text:"You traded your  " + model.tradeCenterAllList[index].wantTrade +
             " for " + model.tradeCenterAllList[index].urTrade + " from User: " + model.tradeCenterAllList[index].userName 
             ,icon:"imgs/trade.png", button:"Nice!" } ).then(function() {
                model.tradeCenterAllList.splice(index, 1)
                updateView();
            } 
            )
        }
        else {
            swal({ text:"You dont have  " + model.tradeCenterAllList[index].wantTrade +
             " on your Items " 
             ,icon: model.tradeCenterAllList[index].wantTradePic, button:"ok" } ).then(function() {
                
                updateView();
            } 
            )

        }


        
    }

    if(model.tradeCenterAllList[index].typeOfTrade == "Materials"){

        if(logedInTrader.yourMaterials.some(v => v.Mname == model.tradeCenterAllList[index].wantTrade )){ 
            let notificationToLogedOutTrader ={
                title: "Trade of "+ model.tradeCenterAllList[index].typeOfTrade,
                text:"Your trade went smoothly!You gave "+ model.tradeCenterAllList[index].urTrade +
                " and received " +  model.tradeCenterAllList[index].wantTrade,
                collectTrade: model.tradeCenterAllList[index].wantTradeObj,
                gavePicture: model.tradeCenterAllList[index].urTradePic,
                receivedPicture: model.tradeCenterAllList[index].wantTradePic
                
            }
        
            logedOutTrader.yourNotifications.push(notificationToLogedOutTrader)
            updateView();
           

            
        logedOutTrader.yourMaterials.splice(logedOutTrader.yourMaterials.findIndex(v=> v.Mname == model.tradeCenterAllList[index].urTrade ), 1)
        // logedOutTrader.yourMaterials.push(model.tradeCenterAllList[index].wantTradeObj)

        logedInTrader.yourMaterials.splice( logedInTrader.yourMaterials.findIndex(v=> v.Mname == model.tradeCenterAllList[index].wantTrade ), 1)
        logedInTrader.yourMaterials.push(model.tradeCenterAllList[index].urTradeObj)

        swal({ text:"You traded your  " + model.tradeCenterAllList[index].wantTrade +
         " for " + model.tradeCenterAllList[index].urTrade + " from User: " + model.tradeCenterAllList[index].userName 
         ,icon:"imgs/trade.png", button:"Nice!" } ).then(function() {
            model.tradeCenterAllList.splice(index, 1)
            updateView();
        } 
        )

         }
         else {
            swal({ text:"You dont have  " + model.tradeCenterAllList[index].wantTrade +
             " on your Items " 
             ,icon: model.tradeCenterAllList[index].wantTradePic, button:"ok" } ).then(function() {
                
                updateView();
            } 
            )

        }

    }

   
    updateView();
   

}
