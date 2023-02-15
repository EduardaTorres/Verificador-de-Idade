function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança_h1.webp')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_h1.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto1.webp')
            } else {
                img.setAttribute('src', 'velho1.webp')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança1.webp' )
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_m1.webp')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta1.jpg')
            } else {
                img.setAttribute('src', 'velha1.jpg')
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}