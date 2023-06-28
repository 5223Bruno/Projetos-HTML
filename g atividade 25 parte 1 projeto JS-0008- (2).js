function converterTexto() {
    var texto = document.getElementById("caixaTexto").value;
  
    var textoMaiusculo = texto.toUpperCase();
  
    var contador = texto.length;
  
    var spanContador = document.getElementById("contador");
    spanContador.textContent = contador;
  
    document.getElementById("caixaTexto").value = textoMaiusculo;
  }
  
  