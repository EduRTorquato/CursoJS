function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var msgDia = window.document.getElementById('mensagem')
    
    

    if(hora >= 0 && hora <= 12)
    {
       msgDia.innerHTML = 'BOM DIA!'
       img.src = 'fotomanha.png'
   
    }else if(hora > 12 && hora <= 19)
    {
        msgDia.innerHTML = 'BOA TARDE!'
        img.src = 'fototarde.png'
    }
    else
    {
        msgDia.innerHTML = 'BOA NOITE! E cuidado'
        img.src = 'fotonoite.png'
    }



    msg.innerHTML = `Agora são ${hora} horas :)`
}