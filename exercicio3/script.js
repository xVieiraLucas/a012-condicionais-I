// # Exercício 3

// Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// // Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const 
// `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. 
// O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a 
// nenhum dos valores.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 

let nacionalidade = prompt('Qual sua nacionalidade ? (no feminino)').toUpperCase()

if(nacionalidade === 'BRASILEIRA'){
    console.log('Você é brasileiro')
} else if(nacionalidade === 'ARGENTINA'){
    console.log('Você é argentino')
} else if(nacionalidade === 'URUGUAIA'){
    console.log('Você é uruguaia')
} else if(nacionalidade === 'CHILENA'){
    console.log('Você é chileno')
} else if(nacionalidade === 'COLOMBIANA'){
    console.log('Você é colombiana')
} else {
    console.log('NACIONALIDADE NÃO ENCONTRADA')
}



