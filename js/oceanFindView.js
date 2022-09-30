function updateViewOceanFind(){
    let html = ""
    html = `

    <button onclick ="goToMain()">MainPage</button><button onclick="openItemShop()">Item Shop</button> <button onclick="logOut()">LogOut</button><br>
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

    <div style="margin:0%;
    width: 98.5vw;
    height: 80vh;
    background-image:    url(imgs/oceanFind.webp);
    background-size:     cover;                     
    background-repeat:   no-repeat;
    background-position: center center">
    <br>
    <br>
     
    ${drawPage()}`
html+=`</div>`
    return html

 }


 function drawPage(){
    let playersHtml = ""
    if(model.randomFind == ""){
        
        console.log('no random yet')
     }
     else{
        // searchForest()
        // playersHtml = model.forestFindHtml
        playersHtml = searchOcean();
     }
    
     return playersHtml
}


function searchOcean(){
   
   let something = model.randomFind
    
    if(something.picture.includes("creature") ){
       let html=""
        html+=
        `

                </div>        <div /class="random-find">
            <div>
            <img src="${something.picture}" style="height:400px;width:250px;">
           <div style="font-size: 30px;"> ${something.name}</div>
            
            <div>
            <button style="width:100px;font-size: 15px; padding-bottom: 12px;" onclick="goToBattle()">Fight</button>
            <button style="width:100px;font-size: 15px; padding-bottom: 12px;" onclick="runFromEnemy()">Run</button>

        </div>
        ` 

        
         console.log(html)
        //  model.forestFindHtml = html
         
        return html
    }
        if(something.picture.includes("materials") ){
        let html = '';
        html     += `

                </div>        <div /class="random-find">
            <div>
            <img src="${something.picture}" style="height:300px;width:200px;">
            
            <div>
            <button style="width:200px;height:40px; font-size: 15px; padding-bottom: 12px;" onclick="collectMaterialO()">Check finding</button>
        </div>
        ` 
        console.log(html)
        // model.forestFindHtml = html
        
       return html
    }
    if(something.picture.includes("gold") ){
        let html = '';
        html+= `
        <div class="random-find">
           <div>
            <img src="${something.picture}" style="height:300px;width:200px;">
            </div>
            <div>
            <button style="width:200px;height:40px;font-size: 15px; padding-bottom: 12px;" onclick="collectCoinsO()">Check finding</button>
            </div>
        </div>
        `
        

        
         console.log(html)
        //  model.forestFindHtml = html
         
        return html;
    }
    
    
}


function collectMaterialO(){
    model.PlayerItems.yourMaterials.push(model.randomFind)
    setTimeout(() => {swal({ text:"You found " + model.randomFind.Mname 
    ,icon:model.randomFind.picture, button:"Collect " + model.randomFind.Mname} ) .then(function() {
        model.currentPage = model.exploration
        updateView();
    } 
    ) }
    , 100);
    setTimeout(()=> {model.mySound[4].play() },100 );
     
    
    
  
}




function collectCoinsO(){
    // if(model.randomFind.coins > 30){setTimeout(()=> {model.mySound[2].play() },100 );
    // setTimeout(()=> {model.mySound[2].pause() },750 )}
    findUserCoins().coins += model.randomFind.coins
    setTimeout(() => {swal({ text:"You found " + model.randomFind.coins + " Gold Coins"
    ,icon:"imgs/gold-coins.png", button:"Collect gold"} ) .then(function() {
        model.currentPage = model.exploration
        updateView();
    } 
    ) }
    , 100);
    setTimeout(()=> {model.mySound[1].play() },100 );
    //  setTimeout(()=> {model.mySound[1].pause() },750 )
  
  
   

    
}