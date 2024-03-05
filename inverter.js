
// Escreva um programa que inverta os caracteres de um string. IMPORTANTE:
//  a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
// b) Evite usar funções prontas, como, por exemplo, reverse; NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU.

function inverterStrings(string) {
  let stringDividida = string.split("");
  let stringInvertida = ""
  for (let i = stringDividida.length - 1; i > -1; --i) {
    stringInvertida += stringDividida[i];
  }
  console.log(stringInvertida);
}

inverterStrings("Luiz Fábio");
// execute o comando node inverter.js