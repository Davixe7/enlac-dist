const money = (value) => {
  if (isNaN(value)) return "$0,00";
  return new Intl.NumberFormat("es-CL", {
    // Ajusta el locale según tu país
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};
export {
  money as m
};
