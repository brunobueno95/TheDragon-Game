function updateViewDesert() {
    model.mySound[5].play()
    let html = '';

    html += `
    <div class="header">
        <button onclick ="goToMain();model.mySound[5].pause();" class="header-btns">MainPage</button>
        <button onclick="openItemShop();model.mySound[5].pause();" class="header-btns">Item Shop</button> 
        <button onclick="logOut();model.mySound[5].pause();" class="header-btns">LogOut</button>
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
    </div>

    <div class="video-wrapper">
        <video playsinline autoplay muted loop class="video-full-background">
            <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661796/Dunes_-_16139_iixktz.mp4" type="video/webm">
            <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661796/Dunes_-_16139_iixktz.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <button value="desert" style="font-size: 30px;" onclick="model.mySound[5].pause();goToDesertFind();randomDesert();model.exploration = this.value;" class="explore-btns">Search The Desert</button>
    </div>
    `
    return html;
}
