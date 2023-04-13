
//Retornando uma lista de HTML-objects
//const inputs = document.getElementsByTagName("input");

//Convertendo a list de objects HTML para Array com SPREAD
const inputs = [...document.getElementsByTagName("input")];

//Listando os elementos dA lista com FOR-EACH
inputs.forEach((elemento)=>{
   //Utilizando o elemento que estava na lista
console.log(elemento);
})

function soma() {
    n1 = 10;
    n2 = 5;
console.log('Resultado da soma : ${n1+n2}')
}

function validacao() {
const insputs = [...document.getElementsByTagName("input")];

inputs.forEach((elemento)=>{

    if(elemento.innerText == ""){
        alert("PREENCHA TODOS OS CAMPOS!")
        return;
    }
})