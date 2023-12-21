const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

// loveMe.addEventListener('dblclick', (e) => {
//     console.log(123)
// })

// DoubleClick event
let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
   if(clickTime === 0) {
    clickTime= new Date().getTime()
   }else{
    if((new Date().getTime() - clickTime) < 800){
        createHeart(e) 
        clickTime = 0
    }else{
        clickTime= new Date().getTime()
    }
   }
})
 
const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    // get position mouse clicked
    const x = e.clientX
    const y = e.clientY

    
    // get position mouse clicked within the viewport
    const leftOffset = e.target.offsetLeft
    const rightOffset = e.target.offsetTop

    
    // get position mouse clicked within Image
    const xInside = x - leftOffset
    const yInside = y - rightOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}
