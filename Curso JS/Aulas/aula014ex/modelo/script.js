function contar() {
    // Variáveis que pegam os valores das caixas
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.querySelector('div#msg')

    // Validação se as caixas de texto estão vazias
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar! Faltam dados!'
    } else {
        res.innerHTML = `Contando... <br>`
        // Conversão dos primitivos de texto para inteiro
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        // Validação se o passo não foi inserido valor 0 ou menor
        if (p <= 0){
            alert('PASSO inválido! Configurado para PASSO = 1')
            p = 1
        }
        // FOR em ordem crescente
        if (i < f){
            for (c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        // FOR em ordem decrescente
        else{
            for (c = i; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        // Emoji final. Perceba que funciona tanto com '\u{}' quanto '&#x'
        res.innerHTML += ` &#x1f6A9`
    }
}