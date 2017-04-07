var indexFondos = 0;
var listaFondos = ["url('Resources/Images/volcano.jpg')", "url('Resources/Images/index2.jpg')", "url('Resources/Images/index3.jpg')",
"url('Resources/Images/index4.jpg')", "url('Resources/Images/index5.jpg')"];

function ChooseBackground(indexFondos){
  document.body.style.backgroundImage = listaFondos[indexFondos];
}
