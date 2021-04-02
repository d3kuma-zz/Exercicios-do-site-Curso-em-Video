function calcular() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('[ERRO!] Digite um número válido para calcular a tabuada.')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c += 1) {
            // Criar um item na sua caixa de seleção
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            // Adicionar o texto da variável item na sua caixa de seleção
            tab.appendChild(item)
        }
    }
}

// Limpar caixa de seleção de tabuada e deixar com o texto inicial
function limpar(){
    var tab = document.getElementById('seltab')
    tab.innerHTML = ''
    let item = document.createElement('option')
    item.text = `Digite um número acima`
    tab.appendChild(item)
}