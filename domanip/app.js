//dom manip

/* select elem
//getelementbyid

const title = document.getElementById('main-heading');

//getelembyclassname
//const itemlist = document.getElementsByClassName('list-items')

 //getelembytagname
 const itemlist = document.getElementsByTagName('li')

 //queryselector
 const container = document.querySelector('div')
 console.log(container);

 //queryselectorall
 const listitem = document.querySelectorAll('li.list-items')
 listitem.forEach(item => {
    console.log(item.textContent);

 });
 const arrayFromList = Array.from(listitem);
 const arrayothermethod = [...itemlist];
 console.log(arrayothermethod);
 */

/* styling element 

const title = document.querySelector('#main-heading');
title.style.color = 'red';

const listItems = document.querySelectorAll('li.list-items');
listItems.forEach(item => {
    item.style.fontSize = '2rem';
});
*/

/*creating element
const ul = document.querySelector('ul');
const li = document.createElement('li');
//adding element
ul.append(li);

//modifying the text
li.innerText = ('Last Kingdom');

//modifying attribut && classe

li.setAttribute('id', '#main-heading');
li.removeAttribute('id');
console.log(li.getAttribute('id')); //null

li.classList.add('list-items');
li.classList.remove('list-items');
console.log(li.classList.contains('list-items')) // false

//remove element
li.remove();
*/

/* Parent, child Node traversal

let ul = document.querySelector('ul');

console.log(ul.parentNode);
console.log(ul.childNodes);
console.log(ul.firstChild);
//ul.childNodes[1].style.backgroundColor = 'green';
console.log(ul.children);
console.log(ul.firstElementChild);


//sibling node traversal
let ul = document.querySelector('ul');
console.log(ul.previousSibling);
console.log(ul.nextSibling);

const div = document.querySelector('div');
console.log(div.childNodes);
*/

/*EventListener

//element.addEventListener('click', function)

const buttonTwo = document.querySelector('.btn-2');

function btnalert(){
    alert('I love js');
}
buttonTwo.addEventListener('click', btnalert);

//mouseover

const newbgcolor = document.querySelector('.box-3');

function bgchanger(){
    newbgcolor.style.backgroundColor = 'blue'
};

newbgcolor.addEventListener('mouseover', bgchanger);

// event reveal
const revealBtn = document.querySelector('.reveal-btn');
const hiddencontent = document.querySelector('.hidden-content');

function revelator(){
        hiddencontent.classList.toggle('reveal-btn');
}
revealBtn.addEventListener('click', revelator)
*/