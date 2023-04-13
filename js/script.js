function validacao() {
    const inputs = [...document.getElementsByTagName("input")];
    let hasEmptyValue = false;
  
    inputs.forEach((elemento) => {
      if (elemento.value === "") {
        hasEmptyValue = true;
        return;
      }
    });
  
    if (hasEmptyValue) {
      alert("Preencha todos os campos");
      return;
    }
  
    // Aqui você pode colocar o restante do código de validação ou ação que deseja executar
  }
  