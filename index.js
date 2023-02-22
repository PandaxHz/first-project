function conversor(moeda){
    return moeda * 0.00070
}

var moeda = parseFloat(document.getElementById('moeda').innerText)


document.write(conversor(moeda) + " Reais")