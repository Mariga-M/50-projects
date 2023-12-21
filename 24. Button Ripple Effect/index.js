const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xBtn = x - buttonLeft
        const yBtn = y - buttonTop

       const circle = document.createElement('span')
       circle.classList.add('circle')
       circle.style.top = yBtn + 'px'
       circle.style.left = xBtn + 'px'

       this.appendChild(circle)

       setTimeout(()=> circle.remove(), 800)
    })
})