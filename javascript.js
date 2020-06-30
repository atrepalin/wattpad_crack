var text="";
document.querySelectorAll('p')
   .forEach(function(e){text+=e.textContent});
text.replace("+","");
alert("123");
var b = new Blob(["\ufeff", text],{encoding:"UTF-8",type:"text/plain;charset=UTF-8"});
var url = URL.createObjectURL(b); 
window.open(url,"_blank","");
