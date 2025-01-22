// Questão 5: Inversão de string sem funções prontas
function inverterString(str) {
  let resultado = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

const stringOriginal = prompt('Digite uma string: ');
const stringInvertida = inverterString(stringOriginal);
console.log(`String invertida: ${stringInvertida}`);
