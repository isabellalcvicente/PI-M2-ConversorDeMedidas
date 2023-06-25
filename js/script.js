
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

  // funcoes de conversao de temperatura
function celsiusFahrenheit(celsius){
    console.log("Estamos no celsiusF")
    console.log((celsius * 9 / 5) + 32);
    return (celsius * 9 / 5) + 32;
  }
  function celsiusKelvin(celsius){
    return celsius + 273.15;
  }
  function fahrenheitCelsius(fahrenheit){
    return (fahrenheit - 32) * 9 / 5;
  }
  function fahrenheitKelvin(fahrenheit){
    return fahrenheitCelsius(fahrenheit) + 273.15;
  }
  function kelvinCelsius(kelvin){
    return kelvin - 273.15;
  }
  function kelvinFahrenheit(kelvin){
    return celsiusFahrenheit(kelvinCelsius(kelvin));
  }
  