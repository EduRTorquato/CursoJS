function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Insira um ano válido')
    }else{
        window.alert('Tudo okay')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.justifyContent = 'center'

        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'baby-boy.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'young-boy.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adult-man.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'elderly-boy.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'baby-girl.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'young-woman.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adult-woman.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'ederly-girl.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}