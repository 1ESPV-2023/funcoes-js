
//Retornando uma lista de HTMML-Objects
// const inputs = document.getElementsByTagName("input");

// //Convertendo a lista de objetos HTML para Array com SPREAD
// const inputs = [...document.getElementsByTagName("input")];

// //Listando os elementos da lista com FOR-EACH
// inputs.forEach((elemento)=>{
//     //Utilizando o elemento que estava na lista.
//     console.log(elemento);
// })

// function soma() {
//     n1 = 10;
//     n2 = 5;
//     console.log(`Resultado da soma : ${n1+n2}`)
// }

function validacao() {
    const inputs = [...document.getElementsByTagName("input")];
    
    inputs.forEach((elemento)=>{

            if(elemento.innerText == ""){
                alert("PREENCHA TODOS OS CAMPOS!")
                return;
            }

    })

}
