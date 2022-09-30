function updateViewCreateUser(){
    let html = '';

    html+= 
    `
   
    
    <div class="background">
    <div class="login">
    <div class="info"><div><input class="input" placeholder="UserName" type:"text" oninput ="model.player.userName = this.value"></div>
    <div><input class="input" placeholder="Password" type="password" oninput ="model.player.password = this.value"> </div>
    <div><input class="input" placeholder="Repeat Password" type="password" oninput ="model.player.repeatPassword = this.value"> </div>
    <div><button class="btnlogin" onclick="createUser()">Create User</button> <button class="btnlogin" onclick="backToLogin()">Back to LogIn</button></div>
    
    </div>
    </div>
    
    
    `

    return html;
}