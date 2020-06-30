var text = '';
document.querySelectorAll('p')
    .forEach(function(e)
    {
        if(e.parentElement.tagName == "PRE")
            text += e.textContent
    });
text = text.split("+").join("");
var b = new Blob(["\ufeff", text], {encoding: "UTF-8", type: "text/plain;charset=UTF-8"});
var url = URL.createObjectURL(b); 
window.open(url, "_blank", "");
