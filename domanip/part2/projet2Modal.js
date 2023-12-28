//variable

const buttonOpen = document.getElementById('open-btn');
const buttonClose = document.getElementById('close-btn');
const modal = document.getElementById('modal-container');

buttonOpen.addEventListener('click', function(){
    modal.style.display = 'block';

});

buttonClose.addEventListener('click', function(){
    modal.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target === modal)
    {
    modal.style.display = 'none';
    }
})