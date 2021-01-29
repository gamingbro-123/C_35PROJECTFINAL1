// var balloonImg;
var bgImg;
var balloonImg2;
var database;
var balloonImage2;
var balloon2;

function preload()
{
  bgImg = loadImage("Hot Air Ballon-01.png");
  balloonImg2 = loadAnimation("Hot Air Ballon-02.png");
  

}

function setup() {
  createCanvas(800,500);
  // balloon = createSprite(200,100,50,50);

  balloon2 = createSprite(100,30,10,10);


 balloon2.addAnimation("Hot Air Ballon-02.png",balloonImg2);


  database = firebase.database();

  var balloonref = database.ref("balloon/position");
  balloonref.on("value",readData)

}

function draw() {
  background(bgImg);


  if(keyDown(LEFT_ARROW)){
    // balloon2.x = balloon2.x -10;
    changePosition(-10,0);

}
else if(keyDown(RIGHT_ARROW)){
  // balloon2.x = balloon2.x +10;
  changePosition(+10,0);
}
else if(keyDown(UP_ARROW)){
  //  balloon2.y = balloon2.y -10;
   changePosition(0,-10);
}
else if(keyDown(DOWN_ARROW)){
  // balloon2.y = balloon2.y +10;
  changePosition(0,+10);
  
}  

// balloon.display();
//   balloon2.display();
  

  
  // readPosition();
  // updateWeight();
  // readHeight();
  // ShowError();


  drawSprites();
  
}

function changePosition(x,y){
  balloon2.x = balloon2.x + x;
  balloon2.y = balloon2.y + y;

  database.ref("balloon/position").set({x:balloon2.x,y:balloon2.y})
}

function readData(DATA)
{
  var position = DATA.val();
  balloon2.x = position.x;
  balloon2.y = position.y;
  }
