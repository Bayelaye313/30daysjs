const todos = [];
const todosFragment = document.createDocumentFragment();
const $todosList = document.querySelector('.js-todos-list');
const $formAddButton = document.querySelector('.js-btn-add');
const $formInput = document.querySelector('.js-form-input');
const $formMessage = document.querySelector('.js-alert');
const $FilterBtnCollection = document.querySelectorAll('.js-filter-btn');
let count = 0;
function setTodoStatus(e) {
    const searchId = parseInt(e.target.parentNode.parentNode.dataset.id);
    const index = todos.findIndex((task)=> task.id === searchId);
    const currentTask = todos[index]
    currentTask.complete = !currentTask.complete
}

function createListItemNode(task) {
    const lisTask = document.createElement('li');
    lisTask.setAttribute('data-id', task.id)
    const inputTask = document.createElement('input');
    const defineId = `checkbox-${task.id}`
    inputTask.type = 'checkbox'
    inputTask.id = defineId
    inputTask.checked = false;
    inputTask.onclick = setTodoStatus;
    const label1 = document.createElement('label');
    label1.setAttribute('for', defineId)
    label1.textContent = task.text
    const div= document.createElement('div');
    const label2 = document.createElement('label')
    const trashIcon = document.createElement('i');
    trashIcon.className = 'bi-trash'
    trashIcon.onclick = removeTask;

    label2.appendChild(trashIcon);
    div.appendChild(inputTask)
    div.appendChild(label1)
    lisTask.appendChild(div)
    lisTask.appendChild(label2)
    
    return lisTask;
}

function resetForm() {
    $formInput.value = ''; 
}
function removeTask(e) {
    const task = e.target.parentNode.parentNode
    task.remove()   
}
function fromLocalStorage() {
    let getInStorage = JSON.parse(localStorage.getItem('items')) ?? []
    return getInStorage    
}
function AddToStorage(newTask) {
    let findInStorage = fromLocalStorage();
    findInStorage.push(newTask);
    localStorage.setItem('items', JSON.stringify(findInStorage))
    
}

function appendFragmentToList(task, fragment) {
    const lists = createListItemNode(task);
    fragment.appendChild(lists);
    $todosList.appendChild(fragment);
}

function addTodo(e) {
    e.preventDefault();
    if($formInput.value === ''){
        alert('please enter tasks!')
        return;
    }
    const task = {
        id: count++,
        text: $formInput.value,
        complete: false
    }
    todos.push(task)
    appendFragmentToList(task, todosFragment)
    AddToStorage(task.text)
    resetForm();
    $formInput.focus();
}

function removeAllChildNodesFrom($element) {
    while ($element.hasChildNodes()) {
        $element.removeChild($element.lastChild);   
    }
}

function filterList(todos, fragment, todoFilter) {
    todos.filter(todoFilter)
    .forEach(taskfiltered=>appendFragmentToList(taskfiltered, fragment))
}

/* Event Listeners */
$formAddButton.addEventListener('click',addTodo);

$FilterBtnCollection.forEach($filterBtn => {
  $filterBtn.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter || 'all'
    removeAllChildNodesFrom($todosList);
    switch (filter) {
        case 'completed':
            filterList(todos, todosFragment, (task)=> task.complete)
            break;
        case 'active':
            filterList(todos, todosFragment, (task)=> !task.complete)
            break;
        default:
            filterList(todos, todosFragment, (task)=> task)
    }
}
)});
/*
const form = document.querySelector('form');
const inputTask = document.querySelector('.form-control');
const lisTask = document.querySelector('.list-group');
const btngroup = document.querySelector('.btn-group');
const localStorageKey = 'items';


function createTaskElement(taskText) {
    const newTask = document.createElement('li');
    newTask.className = 'todo list-group-item d-flex align-items-center';

    const inputCheck = document.createElement('input');
    inputCheck.type = 'checkbox';
    inputCheck.className = 'form-check-input';
    inputCheck.checked = isTaskDone(taskText);

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

function addToLocalStorage(newTask) {
    let items = fromLocalStorage();
    items.push(newTask);
    localStorage.setItem(localStorageKey, JSON.stringify(items));
}

function fromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem(localStorageKey)) ?? [];
    } catch (error) {
        console.error('Error on parsing:', error);
        return [];
    }
}

function improveUi() {
    const taskList = document.querySelector('.btn-group');
    taskList.style.display = lisTask.children.length > 0 ? 'flex' : 'none';
}

function onClickTask(e) {
    const toTrash = e.target.parentElement.classList.contains('btn-danger');
    const task = e.target.parentElement.parentElement;
    if (toTrash) {
        removeTask(task);
    }
}

function removeTask(task) {
    if (confirm('Are you sure?')) {
        task.remove();
        removeItemFromLocalStorage(task.textContent);
        improveUi();
        return;
    }
}

function removeItemFromLocalStorage(task) {
    let items = fromLocalStorage();
    items = items.filter(t => t !== task);
    localStorage.setItem(localStorageKey, JSON.stringify(items));
}

function buttonCheck(event) {
        const filterButtons = document.querySelectorAll('.js-filter-btn');
    
        filterButtons.forEach(btn => {
                // Remove 'active' class from all buttons
                    btn.classList.remove('active');
    });
    if (event.target.classList.contains('js-filter-btn') ) {
        if (event.target.dataset.filter !== 'all') {
            event.target.classList.add('active');
        }
    }
                // Add 'active' class to the clicked button
    
                // Call your filter function here
                // filterTasks(this.getAttribute('data-filter'));
};

    

    /*const filterCategory = this.getAttribute('data-filter');
    filterTasks(filterCategory);

function filterTasks(category) {
    const tasks = lisTask.querySelectorAll('.todo');

    tasks.forEach(task => {
        const isDone = task.querySelector('.form-check-input').checked;

        if ((category === 'todo' && !isDone) || (category === 'done' && isDone)) {
            task.style.display = 'flex';
        } else if (category === 'all') {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

function init() {
    form.addEventListener('submit', addToDom);
    lisTask.addEventListener('click', onClickTask);
    btngroup.addEventListener('click', buttonCheck)
    improveUi();
    //filterTasks('all');
}

init();
*/
