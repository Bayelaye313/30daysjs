//variables

const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(items => {
    items.addEventListener('click', function(){
        this.classList.toggle('active');
    })
})