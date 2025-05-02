//arquivo para teste de java script
// Teste de foreach

const aprovados = [`Ana', 'Bia', 'Carlos','raquel']
'

Array.prototype.paraCada = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
console.log(`Passando apenas um parametro`)     
aprovados.paraCada(function (nome) {
    console.log(`nome: ${nome}`)
})