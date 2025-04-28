function soma(a, b){
    return a + b
}

function subtracao(a, b){
    return a - b
}   
function multiplicacao(a, b){
    return a * b
}
function divisao(a, b){
    return a / b
}
function potencia(a, b){
    return a ** b
}
function raiz(a){
    return a ** (1/2)
}
function fatorial(a){
    let resultado = 1
    for(let i = 1; i <= a; i++){
        resultado *= i
    }
    return resultado
}
function media(a, b){
    return (a + b) / 2
}
function mediaPonderada(a, b, c){
    return (a + b + c) / 3
}

export {soma, subtracao, multiplicacao, divisao, potencia, raiz, fatorial, media, mediaPonderada}