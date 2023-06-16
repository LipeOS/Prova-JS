function contar(){
    let saida = document.getElementById('saida')
    saida.innerHTML += `<h2>Contando de 1 a 10</h2>`

    let cont = 1
    while (cont <=10){
        saida.innerHTML +=  `${cont} &#x1f449`
        cont ++
    }
    saida.innerHTML += `&#x1f3c1`
}