
var liked =    '<i class="fa fa-thumbs-up" aria-hidden="true" style="color:blue;font-size:60px;font-weight:bold;"></i>';
var unliked = '<i class="fa fa-thumbs-down" aria-hidden="true" style="color:red;font-size:60px;font-weight:bold;"></i>'
var none = '<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>';

function init(){
document.getElementById("ghost").innerHTML=none;
}

function setMood(){
var elem=document.getElementById("ghost").innerHTML;
if(elem===none){
likes();
 
}
else if(elem===liked){
dislikes();
 
}
else if(elem===unliked){
likes();
 
}

}



 function likes(){
 document.getElementById("ghost").innerHTML=liked;
  }
 
 function dislikes(){
  document.getElementById("ghost").innerHTML=unliked;
  } 
 
