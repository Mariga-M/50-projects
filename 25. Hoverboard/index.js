const container = document.getElementById('container')
const colors = ['#EA8587', '#CDFEE6', '#DDB93B', '#FAE5E5', '#7A1516', '#C3A022',
'#78D432']

const SQUARES = 500

for(let i = 0; i< SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()

    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10 ${color} `
}

function removeColor(element) {
    element.style.background = '#3F4237'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}