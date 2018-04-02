function place(place_id, value) {
    let html_place = document.getElementById(place_id);
    html_place.innerHTML = value;
}

function setDisasmNavigation() {
    let place = document.getElementById('disasm_nav');
    place.innerHTML = '';
    
    for (let i = 0; i < tasks_data.length; i++) {
        let nav_item = document.createElement('li');
        nav_item.setAttribute('class', 'nav-item');

        let nav_link = document.createElement('a');
        nav_link.setAttribute('class', 'nav-link');
        nav_link.setAttribute('href', '#');
        nav_link.setAttribute('onclick', 'loadTask(' + String(i) + ')');
        nav_link.innerHTML = 'Задача' + ' ' + String(i + 1) + ': ' + tasks_data[i]['title'];
        
        nav_item.appendChild(nav_link);
        place.appendChild(nav_item);
    }
}

function setCurrentTask(task_id) {
    place('task_current', 'Задача' + ' ' + String(task_id + 1));
}

function setTaskTitle(task_id) {
    place('task_title', tasks_data[task_id]['title']);
}

function setTaskSummary(task_id) {
    place('task_summary', tasks_data[task_id]['summary']);
}

function setTaskDescription(task_id) {
    place('task-description', tasks_data[task_id]['description']);
}

function setTaskDownloads(task_id) {
    document.getElementById('task_downloads').setAttribute('href', tasks_data[task_id]['downloads'])
}

function loadTask(task_id) {
    setCurrentTask(task_id);
    setTaskTitle(task_id);
    setTaskSummary(task_id);
    setTaskDownloads(task_id);
}

function initPage() {
    setDisasmNavigation();
    loadTask(0);
}

document.addEventListener("DOMContentLoaded", function(event) {
    initPage();
})
document.ready()