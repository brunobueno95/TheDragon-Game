function updateViewForest(){
    model.mySound[0].play()
    let html = ""
    html = `
    <div class="header">
        <button onclick ="goToMain(); model.mySound[0].pause();" class="header-btns">MainPage</button>
        <button onclick="openItemShop();model.mySound[0].pause();" class="header-btns">Item Shop</button> 
        <button onclick="goToTradeCenterView()" class="menu-btns">Trade Market</button>
        <button onclick="logOut();model.mySound[0].pause();" class="header-btns">LogOut</button>
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
            <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661746/Forest_-_111101_c0lxch.mp4" type="video/webm">
            <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661746/Forest_-_111101_c0lxch.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

        <button value="forest" style="font-size: 30px;" onclick="goToFind();randomForest();model.mySound[0].pause();model.exploration = this.value;" class="explore-btns">Search The Forest</button>
    </div>
    
    `
    return html

   


}

function goToFind(){
    model.currentPage = 'find'
    updateView();
}
//  function drawPage(){
//     let playersHtml = ""
//     if(model.randomFind == ""){
        
//         console.log('no random yet')
//      }
//      else{
//         // searchForest()
//         // playersHtml = model.forestFindHtml
//         playersHtml = searchForest();
//      }
//      console.log(playersHtml)
//      return playersHtml
// }


// function searchForest(){
   
//    let something = model.randomFind
    
//     if(something.picture.includes("creature") ){
//        let html=""
//         html+= `<div>
//                     <img src="${something.picture}" style="height:300px;width:200px;">
//                     <div style="font-weight:bold;">${something.name} </div>
//                     <div>Health:${something.health} </div>
//                     <div>Strength:${something.strength} </div>
//                     <div>Agility:${something.agility} </div>
//                     <button onclick="fightEnemy()">Fight</button>
//                     <button onclick="runFromEnemy()">Run</button>
        
        
//         </div>`
//          console.log(html)
//         //  model.forestFindHtml = html
         
//         return html
//     }
//     if(something.picture.includes("items") ){
//         let html = '';
//         html += `
//         <div>
//             <img src="${something.picture}" style="height:300px;width:200px;">
//             <div>${something.potionName}</div>
//             <button onclick="collectPotion()">Collect Potion</button>
//         </div>
//         ` 
//         console.log(html)
//         // model.forestFindHtml = html
        
//        return html
//     }
//     if(something.picture.includes("gold") ){
//         let html = '';
//         html+= `
//         <div>
//         <img src="${something.picture}" style="height:300px;width:200px;">
//         <div>${something.coins}</div>
//         <button onclick="collectCoins()">Collect Gold Coins</button>
//         </div>
//         `
//          console.log(html)
//         //  model.forestFindHtml = html
         
//         return html;
//     }
    


//     }






