const monthDays = {
    January: 31, February: 28, March: 31, April: 30, May: 31, June: 30,
    July: 31, August: 31, September: 30, October: 31, November: 30, December: 31
};

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let month = localStorage.getItem('month') || 'January';
let previousRecord = localStorage.getItem('previousRecord') || 0;
let highestRecord = localStorage.getItem('highestRecord') || 0;
let highestRecordMonth = localStorage.getItem('highestRecordMonth') || 'N/A';

document.getElementById('previousRecord').innerText = previousRecord;
document.getElementById('highestRecord').innerText = highestRecord;
document.getElementById('highestRecordMonth').innerText = highestRecordMonth;

function renderTable() {
    document.getElementById('monthName').innerText = `${month} Task Tracker`;
    const dateRow = document.getElementById('dateRow');
    dateRow.innerHTML = '<th class="border border-black px-2 py-1">Task</th>';
    for (let i = 1; i <= monthDays[month]; i++) {
        dateRow.innerHTML += `<th class="border border-black px-2 py-1">${String(i).padStart(2, '0')}</th>`;
    }
    dateRow.innerHTML += '<th class="border border-black px-2 py-1">Total</th>';

    const taskBody = document.getElementById('taskBody');
    taskBody.innerHTML = '';
    tasks.forEach((task, index) => {
        let row = `<tr>
            <td class="border border-black px-2 py-1">${task.name} <i class="fas fa-eraser cursor-pointer ml-2" onclick="removeTask(${index})"></i></td>`;
        for (let i = 1; i <= monthDays[month]; i++) {
            row += `<td class="border border-black px-2 py-1 text-center">
                <input type="checkbox" ${task.days[i - 1] ? 'checked' : ''} onchange="toggleTask(${index}, ${i - 1})">
            </td>`;
        }
        row += `<td class="border border-black px-2 py-1 text-center">${task.days.filter(Boolean).length}</td></tr>`;
        taskBody.innerHTML += row;
    });

    updateTotalTasks();
}

function editMonth() {
    const newMonth = prompt('Enter the month name:');
    if (newMonth && monthDays[newMonth]) {
        // Calculate the total tasks completed in the current month
        const totalTasksCompleted = tasks.reduce((sum, task) => sum + task.days.filter(Boolean).length, 0);
        previousRecord = totalTasksCompleted;
        localStorage.setItem('previousRecord', previousRecord);
        document.getElementById('previousRecord').innerText = previousRecord;

        // Update the month and reset tasks for the new month
        month = newMonth;
        localStorage.setItem('month', month);
        tasks.forEach(task => task.days = Array(monthDays[month]).fill(false));
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTable();
    } else {
        alert('Invalid month name.');
    }
}

function addTask() {
    const taskName = prompt('Enter the task name:');
    if (taskName) {
        tasks.push({ name: taskName, days: Array(monthDays[month]).fill(false) });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTable();
    }
}

function removeTask(index) {
    if (confirm('Are you sure you want to remove this task?')) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTable();
    }
}

function toggleTask(taskIndex, dayIndex) {
    tasks[taskIndex].days[dayIndex] = !tasks[taskIndex].days[dayIndex];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateTotalTasks();
    renderTable();
    updateRecords();
}

function updateRecords() {
    const totalTasks = tasks.reduce((sum, task) => sum + task.days.filter(Boolean).length, 0);
    document.getElementById('previousRecord').innerText = previousRecord;
    if (totalTasks > highestRecord) {
        highestRecord = totalTasks;
        highestRecordMonth = `${month} ${new Date().getFullYear()}`;
        localStorage.setItem('highestRecord', highestRecord);
        localStorage.setItem('highestRecordMonth', highestRecordMonth);
        document.getElementById('highestRecord').innerText = highestRecord;
        document.getElementById('highestRecordMonth').innerText = highestRecordMonth;
    }
}

function updateTotalTasks() {
    const totalTasks = tasks.reduce((sum, task) => sum + task.days.filter(Boolean).length, 0);
    document.getElementById('totalTasks').innerText = totalTasks;
}

renderTable();