//object create

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }


function Items(price,potionName,picture,amount){
    this.price = price,
    this.potionName= potionName,
    // this.size = size
    this.picture = picture
    this.amount = amount

   
}

function addItems(){
    model.allItems = [{hpValue: 200, name: "Power potion-200ml", img:"imgs/power.png"},
 new Items(200, "Power potion-200ml","imgs/power.png"),
new Items(300, "Power potion-500ml","imgs/power.png"),
new Items(500, "Power potion-1L","imgs/power.png"),
new Items(200, "Speed Potion-200 ml","imgs/speed.png"),
new Items(300, "Speed potion-500 ml","imgs/speed.png"),
new Items(500, "Speed potion-1L","imgs/speed.png"),
new Items(200, "Recovery potion-200ml","imgs/recovery.png"),
new Items(300, "Recovery potion-500ml","imgs/recovery.png"),
new Items(300, "Recovery potion-500 ml","imgs/recovery.png"),
];
}
