var dog,sadDog,happyDog;
var lastfed,foodstock,fedtime,feed,database;



function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}


function setup() {

  //database=firebase.database();
  createCanvas(1000,400);

  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;


  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addfood=createButton("add food");
  addfood.position(800,95);
  addfood.mousePressed(addFoods);
 
}

function draw() {
  background(46,139,87);
foodobj.display()
  drawSprites();
}


function feedDog(){
  dog.addImage(happyDog);

  if (foodObj.getfoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);

  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}


fuction addFoods(){
  foods++;
  database.ref('/').update({
    Food:foods
  })
}
