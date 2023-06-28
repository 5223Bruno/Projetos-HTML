function verificarMaiorNumero() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
  
    var maiorNumero;
  
    if (numero1 >= numero2 && numero1 >= numero3) {
      maiorNumero = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
      maiorNumero = numero2;
    } else {
      maiorNumero = numero3;
    }
  
    var resultadoParagrafo = document.getElementById("resultado");
  
    if (!isNaN(maiorNumero)) {
      resultadoParagrafo.textContent = "O maior número é: " + maiorNumero;
    } else {
      resultadoParagrafo.textContent = "Por favor, insira valores válidos em todas as caixas de texto.";
    }
  }
  