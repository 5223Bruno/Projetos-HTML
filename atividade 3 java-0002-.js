function calcularConsumo() {
    var percursoElement = document.getElementById("percurso");
    var tipoCarroElement = document.getElementById("tipoCarro");
    var arCondicionadoElement = document.getElementById("arCondicionado");
  
    var percurso = parseFloat(percursoElement.value);
    var consumoBase = parseFloat(tipoCarroElement.value);
    var usarArCondicionado = arCondicionadoElement.checked;
  
    if (usarArCondicionado) {
      consumoBase = consumoBase / 1.05; 
    }
  
    var consumoEstimado = percurso / consumoBase;
  
    
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Consumo estimado: " + consumoEstimado.toFixed(2) + " litros";
  }
  