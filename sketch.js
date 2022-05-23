var jaxonImg,jaxon,
 path,pathImg,left_bounadry,right_bounadry






function preload(){
  pathImg=loadImage("path.png");
  jaxonImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.scale=1.2;

  jaxon = createSprite(50,160,20,50);
  jaxon.addAnimation("running",jaxonImg);
  jaxon.scale = 0.1;
 
  left_bounadry = createSprite(0,300,100,600);
  right_bounadry = createSprite(390,300,80,600);
  left_bounadry.visible=false;
  right_bounadry.visible=false;

}

function draw() {
  background(0);

  console.log(jaxon.x);
  console.log(jaxon.y);
if(path.y > 400)
{
  path.y = height/2;
}
jaxon.collide(left_bounadry);
jaxon.collide(right_bounadry);
edges=createEdgeSprites();
jaxon.collide(edges)

jaxon.x=mouseX

drawSprites();
}
