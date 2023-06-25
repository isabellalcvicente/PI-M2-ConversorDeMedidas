
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
  

  //funcoes de conversao de peso
function gramasQuilogramas(gramas){
    return gramas/1000;
  }
  function gramasLibras(gramas){
    return gramas/453,59;
  }
  function quilogramasGramas(quilogramas){
    return quilogramas*1000;
  }
  function quilogramasLibras(quilogramas){
    return quilogramas*2,20;
  }
  function librasGramas(libras){
    return libras*453,59;
  }
  function librasQuilogramas(libras){
    return libras*2,20;
  }