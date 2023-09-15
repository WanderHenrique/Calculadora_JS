const operations = [];

function insert(num) {
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;

  // Adiciona a operação ao histórico
  operations.push({
    number1: numero,
    number2: num,
    operation: "+",
    result: eval(numero + num),
  });
}

function clean() {
  document.getElementById('resultado').innerHTML = "";
  operations = [];
}

function back() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);

  // Remove a última operação do histórico
  operations.pop();
}

function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;

  // Se o resultado não for vazio, atualiza o histórico
  if (resultado) {
    operations.push({
      number1: resultado,
      operation: "",
      result: eval(resultado),
    });
  }
}
