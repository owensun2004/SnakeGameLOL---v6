var slider=  document.getElementById("myRange");
var output= document.getElementById("demo");

var snakeSpeed=0;
//document.cookie="speed=0;";
var apples=document.querySelector("#fname");
var bombs=document.querySelector("#lname");
//var submitBTN=document.querySelector("#back");
/*
submitBTN.addEventListener("click", () => {
  let temp;
  if(apples.value>20){
    document.cookie="apple="+20+";";
    temp=20;
  }else if(apples.value<1){
    document.cookie="apple="+1+";";
    temp=1;
  }else{
    document.cookie="apple="+apples.value+";";
    temp=parseInt(apples.value);
  }
  return temp;
  
  
  //document.cookie="bomb="+bombs.value+";";
});
*/

function pressBackApple(){
  
  if(apples.value>20){
    document.cookie="apple="+20+";";
    
  }else if(apples.value<1){
    document.cookie="apple="+1+";";
    
  }else{
    document.cookie="apple="+apples.value+";";
    
  }
  
}
function pressBackBomb(){
  if(bombs.value>10){
    document.cookie="bomb="+10+";";
    
  }else if(apples.value<0){
    document.cookie="bomb="+0+";";
    
  }else{
    document.cookie="bomb="+bombs.value+";";
    
  }
}


function changeSpeed(){
  output.innerHTML = slider.value;
  snakeSpeed=1000-output.innerHTML;
  document.cookie="speed="+snakeSpeed+";";
  
}
console.log(document.cookie);
/*
slider.oninput = function() {
  output.innerHTML = this.value;
  snakeSpeed=1000-output.innerHTML;
  
}



function slider_set(){
    output.innerHTML  = slider.value;   
     
}
slider.addEventListener('input', slider_set);
snakeSpeed=1000-output.innerHTML;
console.log(snakeSpeed);


*/