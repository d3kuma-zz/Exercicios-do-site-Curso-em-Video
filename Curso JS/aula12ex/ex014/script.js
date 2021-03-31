function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var saudacao = document.getElementById('saudacao')
    var data = new Date()
    // Método que pega a hora do sistema
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>=0 && hora < 12){
        img.src = 'manha.png'
        saudacao.innerHTML = ` Bom dia!`
        document.body.style.background = '#C2B187'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        saudacao.innerHTML = ` Boa tarde!`
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'noite.png'
        saudacao.innerHTML = ` Boa noite!`
        document.body.style.background = '#515154'
    }
}
