function updateViewOcean() {
    model.mySound[15].play()
    let html = '';
   
    html += `
    <div class="header">
        <button onclick ="goToMain();model.mySound[15].pause()" class="header-btns">MainPage</button>
        <button onclick="openItemShop();model.mySound[15].pause()" class="header-btns">Item Shop</button> 
        <button onclick="logOut();model.mySound[15].pause()" class="header-btns">LogOut</button>
        Logged in as : ${model.currentUser}<div style="margin-top:15px;" ><img src="${findUserCoins().picture}" style="height:30px;width:30px;"> 
        ${findUserCoins().coins} 
     <img src="${findUserDiamonds().picture}" style="height:30px;width:30px;">
        ${findUserDiamonds().diamonds}
        </div><hr>
        <div><img src="imgs/xp.png" style="height:30px;width:30px;">XP:
        ${findUserDragon().xp}<img src="imgs/level-up.png" style="height:30px;width:30px;margin-left:17px;"> Level : ${findUserDragon().level} 
        <img src="imgs/potion.png" style="height:30px;width:30px;margin-left:17px;">Potions: ${model.PlayerItems.yourItems.length} 
        <img src="imgs/icon-materials.png" style="height:30px;width:30px;margin-left:17px;"> Materials: ${model.PlayerItems.yourMaterials.length}</div><hr>
    </div>

    </div>
    <div class="video-wrapper">
        <video playsinline autoplay muted loop class="video-full-background">
            <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661803/Underwater_-_1081_y56d7l.mp4" type="video/webm">
            <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661803/Underwater_-_1081_y56d7l.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <button value="ocean" style="font-size: 30px;" class="explore-btns" onclick="randomOcean();goToOceanFind();model.exploration = this.value;model.mySound[15].pause()">Search The Ocean</button>
    </div>
    `
    return html;
}

