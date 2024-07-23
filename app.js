import { $ } from './utils.js'

let attempts = 1
const sortedNumbers = []
const limit = 10

const genRandomNum = () => {
  sortedNumbers.length === limit && sortedNumbers.splice(0, limit)
  const n = Math.ceil(Math.random() * limit)
  console.log(n, sortedNumbers)

  if (sortedNumbers.includes(n)) {
    return genRandomNum()
  } else {
    sortedNumbers.push(n)
    return n
  }
}
let randomNum = genRandomNum(limit)

const changeText = (selector, text) => {
  const el = $(selector)
  el.textContent = text
}

const cleanInput = (input) => ($(input).value = '')

changeText('h1', 'Juego del número secreto')
changeText('.texto__parrafo', 'Escribe un número del 1 al 10')

const text = $('.texto__parrafo')
const tryButton = $('.try')
const resetButton = $('.reset')

tryButton.onclick = () => {
  console.log(randomNum)
  const number = parseInt($('input').value)
  if (!number) {
    text.textContent = '¡Ingresa un número!'
  } else if (randomNum === number) {
    text.textContent = `Acertaste 🎉, el número es ${randomNum}. Número de intentos: ${attempts}`
    tryButton.setAttribute('disabled', '')
    resetButton.removeAttribute('disabled')
  } else {
    attempts++
    number > randomNum
      ? (text.textContent = 'El número secreto es menor')
      : (text.textContent = 'El número secreto es mayor')
    cleanInput('input')
  }
}

resetButton.onclick = () => {
  attempts = 1
  randomNum = genRandomNum(limit)
  resetButton.setAttribute('disabled', '')
  tryButton.removeAttribute('disabled')
  changeText('.texto__parrafo', 'Escribe un número del 1 al 10')
  cleanInput('input')
}
