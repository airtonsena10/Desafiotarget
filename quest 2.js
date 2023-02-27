// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
//sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
//escreva um programa na linguagem que desejar onde, informado um número,
//ele calcule a sequência de Fibonacci e retorne uma mensagem 
//avisando se o número informado pertence ou não a sequência.

function verifyFibonacci (n) {
  if (isFibonacci(n)){
     console.log(`O número ` + n + ` pertence a sequência de Fibonacci`)
     return true
  }else{
     console.log (`O número ` + n + ` não pertence a sequência de Fibonacci`)
     return false
  }   
           
}
function isFibonacci(num, a = 0, b = 1) {
  if(num === 0 || num === 1) {
    return true;
  }

  let Number = a+b;

  if(Number === num) {
    return true;
  }
  else if(nextNumber > num) {
    return false;
  }

 return isFibonacci(num, b, Number);
}
 console.log(verifyFibonacci(5))
