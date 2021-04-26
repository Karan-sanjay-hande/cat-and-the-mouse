
var cat, rat;
var backgroundImg;

function preload()
 {
    backgroundImg=loadImage("images/garden.png");
    catImg   = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");
    catImg2  = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadImage("images/mouse4.png");
}

function setup()
{
    createCanvas(1000,800);
    
    cat=createSprite(800,700,50,50);
    cat.addImage(catImg);
    cat.scale=0.2
    rat=createSprite(200,700,50,50);
    rat.addImage(mouseImg);
    rat.scale=0.15
}

function draw() 
{

    background(backgroundImg);
    
    if(cat.x - rat.x<(cat.width - rat.width)/2)
    {
        cat.velocityX=0;
        cat.addAnimation("catlast",catImg3);
        cat.changeAnimation("catlast");
        cat.x=300;
        cat.scale=0.2;


        rat.addAnimation("lastImg",mouseImg3);
        rat.scale=0.15;
        rat.changeAnimation("lastImg");
    }

    drawSprites();
}

function keyPressed()
{
    if(keyCode === LEFT_ARROW)
    {

     rat.addAnimation("mouseTeasing",mouseImg2);
     rat.frameDelay=25;
     rat.changeAnimation("mouseTeasing");
     
     cat.addAnimation("catRunning",catImg2);
     cat.changeAnimation("catRunning");  
     cat.velocityX=-5;
    }
}
