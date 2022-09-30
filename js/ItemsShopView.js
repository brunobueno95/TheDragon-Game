function updateViewItemShop() {
    
   let html = '';


   html = `
   <div class="menu-bar">
        <button onclick ="goToMain()" class="menu-btns">MainPage</button>
        <button onclick="goToExplorer()" class="menu-btns">Explore</button>
        <button onclick="goToTradeCenterView()" class="menu-btns">Trade Market</button>
        <button class="menu-btns" onclick="logOut()">LogOut</button><br>
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
    <div  class="username-container" style="padding:7px; margin-top:5px;"><img src="imgs/xp.png" style="height:35px;width:35px;">XP:
    ${findUserDragon().xp}<img src="imgs/level-up.png" style="height:35px;width:35px;margin-left:17px;"> Level : ${findUserDragon().level} 
    <img src="imgs/potion.png" style="height:35px;width:35px;margin-left:17px;">Potions: ${model.PlayerItems.yourItems.length} 
    <img src="imgs/icon-materials.png" style="height:35px;width:35px;margin-left:17px;"> Materials: ${model.PlayerItems.yourMaterials.length}</div><hr>

        <h2>Potions</h2>
        ${checkLifeStageItems()} 
    </div>
        `

     html+= `<div style="clear:left;"><hr><h2>Diamonds</h2>`

     html+= `${checkLifeStagedrawDiamonds()} </div>`

    return html

}


function printItemsShop(){
    let html = ""
    // model.allItems.forEach(items => itemsHtml +=showItemsShop(items) )
    
    for ( i = 0; i < model.allItems.length; i++){
        html+= `
        <div style="float:left;  margin:15px;padding:12px;" class="item-shop">
       
            <img src="${model.allItems[i].picture}" style="height:90px;width:90px;display: flex;
            justify-content: center;"><br>
            <div style="font-size:22px;">${model.allItems[i].potionName}</div>
            Price:${model.allItems[i].price}
            <img src="${findUserDiamonds().picture}" style="height:15px;width:15px;"><br>
            <p style="color:black;font-size:19px;"> Materials Needed:</p>
        `

    for( j = 0; j< model.allItems[i].ingredients.length; j++){ 
     html+= ` 
        <ul>
            <li>${model.allItems[i].ingredients[j].Mname} 
            (${model.allItems[i].ingredients[j].amount})</li>
        </ul>`
    }
        html +=  `
            
                <button  onclick="buyItem(${i})">Buy</button> 
                <button  onclick="makePotion(${i})">Make Potion</button><br> </div>
            
       `

        }
        
       


    return html
}


function drawDiamonds(){
    let html= ""
    for( i = 0; i<model.diamondsToSell.length; i++){
        html += `
        <div style="float:left;margin:15px;  margin-left:60px;padding:12px;" class="item-shop">
        
        <img src="${model.diamondsToSell[i].picture}" style="height:90px;width:90px;display: flex;
        justify-content: center;"><br>
        <div>${model.diamondsToSell[i].diamondsName}</div>
        <div>Price:${model.diamondsToSell[i].price}
        <img src="${findUserCoins().picture}" style="height:15px;width:15px;"></div>
        <button  onclick="buyDiamonds(${i})">Buy</button>
        
        </div>`
    }

    return html

}

function checkLifeStageItems(){
    let html =""
    if(findUserDragon().lifeStage == "Egg"){
       html= `<div style="float:left;  margin:15px;padding:12px;"  class="item-shop">
       
            <img src="${model.eggLifePotion.picture}" style="height:90px;width:90px;display: flex;
            justify-content: center;"><br>
            <div>${model.eggLifePotion.potionName}</div>
            Price:${model.eggLifePotion.price}
            <img src="${findUserDiamonds().picture}" style="height:15px;width:15px;"></img>
            <button  onclick="buyHatching()">Buy</button> `
return html
    }
    else{
       return printItemsShop()

    }
    
}

function checkLifeStagedrawDiamonds(){
    if(findUserDragon().lifeStage == "Egg"){
        let html= ""
        return html
     }
     else{
        return drawDiamonds()
     }

}

// function showItemsShop(items, i){
//     let html = ""
//     html+= `<div>
//     <img src="${items.picture}" style="height:90px;width:90px;"><br>
//     <div>${items.potionName}</div><div>Price:${items.price}<img src="${findUserCoins().picture}" style="height:15px;width:15px;"> </div>

//     <button onclick="buyItem(${i})">Buy</button>
//    </div>`

//    return html
// }


// function showIngriedentsNeeded() {
//    if(firstMaterial) {
//     html+= `
//     <div>
//         ✅ ${model.allItems[i].ingredients[0].Mname} ( ${model.allItems[i].ingredients[j].amount})
//     </div>
//     `
//    } else {
//     html+= `
//     <div>
//         ❌ <span style="text-decoration: line-through;">
//         ${model.allItems[i].ingredients[0].Mname} ( ${model.allItems[i].ingredients[j].amount})</span>
//     </div> 
//     `
//    }
//    if(firstMaterial) {
//     html+= `
//     <div>
//         ✅ ${model.allItems[i].ingredients[0].Mname} ( ${model.allItems[i].ingredients[j].amount})
//     </div>
//     `
//    } else {
//     html+= `
//     <div>
//         ❌ <span style="text-decoration: line-through;">
//         ${model.allItems[i].ingredients[0].Mname} ( ${model.allItems[i].ingredients[j].amount})</span>
//     </div> 
//     `
//    }
   
// }