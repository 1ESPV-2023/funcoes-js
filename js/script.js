//Retornando uma lista de HTML-Objects
//const inputs = document.getElementsByTagName("input");
//console.log(inputs)

//Convertendo a lista de objetos HTLM em array com SPREAD
const inputs = [...document.getElementsByTagName("input")];

//Listando os elementos com FOR-EACH
// inputs.forEach((elemento)=>{
//     //Utilizando o elemento que estava na lista
//     console.log(elemento);
// })

//Função 
// function soma() {
//     n1 = 10;
//     n2 = 5;
//     console.log(`Resultado da soma: ${n1+n2}`)
// }

function validacao(){
    const inputs = [...document.getElementsByTagName("input")];

    inputs.forEach((elemento)=>{
        if(elemento.innerText ==""){
        alert("PREENCHA TODOS OS CAMPOS!")
        return;
    }
    })
}