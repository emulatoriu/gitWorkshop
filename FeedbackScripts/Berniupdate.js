console.log("Update Workshop");
/*//building
var building=createSprite(200,300);
building.setAnimation("building");
building.visible=false;

//student
var student=createSprite(200,200);
student.setAnimation("player");
student.scale=0.1;
console.log(student.scale);



//student2
var student2 =createSprite(200,200);
student2.setAnimation("student2");
student2.scale=0.1;
student2.visible=false;

//student3
var student3=createSprite(200,325);
student3.setAnimation("student3");
student3.scale=0.1;
student3.visible=false;

//student4
var student4=createSprite(200,200);
student4.setAnimation("student2");
student4.visible=false;


//mentor
var mentor = createSprite(200, 200);
mentor.setAnimation("mentor1");
mentor.scale = 0.2;
mentor.visible=false;


//Coure Values


var courage=createSprite(50,50);
courage.setAnimation("text1");
var quality=createSprite(290,50);
quality.setAnimation("text2");
var fun=createSprite(50,360);
fun.setAnimation("text3");
var honesty=createSprite(290,360);
honesty.setAnimation("text4");


createEdgeSprites();
mentor.setVelocity(10,20);

function draw() {

  student.bounceOff(edges);
  student2.bounceOff(edges);
  mentor.bounceOff(edges);
  
  if(keyDown("right")){
    student.x=student.x+3;
  }
  if(keyDown("left")){
    student.x=student.x-3;
  }
  if(keyDown("up")){
    student.y=student.y-3;
  }
  if(keyDown("down")){
    student.y=student.y+3;
  }
  
 

 background("white");


  words();
  drawSprites();
  console.log(student.scale);
  
  //Level 2
  if(student.scale >=0.5){

 
  
  mentor.visible=true;
  student.visible=false;
  student2.visible=true;
  
  //text
  
   textSize(25);
   
   fill("#201853");
  
  text("Mein Mentor is busy. Wo sind meine Teamkolleg:innen ?", 20,70,400,400);
  
  //make student2 move
  if(keyDown("right")){
    student2.x=student2.x+9;
  }
  if(keyDown("left")){
    student2.x=student2.x-9;
  }
  if(keyDown("up")){
    student2.y=student2.y-9;
  }
  if(keyDown("down")){
    student2.y=student2.y+9;
  }

  }

  
  //Level 2 auf 3 

if(student2.y <  100){
  building.visible=true;
  student3.visible=true;
  mentor.setVelocity(80,400);
}

}



function words(){
  if (student.isTouching(quality)  && quality.visible) {
  quality.visible=false;
  student.scale=student.scale+0.1;

    student.rotation=student.rotation+16;
  
} 



if(student.isTouching(honesty)&& honesty.visible){
  honesty.visible=false;
  student.rotation=student.rotation-50;
    student.scale=student.scale+0.1;
  

}
if(student.isTouching(fun)&& fun.visible){
  fun.visible=false;
  student.rotation=student.rotation+20;
    student.scale=student.scale+0.1;
    
}
if(student.isTouching(courage)&& courage.visible){
  courage.visible=false;
  student.rotation=student.rotation-90;
    student.scale=student.scale+0.1;
    
}

}
 */

