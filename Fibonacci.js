// Questão 2: Verificar se um número pertence à sequência de Fibonacci
function pertenceFibonacci(numero) {
  let a = 0, b = 1;
  while (b < numero) {
      [a, b] = [b, a + b];
  }
  return b === numero || numero === 0;
}

const numero = parseInt(prompt("Digite um número: "));
if (pertenceFibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}