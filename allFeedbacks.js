
console.log("************")
console.log("File: amy.js")
console.log("Leider hat niemand \"Bahnhof\" gesagt");
console.log("************")
console.log("************")
console.log("File: andras.js")
console.log("Hello Git!");
console.log("************")
console.log("************")
console.log("File: angelo.js")
console.log ("hello there")
console.log (2+2)

console.log("************")
console.log("************")
console.log("File: Benito.js")
console.log("Guter workshop wenn auch ich trotzdem ein wenig verwirrt bin.")
console.log("************")
console.log("************")
console.log("File: Berni.js")
console.log("Hello, der Workshop was sehr hilfreich und informativ aber auch sehr forderdernd"); 
console.log("************")
console.log("************")
console.log("File: Berniupdate.js")
console.log("Update Workshop");

/*Link to Game Level 1 und Level 2

https://studio.code.org/projects/gamelab/S1ekj1ANYIViSuRUozMJEFxCJQ-vlqi0z88drv27Rik


*/
/*
Level 1 und Level2 



//building
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


Level 3


var background = createSprite(200,200);
background.setAnimation("coding");

var student=createSprite(180,200);
student.setAnimation("player");
student.scale=0.1;

var student2=createSprite(240,200);
student2.setAnimation("player2");
student2.scale=0.1;

var laptop=createSprite(50,50);
laptop.setAnimation("laptop");
laptop.scale=0.5;

var coffee=createSprite(350,50);
coffee.setAnimation("coffee");
coffee.scale=0.2;

var brain=createSprite(50,350);
brain.setAnimation("newIdea");
brain.scale=0.2;

var github=createSprite(310,350);
github.setAnimation("github");
github.scale=0.2;



createEdgeSprites();
function draw() {

  student.bounceOff(edges);
  
    
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
 student2.bounceOff(edges);
  
  if(keyDown("h")){
    student2.x=student2.x+3;
  }
  if(keyDown("f")){
    student2.x=student2.x-3;
  }
  if(keyDown("t")){
  
    student2.y=student2.y-3;
  }
  if(keyDown("g")){
    student2.y=student2.y+3;
  }

//wenn des koordination 290,50 berührt
//visibilty false; 

animation();
  drawSprites();

}

function animation(){
  if (student.isTouching(laptop)) {
  laptop.visible=false;
} 
if(student.isTouching(coffee)){
  coffee.visible=false;
}
if(student.isTouching(brain)){
  brain.visible=false;
}
if(student.isTouching(github)){
  github.visible=false;
}
  if (student2.isTouching(laptop)) {
  laptop.visible=false;
} 
if(student2.isTouching(coffee)){
  coffee.visible=false;
}
if(student2.isTouching(brain)){
  brain.visible=false;
}
if(student2.isTouching(github)){
  github.visible=false;
}
}


 */


console.log("************")
console.log("************")
console.log("File: BrendaFeedback.js")
console.log ("Coole präsentation");

console.log("************")
console.log("************")
console.log("File: Coders in Space.js")
/*Link to Game Level 1 und Level 2

https://studio.code.org/projects/gamelab/S1ekj1ANYIViSuRUozMJEFxCJQ-vlqi0z88drv27Rik


*/
/*
Level 1 und Level2 



//building
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


Level 3


var background = createSprite(200,200);
background.setAnimation("coding");

var student=createSprite(180,200);
student.setAnimation("player");
student.scale=0.1;

var student2=createSprite(240,200);
student2.setAnimation("player2");
student2.scale=0.1;

var laptop=createSprite(50,50);
laptop.setAnimation("laptop");
laptop.scale=0.5;

var coffee=createSprite(350,50);
coffee.setAnimation("coffee");
coffee.scale=0.2;

var brain=createSprite(50,350);
brain.setAnimation("newIdea");
brain.scale=0.2;

var github=createSprite(310,350);
github.setAnimation("github");
github.scale=0.2;



createEdgeSprites();
function draw() {

  student.bounceOff(edges);
  
    
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
 student2.bounceOff(edges);
  
  if(keyDown("h")){
    student2.x=student2.x+3;
  }
  if(keyDown("f")){
    student2.x=student2.x-3;
  }
  if(keyDown("t")){
  
    student2.y=student2.y-3;
  }
  if(keyDown("g")){
    student2.y=student2.y+3;
  }

//wenn des koordination 290,50 berührt
//visibilty false; 

animation();
  drawSprites();

}

function animation(){
  if (student.isTouching(laptop)) {
  laptop.visible=false;
} 
if(student.isTouching(coffee)){
  coffee.visible=false;
}
if(student.isTouching(brain)){
  brain.visible=false;
}
if(student.isTouching(github)){
  github.visible=false;
}
  if (student2.isTouching(laptop)) {
  laptop.visible=false;
} 
if(student2.isTouching(coffee)){
  coffee.visible=false;
}
if(student2.isTouching(brain)){
  brain.visible=false;
}
if(student2.isTouching(github)){
  github.visible=false;
}
}


 */

console.log("************")
console.log("************")
console.log("File: Datei_von_Peter.js")
console.log("Der Git-Workshop war großartig!");
console.log("************")
console.log("************")
console.log("File: eryd.js")
console.log("Danke für den Workshop, jetzt habe ich Git und Githup verstanden und für was es ist.\nDavor hatte ich nur eine vermutung. Jetzt weis ich wann es angewant wird.")

console.log("************")
console.log("************")
console.log("File: Feedback Noah von Chris.js")
console.log (`Boah, der Noah!'\n\nI could follow his instructions very good and clearly. He's an awesome mentor!`)
console.log("************")
console.log("************")
console.log("File: feedback_alf.js")
/*

Der Workshop war durchaus ... leider nur verwirrend für mich.
Ich hoffe, dass sich mir die Vorteile irgendwann erschließen.
Werde mir das noch anschauen müssen, 
aber wenn ich nicht gleichzeitig am selben File arbeiten kann,
ohne bei der Zusammenführung noch einmal eingreifen zu müssen - warum?
*/
console.log("hello world");
console.log("************")
console.log("************")
console.log("File: jovan.js")
console.log("HEllo");
console.log(2*2);

console.log("************")
console.log("************")
console.log("File: JuliasFeedback12.js")
console.log ("Hello Feedback")
console.log("************")
console.log("************")
console.log("File: Katharina.js")
console.log("Coole Präsi, verwirrt bin ich trotzdem c':");

console.log("************")
console.log("************")
console.log("File: martin.js")
console.log("Workshop was too easy");

console.log("************")
console.log("************")
console.log("File: Nenad.js")
console.log ("Hello World)");
console.log(2*2);
console.log("Hi");
console.log("************")
console.log("************")
console.log("File: noah.js")
console.log("Cool repo :)");

console.log("************")
console.log("************")
console.log("File: poori.js")
console.log (" git is amazing und workshop i lokke forward to learn more and more")
console.log("************")
console.log("************")
console.log("File: Raphael.js")

console.log("************")
console.log("************")
console.log("File: review_jess.js")
// The Git Workshop was really informative!
//Good job Noah!
console.log("************")
console.log("************")
console.log("File: SimuFeedback.js")
console.log("hello");
console.log("hru");
console.log("angelo");
console.log("************")
console.log("************")
console.log("File: test.js")
console.log("Hello JavaScript - says Martin");

console.log("************")