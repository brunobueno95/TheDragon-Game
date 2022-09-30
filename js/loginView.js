 function updateViewLogin(){
   let html = "" 
   html = 
    `<div class="background">
    <div class="login">
    <div class="info"><input class="input" type="text" oninput="model.player.userName = this.value" placeholder="UserName"><br>
    <input  class="input" type="password" oninput="model.player.password = this.value" placeholder="Password"><br>
    <button class="btnlogin" onclick="checkLog()">Login</button> <button class="btnlogin" onclick="goToCreateUser()">Create User</button></div>
    </div>
    </div>
    


    `
    return html
 }

 