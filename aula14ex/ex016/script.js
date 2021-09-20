function contar(){
    var elementoN = document.getElementById('numeros')
    var elementoI = document.getElementById('inicio')
    var elementoF = document.getElementById('fim')
    var elementoP = document.getElementById('passo')

    if(elementoI == 0 || elementoF == 0|| elementoP == 0){
        window.alert('ERRO, FALTAM ALGUMAS INFORMAÇÕES!')
    }else{
       elementoN.innerHTML = 'Contando: '
        var i = Number(elementoI.value)
        var f = Number(elementoF.value)
        var p = Number(elementoP.value)


       for(c = 0; c <= f; c+=p){
            elementoN.innerHTML += `${c} \u{1F449}`
           
        }

    }

  
}