function goToCreateUser() {
    model.currentPage = 'createUser';
    updateView();
}

function createUser(){
    let repeptiveUsername = model.playerList.find(i=> i.userName == model.player.userName)
    if(repeptiveUsername){
        swal({ text:"This User Name has already been taken", icon:"imgs/wrongId.png" })
    }
    if(model.player.password != model.player.repeatPassword){
        swal({ text:"Passwords dont match", icon:"imgs/secure.png" })
    }
   if(!repeptiveUsername && model.player.password == model.player.repeatPassword ){
        
        const newUser = {}
        newUser.userName = model.player.userName;
    newUser.password = model.player.password;
    newUser.yourDragon = new Dragons(1)
    model.yourNotifications =[],
    newUser.yourDragon.property()
    newUser.yourItems = [];
    newUser.yourMaterials = [];
    newUser.goldCoins = new GoldCoins(500,"imgs/gold-coins.png")
    newUser.yourDiamonds = new Diamonds(5, "imgs/yourDiamonds.png"),
    newUser.yourNotifications = []
    model.playerList.push(newUser)
    model.currentUser = model.player.userName
    swal({ text:"Your user was created with success !" ,icon:"imgs/userName.png", button:"Start Playing" } ).then(function() {
        model.currentPage = "mainPage"
        updateView();
    } 
    )

    }
    
}


function backToLogin(){
    model.currentPage = "login"
    updateView()
}
