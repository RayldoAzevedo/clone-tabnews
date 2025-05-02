//arquivo para teste de java script
// Teste de foreach

const aprovados = [
    'Ana',
    'Bia',
    'Carlos',
    `Raquel`]


console.log(`Passando apenas um parametro`)
aprovados.forEach(function (nome) {
    console.log(`${nome}: nome`)
})

console.log(`\nPassando dois parametros`) 
aprovados.forEach(function (nome, indice) {
    console.log(`índice: `, indice + 1, ` - `, nome)
})

console.log(`\n Passando três parametros`)
aprovados.forEach(function (nome, indice, array) {
    console.log(`índice:`, indice + 1, ` - `, nome, ` `, array)
})