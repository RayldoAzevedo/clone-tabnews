import {soma, subtracao, multiplicacao, divisao, potencia, raiz, fatorial, media} from '../src/operacoes.js'

function Home(){

    return(
        <div>
            <h2>Calculadora</h2>

            <p>informe os dois valoes "A" e "B"</p>
            <input type="number" id="a" placeholder="Valor A"/>
            <input type="number" id="b" placeholder="Valor B"/> 
            <br/>  <br/>

            {/*botão soma*/}
            <button onClick={() => {
                const a = parseFloat(document.getElementById('a').value)
                const b = parseFloat(document.getElementById('b').value)
                const resultado = soma(a, b)
                alert(`A soma de ${a} + ${b} = ${resultado}`)
            }
            }>Soma</button> <br/>

            {/*botão subtração*/}
            <button onClick={() => {
                const a = parseFloat(document.getElementById('a').value)
                const b = parseFloat(document.getElementById('b').value)
                const resultado = subtracao(a, b)
                alert(`A subtração de ${a} - ${b} = ${resultado}`)
            }
            }>Subtração</button> <br/>

            {/*botão multiplicação*/}
            <button onClick={() => {
                const a = parseFloat(document.getElementById('a').value)
                const b = parseFloat(document.getElementById('b').value)
                const resultado = multiplicacao(a, b)
                alert(`A multiplicação de ${a} * ${b} = ${resultado}`)
            }
            }>Multiplicação</button> <br/>

            {/*botão divisão*/}
            <button onClick={() => {
                const a = parseFloat(document.getElementById('a').value)
                const b = parseFloat(document.getElementById('b').value)
                const resultado = divisao(a, b)
                alert(`A divisão de ${a} / ${b} = ${resultado}`)
            }
            }>Divisão</button> <br/>

            {/*botão potencia*/}
            <button onClick={() => {
                const a = parseFloat(document.getElementById('a').value)
                const b = parseFloat(document.getElementById('b').value)
                const resultado = potencia(a, b)
                alert(`A potencia de ${a} ** ${b} = ${resultado}`)
            }
            }>Potência</button> <br/>

            {/*botão raiz*/}
            <button onClick={() => {
                const a = parseFloat(document.getElementById('a').value)
                const resultado = raiz(a)
                alert(`A raiz de ${a} = ${resultado}`)
            }
            }>Raiz</button> <br/>

            {/*botão fatorial*/}
            <button onClick={() => {
                const a = parseFloat(document.getElementById('a').value)
                const resultado = fatorial(a)
                alert(`O fatorial de ${a} = ${resultado}`)
            }
            }>Fatorial</button> <br/>

            {/*botão média*/}
            <button onClick={() => {
                const a = parseFloat(document.getElementById('a').value)
                const b = parseFloat(document.getElementById('b').value)
                const resultado = media(a, b)
                alert(`A média de ${a} e ${b} = ${resultado}`)
            }
            }>Média</button> <br/>     

        </div>
    )

}


export default Home