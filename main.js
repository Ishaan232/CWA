var a =document.getElementById("nput1");
var b =document.getElementById("nput2");
var c =document.getElementById("nput3");
var d=document.getElementById("nput4");
function add(){
    var fullname =a.concat(b);
    setText("product", c*d);
    setText("name", fullname);
    console.log(fullname);
    console.log(c*d);
}



