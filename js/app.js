document.addEventListener("DOMContentLoaded", init);

function init() {
	var inputElement = document.getElementById("taskInput"); 
	var addTaskButton = document.getElementById("addTaskButton"); 
	var list = document.getElementById("taskList"); 		
	var removeTasks = document.getElementById("removeFinishedTasksButton"); 
	var counterSpan = document.getElementById("counter"); 
	
	counterSpan.innerText = 0; // wartość początkowa
	
// nasłuch na guzik dodawania zadań i uruchamiana funkcja:
	addTaskButton.addEventListener("click", takeText);

	function takeText(event) { 
		event.preventDefault(); 				// to prevent re-loading
		var taskContent = inputElement.value; 	// task text
		if (taskContent.length < 6 || taskContent > 99) {
			alert("Your task should contain 6 to 99 characters");
// to prevent further writing when the task text is too short:
			inputElement.value = "";
			takeText();
		}
// tworzenie nowego elementu strony z treścią z pola input:
		var newTask = document.createElement("li"); 
// dodanie do struktury strony:
		list.appendChild(newTask).classList.add("taskItem"); 
// nowy 'li' z zadaniem do zrobienia ma klasę 'taskItem' - na zielono go!
// wykonanemu zadaniu usunąć tę klasę i dodać klasę 'done' - na czerwono go!
// dodać do nowego zadania linię z jego treścią (tekst):
		var newTaskLine = document.createElement("p");
		newTask.appendChild(newTaskLine); /*.classList.add("taskItem");*/
		// wstawienie treści zadania do wykonania:
		newTaskLine.innerText = inputElement.value;

// dodać do nowego zadania (wewnątrz 'li') dwa guziki (najpierw 'Delete' z jego funkcją):
		var newButtonDelete = document.createElement("button");
		newTask.appendChild(newButtonDelete).classList.add("removeTaskButton");
		newButtonDelete.innerText = "Delete";
// aby 'Delete' usuwał zadanie, czyli 'li' w całości:
		newButtonDelete.addEventListener('click', remove);
		function remove(event) {
			newTask.parentElement.removeChild(newTask);
		}
// dodać do nowego zadania (wewnątrz 'li') dwa guziki (potem 'Complete' z jego funkcją):
		var newButtonComplete = document.createElement("button");
		newTask.appendChild(newButtonComplete).classList.add("setCompleteButton");
		newButtonComplete.innerText = "Complete";
		
		inputElement.value = ""; // żeby od razu po kliknięciu 
//i po wstawieniu zadania do wykonania kasowało się;

// aby 'Complete' zmieniał wygląd wpisu na czerwony:
		newButtonComplete.addEventListener("click", makeTaskContentRed);
		function makeTaskContentRed(event) {
			event.preventDefault();
			newTask.classList.toggle("taskItem");
			newTask.classList.toggle("done");
			 // naprzemian usuwa i przywraca klasę
		} 
		var taskNumber = document.querySelectorAll("li.taskItem"); // uchwycenie wszystkich 'li' z klasą 'taskItem'
		// długość tej tablicy można użyć jako licznika zadań do wykonania
		console.log(taskNumber.length); // LICZNIK DZIAŁA!!!
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











