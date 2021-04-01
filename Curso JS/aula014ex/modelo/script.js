function contar() {
    var i = document.getElementById('txtini')
    var f = document.getElementById('txtfim')
    var p = document.getElementById('txtpas')
    var res = document.querySelector('div#msg')
    res.innerHTML = `<p>Contando...</p>`
    if (Number(p.value) == 0) {
        alert('[ERRO]: Passo não pode estar vazio.')
    } else {

        for (var c = Number(txtini.value); c <= Number(txtfim.value); c--) {
            res.innerHTML += `&#x1F449; ${c} `
            
        }
        res.innerHTML += `&#x1F6A9;`
    }
}