document.addEventListener("DOMContentLoaded", init);

function init() {
	let inputElement = document.getElementById("taskInput"); 
	let addTaskButton = document.getElementById("addTaskButton"); 
	let list = document.getElementById("taskList"); 		
	let removeTasks = document.getElementById("removeFinishedTasksButton"); 
	let counterSpan = document.getElementById("counter"); 
	
	counterSpan.innerText = 0; 							// initial value of the tasks number
	
// function to add new task:
	addTaskButton.addEventListener("click", takeText);

	function takeText(event) { 
		event.preventDefault(); 							// to prevent re-loading
		let taskContent = inputElement.value; 				
		if (taskContent.length < 5 || taskContent > 99) {
			alert("Your task should contain 5 to 99 characters");
// to prevent further writing when the task text seems to be too short:
			inputElement.value = "";
			takeText();
		}

		let newTask = document.createElement("li"); 

		list.appendChild(newTask).classList.add("taskItem"); 

		let newTaskLine = document.createElement("p");
		newTask.appendChild(newTaskLine); 
		newTaskLine.innerText = inputElement.value;

// add two buttons for each task
// DELETE the task 
		let newButtonDelete = document.createElement("button");
		newTask.appendChild(newButtonDelete).classList.add("removeTaskButton");
		newButtonDelete.innerText = "Delete";
		newButtonDelete.addEventListener("mouseover", hoveredIn);
		function hoveredIn() {
			newButtonDelete.classList.add("removeTaskButtonHovered");
		}
		newButtonDelete.addEventListener("mouseleave", hoveredOut);
		function hoveredOut() {
			newButtonDelete.classList.remove("removeTaskButtonHovered");
		}

		newButtonDelete.addEventListener("click", remove);
		function remove(event) {
			newTask.parentElement.removeChild(newTask);
			let taskNumber = document.querySelectorAll("li.taskItem");  
			counterSpan.innerText = taskNumber.length;
		}

// COMPLETE the task
		let newButtonComplete = document.createElement("button");
		newTask.appendChild(newButtonComplete).classList.add("setCompleteButton");
		newButtonComplete.innerText = "Completed";
		inputElement.value = "";
		newButtonComplete.addEventListener("mouseover", hoverIn);
		function hoverIn() {
			newButtonComplete.classList.add("setCompleteButtonHovered")
		}
		newButtonComplete.addEventListener("mouseleave", hoverOut);
		function hoverOut() {
			newButtonComplete.classList.remove("setCompleteButtonHovered")
		}

	// completed task in grey (and crossed out)
		newButtonComplete.addEventListener("click", makeTaskContentRed);
		function makeTaskContentRed(event) {
			event.preventDefault();
			newTask.classList.toggle("taskItem");
			newTask.classList.toggle("done");
			if (newTask.classList.contains("done")) {
				newButtonComplete.innerText = "Restore";
			}
			else {
				newButtonComplete.innerText = "Completed";
			}

		/* task counter on the site */
			let taskNumber = document.querySelectorAll("li.taskItem");  
			counterSpan.innerText = taskNumber.length;
		} 

		let taskNumber = document.querySelectorAll("li.taskItem");  
		counterSpan.innerText = taskNumber.length;
	} 
	
// 'Remove finished tasks' function for removing all tasks marked as completed
		removeTasks.addEventListener("click", removeAllDone);
		function removeAllDone(event) {
			let toDelete = document.querySelectorAll("li.done"); 
			for (let i = 0; i < toDelete.length; i++) {
				toDelete[i].parentElement.removeChild(toDelete[i]);
			}
		}
		removeTasks.addEventListener("mouseover", removeHoverIn);
		function removeHoverIn() {
			removeTasks.removeAttribute("id");
			removeTasks.classList.add("removeFinishedTaskButtonHover");
		}
		removeTasks.addEventListener("mouseleave", removeHoverOut);
		function removeHoverOut() {
			removeTasks.classList.remove("removeFinishedTaskButtonHover");
			removeTasks.setAttribute("id", "removeFinishedTasksButton");
		}

}











