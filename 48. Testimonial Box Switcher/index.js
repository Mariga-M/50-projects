const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'John Doe',
        position: 'Backend Developer',
        photo:'https://randomuser.me/api/portraits/men/20.jpg',
        text: "Working with Caroline has been an absolute pleasure! Her expertise in frontend development is evident in the seamless and visually stunning websites they create. Her commitment to excellence and collaborative spirit makes her an invaluable asset to any project.",
    },
    {
        name: 'Jack Brown ',
        position: 'UI/UX Designer',
        photo:'https://randomuser.me/api/portraits/men/30.jpg',
        text: "Caroline is a frontend wizard! I've had the privilege of witnessing her innovative approach to UI/UX design, consistently delivering sleek and user-friendly interfaces. Her passion for staying on top of the latest industry trends ensures that our projects not only meet but exceed client expectations.",
    },
    {
        name: 'Sharon Black',
        position: 'QA',
        photo:'https://randomuser.me/api/portraits/women/25.jpg',
        text: "I can always count on Caroline to bring creativity and precision to our frontend development tasks. Her attention to detail is unmatched, resulting in websites that not only look amazing but also function flawlessly. Working alongside her is not just productive but also inspiring.",
    },
    {
        name: 'Julie West',
        position: 'Frontend Developer',
        photo:'https://randomuser.me/api/portraits/women/10.jpg',
        text: " As a frontend developer, Caroline stands out for her ability to transform static designs into dynamic and responsive web interfaces. Her dedication to writing clean, efficient code ensures our projects are not only visually impressive but also perform exceptionally well. Caroline is a true asset to our development team.",
    },
]

let idx = 1

function updateTestimonial(){
    const {name, position, photo, text} = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if (idx > testimonials.length - 1){
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)