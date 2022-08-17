
var input = document.querySelector ("input");
var button= document.querySelector("button");

 function cal(a) {
    
 
    input.value +=a ;
    
}
function clr() {
    input.value=" ";
    
}
function del() {
   input.value = input.value.slice(0,-1) ;
    
}
function result(){
    try {
        input.value = eval(input.value);
    } 
    catch (err) {
        alert( "please enter right paramentals");
    }
}
console.log(3%2);