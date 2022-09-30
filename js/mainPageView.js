function  updateViewMainPage(){
   
    printItems()
  showMaterials()
    let html = ""
    
   html = `
    <div class="menu-bar">
        <button onclick="openItemShop()" class="menu-btns">Item Shop</button> 
        <button onclick="goToExplorer()" class="menu-btns">Explore</button> 
        <button onclick="goToTradeCenterView()" class="menu-btns">Trade Market</button>
        <button onclick="logOut()" class="menu-btns">LogOut</button>
    </div>

    <div class="username-container" style="align-items:center;">
        <div class ="user-info">Logged in as: ${model.currentUser}</div>
        
        <img onclick="goToNotifications()" src="imgs/notifications.png" style="height:30px;width:30px;" class ="user-info">
        <div onclick="goToNotifications()" class ="user-info"> Notifications:  ${findUserNotifications().length}  </div>
      
        <img src="${findUserCoins().picture}" style="height:30px;width:30px;" class ="user-info"> 
        <div class ="user-info">${findUserCoins().coins}</div>
        <img src="${findUserDiamonds().picture}" style="height:30px;width:30px;" class ="user-info">
        <div class ="user-info">${findUserDiamonds().diamonds}</div>
   </div>
   
    

   
    <div class="user-dragon-container">
        <div class="dragon-stats" >
            <div>
                <img src="imgs/xp.png" style="height:40px;width:40px;">XP:
                ${findUserDragon().xp}
            </div>
            <div>
                <img src="imgs/level-up.png" style="height:40px;width:40px;"> 
                Level : ${findUserDragon().level}
            </div>
            <div>
                <img src="imgs/potion.png" style="height:40px;width:40px;">
                Potions: ${model.PlayerItems.yourItems.length}
            </div>
            <div>
                <img src="imgs/icon-materials.png" style="height:40px;width:40px;"> 
                Materials: ${model.PlayerItems.yourMaterials.length}
            </div>
        </div>

        <div class ="user-dragon"> <img src="${findUserDragon().picture}"></div>
            
        <div class="dragon-stats">
            <div> 
                <img src="imgs/dragon_1.png" style="height:40px;width:40px;">
                Life Stage: ${findUserDragon().lifeStage} 
            </div>
            <div> 
            <img src="imgs/cardiogram.png" style="height:40px;width:40px;">
            Health: ${findUserDragon().health} </div> 
            <div> 
            <img src="imgs/muscle.png" style="height:40px;width:40px;">
            Strength:${findUserDragon().strength} </div> 
            <div>
            <img src="imgs/faster.png" style="height:40px;width:40px;">
            Agility:${findUserDragon().agility} </div>
        </div>
    </div>`

    html+= `
        <div class="items-materials-container">
        <div class="items-container">
        <h3>Your Potions:</h3>
        ${printItems()}
        </div> `
    html += `
        <div class="items-container">
        <h3>Your Materials</h3>
        ${showMaterials()}</div>
    </div>`

     return html 
   
}




function findUserNotifications(){
    let PlayerNotify = model.playerList.find(user=> user.userName == model.currentUser)
    return PlayerNotify.yourNotifications

}
function findUserDiamonds(){
    let PlayerDiamonds = model.playerList.find(user=> user.userName == model.currentUser)
    return PlayerDiamonds.yourDiamonds }



function findUserCoins(){
    let PlayerCoins = model.playerList.find(user=> user.userName == model.currentUser)
    return PlayerCoins.goldCoins }



function findUserDragon(){
    let PlayerDragon = model.playerList.find(user=> user.userName == model.currentUser)
    return PlayerDragon.yourDragon  
    }

function printItems(){
    let html=""
    model.PlayerItems = model.playerList.find(user=> user.userName == model.currentUser);
    model.count = {}
    model.PlayerItems.yourItems.forEach(function(i) {  model.count[i.potionName] = ( model.count[i.potionName]||0) + 1;});
                                        //
                                        //{power potion:  3
                                                           //}
    
     model.PlayerItems.yourItems.forEach(i => i.amount = model.count[i.potionName] )
    let styleMa = 0

    model.noRepeatPlayerItems = model.PlayerItems.yourItems.filter((v,i,a)=>a.findIndex(v2=>(v2.potionName===v.potionName))===i)
    for(let i = 0 ; i < model.noRepeatPlayerItems.length; i ++){
        if(i==0){
            styleMa = 600
        }if(i!=0){
            styleMa = 15
        }
        
        html += `
            <div class="your-items" style = "float:left;margin:18px;">
                <img src="${model.noRepeatPlayerItems[i].picture}" 
                style="height:90px;width:90px;">
                <div>${model.noRepeatPlayerItems[i].potionName}</div>
                <div>(${model.noRepeatPlayerItems[i].amount})</div>
                <button onclick="useItem(${i})">Use</button>
                <button onclick="sellItem(${i})">Sell</button>
            </div>`

            }
            return html
        }

function showMaterials(){
    model.count = {}
    model.PlayerItems.yourMaterials.forEach(function(i) 
        {model.count[i.Mname] = ( model.count[i.Mname]||0) + 1;});
    
    model.PlayerItems.yourMaterials.forEach(i => i.amount = model.count[i.Mname] )

    model.noRepeatPlayerMaterials = 
    model.PlayerItems.yourMaterials.filter((v,i,a)=>a.findIndex(v2=>(v2.Mname===v.Mname))===i)
    let styleMa = 0
    
    let html = ""




    for( i =0; i <  model.noRepeatPlayerMaterials.length ; i++){
        if(i==0){
            styleMa = 550
        }if(i!=0){
            styleMa = 15
        }
        html += `
        <div class="your-items" style="float:left; margin:18px">
            <img src ="${  model.noRepeatPlayerMaterials[i].picture}" 
            style="height:90px;width:90px;"><br>
            <div>${  model.noRepeatPlayerMaterials[i].Mname}</div>
            <div>(${ model.noRepeatPlayerMaterials[i].amount})</div> 
            <button onclick="sellMaterial(${i})">Sell</button>
        </div>
        `
    }
    return html
   
}
 




    