

// const inputs =[...document.getElementsByTagName("input")];
//     inputs.forEach((elemento)=>{
// console.log(elemento);
//     })

    // function soma(){
    //     n1=10;
    //     n2=5;
    //     console.log(`Resultado da soma: ${n1+n2}`)

    // }
    function validação(){
       const inputs =[...document.getElementsByTagName("input")];
       inputs.forEach((elemento)=>{

            if(elemento.innerText == ""){
                alert("preencha todos os campos")
                return;
            }
        console.log(elemento);
       })
    
    }