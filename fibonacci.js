//Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 

function sequênciaFibonacci(number) {
  let arrayFibonacci = [0, 1];
  while (arrayFibonacci.length <= number) {
    let penultimoNumero = arrayFibonacci[arrayFibonacci.length - 2];
    let ultimoNúmero = arrayFibonacci[arrayFibonacci.length - 1];
    let soma = penultimoNumero + ultimoNúmero;
    arrayFibonacci.push(soma);
  }
  if (arrayFibonacci.includes(number)) {
    console.log(`o número ${number} está na sequência de Fibonacci`);
  } else {
    console.log(`o número ${number} não está na sequência de Fibonacci`);
  }
}

sequênciaFibonacci(34);
// execute o comando node fibonacci.js