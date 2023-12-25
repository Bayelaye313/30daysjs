//dom manip

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
