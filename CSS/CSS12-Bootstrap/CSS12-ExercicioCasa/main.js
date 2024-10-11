// Seleciona todas as linhas da tabela
const rows = document.querySelectorAll('tbody tr');

rows.forEach(row => {
  const quantidade = parseFloat(row.querySelector('td:nth-child(4)').textContent);
  const valorUnitario = parseFloat(row.querySelector('td:nth-child(5)').textContent.replace('R$ ', '')); // Remove R$ para converter

  if (!isNaN(quantidade) && !isNaN(valorUnitario)) {
    const valorLote = quantidade * valorUnitario;
    row.querySelector('td:nth-child(6)').textContent = `R$ ${valorLote.toFixed(2)}`;
  }
});