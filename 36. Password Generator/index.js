const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    textarea.value = password
    textarea.select()
    if(!password) {
        alert('Nothing to copy. Kindly generate a password')
    } else{
        navigator.clipboard.writeText(password)
        alert('Password copied to clipboard!')
    }
    
    // deprecated
    // --------------------------
    // document.execCommand('copy') 
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol)
})

function generatePassword(length, upper, lower, number, symbol){
    let generatedPassword = ''
    const typesCount = upper + lower + number + symbol
    const typesArr = [
        {upper},{lower}, {number}, {symbol}
    ].filter(item => Object.values(item)[0])

    if(typesCount === 0){
        return ''
    }

    for(let i = 0; i < length; i+= typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97 )
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65 )
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48 )
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
