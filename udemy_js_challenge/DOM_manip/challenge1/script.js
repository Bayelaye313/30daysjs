//create insert beforefunction

//create Insert After

/*function insertAfter(insertion, sible){
    sible.parentElement.insertBefore(insertion, sible.nextSibling)

}
    const itemBefore = document.createElement('li');
    itemBefore.innerText = 'insert item before';

    const third = document.querySelector('li:first-child');

    insertAfter(itemBefore, third);
*/
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