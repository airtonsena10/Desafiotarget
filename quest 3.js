//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
//faça um programa, na linguagem que desejar, que calcule e retorne:
 //O menor valor de faturamento ocorrido em um dia do mês;
 //O maior valor de faturamento ocorrido em um dia do mês;
 //Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.


 const month = require("./dados.json");

 var lower = month[0];
 var large = month[0];
 var qtdays = 0;
 var totalamount = 0;
 var counter = 0;
 
 for (index in month) {
   if (month[index].valor != 0) {
     totalamount = totalamount + month[index].valor;
     qtdays++;
   }
 
   if (month[index].valor < lower.valor) {
     lower = moth[index];
   }
   if (moth[index].valor > large.valor) {
     large = moth[index];
   }
 }
 
 var media = totalamount / qtdays;
 
 for (index in moth) {
   if (moth[index].valor > media) {
     counter++;
   }
 }
 console.log(
   `O menor valor de faturamento ocorrido em um dia do mês é: ` + lower.valor
 );
 console.log(
   `O maior valor de faturamento ocorrido em um dia do mês é:` + large.valor
 );
 console.log(
   `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal é: ` +
     counter
 );
 


