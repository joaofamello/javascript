function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imgs/menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imgs/jovemmas.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imgs/adultomas.png')
            } else {
                //idoso
                img.setAttribute('src', 'imgs/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imgs/menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imgs/jovemfem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imgs/adultofem.png')
            } else {
                //idosa
                img.setAttribute('src', 'imgs/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}