document.addEventListener("DOMContentLoaded", init);

function init() {
	var inputElement = document.getElementById("taskInput"); 
	var addTaskButton = document.getElementById("addTaskButton"); 
	var list = document.getElementById("taskList"); 		
	var removeTasks = document.getElementById("removeFinishedTasksButton"); 
	var counterSpan = document.getElementById("counter"); 
	
	counterSpan.innerText = 0; 			//initial value
	
// function to add new task:
	addTaskButton.addEventListener("click", takeText);

	function takeText(event) { 
		event.preventDefault(); 							// to prevent re-loading
		var taskContent = inputElement.value; 				// task text
		if (taskContent.length < 5 || taskContent > 99) {
			alert("Your task should contain 6 to 99 characters");
// to prevent further writing when the task text is too short:
			inputElement.value = "";
			takeText();
		}

		var newTask = document.createElement("li"); 

		list.appendChild(newTask).classList.add("taskItem"); 

		var newTaskLine = document.createElement("p");
		newTask.appendChild(newTaskLine); 
		newTaskLine.innerText = inputElement.value;

// add two buttons for each task
// DELETE the task 
		var newButtonDelete = document.createElement("button");
		newTask.appendChild(newButtonDelete).classList.add("removeTaskButton");
		newButtonDelete.innerText = "Delete";
		newButtonDelete.addEventListener('click', remove);
		function remove(event) {
			newTask.parentElement.removeChild(newTask);
		}

// COMPLETE the task
		var newButtonComplete = document.createElement("button");
		newTask.appendChild(newButtonComplete).classList.add("setCompleteButton");
		newButtonComplete.innerText = "Complete";
		
		inputElement.value = ""; 

// completed task in red
		newButtonComplete.addEventListener("click", makeTaskContentRed);
		function makeTaskContentRed(event) {
			event.preventDefault();
			newTask.classList.toggle("taskItem");
			newTask.classList.toggle("done");
			if (newTask.classList.contains("done")) {
				newButtonComplete.innerText = "Restore";
			}
			else {
				newButtonComplete.innerText = "Complete";
			}

		/* task counter on the site */
			var taskNumber = document.querySelectorAll("li.taskItem"); 
			console.log(taskNumber.length); 
			counterSpan.innerText = taskNumber.length;
		} 

		var taskNumber = document.querySelectorAll("li.taskItem"); 
			console.log(taskNumber.length); 
			counterSpan.innerText = taskNumber.length;
	} 
	
// aby usuwać zadania wykonane (z czerwonym tekstem), ustawiamy na guzik 'Remove finished tasks' 
// nasłuch i uruchamiamy funkcję
		removeTasks.addEventListener("click", removeAllDone);
		function removeAllDone(event) {
			var toDelete = document.querySelectorAll("li.done"); // do usunięcia elementy 'li'
			for (var i = 0; i < toDelete.length; i++) {
				toDelete[i].parentElement.removeChild(toDelete[i]);
			}
		}
/* tu tez można zmniejszać licznik liczby zadań do wykonania */

}











