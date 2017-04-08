//<!-- jquery -->
$(document).ready(function(){
  var indexFondosDerecha =0;
  var listaFondos = ['Resources/Images/volcano.jpg', 'Resources/Images/index2.jpg', 'Resources/Images/index3.jpg',
  'Resources/Images/index4.jpg', 'Resources/Images/index5.jpg'];
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
});
