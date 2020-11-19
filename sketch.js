var database;
var dog, dogHappy;
var footStock, foodS;

function preload(){
  dogImg = loadImage("sprites/Dog.png");
  //dogHappyImg = loadImage("sprites/happyDog.png");
  }

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  foodStock = database.red('food');
  foodStock.on("value",readStock);
 

 }

function draw(){
      background(46,139,87);
      if(keyDown(UP_ARROW)){
        writeStock(foodS);
        // dog.addImage(dogHappyImg)
      }  
      
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.red('/').update({
    Food : x
  })
}
