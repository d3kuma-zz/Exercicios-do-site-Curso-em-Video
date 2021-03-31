function verificar(){
    var data = new Date()
    // Pegar ano com 4 dígitos
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0){
        window.alert('[ERRO!] Ano de nascimento não pode estar vazio.')
    }else if (fano.value > ano){
        alert('[ERRO!] Ano de nascimento maior que a data atual.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        // Aqui crio um elemento com o nome de img
        var img = document.createElement('img')
        // Associo o elemento com o id da foto. Perceba que é equivalente a criar uma tag img no código html, porém diretamente pelo JS.
        img.setAttribute('id', 'foto')
        // fsex[0] pega o input type radio do meu código html. Como temos dois, sendo o 1º id='mas' e o 2º id='fem', ao testar se está marcado com o '.checked', faço condições com base no sexo
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src','imagens/foto-bebe-m.png')
            }else if (idade < 21){
                img.setAttribute('src','imagens/foto-jovem-m.png')
            }else if (idade < 50){
                img.setAttribute('src','imagens/foto-adulto-m.png')
            }else{
                img.setAttribute('src','imagens/foto-idoso-m.png')
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src','imagens/foto-bebe-f.png')
            }else if (idade < 21){
                img.setAttribute('src','imagens/foto-jovem-f.png')
            }else if (idade < 50){
                img.setAttribute('src','imagens/foto-adulto-f.png')
            }else{
                img.setAttribute('src','imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        // appendchild pega a imagem dos ifs e coloca abaixo da frase
        res.appendChild(img)
    }
} 