let num = document.getElementById('txtnum')
let lista = document.getElementById('txtsel')
let res = document.getElementById('txtres')
let vet = []

// Função que verifica se o número entre 1 e 100
function isnumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

// Função que verifica se o número digitado já está na lista
function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    // Aqui a validação é feita pelas duas funções acima
    if(isnumero(num.value) && !inlista(num.value, vet)){
        // Comando que adiciona 1 item na lista
        vet.push(Number(num.value))
        // Criar um elemento pelo script de tag option
        let item = document.createElement('option')
        // Para escrever no select, deve-se usar .text inves de .innertext
        item.text = `Valor ${num.value} adicionado.`
        // Para pegar o texto e colocar no select, deve-se usar appendchild
        lista.appendChild(item)
        // Limpar a mensagem abaixo do botão finalizar caso queira adicionar mais itens na lista
        res.innerHTML = ''
    }else if (inlista(num.value, vet)){
        // Erro na função inlista
        alert('ERRO!  JÁ INCLUSO NA LISTA.')
    }else{
        // Erro na função isnumero
        alert('ERRO! VALOR FORA DO INTERVALO. DIGITE DE 1 A 100.')
    }
    // Limpar campo de digitar número
    num.value = ''
    // Chamar o foco para o campo de digitar número, como se tivesse clicado em cima dele
    num.focus()
}

function finalizar(){
    // If para saber se há aglum valor na lista
    if (vet.length == 0){
        alert('ERRO! ADICIONE VALORES ANTES DE FINALIZAR.')
    }else{
        let tot = vet.length
        // Maior e menor ficam por padrão o valor da 1ª posição
        let maior = vet[0]
        let menor = vet[0]
        let soma = 0
        let media = 0
        // FOR que varre toda a lista
        for (let pos in vet){
            // Somatório a cada valor digitado na lista
            soma += vet[pos]
            if (vet[pos] > maior)
                maior = vet[pos]
            if (vet[pos] < menor)
                menor = vet[pos]
        }
        // Média fica fora do FOR para calcular o valor do somaório/total
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>Soma: ${soma}</p>`
        res.innerHTML += `<p>Média: ${media}</p>`
    }
}