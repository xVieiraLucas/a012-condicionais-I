// # Exercício 2

// Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não
//  o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

// <details>

// <summary>Exemplo</summary>

// Caso a primeira pessoa tenha idade >=18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>


let idade = Number(prompt('Qual sua idade ?'))
let isEnsinoMedio = confirm('Você terminou o ensino médio ?')
let isCursandoOutraFaculdade = confirm('Você NÃO está cursando uma falcudade ?')

if(idade >= 18){
console.log("A pessoa é maior de idade")
}else{
console.log("A pessoa é menor de idade")	
};

if(isEnsinoMedio === true){
    console.log("Você terminou o ensino médio")
}else{
    console.log("Você não terminou o ensino médio")
};

if(isCursandoOutraFaculdade === false){
    console.log('Está cursando uma faculdade')
}else{
    console.log('Não está cursando uma faculdade')
}