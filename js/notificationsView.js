function updateViewNotifications(){
    let html = "";
    html += 
             `<button class="menu-btns" onclick ="goToMain()">MainPage</button>
             <button class="menu-btns" onclick="goToExplorer()">Explore</button>
              <button class="menu-btns" onclick="logOut()">LogOut</button><br>
              <div class="username-container">
              <div class ="user-info">Logged in as: ${model.currentUser}</div>
              
              <img onclick="goToNotifications()" src="imgs/notifications.png" style="height:30px;width:30px;" class ="user-info">
              <div onclick="goToNotifications()" class ="user-info"> Notifications:  ${findUserNotifications().length}  </div>
            
              <img src="${findUserCoins().picture}" style="height:30px;width:30px;" class ="user-info"> 
              <div class ="user-info">${findUserCoins().coins}</div>
              <img src="${findUserDiamonds().picture}" style="height:30px;width:30px;" class ="user-info">
              <div class ="user-info">${findUserDiamonds().diamonds}</div>
         </div>
          <div  class="username-container" style="padding:7px; margin-top:5px;"><img src="imgs/xp.png" style="height:35px;width:35px;">XP:
          ${findUserDragon().xp}<img src="imgs/level-up.png" style="height:35px;width:35px;margin-left:17px;"> Level : ${findUserDragon().level} 
          <img src="imgs/potion.png" style="height:35px;width:35px;margin-left:17px;">Potions: ${model.PlayerItems.yourItems.length} 
          <img src="imgs/icon-materials.png" style="height:35px;width:35px;margin-left:17px;"> Materials: ${model.PlayerItems.yourMaterials.length}</div><hr>
      
            <br>
            <h2>Your Notifications </h2>
            <div>${drawNotifications()}</div>`
    
    
    return html
}


function drawNotifications(){
    let html = "";
    for(i=0 ; i< findUserNotifications().length ; i++){
        html+= ` <fieldset style="border-color: rgb(34, 34, 34);
        border-width: 15px;
        border-style: groove;
        background-color: #708090;
        padding-left: 10px;
    ">
        <h3>${findUserNotifications()[i].title}</h3>
        <div>${findUserNotifications()[i].text}</div>
        <div><img src="${findUserNotifications()[i].gavePicture}" style="height:80px;width:80px;">
        <img src="imgs/trade.png" style="height:80px;width:80px;">
        <img src="${findUserNotifications()[i].receivedPicture}" style="height:80px;width:80px;"></div>
        <button onclick="collectTrade(${i})">Collect</button>




        </fieldset>
        
        `
    }

    return html

}


function collectTrade(index){
    if(findUserNotifications()[index].title.includes("Item")){
        model.PlayerItems.yourItems.push(findUserNotifications()[index].collectTrade)
    }
    if(findUserNotifications()[index].title.includes("Materials")){
        model.PlayerItems.yourMaterials.push(findUserNotifications()[index].collectTrade)
    }
    findUserNotifications().splice(index,1)
updateView()
}


// {
//     title: "Trade of Items",
//     text:"Your trade went smoothly! You gave Power Potion and received Recovery Potion",
//     collectTrade:  new Items(3, "Recovery Potion","imgs/recovery.png", 1,),
//     gavePicture: "imgs/power.png",
//     receivedPicture:"imgs/recovery.png"
    
// }