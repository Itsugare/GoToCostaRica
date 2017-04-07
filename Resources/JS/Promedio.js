
function myFunction() {
  var a = parseInt(document.getElementById("Cocles").value);
  var b = parseInt(document.getElementById("Carrillo").value);
  var c = parseInt(document.getElementById("Conchal").value);
  var d = parseInt(document.getElementById("Papagayo").value);
  var e = (a+b+c+d)/4;
  document.getElementById("Resultado").value = e;
}
