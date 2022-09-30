function updateViewTradeCenterAll(){
    let html =""

    html = `
    <div class="menu-bar">
        <button onclick ="goToMain()" class="menu-btns">MainPage</button>
        <button onclick="goToExplorer()" class="menu-btns">Explore</button>
        <button onclick="goToTradeCenterView()" class="menu-btns">Trade Center</button>
        <button onclick="logOut()" class="menu-btns">LogOut</button><br>
    </div>
    <div class="username-container">
        <div class ="user-info">Logged in as: ${model.currentUser}</div>
        
        <img onclick="goToNotifications()" src="imgs/notifications.png" style="height:30px;width:30px;" class ="user-info">
        <div onclick="goToNotifications()" class ="user-info"> Notifications:  ${findUserNotifications().length}  </div>
      
        <img src="${findUserCoins().picture}" style="height:30px;width:30px;" class ="user-info"> 
        <div class ="user-info">${findUserCoins().coins}</div>
        <img src="${findUserDiamonds().picture}" style="height:30px;width:30px;" class ="user-info">
        <div class ="user-info">${findUserDiamonds().diamonds}</div>
    </div>
    <div class="username-container" style="padding:7px; margin-top:5px;">
        <img src="imgs/xp.png" style="height:35px;width:35px;">
        XP:${findUserDragon().xp}
        <img src="imgs/level-up.png" style="height:35px;width:35px;margin-left:17px;"> 
        Level : ${findUserDragon().level} 
        <img src="imgs/potion.png" style="height:35px;width:35px;margin-left:17px;">
        Potions: ${model.PlayerItems.yourItems.length} 
        <img src="imgs/icon-materials.png" style="height:35px;width:35px;margin-left:17px;"> 
        Materials: ${model.PlayerItems.yourMaterials.length}
    </div><hr>`

 
    html += `<button class="menu-btns" onclick="goToTradeCenterPost()" >Make a trade post</button><hr><br>
    <div> ${drawTradeCenterAll()}   </div>`

    return html
}



function drawTradeCenterAll(){
    let html ="";
    
    
    for(i =0; i<  model.tradeCenterAllList.length ; i++){
        
        html +=`
        <fieldset style="border-color: rgb(34, 34, 34);
        border-width: 15px;
        border-style: groove;
        background-color: #708090;
    " >
        <div>User : ${model.tradeCenterAllList[i].userName}</div>
        <div>Offer : ${model.tradeCenterAllList[i].urTrade} 
            <img src="${model.tradeCenterAllList[i].urTradePic}" style="height:60px;width:60px;">
        </div>
        <div>Wish : ${model.tradeCenterAllList[i].wantTrade} 
            <img src="${model.tradeCenterAllList[i].wantTradePic}" style="height:60px;width:60px;">
        </div>
        <br>
      
        
        </fieldset>` 
        if(model.currentUser !=model.tradeCenterAllList[i].userName ) {
            html+= `<button class="menu-btns" onclick="tradeProduct(${i})">Trade</button>`
        }
        if(model.currentUser == model.tradeCenterAllList[i].userName ) {
            html+= `<button class="menu-btns" onclick="deleteOffer(${i})">Delete Offer</button>`
        }


    }
   

    return html


}


// tradeObject.userName = model.currentUser,
// tradeObject.urTrade = model.tradeUrs
// tradeObject.wantTrade = model.tradeWant
// tradeObject.urTradePic = urTradeProduct.picture
// tradeObject.wantTradePic = wantTradeProduct.picture