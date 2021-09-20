var res = document.getElementById('taboada')

function calcular(){
    var num = document.getElementById('numero').value
   

    for(c = 0; c <=10; c++){
        res.innerHTML += `${num} * ${c} = ${num*c}<br>
                     
        <br>`
        
    }

     num.innerHTML = ""
}

function limpaLousa(){
    res.innerHTML = ""
}