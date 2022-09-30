function attack(){
       let power = findUserDragon().strength / 10;
        let speed = findUserDragon().agility / 15 
        let Dragonattack = power * speed / 3 / Math.floor(Math.random() * 4 +1);
        if(Dragonattack<= 10){
            Dragonattack = 12
        }
        if(Dragonattack >= 100){
            Dragonattack = 100;
        }
        let roundDAttack = Math.round(Dragonattack);

        let powerCreature = model.randomFind.strength / 10;
        let speedCreature = model.randomFind.agility / 15 
        let attackCreature = powerCreature*speedCreature / 3 / Math.floor(Math.random() * 4 +1);
        if(attackCreature<= 10){
            attackCreature = 12
        }
        if(attackCreature >= 100){
            attackCreature = 100;
        }

        let roundAttackCreature = Math.round(attackCreature);
        let refreshHealth = 0
        refreshHealth  = model.randomFind.health


       

    if( findUserDragon().health >0 && model.randomFind.health > 0 ) {
      

        model.dragonAttacked = true

        
        // alert("You gave" + roundDAttack + " of damage to your opponent")
        
        model.randomFind.health -= roundDAttack
        setTimeout(()=> {model.mySound[6].play() },200 );
      
        setTimeout(() => {swal({title: "Attack", text:"You gave " + roundDAttack + " of damage to your opponent",
        icon:"imgs/slash.png " } ) }, 200);
        //     setTimeout(() => {swal({title: "Evil Potion", text:"Your potion is ready ",icon:"imgs/evil.png " ,button:"Collect" } )}, 5010);
        if(model.randomFind.health <=0){
            model.randomFind.health = 0
        }

        updateView()
    }

    if(model.dragonAttacked = true  && findUserDragon().health >0 && model.randomFind.health > 0 ){
       
        model.dragonAttacked = false
        

      findUserDragon().health -= roundAttackCreature
    //   alert("You took" + roundAttackCreature + " of damage from your opponent")
    setTimeout(()=> {model.mySound[7].play() },3000 );
      setTimeout(() => {swal({title: "Opponent Attack", text:"You took " + roundAttackCreature + " of damage from your opponent",icon:"imgs/critical.png " } )}, 3000);
      if(findUserDragon().health <= 0) {
        findUserDragon().health = 0;
      }
      updateView()

    }

    

     if(findUserDragon().health <= 0  ){
        // alert("You lost the fight and 10 of xp! Go back and take health potions to recover.")
        setTimeout(() => {swal({ text:"You lost the fight and 10 of xp! ",icon:"imgs/skull.png " } ).then(function() {
            model.currentPage = "mainPage"
            updateView();
        } )}, 4100);
        setTimeout(()=> {model.mySound[9].play() },4090 );
        findUserDragon().xp -= 10
        if(findUserDragon.xp <= 0){
            findUserDragon.xp = 0
        }

        if(findUserDragon().xp<0){
           
            findUserDragon().xp =0
        }
        
        
        findUserDragon().health = 0
       
        
     }

     if(model.randomFind.health <= 0){
        model.randomFind.health = 0;
        // alert("You won the fight and gained 100 of xp!")
        setTimeout(() => {swal({ text:"You won the fight and gained 200 of xp!",icon:"imgs/xp.png " } ).then(function() {
            model.currentPage = model.exploration
            
            updateView();
        } )}, 3100);
        setTimeout(()=> {model.mySound[11].play() },3090 );
        
        findUserDragon().xp += 200
        findUserDragon().property()
        model.randomFind.health = 0
       
     }



    
}

function runFromEnemy(){
   let speedScape =  findUserDragon().agility * Math.floor(Math.random() * 5 +1)
   let speedCreature = model.randomFind.agility * Math.floor(Math.random() * 5 +1) 
   
    if( speedScape > speedCreature){
        setTimeout(()=> {model.mySound[10].play() },200 );
        setTimeout(() => {swal({ text:"You managed to escape the "+  model.randomFind.name + " and got 50 of xp",
        icon:"imgs/run.png " } ).then(function() {
            model.currentPage = model.exploration
            updateView();
        } ) }, 200);
        
        findUserDragon().xp += 50
       
        findUserDragon().property()
        
    }
    else {
        setTimeout(() => {swal({ text:"You didn't manage to escape from the " + model.randomFind.name + " you now have to fight, and you lost 10 of xp",
        icon:"imgs/snail.png " } ).then(function() {
            model.currentPage = "battle"
            updateView();
        } ) }, 200);
        
        findUserDragon.xp -= 10
        
        if(findUserDragon().xp<0){
           
            findUserDragon().xp =0
        }
        
        if(findUserDragon.xp <= 10){
            return findUserDragon.xp = 0
        }
       
    }
}