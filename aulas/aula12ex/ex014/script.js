function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var saudacao = window.document.querySelector('div#saudacao')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

   // hora = 22

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if (hora >= 0 && hora < 12 ) {
        // BOM DIA!
        saudacao.innerHTML = 'BOM DIA! &#x1F60A;'
        document.body.style.background = '#F2E088'
        img.src = 'fotomanha.jpg'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        saudacao.innerHTML = 'BOA TARDE! &#x1F60E'
        document.body.style.background = '#F29C50'
        img.src = 'fototarde.jpg'
    } else {
        // BOA NOITE!
        saudacao.innerHTML = 'BOA NOITE! &#x1F971'
        document.body.style.background = '#261E1C'
        img.src = 'fotonoite.jpg'
    }
}