
var origemCompr=document.getElementById('origemCompr');
var origemPeso=document.getElementById('origemPeso');
var origemTemp=document.getElementById('origemTemp');
var destinoCompr=document.getElementById('destinoCompr');
var destinoPeso=document.getElementById('destinoPeso');
var destinoTemp=document.getElementById('destinoTemp');
var clicar = document.getElementById("clickButton");
// em vez de selecionar direto o elemento id, selecione a variavel 
var selecioneCategoria = document.getElementById("categorias");
//em vez de selecionar direto o elemento id, selecione a variavel


selecioneCategoria.onchange = function(){
  if (selecioneCategoria.value == "Comprimento") {
    // se a categoria escolhida for "Comprimento", então esconda as opções de unidades de origem e destino de peso e temperatura
    origemCompr.style.display = "flex";
    origemPeso.style.display = "none";
    origemTemp.style.display = "none";
    destinoCompr.style.display = "flex";
    destinoPeso.style.display = "none";
    destinoTemp.style.display = "none"; 
    // document.getElementById('unidadesTemperaturaDestino').style.display = "none";
  }else if (selecioneCategoria.value == "Peso") {
    // se a categoria escolhida for "Peso", então esconda as opções de unidades de origem e destino de comprimento e temperatura
    origemPeso.style.display = "flex";
    origemCompr.style.display = "none";
    origemTemp.style.display = "none";
    destinoPeso.style.display = "flex";
    destinoCompr.style.display = "none";
    destinoTemp.style.display = "none";
  }else if (selecioneCategoria.value == "Temperatura") {
    // se a categoria escolhida for "Temperatura", então esconda as opções de unidades de origem  e e destino de comprimento e peso
    origemTemp.style.display = "flex";
    origemCompr.style.display = "none";
    origemPeso.style.display = "none";
    destinoTemp.style.display = "flex";
    destinoCompr.style.display = "none";
    destinoPeso.style.display = "none";
}};
// objetos--------------------//
var comprimento={
    //"nome":"isa"  // atributo 
     opcao1:"Metros",
     opcao2:"Centímetros",
     opcao3:"Polegadas",
     origem: origemCompr,
     destino: destinoCompr,
    //comer:function(){} //metodo
     opcao1opcao2:function(value){
         return value*100;
     },
     opcao1opcao3:function(value){
         return value*39,37;
     },
     opcao2opcao1:function(value){
         return value/100;
     },
     opcao2opcao3:function(value){
         return value/2,54;
     },
     opcao3opcao1:function(value){
         return value/39,37;
     },
     opcao3opcao2:function(value){
         return value*2,54;
     }
     };

var peso={
     opcao1:"Gramas",
     opcao2:"Quilogramas",
     opcao3:"Libras",
     origem: origemPeso,
     destino: destinoPeso,
     opcao1opcao2:function(value){
         return value/1000;
     },
     opcao1opcao3:function(value){
         return value/453,59;
     },
     opcao2opcao1:function(value){
         return value*1000;
     },
     opcao2opcao3:function(value){
         return value*2,20;
     },
     opcao3opcao1:function(value){
         return value*453,59;
     },
     opcao3opcao2:function(value){
         return value*2,20;
     }
     };

var temperatura={
     opcao1:"Celsius",
     opcao2:"Fahrenheit",
     opcao3:"Kelvin",
     origem: origemTemp,
     destino: destinoTemp,
     opcao1opcao2:function(value){
         return (value * 9 / 5) + 32;
     },
     opcao1opcao3:function(value){
         return value + 273.15;
     },
     opcao2opcao1:function(value){
         return (value - 32) * 9 / 5;
     },
     opcao2opcao3:function(value){
         return ((value - 32) * 9 / 5) + 273.15;
     },
     opcao3opcao1:function(value){
         return value - 273.15;
     },
     opcao3opcao2:function(value){
         return ((value - 273.15) * 9 / 5) + 32;
     }
     };
     
     

  //aparece na tela 
  function aparecerNaTela(conversor){
    //declarando a função
      var resultado = document.getElementById("resultado");
      var resultadoFormatado= parseFloat(conversor).toFixed(2);
      resultado.textContent = "O resultado da sua conversão é: " + resultadoFormatado;
      //innerHTML modifica a página no js, nesse caso inserindo o texto e o valor
    }

// funcao para realizar conversao com base nos valores do select/option
    function conversor(objeto,opcao1,opcao2,opcao3,entrada){
        // entrada, chama o valor, + transforma string em number
        var origem=objeto.origem.value 
        var destino=objeto.destino.value
      if (origem==opcao1 && destino ==opcao2){
        aparecerNaTela(objeto.opcao1opcao2(entrada))
      }else if (origem==opcao1 && destino ==opcao3){
        aparecerNaTela(objeto.opcao1opcao3(entrada))
      }else if (origem==opcao2 && destino ==opcao1){
        aparecerNaTela(objeto.opcao2opcao1(entrada))
      }else if (origem=opcao2 && destino ==opcao3){
        aparecerNaTela(objeto.opcao2opcao3(entrada))
      }else if (origem==opcao3 && destino ==opcao1){
        aparecerNaTela(objeto.opcao3opcao1(entrada))
      }else if (origem==opcao3 && destino ==opcao2){
        aparecerNaTela(objeto.opcao3opcao2(entrada))
      }return 
      };

    function verificarCategoria(categoria,entrada){
    if (categoria=="Comprimento"){
        conversor(comprimento,comprimento.opcao1,comprimento.opcao2,comprimento.opcao3,entrada);
    }else if (categoria=="Peso"){
        conversor(peso,peso.opcao1,peso.opcao2,peso.opcao3,entrada);
    }else if (categoria=="Temperatura"){
            conversor(temperatura,temperatura.opcao1,temperatura.opcao2,temperatura.opcao3,entrada);
        }
    }

      clicar.addEventListener('click', function(event){
        // Obtem o valor do campo de entrada
        event.preventDefault()
        //preventDefault previne q ele atualize a página
        var entrada = Number(document.getElementById("entrada").value)
        if (entrada==null){
          alert("Digite um valor para converter")
        };
        // Limpa o texto do campo de entrada (substitui por string vazia)
        document.getElementById("entrada").value = "";
        // Faz algo com a informação guardada
        verificarCategoria(selecioneCategoria.value,entrada)
      
      }); 

