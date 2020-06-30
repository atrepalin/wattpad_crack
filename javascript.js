var text="";
document.querySelectorAll('pre')
   .forEach(function(e){text+=e.textContent});
var b = new Blob(["\ufeff", text],{encoding:"UTF-8",type:"text/plain;charset=UTF-8"});
var url = URL.createObjectURL(b); 
window.open(url,"_blank","");
