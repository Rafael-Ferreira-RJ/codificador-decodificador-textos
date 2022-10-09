//Variáveis e Função para aparecer a opção oculta de incrementos para utilizar o Cifra de Cesar.

var opcoes = document.querySelector("select");
var incrementocesar = document.getElementById("opcaocifradecesar");

opcoes.addEventListener("change", function(event){
    // Se o value escolhido for o value "cc"    
    if (event.target.value == "cc") { 
        // a opção para inserir o incremento para a Cifra de César aparecerá
        incrementocesar.style = "display: block";
    }
    // Senão
    else {
        // A opção do incrmento para a Cifra de César não aparecerá         
        incrementocesar.style = "display: none"; 
    }

});

//Variáveis e Função que muda o texto do botão codificar ou decodificar.

var buttoncodificar = document.getElementById('codificar');
var buttondecodificar = document.getElementById('decodificar');
var enviar = document.getElementById('enviar');

buttoncodificar.addEventListener('click', function(){
    enviar.style = "display: block"
    enviar.value = 'Codificar Mensagem!'
})

buttondecodificar.addEventListener('click', function(){
    enviar.style = "display: block"
    enviar.value = 'Decodificar Mensagem!'
})

//Variáveis e Funções para a implantação dos métodos Cifra de César ou Base64.

//Variáveis e funções para implantação do método Base64.

function codificarBase64() {
    var mensagemusuario = document.querySelector('#areadetexto01').value;
    var codificado = btoa(mensagemusuario);
    return codificado
}
function decodificarBase64(){
    var mensagemusuario = document.querySelector('#areadetexto01').value;
    var decodificado = atob(mensagemusuario);
    return decodificado
}

//Variáveis e funções para implantação do método Cifra de César.

var areadetexto01 = document.getElementById('areadetexto01');
var posicoes = document.getElementById('posicoes');
var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

function codificarCCesar(){
    var elementoDaMensagem = areadetexto01.value;
    var mensagemMinuscula = elementoDaMensagem.toLowerCase();
    var transformarNumero = (Number(posicoes.value) % 26);
    var mensagemCodificada = '';
  
    for(var i = 0; i < mensagemMinuscula.length; i++){
        for(var j =0; j < alfabeto.length; j++){
            if(mensagemMinuscula[i] == alfabeto[j]){
            mensagemCodificada += alfabeto [j + transformarNumero]
            break; 
            } 
        else if (mensagemMinuscula[i] == ' '){
           mensagemCodificada += ' ';
           break;
        }
        }    
    }
    return mensagemCodificada
}
  
function decodificarCCesar(){
    var elementoDaMensagem = areadetexto01.value;
    var mensagemMinuscula = elementoDaMensagem.toLowerCase()
    var transformarNumero = (Number(posicoes.value) % 26)
    var mensagemDecodificada = '';
    
    for(var i = 0; i < mensagemMinuscula.length; i++){
        for(var j = alfabeto.length - 1; j >= 0; j--){
            if(mensagemMinuscula[i] == alfabeto[j]){
                mensagemDecodificada += alfabeto [j - transformarNumero]
                break;
            }
            else if (mensagemMinuscula[i] == ' '){
                mensagemDecodificada += ' ';
                break;
            }
        }       
    }
    return mensagemDecodificada
}

//Variáveis e funções para o funcionamento dos métodos Cifra de César ou Base64.

var areadetexto02 = document.getElementById('areadetexto02')

enviar.addEventListener('click', function(e){
    e.preventDefault();
    if(buttoncodificar.checked && opcoes.value === "b64"){
        areadetexto02.innerText = codificarBase64();
    } 
    else if(buttondecodificar.checked && opcoes.value === "b64"){
        areadetexto02.innerText = decodificarBase64();
    }
    else if(buttoncodificar.checked && opcoes.value === "cc"){
        areadetexto02.innerText = codificarCCesar()
    }
    else if(buttondecodificar.checked && opcoes.value === "cc"){
        areadetexto02.innerText = decodificarCCesar()
    } 
    else{
        areadetexto02.innerText = "Por favor, digite novamente."
    }
})