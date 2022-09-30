function checkLog(){
    let thisPlayer = model.playerList.find(userPlayer => userPlayer.userName == model.player.userName)
    let thisPassword = model.playerList.find(userPassword => userPassword.password == model.player.password)
    if(thisPlayer && thisPassword){
        model.currentUser = thisPlayer.userName
        model.currentPage = "mainPage"
        updateView()
    }
    else {
        alert('UserName and Password dont match')
    }



}

function logOut() {
    model.currentPage = 'login';
    model.currentUser = '';
    updateView();
}
