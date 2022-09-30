function updateViewExplorer() {
    needRecover()
    cantBeanEgg()
    let html = '';

    html+= `
    <div class="menu-bar">
        <button onclick ="goToMain()" class="menu-btns">MainPage</button>
        <button onclick="openItemShop()" class="menu-btns">Item Shop</button> 
        <button onclick="goToTradeCenterView()" class="menu-btns">Trade Market</button>
        <button onclick="logOut()" class="menu-btns">LogOut</button>
    </div>
    <div>Logged in as : ${model.currentUser}</div>
   <div class="video-container">
   
        <div class="video-explore">
            <video playsinline autoplay muted loop class="video-div">
                <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661746/Forest_-_111101_c0lxch.mp4" type="video/webm">
                <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661746/Forest_-_111101_c0lxch.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
                <button style="font-size: 20px;margin-top:400px; width:200px;height:60px;"  onclick="goToForest()">Explore Forest</button>
        </div>

        <div class="video-explore">
            <video playsinline autoplay muted loop class="video-div">
                <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661796/Dunes_-_16139_iixktz.mp4" type="video/webm">
                <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661796/Dunes_-_16139_iixktz.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
                <button style="font-size: 20px;margin-top:400px; width:200px;height:60px;" class="explore-btns" onclick="goToDesert()">Explore Desert</button>
        </div>
    
   
        

        <div class="video-explore">
            <video playsinline autoplay muted loop class="video-div">
            <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661803/Underwater_-_1081_y56d7l.mp4" type="video/webm">
            <source src="https://res.cloudinary.com/dvso7te8c/video/upload/v1663661803/Underwater_-_1081_y56d7l.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video>
            <button style="font-size: 20px;margin-top:400px; width:200px;height:60px;"  onclick="goToOcean()">Explore The Ocean</button>
        </div>
    </div>
    `

    return html
}

function needRecover(){
    if(findUserDragon().health == 0){
        setTimeout(() => {swal({ title:"Need Recovery" ,text:"Your dragon has 0 of health, you need to recover before being able to continue exploring!",icon:"imgs/cardiogram.png " } ).then(function() {
            model.currentPage = "mainPage"
            
            updateView();
        } )}, 100);
    }
}

function cantBeanEgg(){
    if(findUserDragon().lifeStage == "Egg"){
        setTimeout(() => {swal({ title:"You are just an egg" ,text:"Your dragon is still an Egg, you need to hatch before being able to start exploring!You can buy a hatching potion at ItemShop.",icon:"imgs/hatch.png " } ).then(function() {
            model.currentPage = "mainPage"
            
            updateView();
        } )}, 100);
    }
}
