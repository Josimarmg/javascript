let num = [5, 8, 2, 9, 3] // Array
console.log(' -- ISSO É UM VETOR!')
console.log(num)
console.log('')

num[3] = 6 // Subistitui um elemento por outro
console.log(' -- SUBSTITUINDO ELEMTENTOS')
console.log(num)
console.log('')

num.push(7) // Adiciona um elemento
console.log(' -- COMPRIMENTO')
console.log(num.length) // Exibe o comprimento do vetor
console.log('')

num.sort() // Ordenação de elementos dentro do vetor
console.log(' -- ORDENAÇÃO CRESCENTE')
console.log(num)
console.log('')

console.log(" -- EXIBE O ELEMENTO NO ÍNDICE ESPECÍFICO ")
console.log(`${num[0]} -- Está no índice 0`) // Exibe o primeiro valor do vetor que está no índice Zero
console.log(`${num[1]} -- Está no índice 1`)
console.log(`${num[2]} -- Está no índece 2`)
console.log(`${num[3]} -- Está no índece 3`)
console.log(`${num[4]} -- Está no índece 4`)
console.log(`${num[5]} -- Está no índece 5`)
console.log('')

let pos = num.indexOf(6) // Verifica se tem um valor específico dentro do vetor
console.log(' -- EXIBINDO O ÍNDICE DE UM VALOR ESPECÍFICO')
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}