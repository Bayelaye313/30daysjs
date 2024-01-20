const todos = [];
const SELECTORS =
{
    todosList: '.js-todos-list',
    formAddButton: '.js-btn-add',
    formInput: '.js-form-input',
    formMessage: '.js-alert',
    filterBtnCollection: '.js-filter-btn',
    clearAll: 'clear-btn',
};
const ALERT_MESSAGES =
{
    enterTasks: 'Please enter tasks!',
    deleteTasks: 'are you sure?',
    deleteAll: 'this action will remove All'
};
const todosFragment = document.createDocumentFragment();
const $todosList = document.querySelector(SELECTORS.todosList);
const $formAddButton = document.querySelector(SELECTORS.formAddButton);
const $formInput = document.querySelector(SELECTORS.formInput);
const $formMessage = document.querySelector(SELECTORS.formMessage);
const $FilterBtnCollection = document.querySelectorAll(SELECTORS.filterBtnCollection);
const $clearAll = document.getElementById(SELECTORS.clearAll)

let count = 0;

const setTodoStatus = (e) =>
{
    const searchId = parseInt(e.target.parentNode.parentNode.dataset.id);
    const index = todos.findIndex((task)=> task.id === searchId);
    const currentTask = todos[index]
    currentTask.complete = !currentTask.complete
}
document.addEventListener('DOMContentLoaded', function () {

    if ($clearAll) {
        $clearAll.style.display = 'none';
    }


function createTaskListItemElement(task)
{
    const defineId = `checkbox-${task.id}`;
    return `
        <li data-id="${task.id}">
            <div>
                <input type="checkbox" id="${defineId}" checked="${task.complete ? 'checked' : ''}" onclick="setTodoStatus(event)">
                <label for="${defineId}">${task.text}</label>
            </div>
            <label onclick="removeTask(event)"><i class="bi-trash"></i></label>
        </li>
    `;
}
function resetForm()
{
    $formInput.value = ''; 
}
function removeTask(e)
{
    const task = e.target.parentNode.parentNode;
    const newTask = task.firstChild.textContent
    task.remove()
    removeFromStorage(newTask);
}
function removeFromStorage(task)
{
    let taskInStorage = fromLocalStorage();
    taskInStorage = taskInStorage.filter(taskFiltred => taskFiltred !== task);
    localStorage.setItem('items', JSON.stringify(taskInStorage))
}
function fromLocalStorage()
{
    let getInStorage = JSON.parse(localStorage.getItem('items')) ?? []
    return getInStorage    
}
function AddToStorage(newTask)
{
    let findInStorage = fromLocalStorage();
    findInStorage.push(newTask);
    localStorage.setItem('items', JSON.stringify(findInStorage))   
}
function appendFragmentToList(task, fragment) {
    const lists = createTaskListItemElement(task);
    const newFragment = document.createDocumentFragment();
    newFragment.appendChild(document.createRange().createContextualFragment(lists));
    fragment.appendChild(newFragment);
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
    displayClearBtn();
    $formInput.focus();
}
function removeAllChildNodesFrom($element) {
    while ($element.hasChildNodes()) {
        $element.removeChild($element.lastChild);   
    }
}

function displayClearBtn() {
    const tasks = $todosList.querySelectorAll('li');
    console.log(tasks.length)
    if(tasks.length === 0){
        $clearAll.style.display = 'none'
        console.log('button hidden')
    }else{
        $clearAll.style.display = 'block'
        console.log('button displayed')
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
    displayClearBtn();
});
});
});