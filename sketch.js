var backgrounds;
var count=0;
var f1=false;
var f2=false;
var f3=false;
var f4=false;
var f5=false;
var f6=false;
var f7=false;
var f8=false;
var f9=false;
var f10=false;
var chosen1;
var chosen2;
function preload()
{
  card1Img=loadImage("bulbasaur.png");
  card2Img=loadImage("charisard.jpeg");
  card3Img=loadImage("charmendar.jpeg");
  card4Img=loadImage("clefary.jpeg");
  card5Img=loadImage("clefarys evolution.jpeg");
  card6Img=loadImage("eevee.jpeg");
  card7Img=loadImage("gigantamax charisard.jpeg");
  card8Img=loadImage("gigantamax pikachu.jpeg");
  card9Img=loadImage("gigantamax venasaur.jpeg");
  card10Img=loadImage("ivysaur.jpeg");
  card11Img=loadImage("jigglypuff.jpeg");
  card12Img=loadImage("lefeon.jpeg");
  card13Img=loadImage("mega charisard x.jpeg");
  card14Img=loadImage("mega charisard y.jpeg");
  card15Img=loadImage("mega togekiss.jpeg");
  card16Img=loadImage("mega venasaur.jpeg");
  card17Img=loadImage("pikachu.jpeg");
  card18Img=loadImage("raichu.jpeg");
  card19Img=loadImage("togekiss.jpeg");
  card20Img=loadImage("togepi.jpeg");
  card21Img =loadImage("togetic.jpeg");
  card22Img =loadImage("venasaur.jpeg");
  backgroundImg =loadImage("background.jpeg");
  cardbackImg =loadImage("card back.jpeg");
}

function setup() {
  createCanvas(1280, 640);


  backgrounds = createSprite(640,350,10,10);
  backgrounds.addImage(backgroundImg);
  backgrounds.scale = 1.7,1;


  card1=createSprite(200,150,10,10);
  card1.addAnimation("cardout",cardbackImg);
  card1.scale=0.22;

  card2=createSprite(400,150,10,10);
  card2.addAnimation("cardout",cardbackImg);
  card2.scale=0.22;

  card3=createSprite(600,150,10,10);
  card3.addAnimation("cardout",cardbackImg);
  card3.scale=0.22;

  card4=createSprite(800,150,10,10);
  card4.addAnimation("cardout",cardbackImg);
  card4.scale=0.22;

  card5=createSprite(1000,150,10,10);
  card5.addAnimation("cardout",cardbackImg);
  card5.scale=0.22;

  card6=createSprite(200,450,10,10);
  card6.addAnimation("cardout",cardbackImg);
  card6.scale=0.22;

  card7=createSprite(400,450,10,10);
  card7.addAnimation("cardout",cardbackImg);
  card7.scale=0.22;

  card8=createSprite(600,450,10,10);
  card8.addAnimation("cardout",cardbackImg);
  card8.scale=0.22;

  card9=createSprite(800,450,10,10);
  card9.addAnimation("cardout",cardbackImg);
  card9.scale=0.22;

  card10=createSprite(1000,450,10,10);
  card10.addAnimation("cardout",cardbackImg);
  card10.scale=0.22;
 
  card1.addAnimation("card1",card1Img);

  card2.addAnimation("card2",card4Img);

  card3.addAnimation("card3",card2Img);

  card4.addAnimation("card4",card5Img);

  card5.addAnimation("card5",card3Img);

  card6.addAnimation("card6",card5Img);

  card7.addAnimation("card7",card3Img);

  card8.addAnimation("card8",card4Img);

  card9.addAnimation("card9",card1Img);

  card10.addAnimation("card10",card2Img);

}


function draw() {
  background(0);

if(mousePressedOver(card1) && f1==false){
  card1.changeAnimation("card1");
  count++;
  if(count==1){
    chosen1="card1";
  }
  else if(count==2){
    chosen2="card1";
  }
  f1 = true;
}

if(mousePressedOver(card2)&& f2==false){
  card2.changeAnimation("card2");
  count++;
  if(count==1){
    chosen1="card2";
  }
  else if(count==2){
    chosen2="card2";
  }
  f2 = true;
}

if(mousePressedOver(card3)&& f3==false){
  card3.changeAnimation("card3");
  count++;
  if(count==1){
    chosen1="card3";
  }
  else if(count==2){
    chosen2="card3";
  }
  f3 = true;
}

if(mousePressedOver(card4)&& f4==false){
  card4.changeAnimation("card4");
  count++;
  if(count==1){
    chosen1="card4";
  }
  else if(count==2){
    chosen2="card4";
  }
  f4 = true;
}

if(mousePressedOver(card5)&& f5==false){
  card5.changeAnimation("card5");
  count++;
  if(count==1){
    chosen1="card5";
  }
  else if(count==2){
    chosen2="card5";
  }
  f5 = true;
}

if(mousePressedOver(card6)&& f6==false){
  card6.changeAnimation("card6");
  count++;
  if(count==1){
    chosen1="card6";
  }
  else if(count==2){
    chosen2="card6";
  }
  f6 = true;
}

if(mousePressedOver(card7)&& f7==false){
  card7.changeAnimation("card7");
  count++;
  if(count==1){
    chosen1="card7";
  }
  else if(count==2){
    chosen2="card7";
  }
  f7 = true;
}

if(mousePressedOver(card8)&& f8==false){
  card8.changeAnimation("card8");
  count++;
  if(count==1){
    chosen1="card8";
  }
  else if(count==2){
    chosen2="card8";
  }
  f8= true;
}

if(mousePressedOver(card9)&& f9==false){
  card9.changeAnimation("card9");
  count++;
  if(count==1){
    chosen1="card9";
  }
  else if(count==2){
    chosen2="card9";
  }
  f9 = true;
}

if(mousePressedOver(card10)&& f10==false){
  card10.changeAnimation("card10");
  count++;
  if(count==1){
    chosen1="card10";
  }
  else if(count==2){
    chosen2="card10";
  }
  f10 = true;
}
if(count==2){
  if((chosen1=="card1" && chosen2=="card9")||(chosen1=="card9" && chosen2=="card1")){
    card1.remove();
    card9.remove();
    count=0;
  }
  else  if((chosen1=="card2" && chosen2=="card8")||(chosen1=="card8" && chosen2=="card2")){
    card2.remove();
    card8.remove();
    count=0;
  }
  else{
    f1=false;
    f2=false;
    f3=false;
    f4=false;
    f5=false;
    f6=false;
    f7=false;
    f8=false;
    f9=false;
    f10=false;
    count=0;
    card1.changeAnimation("cardout");
    card2.changeAnimation("cardout");
    card3.changeAnimation("cardout");
    card4.changeAnimation("cardout");
    card5.changeAnimation("cardout");
    card6.changeAnimation("cardout");
    card7.changeAnimation("cardout");
    card8.changeAnimation("cardout");
    card9.changeAnimation("cardout");
    card10.changeAnimation("cardout");
  }
}
  drawSprites();
  }
