//isso vai fazer com  que ele retorne mais de um elemento
//aqui estamos retornando uma lista de HTML-Objects

// const inputs = document.getElementsByTagName("input");

    
//Convertendo a lista de eobjetos HMTL para Array com SPREAD
const inputs = [...document.getElementsByTagName("input")];

//Listanto os elementos da lista com FOR-EACH
inputs.forEach((eLemento)=>{                       //A cada iteração ele vai gerar um elemento
    //Utilizando o elemento que estava na lista
    console.log(eLemento);
}) 
//innerHTML: "" ele recebe HTML, pode simplismente colocar uma tag    innerText: "" ele vai pegar somente texto

function soma(){
    n1 = 10;
    n2 = 5;
    console.log(`Resultado da soma : ${n1+n2}`) //isso é interpolação, 
}