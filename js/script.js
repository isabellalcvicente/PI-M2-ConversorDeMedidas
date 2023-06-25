//var declaradas no js para poder manipular
var origemCompr=document.getElementById('origemCompr');
var origemPeso=document.getElementById('origemPeso');
var origemTemp=document.getElementById('origemTemp');
var destinoCompr=document.getElementById('destinoCompr');
var destinoPeso=document.getElementById('destinoPeso');
var destinoTemp=document.getElementById('destinoTemp');
var clicar = document.getElementById("clickButton");
var selecioneCategoria = document.getElementById("categorias");

//bloco para que ao mudar a opção selecionada, esconda outras opções
selecioneCategoria.onchange = function(){
    //em vez de selecionar direto o elemento id, selecione a variavel
  if (selecioneCategoria.value == "Comprimento"){
    // se a categoria escolhida for "Comprimento", então esconda as opções de unidades de origem e destino de peso e temperatura
    origemCompr.style.display = "flex";
    origemPeso.style.display = "none";
    origemTemp.style.display = "none";
    destinoCompr.style.display = "flex";
    destinoPeso.style.display = "none";
    destinoTemp.style.display = "none"; 
    // document.getElementById('unidadesTemperaturaDestino').style.display = "none";
  }else if (selecioneCategoria.value == "Peso"){
    // se a categoria escolhida for "Peso", então esconda as opções de unidades de origem e destino de comprimento e temperatura
    origemPeso.style.display = "flex";
    origemCompr.style.display = "none";
    origemTemp.style.display = "none";
    destinoPeso.style.display = "flex";
    destinoCompr.style.display = "none";
    destinoTemp.style.display = "none";
  }else if (selecioneCategoria.value == "Temperatura"){
    // se a categoria escolhida for "Temperatura", então esconda as opções de unidades de origem  e e destino de comprimento e peso
    origemTemp.style.display = "flex";
    origemCompr.style.display = "none";
    origemPeso.style.display = "none";
    destinoTemp.style.display = "flex";
    destinoCompr.style.display = "none";
    destinoPeso.style.display = "none";
}};
// objeto comprimento//
var comprimento={
    //"nome":"isa"  // atributo 
     opcao1:"Metros",
     //declarando o atributo opcao1 como value o text do select
     opcao2:"Centímetros",
     opcao3:"Polegadas",
     origem: origemCompr,
     destino: destinoCompr,
    //comer:function(){} //metodo
     opcao1opcao2:function(value){
         return value*100;
     },
     //metodo para retornar o valor já convertido
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
//objeto peso//
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
//objeto temperatura// 
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
     

  //aparece na tela //
  function aparecerNaTela(conversor){
    //declarando a função aparecer na tela, com parâmentro a funcao conversor
      var resultado = document.getElementById("resultado");
      //declarando a variavel resultado dentro da funcao (não é global, só existe aqui)
      var resultadoFormatado= parseFloat(conversor).toFixed(2);
      //parseFloat é pra transformar em número e que seja quebrado// toFixed() é para permitir até quantas casas decimais, tendo como parametro o numero de casas
      resultado.textContent = "O resultado da sua conversão é: " + resultadoFormatado;
      //textContent só modifica o texto do html 
    };

// funcao para realizar conversao com base nos valores do select/option
    function conversor(objeto,entrada){
        // objeto com seus atriburos//entrada, chama o valor do input
        var origem=objeto.origem.value;
        // declarando var e puxando o valor dela pelo objeto
        var destino=objeto.destino.value;
        var opcao1= objeto.opcao1;
        var opcao2= objeto.opcao2;
        var opcao3= objeto.opcao3;
      if (origem==opcao1 && destino ==opcao2){
          //se o valor da variavel origem (que está selecionada a partir do valor de origem dentro do objeto) for igual à opcao1 que tb esta no objeto, então:
        aparecerNaTela(objeto.opcao1opcao2(entrada));
        //chame a funcao aparecerNaTela, dentro do objeto o método opcao1opcao2 e passe como parametro/valor a entrada
      }else if (origem==opcao1 && destino ==opcao3){
        aparecerNaTela(objeto.opcao1opcao3(entrada));
      }else if (origem==opcao2 && destino ==opcao1){
        aparecerNaTela(objeto.opcao2opcao1(entrada));
      }else if (origem=opcao2 && destino ==opcao3){
        aparecerNaTela(objeto.opcao2opcao3(entrada));
      }else if (origem==opcao3 && destino ==opcao1){
        aparecerNaTela(objeto.opcao3opcao1(entrada));
      }else if (origem==opcao3 && destino ==opcao2){
        aparecerNaTela(objeto.opcao3opcao2(entrada));
      }return 
      };

      //verifica qual categoria
    function verificarCategoria(categoria,entrada){
        //parametros do que vai entrar na funcao
    if (categoria=="Comprimento"){
        //se a categoria selecionada for o comprimento, faça:
        conversor(comprimento,entrada);
        //chame a funcao conversor e passe como parametros a o objeto comprimento e a entrada onde tem o valor do user
    }else if (categoria=="Peso"){
        conversor(peso,entrada);
    }else if (categoria=="Temperatura"){
            conversor(temperatura,entrada);
        }
    };

      clicar.addEventListener('click', function(event){
        //adiciona um evento de clique, e uma funcao anonima com parametro de evento que só vai funcionar aqui
        event.preventDefault();
        //preventDefault previne q ele atualize a página
        var entrada = Number(document.getElementById("entrada").value)
        //entrada garante que recebe um numero, selecionando o valor do input html que o user digitou
        if (entrada==null){
        //se o user nao digitar nada, de um alert para ele digitar
          alert("Digite um valor para converter")
        };
        document.getElementById("entrada").value = "";
        // Limpa o texto do campo de entrada (substitui por string vazia)
        verificarCategoria(selecioneCategoria.value,entrada)
        // Faz algo com a informação guardada
      
      }); 

