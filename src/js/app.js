import {cardType} from "./components/cardType";
import {checkInputValidation} from "./components/luhnCheck";
import {View} from "./components/view";
const root = document.getElementById('root')
const view = new View(root)
const button  = document.querySelector('.button')
const input = document.querySelector('.input')

button.addEventListener('click', () => {
  checkInputValidation(view.inputValue, input)
})
input.addEventListener('input', () => {
  view.changeCardType(cardType(view.inputValue))
})

