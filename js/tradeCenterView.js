function updateViewTradeCenter(){
    let html =""

    html = `
    <div class="menu-bar">
        <button onclick ="goToMain()" class="menu-btns">MainPage</button>
        <button onclick="openItemShop()" class="menu-btns">Item Shop</button>
        <button onclick="goToExplorer()" class="menu-btns">Explore</button> 
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
    <div  class="username-container" style="padding:7px; margin-top:5px;">
        <img src="imgs/xp.png" style="height:35px;width:35px;">
        XP: ${findUserDragon().xp}
        <img src="imgs/level-up.png" style="height:35px;width:35px;margin-left:17px;"> 
        Level : ${findUserDragon().level} 
        <img src="imgs/potion.png" style="height:35px;width:35px;margin-left:17px;">
        Potions: ${model.PlayerItems.yourItems.length} 
        <img src="imgs/icon-materials.png" style="height:35px;width:35px;margin-left:17px;"> 
        Materials: ${model.PlayerItems.yourMaterials.length}
    </div><hr>`


    html += `
        <div style="display: flex; justify-content: center;"> 
            <button class="menu-btns" onclick="goToTradeCenterPost()" >Make a trade Post </button>  
            <button class="menu-btns" onclick="goToTradeCenterAll()" >Check all trades</button>    
        </div>`

    return html
}