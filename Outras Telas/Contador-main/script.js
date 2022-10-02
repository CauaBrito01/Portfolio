function contar (){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    
    var contagem=window.document.getElementById('contagem')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO],verifique os campos e tente novamente')
    }

    else if (inicio.value > fim.value){
        window.alert('[ERRO],verifique os campos e tente novamente')
    }

    else if (passo.value == 0){
        window.alert('[ERRO],passo invalido. Considerando passo = 1')
        passo = 1
    }

    else{
        contagem.innerHTML = "Contando:"

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c =i; c <= f; c += p ){
          contagem.innerHTML += `${c}`
        }
    }
    
}


