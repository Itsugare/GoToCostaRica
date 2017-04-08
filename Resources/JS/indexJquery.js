//<!-- jquery -->
$(document).ready(function(){
  var today = new Date();
  var ss = 0;
  function startTime()
  {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var t = setTimeout(startTime, 500);
    ss = s;
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  var indexFondosDerecha =0;
  var listaFondos = ['Resources/Images/volcano.jpg', 'Resources/Images/index2.jpg', 'Resources/Images/index3.jpg',
  'Resources/Images/index4.jpg', 'Resources/Images/index5.jpg'];
  
  var myVar = setInterval(change, 3000);

  function change(){
    indexFondosDerecha++;
    if(indexFondosDerecha == 5){
      indexFondosDerecha =0;
    }
     $("#imageID").fadeOut("slow", function(){
      $("#imageID").fadeIn("slow");
      $("#imageID").attr('src', listaFondos[indexFondosDerecha]);

    });
}
    $("#sliderDerecha").click(function(){


        indexFondosDerecha++;
        if(indexFondosDerecha == 5){
          indexFondosDerecha =0;
        }
         $("#imageID").fadeOut("slow", function(){
          $("#imageID").fadeIn("slow");
          $("#imageID").attr('src', listaFondos[indexFondosDerecha]);

        });
      })

      $("#sliderIzquierda").click(function(){
        indexFondosDerecha--;
        if(indexFondosDerecha == -1){
          indexFondosDerecha =4;
        }
    $("#imageID").fadeOut("slow", function(){
            $("#imageID").fadeIn("slow");
            $("#imageID").attr('src', listaFondos[indexFondosDerecha]);

          });
        })

    $("#hide").hover(function(){
      $("#footer").fadeIn("slow");
      $(this).hide();
    })
});
