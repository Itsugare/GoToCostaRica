//<!-- jquery -->
$(document).ready(function(){
  
  var indexFondosDerecha =0;
  var listaFondos = ['Resources/Images/volcano.jpg', 'Resources/Images/index2.jpg', 'Resources/Images/index3.jpg',
  'Resources/Images/index4.jpg', 'Resources/Images/index5.jpg'];

  var myVar = setInterval(change, 5000);

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
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help