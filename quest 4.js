
const invoces = [
  { state: "SP", value: 67836.43 },
  { state: "BA", value: 36678.66 },
  { state: "MG", value: 29229.88 },
  { state: "SE", value: 27165.48 },
  { state: "Outros", value: 19849.53 },
];

function totalAmount() {
  let total = 0;

  invoices.forEach((dist) => {
    total += dist.value;
  });

  return total;
}

function Percent() {
  invoices.forEach((dist) => {
    console.log(
      `O percentual de ${dist.state} foi ${Math.round(
        (dist.value / totalAmount()) * 100
      )} %`
    );
  });
}

Percent();
