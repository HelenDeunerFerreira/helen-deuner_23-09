const x = [
  2, 4, 8, 9, 11, 3, 23, 80, 45, 6, 7, 12, 56, 90, 67, 11, 66, 49, 50, 36,
];

const pares = [];

function calcularPares() {
  for (let i = 0; i < x.length; i++) {
    let numeroAtual = x[i];
    let verificacao = numeroAtual % 2;

    if (verificacao == 0) {
      let adicionar = pares.push(numeroAtual);
    }
  }

  let soma = 0;

  for (let x = 0; x < pares.length; x++) {
    numeroAgora = pares[x];
    let paresString = numeroAgora.toString();

    console.log(typeof paresString);
    soma += numeroAgora;

    let qtdNumeros = paresString.length;

    media = soma / qtdNumeros;
  }

  console.log(`A soma dos pares é ${soma}`);
  console.log(`A média da soma é ${media}`);
  console.log(pares);
}

calcularPares();
