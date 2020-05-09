var input = document.getElementById('add-task');
var addButton = document.getElementsByClassName('add-button-image');
addButton = addButton[0];
var toDoList = document.getElementsByClassName('to-do-list');
toDoList = toDoList[0];
var taskText;
var counter = 0;
var li;


/* -- Add a to-do using 'add button' -- */
addButton.addEventListener('click', createTask);

/* -- Add a to-do using Enter key -- */
input.onkeyup = function(e) {
	if (e.key === 'Enter') {
		createTask();
	}
};


function createTask() {
	taskText = input.value;
	if (taskText !== '') {
		createLi();
		createBin();
	}

	input.value = '';
	counter++;
}

function createLi() {
	li = document.createElement('li');
	li.className = 'to-do undone';
	li.id = 'to-do-' + counter;

	createListIcon();
	
	
	var p = document.createElement('p');
	p.textContent = taskText;
	li.appendChild(p);
	toDoList.appendChild(li);
}

function createListIcon() {
	var icon = document.createElement('img');
	icon.src = 'png/empty.png';
	icon.id = 'status-icon';
	li.appendChild(icon);
}


function createBin() {
	var img = document.createElement('img');
	img.src = 'png/bin.png';
	img.className = 'bin';
	img.id = 'bin-' + counter;
	var li = document.getElementById('to-do-' + counter);
	li.appendChild(img);
}



/* -- Removing a to-do -- */
var list = document.getElementsByClassName('to-do-list');
list = list[0];

list.addEventListener('click', function(e) {
	/* -- Removing a to-do element by pressing bin icon --*/
	if (e.target.className === 'bin') {
		var binId = e.target.id;
		var aToDoId = 'to-do-' + binId.slice(4);
		var task = document.getElementById(aToDoId);
		task.parentNode.removeChild(task);
	}

	/* -- Changing task status done-undone -- */
	if (e.target.id === 'status-icon') {
		var icon = e.target;
		var item = icon.parentElement;
		var itemClass = item.className;
		var status = itemClass.split(' ')[1];
		if (status === 'undone') {
			icon.src = 'png/done.png';
			item.className = 'to-do done';
		} else if (status === 'done') {
			icon.src = 'png/empty.png';
			item.className = 'to-do undone';
		}
	}
});
