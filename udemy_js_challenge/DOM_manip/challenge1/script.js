//create insert beforefunction

//create Insert After

/*function insertAfter(insertion, sible){
    sible.parentElement.insertBefore(insertion, sible.nextSibling)

}
    const itemBefore = document.createElement('li');
    itemBefore.innerText = 'insert item before';

    const third = document.querySelector('li:first-child');

    insertAfter(itemBefore, third);

//replace element

function replaceFirstElement(){
    const firstitem = document.querySelector('li:first-child');
    const li = document.createElement('li');
    li.textContent = 'replaced element';

    firstitem.replaceWith(li);
}

function replaceChildHead(){
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');
    const h2 = document.createElement('h2');
    h2.textContent = 'for 2ndh shopping list'
    header.replaceChild(h2, h1)
}

//removing
function removeButton(){
    const btnToRemove = document.querySelector('#clear');
    btnToRemove.remove();
}
function removeFirstItem(){
    const ul = document.querySelector('ul');
    const firstItem = document.querySelector('li:first-child');
    ul.removeChild(firstItem);

}
function removeItem(itemNumber){
    const ul = document.querySelector('ul');
    const items = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(items);
}
removeItem(1);

//form events

const iteminput = document.querySelector('#item-input');
const priorityinput = document.querySelector('#priority-input');
const checkboxinput = document.querySelector('#checkbox');

const header = document.querySelector('h1');

function oninput(e){
    header.textContent = e.target.value
}
function oncheck(e){
    const isChecked = e.target.checked
    header.textContent = isChecked ? 'checked': 'not checked';
}
function onfocus() {
iteminput.style.outlineStyle = 'solid';
iteminput.style.outlineWidth = '2px';
iteminput.style.outlineColor = 'green';

    
}
function onblur() {
    iteminput.style.outlineStyle = 'none';

}

iteminput.addEventListener('input', oninput)
priorityinput.addEventListener('input', oninput)
checkboxinput.addEventListener('change', oncheck)

iteminput.addEventListener('focus', onfocus);
iteminput.addEventListener('blur', onblur)


const submit = document.querySelector('.btn')
const form = document.querySelector('#item-form');

function onsubmit(e) {
    const item = document.querySelector('#item-input').value;
    const priority = document.getElementById('priority-input').value
    e.preventDefault();
    if (item === '' || priority == 0) {
        alert('remplir tt les cages stp')
        return;
    } else {
        console.log(item, priority)

    }
    
}

form.addEventListener('submit', onsubmit);

*/


//starting project

//add item
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

//event listeners
function addItem(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    const inputtext= itemInput.value;
    
    //create buttons
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-item btn-link text-red';
    const icone = document.createElement('i');
    icone.className = 'fa-solid fa-xmark';


    removeButton.appendChild(icone);
    newItem.appendChild(document.createTextNode(inputtext));
    newItem.appendChild(removeButton);

    itemList.appendChild(newItem)
}

itemForm.addEventListener('submit', addItem);

