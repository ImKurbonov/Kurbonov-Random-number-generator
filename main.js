const generateBtn = document.getElementById('generate')
const number = document.getElementById('placeholder')
generateBtn.addEventListener('click', generator)

function generator() {
    const minEl = document.getElementById('min')
    const maxEl = document.getElementById('max')
    const min = Number(minEl.value)
    const max = Number(maxEl.value)
    if(minEl.value === '' || maxEl.value === '') {
        alert("Iltimos min va max qiymatlarini kiriting")
        return
    }

    if(min > max) {
        alert("Min maxdan kichik bo'lishi kerak !!!")
    }
    number.textContent = randomGenerateNumber(min, max)
}

function randomGenerateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + max)
}