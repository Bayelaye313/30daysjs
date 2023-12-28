//variables

const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const accordion = document.querySelectorAll(".accordion-item");

accordion.forEach(item => {
    item.addEventListener('click', function(){
        this.classList.toggle('active')
    })
})
