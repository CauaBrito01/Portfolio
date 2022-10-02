function tabuada (){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('erro')
    }
    
    else{
        let n = Number (num.value)
        let c = 1
        tab.innerHTML = '' //reseta a tabela
        while(c <= 10){
            let item = document.createElement('option') //cria um elemento, nesdte caso o option
            item.text = ` ${n} x ${c} = ${n * c}` 
            tab.appendChild(item) // adiciona o item criado
            c++
        }
    }
}