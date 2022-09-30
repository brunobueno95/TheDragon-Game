function updateViewTradeCenterPost(){
    let html =""

    html = `
    <div class="menu-bar">
        <button class="menu-btns" onclick ="goToMain()">MainPage</button>
        <button class="menu-btns" onclick="goToExplorer()">Explore</button>
        <button class="menu-btns" onclick="goToTradeCenterView()">Trade Center</button>
        <button class="menu-btns" onclick="logOut()">LogOut</button><br>
    </div>
    <div class="username-container">
        <div class ="user-info">Logged in as: ${model.currentUser}</div>
     
        <img onclick="goToNotifications()" src="imgs/notifications.png" style="height:30px;width:30px;" class ="user-info">
        <div onclick="goToNotifications()" class ="user-info"> 
        Notifications:  ${findUserNotifications().length}  </div>
        <img src="${findUserCoins().picture}" style="height:30px;width:30px;" class ="user-info"> 
        <div class ="user-info">${findUserCoins().coins}</div>
        <img src="${findUserDiamonds().picture}" style="height:30px;width:30px;" class ="user-info">
        <div class ="user-info">${findUserDiamonds().diamonds}</div>
    </div>
    <div  class="username-container" style="padding:7px; margin-top:5px;">
        <img src="imgs/xp.png" style="height:35px;width:35px;">
        XP:${findUserDragon().xp}<img src="imgs/level-up.png" style="height:35px;width:35px;margin-left:17px;"> 
        Level : ${findUserDragon().level} 
        <img src="imgs/potion.png" style="height:35px;width:35px;margin-left:17px;">
        Potions: ${model.PlayerItems.yourItems.length} 
        <img src="imgs/icon-materials.png" style="height:35px;width:35px;margin-left:17px;"> 
        Materials: ${model.PlayerItems.yourMaterials.length}</div><hr>`


    html += `
    
    <button class="menu-btns" onclick="goToTradeCenterAll()" >Check all trades</button><hr>
    <div style="
        font-size:35px;
        border-color: rgb(34, 34, 34);
        border-width: 15px;
        border-style: groove;
        background-color: #708090;
        margin: 30px;
    "> 
        <img src="imgs/icon-materials.png" style="height:70px;width:70px;">
        Trade Materials :
        <input type="radio" name="typeOfTrade" 
        value="Materials" onchange="model.tradeTypeOf = this.value;updateView(); "><br>
        <img src="imgs/potion.png" style="height:70px;width:70px;">
        Trade Potions :<input type="radio" name="typeOfTrade" value="Items" onchange="model.tradeTypeOf = this.value;updateView();">   
        </div>`

    html+= makingTradePostView()

    return html
}




function makingTradePostView(){
    let html ="";
    
    
    if(model.tradeTypeOf == "Materials"){
        html+= `
        <div style=" 
            background-color: #708090;
            border-color: rgb(34, 34, 34);
            border-width: 15px;
            border-style: groove; padding: 12px">
        
            <label style="font-size:25px" for="Materials">
            Choose one of Your Materials to Trade:</label>
        
            <select name="Materials"
            onchange="model.tradeUrs = this.value">
        
   ` 
        for(i=0; i<model.noRepeatPlayerMaterials.length; i++){
            html+= `
            <option value="${model.noRepeatPlayerMaterials[i].Mname}"> 
            ${model.noRepeatPlayerMaterials[i].Mname}</option>
            `
        }
        html+= `</select><br>`

         html+= materialsWantChoose()

       

        return html
        }

        if(model.tradeTypeOf == "Items"){
            html+= `
            <div style=" 
            background-color: #708090;
            border-color: rgb(34, 34, 34);
            border-width: 15px;
            border-style: groove; padding: 12px">

             <label style="font-size:25px" for="Items">Choose one of Your Potions to Trade:</label>
                <select name="Items" 
                onchange="model.tradeUrs = this.value">   
       ` 
            for(i=0; i<model.noRepeatPlayerItems.length; i++){
                html+= `
                <option value="${model.noRepeatPlayerItems[i].potionName}"> 
                ${model.noRepeatPlayerItems[i].potionName}</option>
                `
            }
            html+= `</select><br>`
    
            html+= itemsWantChoose()
    
           
    
            return html
            }

            if(model.tradeTypeOf == ""){
                let html = ""
                return html
            }
    
}



function materialsWantChoose(){
    let html = ""
    html+=` 
    
    <label style="font-size:25px" for="MaterialsWant">Choose one Material you wish:</label>
    <select name="MaterialsWant" onchange="model.tradeWant = this.value">   
` 
    for(i=0; i<model.allMaterials.length; i++){
    html+= `
    <option value="${model.allMaterials[i].Mname}"> ${model.allMaterials[i].Mname}</option>
    `
    }
    html+= `</select> </div>
    `

    html+= `
        <button class="menu-btns" onclick="postTrade(${i});model.currentPage = 'tradeCenterAll' ;updateView();">Post</button>`
    return html
    }

function itemsWantChoose(){
    let html = ""
    html+=` 
    
    <label style="font-size:25px" for="ItemsWant">Choose one Potion you wish:</label>
    <select name="ItemsWant" onchange="model.tradeWant = this.value">   
` 
    for(i=0; i<model.allItems.length; i++){
    html+= `
    <option value="${model.allItems[i].potionName}"> ${model.allItems[i].potionName}</option>
    `
    }
    html+= `
        </select> 
        </div>
    `

    html+= `
    <button class="menu-btns" 
    onclick="postTrade(${i});model.currentPage = 'tradeCenterAll' ;updateView();">Post</button>`
    return html


}