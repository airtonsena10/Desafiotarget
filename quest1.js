const question1 = (index = 13, sum = 0, k = 0) => {
  // Iteracao que atribui o valor de k ao sum a cada repeticao
  while(k < index) {
    k++;
    sum = sum + k;
    console.log(sum);
  }

  console.log(sum);
}

question1();