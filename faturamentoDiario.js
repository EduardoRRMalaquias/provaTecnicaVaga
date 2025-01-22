// Questão 3: Cálculo do faturamento diário a partir de um arquivo JSON

async function fetchDados(url) {
  const response = await fetch(url);
  const dados = await response.json();
  const faturamento = dados
    .filter((dia) => dia.valor > 0)
    .map((dia) => dia.valor);
  const menorFaturamento = Math.min(...faturamento);
  const maiorFaturamento = Math.max(...faturamento);
  const mediaMensal =
    faturamento.reduce((a, b) => a + b, 0) / faturamento.length;
  const diasAcimaDaMedia = faturamento.filter(
    (valor) => valor > mediaMensal,
  ).length;

  console.log(`Menor faturamento: R$${menorFaturamento.toFixed(2)}`);
  console.log(`Maior faturamento: R$${maiorFaturamento.toFixed(2)}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}
fetchDados('dados.json');
