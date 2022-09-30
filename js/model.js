function Dragons(level,lifeStage,strength,agility,health,picture,xp){
    this.level = level,
    
    this.lifeStage = lifeStage
    
    this.strength = strength,
    this.agility = agility
    this.health = health,
    this.picture = picture,
    this.xp = xp
    this.property = function(){
       
            if(this. xp >= 500){ 
            this.level++
            this.xp = 0
            

            setTimeout(()=> {model.mySound[8].play() },5500 );
            setTimeout(()=> {swal({ title: "Level Up", text:"You passed level and gained a diamond"
    ,icon:"imgs/level-up.png", button:"ok"} ).then(function() {
        findUserDiamonds().diamonds++
        updateView();
    } 
    ) }
    , 4500)
            if(this.level == 10){
                setTimeout(()=> {swal({ title: "Level Up", text:"You passed from Baby to Juvenile and gained 5 diamonds"
    ,icon:"imgs/dragon-juvenile.png", button:"ok"} )}, 4500);
    setTimeout(()=> {
        findUserDiamonds().diamonds+=5
        updateView()}, 2500)
            }
          
            if(this.level == 20){
                setTimeout(()=> {swal({ title: "Level Up", text:"You passed from Juvenile to Adult and gained 5 diamonds "
    ,icon:"imgs/dragon-adult.jpg", button:"ok"} )}, 4500);
    setTimeout(()=> {
        findUserDiamonds().diamonds+=5
        updateView()}, 2500)
            }
        }

        if(this.level == 1 ){
            
            this.lifeStage = 'Egg',
            this.strength = 0,
            this.agility = 0,
            this.health = 50,
            this.xp = 0
            this.picture = "imgs/dragon-egg.png"
            
        }
        if(this.level >= 2){
            
            this.lifeStage = 'Baby',
            this.picture = "imgs/dragon-baby.png"
            
        }
        if(this.level >= 10){
            
            this.lifeStage = 'Juvenile',
            this.picture = "imgs/dragon-juvenile.png"}

        if(this.level >= 20 ){
            
            this.lifeStage = 'Adult',
            this.picture = "imgs/dragon-adult.jpg"
    }
             }
 }

 function Items(price,potionName,picture,amount,ingredients){
    this.price = price,
    this.potionName= potionName,
    this.picture = picture,
    this.amount = amount,
    this.ingredients = ingredients

   
}

function Materials(Mname,amount,sellPrice,picture ){
    this.Mname = Mname,
    this.amount = amount,
    this.sellPrice = sellPrice,
    this.picture = picture
  

}


function Creatures(name,strength,agility,health,picture){
    this.name = name,
    this.strength = strength,
    this.agility = agility,
    this.health = health,
    this.picture = picture
}

function Diamonds( diamonds, picture,price,diamondsName){
    this.diamonds = diamonds,
    this.picture = picture,
    this.price = price,
    this.diamondsName = diamondsName
}


function GoldCoins(coins,picture){
    this.coins = coins,
    this.picture = picture
    this.property = function(){
        if(this.coins = 0){
            this.picture = "imgs/no-coins.png"
        }
    }
}


