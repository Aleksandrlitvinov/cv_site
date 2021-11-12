import {ProgressBar} from "./progressBar.js";

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__list')

const htmlBar = {end: 80}
const cssBar = {end: 80}
const sassBar = {end: 60}
const jsBar = {end: 60}
const nodeBar = {end: 30}
const gitBar = {end: 50}

const bars = [htmlBar, cssBar, sassBar, jsBar, nodeBar, gitBar]

function createProgressBars(arr, selector) {
  arr.forEach((el, idx) => {
    let newBar
    newBar = new ProgressBar({end: el.end})
    idx++
    selector = selector + idx
    newBar.init(selector)
    selector = '.progress-bar'
  })
}

createProgressBars(bars, '.progress-bar')


burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('menu__list--active')
})





