let show = true

const menu = document.querySelector('.menu')
const buttonActive = document.querySelector('button.active')
const buttonReturn = document.querySelector('button.return')

buttonActive.addEventListener('click', () => {
    menu.classList.remove('off')
    menu.classList.add('on')
    show = !show
})

buttonReturn.addEventListener('click', () => {
    menu.classList.remove('on')
    menu.classList.add('off')
    show = !show
})

