function calculateCube() {
    var input = document.getElementById("numero");
  
    var resultSpan = document.getElementById("resultado");
  
    var numero = parseFloat(input.value);
  
    if (!isNaN(numero)) {
      var cubo = numero ** 3;
  
      resultSpan.textContent = "O cubo de " + numero + " é " + cubo;
    } else {
      resultSpan.textContent = "Por favor, insira um número válido.";
    }
  }