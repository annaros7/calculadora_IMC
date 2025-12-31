var insertPeso = document.querySelector('#peso')
var insertAltura = document.querySelector('#altura')
var res = document.querySelector('#res')
var calculo = document.querySelector('#calcular')

function soma() {

    if (insertAltura.value === "") {
        alert('Insira um valor para a altura')
        return
    }

    if (insertPeso.value === "") {
        alert('Insira um valor para o peso')
        return
    }

    var peso = Number(insertPeso.value)
    var altura = Number(insertAltura.value)

    var result = peso / (altura ** 2)

    if (result <= 18.5) {
        res.innerHTML = '<p>Você está abaixo do peso ideal!</p>'
    } else if (result <= 24.9) {
        res.innerHTML = '<p>Você está no seu peso ideal!</p>'
    } else if (result <= 29.9) {
        res.innerHTML = '<p>Você está levemente acima do peso!</p>'
    } else if (result <= 34.9) {
        res.innerHTML = '<p>Você está com obesidade grau 1!</p>'
    } else if (result <= 39.9) {
        res.innerHTML = '<p>Você está com obesidade grau 2!</p>'
    } else {
        res.innerHTML = '<p>Você está com obesidade grau 3!</p>'
    }

    res.innerHTML += `<p>Seu índice de massa corporal é: ${result.toFixed(2)}</p>`
}

calculo.addEventListener('click', soma)
