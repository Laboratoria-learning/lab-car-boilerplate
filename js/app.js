// La funcionalidad de tu proyecto
//Sección cuatro

window.addEventListener('load', function(){
  var firstInput = document.querySelector('.track-1');
  var secondInput = document.querySelector('.track-2');
  var mediaquery = window.matchMedia("(min-width: 1024px)");
  
  function handleOrientationChange(mediaquery) {
      if (mediaquery.matches) {
        firstInput.setAttribute('placeholder', 'Ingrese su punto de partida');
        secondInput.setAttribute('placeholder', 'Ingrese su destino');
      } else {
        firstInput.setAttribute('placeholder', 'Av.Benavides, 1880, ciudad de Lima');
        secondInput.setAttribute('placeholder', 'La victoria, ruta norte, ciudad de Lima');
      }
    }
    mediaquery.addListener(handleOrientationChange);
});
