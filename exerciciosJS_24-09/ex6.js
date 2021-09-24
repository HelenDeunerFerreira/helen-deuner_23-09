let valorBase = 10;
const listaNumeros = [];
const listaImpares = [];

function verificaImpar() {
  for (let i = 0; i <= valorBase; i++) {
    let adicionar = listaNumeros.push(i);
    numeroAtual = listaNumeros[i];

    let verificacao = numeroAtual % 2;

    if (verificacao != 0) {
      listaImpares.push(numeroAtual);
    }
  }
}

verificaImpar();

console.log(`Lista dos ímpares: ${listaImpares}`);
