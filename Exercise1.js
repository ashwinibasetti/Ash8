var guessnumber = 10;
console.log(guessnumber)
//var guessnumber = Math.floor(Math.random()*50)
console.log(guessnumber)

function Check(){
 // alert("onclick works")
  var userinput = document.getElementById("userval").value
if(guessnumber == userinput){
 // alert("wow you found it!")
 document.getElementById("out").innerText="Wow you found it" 
}
  else if(guessnumber<userinput){
   // alert("Your guess is too high")
   document.getElementById("out").innerText="your guess is too high" 
  }
  else if(guessnumber>userinput){
   // alert("Your guess is too low")
    document.getElementById("out").innerText="your guess is too low" 
 
  }
}