const model = {
    //app
currentPage : "login", // where u see ur caracther,ur goldcoins, and u can use ur items 
                          // "storePage" where u can buy items and dragons(maybe)
                          //forest page, where u find items and enemies
noRepeatPlayerItems: [],      
count : {},                   

currentUser: "",

    //input
    player : {
        userName:"",
        password:"",
        repeatPassword:'',
        
        
        
    },



    //data

    tradeCenterAllList:[],
   
    



    //examples hardcoded

    playerList : [
        {
            userName:'Tina',
            password:"tina",
            repeatPassword:'gameOfThrones',
            yourNotifications:[],
            goldCoins:new GoldCoins(1500,"imgs/gold-coins.png"),
            yourDiamonds : new Diamonds(5, "imgs/yourDiamonds.png"),
            yourDragon: new Dragons(19,"Juvenile",250,250,300, "imgs/dragon-juvenile.png",300) ,
            yourItems : [new Items(5, "Fire Potion","imgs/fire.png", 1),new Items(300, "Bear Potion","imgs/bear.png"),],
            yourMaterials: [
                new Materials("Eagle Feather", 0,30, "imgs/materials-feather.png"),
                new Materials("Snake Skin", 0,40, "imgs/materials-snakeskin.png"),
                new Materials("Bear Fur", 0,40,  "imgs/materials-bear.png"), ]
            
            
            
        },
        {
            userName: 'Bruno',
            password: 'bruno',
            repeatPassword:'1',
            yourNotifications:[
               
            ],
            
            goldCoins:new GoldCoins(1500,"imgs/gold-coins.png"),
            yourDiamonds : new Diamonds(5, "imgs/yourDiamonds.png"),
            yourDragon: new Dragons(9,'Baby',200,250,200,"imgs/dragon-baby.png", 300),
            yourItems: [new Items(200, "Power Potion","imgs/power.png"),new Items(300, "Bear Potion","imgs/bear.png"),
            new Items(200, "Speed Potion","imgs/speed.png"),new Items(200, "Power Potion","imgs/power.png"),new Items(200, "Power Potion","imgs/power.png")],
            yourMaterials: [
                new Materials("Eagle Feather", 0,30, "imgs/materials-feather.png"),
                new Materials("Snake Skin", 0,40, "imgs/materials-snakeskin.png"),
                new Materials("Bear Fur", 0,40,  "imgs/materials-bear.png"),
                new Materials("Eagle Feather", 0,60, "imgs/materials-feather.png"),
                new Materials("Snake Skin",0, 40, "imgs/materials-snakeskin.png"),
                new Materials("Bear Fur",0, 30, "imgs/materials-bear.png"),  
                new Materials("Ginseng", 1,30,"imgs/materials-ginseng.png"),
                new Materials("Ginseng", 1,30,"imgs/materials-ginseng.png"),
                new Materials("Shell", 1,30,"imgs/materials-shell.png"),
                new Materials("Shell", 1,30,"imgs/materials-shell.png"),
            ]
            //Mname,sellPrice,picture,amount
        }

    ],

    //all Materials now - Eagle Feather, Bear Fur, Ginseng, Scorpion Tail, Cheetah Blood, Mustard Seed, Snake Skin, Black Rose, Fennel Leaf.
    //Materials to forest - Eagle Feather, Bear Fur, Ginseng.
    //Materials to Desert - Scorpion Tail, Snake Skin, Human Skull.
    //Materials to Ocean - Shell, Shark Tooth, Lobster Claw
    //Materials changes - Cheetah Blood to Human skull - Mustard Seed to Shell, Black Rose to Shark Tooth, Fennel Leaf to Lobster Claw  
   
    allItems: [
    new Items(3, "Power Potion","imgs/power.png",1, [ new Materials("Eagle Feather", 1,), new Materials("Bear Fur", 1,), new Materials("Shark Tooth", 1,)] ),
    new Items(3, "Speed Potion","imgs/speed.png", 1, [new Materials("Ginseng",  1), new Materials("Shell", 1), new Materials("Eagle Feather", 1)]  ),
    new Items(3, "Recovery Potion","imgs/recovery.png", 1, [new Materials("Shell", 1), new Materials("Ginseng", 1), new Materials("Snake Skin",  1)]  ),
    new Items(5, "Bear Potion","imgs/bear.png", 1, [new Materials("Bear Fur", 2), new Materials("Shark Tooth", 1), new Materials("Scorpion Tail",  2)]  ),
    new Items(5, "Fire Potion","imgs/fire.png", 1, [new Materials("Scorpion Tail", 2), new Materials("Lobster Claw", 2), new Materials("Snake Skin",  1)]  ),
    new Items(6, "Evil Potion","imgs/evil.png", 1, [new Materials("Human Skull", 3), new Materials("Lobster Claw", 3), new Materials("Bear Fur", 3)]  ),

   
       
    ],

    allMaterials: [new Materials("Eagle Feather", 0,30, "imgs/materials-feather.png"),
    new Materials("Bear Fur", 0,30, "imgs/materials-bear.png"),
    new Materials("Ginseng", 0,30, "imgs/materials-ginseng.png"),
    new Materials("Human Skull", 0,30, "imgs/materials-humanSkull.png"),
    new Materials("Scorpion Tail", 0,30, "imgs/materials-scorpio.png"),
    new Materials("Snake Skin", 0,30, "imgs/materials-snakeskin.png"),
    new Materials("Shell", 0,30, "imgs/materials-shell.png"),
        new Materials("Shark Tooth", 0,30, "imgs/materials-sharkTooth.png"),
        new Materials("Lobster Claw", 0,30, "imgs/materials-lobster.png"),

    ],

    eggLifePotion: new Items(5, "Hatching Potion","imgs/life.png" ),
    

    diamondsToSell :[new Diamonds(1,"imgs/yourDiamonds.png", 1500, "1 Diamond"),
    new Diamonds(3,"imgs/3diamonds.png", 3000, "3 Diamonds"),
    new Diamonds(5,"imgs/5diamonds.png", 4000, "5 Diamonds")],


//name,strength,agility,health,picture
    ForestBabyList : [
    
        new Creatures("Baby Giant", 350, 100, 200, "imgs/creatures-baby-Giant.png" ),
        new Creatures("Baby Troll", 300, 125,250, "imgs/creatures-baby-Troll.png" ),
        new Creatures("Baby Mystic Snake", 400, 150, 100, "imgs/creatures-babySnake.png"),
        new Creatures("Baby Godzilla", 250,330,300,"imgs/creatures-baby-Godzilla.png"),
        new Creatures("Baby Zombie", 200, 200, 110,"imgs/creatures-Baby-Zombie.png"),
        new Creatures("Baby Bear", 300, 350, 150, "imgs/creatures-baby-bear.png"),



        new Materials("Eagle Feather", 0,30, "imgs/materials-feather.png"),
        new Materials("Bear Fur", 0,30, "imgs/materials-bear.png"),
        new Materials("Ginseng", 0,30, "imgs/materials-ginseng.png"),
        new Materials("Eagle Feather", 0,30, "imgs/materials-feather.png"),
        new Materials("Bear Fur", 0,30, "imgs/materials-bear.png"),
        new Materials("Ginseng", 0,30, "imgs/materials-ginseng.png"),

       

        new GoldCoins(150,"imgs/gold-coins.png"),
        new GoldCoins(180,"imgs/gold-coins.png"),
      
        
    ],

    ForestJuvenileList : [
    
        new Creatures("Juvenile Forest Demon", 450, 90, 200, "imgs/creatures-forestDemon.png" ),
        new Creatures("Juvenile Troll", 300, 90,250, "imgs/creatures-juvenile-Troll.png" ),
        new Creatures("Juvenile Zombie Moose", 350,60,300,"imgs/creatures-juvenilemoose.png"),
        new Creatures("Juvenile Zombie", 250, 300, 200,"imgs/creatures-Juvenile_Zombie.png"),
        new Creatures("Juvenile Psycho Wolf", 500, 80, 250, "imgs/creatures-juvenileWolf.png"),

    
        new Materials("Eagle Feather", 0,30, "imgs/materials-feather.png"),
        new Materials("Bear Fur", 0,30, "imgs/materials-bear.png"),
        new Materials("Ginseng", 0,30, "imgs/materials-ginseng.png"),
        new Materials("Eagle Feather", 0,30, "imgs/materials-feather.png"),
        new Materials("Bear Fur", 0,30, "imgs/materials-bear.png"),
        new Materials("Ginseng", 0,30, "imgs/materials-ginseng.png"),

        new GoldCoins(200,"imgs/gold-coins.png"),
        new GoldCoins(220,"imgs/gold-coins.png"),
        new GoldCoins(250,"imgs/gold-coins.png"),
      
        
    ],

    ForestAdultList : [
    
        new Creatures("Adult Giant", 750, 150, 800, "imgs/creatures-Giant.png" ),
        new Creatures("Adult Troll", 650, 135,850, "imgs/creatures-adultTroll.png" ),
        new Creatures("Adult Zombie", 1000, 100, 600, "imgs/creatures-adult-Zoombie.png"),
        new Creatures("Adult Godzilla", 950,160,1000, "imgs/creatures-adult-Godzilla.png"),
        new Creatures("Adult Were Wolf", 550, 400, 800, "imgs/creatures-wereWolf.png"),
        new Creatures("Adult Bear", 1000, 180, 950, "imgs/creatures-bigBear.png"),
        new Creatures("Adukt Monster Snake", 1000, 180, 950, "imgs/creatures-adultSnake.png"),

        
        new Materials("Eagle Feather", 0,30, "imgs/materials-feather.png"),
        new Materials("Bear Fur", 0,30, "imgs/materials-bear.png"),
        new Materials("Ginseng", 0,30, "imgs/materials-ginseng.png"),
        new Materials("Eagle Feather", 0,30, "imgs/materials-feather.png"),
        new Materials("Bear Fur", 0,30, "imgs/materials-bear.png"),
        new Materials("Ginseng", 0,30, "imgs/materials-ginseng.png"),

        new GoldCoins(300,"imgs/gold-coins.png"),
        new GoldCoins(350,"imgs/gold-coins.png"),
        new GoldCoins(450,"imgs/gold-coins.png"),
      
        
    ],

    DesertBabyList : [
    
        new Creatures("Baby Desert Beast", 350, 100, 200, "imgs/creatures-babyDbeast.png" ),
        new Creatures("Baby Arachnid", 200, 125,250, "imgs/creatures-babyDbug.png" ),
        new Creatures("Baby Desert Monster", 400, 150, 100, "imgs/creatures-babyDmonster.png"),
        new Creatures("Baby Desert Serpent", 250,330,300,"imgs/creatures-babyDserpent.png"),
        new Creatures("Baby Mummy", 300, 400, 90,"imgs/creatures-babyMumy.png"),
        new Creatures("Baby Scorpion", 300, 400, 90,"imgs/creatures-babyScorpion.png"),
       
       

        new Materials("Human Skull", 0,30, "imgs/materials-humanSkull.png"),
        new Materials("Scorpion Tail", 0,30, "imgs/materials-scorpio.png"),
        new Materials("Snake Skin", 0,30, "imgs/materials-snakeskin.png"),
        new Materials("Human Skull", 0,30, "imgs/materials-humanSkull.png"),
        new Materials("Scorpion Tail", 0,30, "imgs/materials-scorpio.png"),
        new Creatures("Baby Desert Monster", 400, 150, 100, "imgs/creatures-babyDmonster.png"),
        new Creatures("Baby Desert Serpent", 250,330,300,"imgs/creatures-babyDserpent.png"),
        new Materials("Snake Skin", 0,30, "imgs/materials-snakeskin.png"),

        new GoldCoins(150,"imgs/gold-coins.png"),
        new GoldCoins(180,"imgs/gold-coins.png"),
      
        
    ],

    DesertJuvenileList : [
    
        new Creatures("Juvenile Arachnid", 450, 30, 300, "imgs/creatures-Dbug.jpg" ),
        new Creatures("Juvenile Desert Beast", 300, 35,250, "imgs/creatures-juvenileDbeast.png" ),
        new Creatures("Juvenile Desert Monster", 500, 30, 200, "imgs/creatures-juvenileDmonster.png"),
        new Creatures("Juvenile Desert Serpent", 350,60,200,"imgs/creatures-juvenileDserpent.png"),
        new Creatures("Juvenile Mummy", 250, 30, 300,"imgs/creatures-juvenileMummy.png"),
        

    
        new Materials("Human Skull", 0,30, "imgs/materials-humanSkull.png"),
        new Materials("Scorpion Tail", 0,30, "imgs/materials-scorpio.png"),
        new Materials("Snake Skin", 0,30, "imgs/materials-snakeskin.png"),
        new Materials("Human Skull", 0,30, "imgs/materials-humanSkull.png"),
        new Materials("Scorpion Tail", 0,30, "imgs/materials-scorpio.png"),
        new Materials("Snake Skin", 0,30, "imgs/materials-snakeskin.png"),
        new Creatures("Juvenile Desert Monster", 500, 30, 300, "imgs/creatures-juvenileDmonster.png"),
        new Creatures("Juvenile Desert Serpent", 350,60,500,"imgs/creatures-juvenileDserpent.png"),
       

        new GoldCoins(200,"imgs/gold-coins.png"),
        new GoldCoins(220,"imgs/gold-coins.png"),
        new GoldCoins(250,"imgs/gold-coins.png"),
      
        
    ],

    DesertAdultList : [
    
        new Creatures("Adult Arachnid", 750, 150, 800, "imgs/creatures-adultDbug.jpg" ),
        new Creatures("Adult Desert Beast", 650, 135,850, "imgs/creatures-adultDbeast.jpg" ),
        new Creatures("Adult Desert Monster", 1000, 100, 600, "imgs/creatures-adultDmonster.png"),
        new Creatures("Adult Desert Serpent", 950,160,900, "imgs/creatures-adultDserpent.jpg"),
        new Creatures("Adult Mummy", 750, 90, 800, "imgs/creatures-wereWolf.png"),
       

        
        new Materials("Human Skull", 0,30, "imgs/materials-humanSkull.png"),
        new Materials("Scorpion Tail", 0,30, "imgs/materials-scorpio.png"),
        new Materials("Snake Skin", 0,30, "imgs/materials-snakeskin.png"),
        new Materials("Human Skull", 0,30, "imgs/materials-humanSkull.png"),
        new Materials("Scorpion Tail", 0,30, "imgs/materials-scorpio.png"),
        new Materials("Snake Skin", 0,30, "imgs/materials-snakeskin.png"),
        new Creatures("Adult Desert Beast", 650, 135,850, "imgs/creatures-adultDbeast.jpg" ),
        new Creatures("Adult Desert Monster", 1000, 100, 600, "imgs/creatures-adultDmonster.png"),
        
        
        new GoldCoins(300,"imgs/gold-coins.png"),
        new GoldCoins(350,"imgs/gold-coins.png"),
        new GoldCoins(450,"imgs/gold-coins.png"),
      
        
    ],

    OceanBabyList : [
    
        new Creatures("Baby Mutant Squid", 350, 100, 200, "imgs/creatures-babysquid.jpg" ),
        new Creatures("Baby Mutant Crab", 300, 125,250, "imgs/creatures-babyOcrab.png" ),
        new Creatures("Baby Mutant Fish", 400, 150, 170, "imgs/creatures-babyOfish.jpg"),
        new Creatures("Baby Mutant Lobster", 250,330,180,"imgs/creatures-babyOlobster.png"),
        new Creatures("Baby Sea Monster", 300, 300, 190,"imgs/creatures-babyOmonster.jpg"),
        new Creatures("Baby Shark", 250, 300, 120,"imgs/creatures-babyOshark.png"),
        


        new Materials("Shell", 0,30, "imgs/materials-shell.png"),
        new Materials("Shark Tooth", 0,30, "imgs/materials-sharkTooth.png"),
        new Materials("Lobster Claw", 0,30, "imgs/materials-lobster.png"),
        new Materials("Shell", 0,30, "imgs/materials-shell.png"),
        new Materials("Shark Tooth", 0,30, "imgs/materials-sharkTooth.png"),
        new Materials("Lobster Claw", 0,30, "imgs/materials-lobster.png"),

        new GoldCoins(150,"imgs/gold-coins.png"),
        new GoldCoins(180,"imgs/gold-coins.png"),
      
        
    ],

   OceanJuvenileList : [
    
        new Creatures("Juvenile Mutant Fish", 450, 30, 300, "imgs/creatures-juvenileOfish.jpg" ),
        new Creatures("Juvenile Mutant Lobster", 300, 35,250, "imgs/creatures-juvenileOlobster.png" ),
        new Creatures("Juvenile Sea Monster", 500, 50, 300, "imgs/creatures-juvenileOmonster.jpg"),
        new Creatures("Juvenile Mutant Shark", 350,60,300,"imgs/creatures-juvenileOshark.jpg"),
        new Creatures("Juvenile Mutant Squid", 250, 300, 200,"imgs/creatures-juvenileOsquid.jpg"),

        

    
        new Materials("Shell", 0,30, "imgs/materials-shell.png"),
        new Materials("Shark Tooth", 0,30, "imgs/materials-sharkTooth.png"),
        new Materials("Lobster Claw", 0,30, "imgs/materials-lobster.png"),
        new Materials("Shell", 0,30, "imgs/materials-shell.png"),
        new Materials("Shark Tooth", 0,30, "imgs/materials-sharkTooth.png"),
        new Materials("Lobster Claw", 0,30, "imgs/materials-lobster.png"),
        new Creatures("Juvenile Mutant Shark", 350,60,500,"imgs/creatures-juvenileOshark.jpg"),

        new GoldCoins(200,"imgs/gold-coins.png"),
        new GoldCoins(220,"imgs/gold-coins.png"),
        new GoldCoins(250,"imgs/gold-coins.png"),
      
        
    ],

    OceanAdultList : [
    
        new Creatures("Adult Mutant Crab", 750, 150, 800, "imgs/creatures-adultOcrab.jpg" ),
        new Creatures("Adult Mutant Fish", 650, 135,850, "imgs/creatures-adultOfish.jpg" ),
        new Creatures("Adult Mutant Lobster", 1000, 100, 600, "imgs/creatures-adultOlobster.jpg"),
        new Creatures("Adult Sea Monster", 950,160,1000, "imgs/creatures-adultOmonster.webp"),
        new Creatures("Adult Mutant Shark", 550, 1300, 800, "imgs/creatures-adultOshark.webp"),
        new Creatures("Adult Mutant Squid", 1000, 180, 950, "imgs/creatures-adultOsquid.jpg"),
        

        
        new Materials("Shell", 0,30, "imgs/materials-shell.png"),
        new Materials("Shark Tooth", 0,30, "imgs/materials-sharkTooth.png"),
        new Materials("Lobster Claw", 0,30, "imgs/materials-lobster.png"),
        new Materials("Shell", 0,30, "imgs/materials-shell.png"),
        new Materials("Shark Tooth", 0,30, "imgs/materials-sharkTooth.png"),
        new Materials("Lobster Claw", 0,30, "imgs/materials-lobster.png"),

        new GoldCoins(300,"imgs/gold-coins.png"),
        new GoldCoins(350,"imgs/gold-coins.png"),
        new GoldCoins(450,"imgs/gold-coins.png"),
      
        
    ],


exploration:"",










    potionMakingList:[],

 
forestFindHtml : "",

randomFind : "",

tradeTypeOf:"",
tradeUrs:"",
tradeWant:"",


PlayerItems:'',
    
dragonAttacked: false,

creatureAttacked: false,

mySound: [
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663757670/hunted-mystery-horror-sounds-8396_pcocmk.mp3"),//0
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663750358/coins27-36030_ekanlx.mp3"),//1
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663751421/chemistry-106767_omjkns.mp3"),//2
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663756352/potion-done_xztutg.mp3"),//3
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663756584/item-equip-6904_glk7pr.mp3"),//4
    
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663758088/dark-wind-19785_yqml8f.mp3"),//5
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663758369/slashkut-108175_ewnkmz.mp3"),//6
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663758740/punch-2-37333_bvate1.mp3"),//7
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663759210/goodresult-82807_irnavn.mp3"),//8
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663759288/piano-crash-sound-37898_n4bigq.mp3"),//9
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663759578/running-in-grass-6237_a1poc2.mp3"), //10
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663760057/fanfare-46385_qi77km.mp3"), //11
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663760064/failfare-86009_va7wt6.mp3"), //12
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663764022/chaching_cxduvb.mp3"),//13
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663782778/drinking-liquid-sound-96442_uivcya.mp3"), //14
    new Audio("https://res.cloudinary.com/dvso7te8c/video/upload/v1663936707/underwater-ambience-6201_vqywwr.mp3") //15
    ]   
 }


