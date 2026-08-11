// utils/formatCurrency.js
export const formatValue = (value, showSymbol = false) => {
  if (typeof value !== 'number') return '0,00';
  
  if (showSymbol) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  // Se showSymbol for false, usa o formato decimal puro
  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
