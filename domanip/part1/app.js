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

/*event probagation

window.addEventListener('click', function(){
    console.log('window');
});
document.addEventListener('click', function(){
    console.log('document');
});
document.querySelector('.div-1').addEventListener('click', function(event){
    event.stopPropagation();
    console.log('DIV1');
});
document.querySelector('.div-2').addEventListener('click', function(){
    console.log('DIV2');

});
//preventdefault block page reloading
document.querySelector('.button').addEventListener('click', function(e){
    e.preventDefault();
    console.log(e.target.innerText = 'button clicked!');
});
*/
/*Event Delegation */

document.getElementById('sports').addEventListener('click', function(e)
{
            const target = e.target;
            if(target.matches('LI')) //.matches('li) or .tagName === 'li'
            {
                console.log(target.textContent, 'is clicked!');

                if(target.style.backgroundColor === '')
                {
                    target.style.backgroundColor = 'lightGrey'
                } else{
                    target.style.backgroundColor = ''
                }

            }

});
            //all child herit the event example
            // Creating a new li element
            const sports = document.querySelector('#sports');
            const newSport = document.createElement('li');
            newSport.innerText = 'boxing'
            newSport.setAttribute('id', 'boxing');
            // Appending the new li element to the sports ul
            sports.appendChild(newSport);
