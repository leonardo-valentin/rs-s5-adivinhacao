// variables
let randomNumber = Math.round(Math.random()*10)
let xAttempts = 1
const buttonTry = document.querySelector('.btn button')
const buttonReset = document.querySelector('.screen2 button')
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


// events
buttonTry.addEventListener('click', handleClick)
buttonReset.addEventListener('click', handleReset)
document.addEventListener('keypress', enterReset)

//functions
function handleClick(e) {
    e.preventDefault()
    let input = document.querySelector("input")
    let tryValue = Number(input.value)

    if (tryValue == "") {
        alert("Por favor, você precisa digitar um número")
    }
    else if (tryValue < 0 || tryValue >10){
        alert("Deve ser digitado um número entre 0 e 10")
        input.value = ""
    }
    else {      
        if (tryValue === randomNumber) {
            attemptsText = `Acertou em ${xAttempts} tentativas!`
            screen2.querySelector("h2").innerText = attemptsText
            changeScreen()
        } else if (tryValue !== randomNumber) {
            missAtempt(input)
        } 
        
        input.value = ""
        xAttempts++
    }
}

function handleReset() {
    changeScreen()
    refresh()
}

function enterReset(e) {
    if (e.key == "Enter" && screen1.classList.contains('hide')) {
        changeScreen()
        refresh()
    }
}

function changeScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function missAtempt(input) {
    input.style.animation = "2.5s wrongAwnserInput"
    buttonTry.style.animation = "2.5s wrongAwnserButton"
    setTimeout(function(){
        input.style.animation = ""
        buttonTry.style.animation = ""
    },1000);
}

function refresh() {
    return [randomNumber = Math.round(Math.random()*10), xAttempts = 1]
}