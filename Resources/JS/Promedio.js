
function myFunction() {
   var a = parseInt(document.getElementById("Cocles").innerHTML);
     var b = parseInt(document.getElementById("Carrillo").innerHTML);
      var c = parseInt(document.getElementById("Conchal").innerHTML);
       var d = parseInt(document.getElementById("Papagayo").innerHTML);

       var e = (a+b+c+d)/4
    document.getElementById("Resultado").innerHTML = e;
}

$(function(){
	$("#datepicker" ).datepicker(); 
});