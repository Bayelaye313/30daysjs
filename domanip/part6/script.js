const form = document.querySelector('form');
const inputTask = document.querySelector('.form-control');
const lisTask = document.querySelector('.list-group');
const btngroup  = document.querySelector('.btn-group');
const localStorageKey = 'items'

function createTaskElement(taskText) {
    const newTask = document.createElement('li');
    newTask.className = 'todo list-group-item d-flex align-items-center';

    const inputCheck = document.createElement('input');
    inputCheck.type = 'checkbox';
    inputCheck.className = 'form-check-input';

    const checkLabel = document.createElement('label');
    checkLabel.className = 'ms-2 form-check-label';
    checkLabel.textContent = taskText;

    const checkLabel2 = document.createElement('label');
    checkLabel2.className = 'ms-auto btn btn-danger btn-sm';

    const trashIcon = document.createElement('i');
    trashIcon.className = 'bi-trash';

    lisTask.appendChild(newTask);
    newTask.appendChild(inputCheck);
    newTask.appendChild(checkLabel);
    newTask.appendChild(checkLabel2);
    checkLabel2.appendChild(trashIcon);

    improveUi();
}

function addToDom(e) {
    e.preventDefault();
    const inputValue = inputTask.value.trim();

    if (inputValue !== '') {
        createTaskElement(inputValue);
        addToLocalStorage(inputValue);
        inputTask.value = ''; // Clear the input value after adding a task
    }
}
function addToLocalStorage(newtask){
    let newItem = fromlocalstrg();
    newItem.push(newtask)
    localStorage.setItem('items', JSON.stringify(newItem))

}
function fromlocalstrg(){
    try {
            let instrg = JSON.parse(localStorage.getItem(localStorageKey))??[];
            return instrg
        } catch (error) {
            console.log('Erreur on parsing: ', error)
            return [] 
    }
}
function improveUi() {
    const taskList = document.querySelector('.btn-group')
    taskList.style.display = lisTask.children.length > 0 ? 'flex' : 'none';
}
function Onclicktask(e){
    const totrash = e.target.parentElement.classList.contains('btn-danger')
    const task = e.target.parentElement.parentElement;
    if (totrash) {
        removeTask(task) 
    }
}
function removeTask(task){
    if(confirm('are you sure?')){
        task.remove();
        removeItemOnstrg(task.textContent);
        improveUi()
        return;
    }
}
function removeItemOnstrg(task){
    let instrg = fromlocalstrg();
    instrg = instrg.filter(t => t !== task);
    localStorage.setItem('items', JSON.stringify(instrg))
}
function buttonCheck(e) {
    const groupebtn = document.querySelectorAll('.btn-group button');
    groupebtn.forEach(button => {
        button.classList.remove('active');
    });

    this.classList.add('active');
    const filterCategory = this.getAttribute('data-filter');
    //console.log(filterCategory)

    filterTasks(filterCategory)
}

function filterTasks(category) {
    const tasks = lisTask.querySelectorAll('.todo');

    tasks.forEach(task => {
        const isDone = task.querySelector('.form-check-input').checked;

        if (category === 'todo' && !isDone) {
            task.style.display = 'flex';
        } else if (category === 'done' && isDone) {
            task.style.display = 'flex';
        } else if (category === 'all') {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

function init(){
form.addEventListener('submit', addToDom);
lisTask.addEventListener('click', Onclicktask);
btngroup.addEventListener('click', buttonCheck)
improveUi()
}
init();