
var origemCompr=document.getElementById('origemCompr');
var origemPeso=document.getElementById('origemPeso');
var origemTemp=document.getElementById('origemTemp');
var destinoCompr=document.getElementById('destinoCompr');
var destinoPeso=document.getElementById('destinoPeso');
var destinoTemp=document.getElementById('destinoTemp');

// funcoes de comprimento
function metrosCentimetros(metros){
    return metros*100;
  }
  function metrosPolegadas(metros){
    return metros*39,37;
  }
  function centimetrosMetros(centimetros){
    return centimetros/100;
  }
  function centimetrosPolegadas(centimetros){
    return centimetros/2,54;
  }
  function polegadasMetros(polegadas){
    return polegadas/39,37;
  }
  function polegadasCentimetros(polegadas){
    return polegadas*2,54;
  }
  