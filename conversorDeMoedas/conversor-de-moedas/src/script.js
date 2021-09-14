function Converter() {
  var valorInserido = document.getElementById("valor");
  var valor = valorInserido.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;

  var textoExibido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  textoExibido.innerHTML = valorConvertido;
}
