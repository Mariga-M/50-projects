const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Very Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating') || e.target.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong> Thank you for your feedback ! </strong>
        <br>
        <strong> Feedback: ${selectedRating} </strong> 
        <br>
        <small> We'll user your feeback to improve our customer support.</small>
    `
})

function removeActive(){
    for (let i=0; i<ratings.length; i++){
        ratings[i].classList.remove('active');
    }
}