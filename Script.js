
let num = document.querySelector(`input#fnum`)//Definindo a variável num
let lista = document.querySelector (`select#flista`)//Definido a variável
let res = document.querySelector (`div#res`)//Definido a variavél res
let valores = []//defindo valores com vetor

function isNumero(n) {//definido a faixa de numeração de 1 a 100
    if(Number(n) >= 1 && Number(n) <= 1000000) {//se n for maior ou igual 1 e n for menor ou igual a 1000
        return true
    }else{
        return false
    }
}

function inLista(n, l) {//definido se o numero for inexistente
    if (l.indexOf (Number(n)) != -1) {// se l
        return true
    }else {
        return false
    }
}


function adicionar() {
if (isNumero(num.value) && !inLista(num.value, valores)) {//se for realmente um numero; e ; não estiver na lista
            valores.push(Number(num.value))//adicionando ao vetor o valor digitado
            let item = document.createElement(`option`)
            item.text = `Valor ${num.value} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ``
        }else {
    window.alert(`Valor inválido já encontrado na lista.`)
    }
    num.value = ``// limpando o numero digitado
    num.focus()// voltando com o curso na caixa de numeros
}

function finalizar() {
if (valores.length == 0 ) {
    window.alert(`Adicione valores antes de finalizar!`)
} else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {// laço de percurso
        soma += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ``
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
    res.innerHTML += `<p>A média de valores é ${media}.</p>`
}
}