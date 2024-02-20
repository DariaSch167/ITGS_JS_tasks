const buttonAdd = document.querySelector(".task_add-button");
const taskInput = document.querySelector(".task_input");
const taskList = document.querySelector(".task_list");

buttonAdd.addEventListener("click", createTask);

function createTask() {
  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value;
  taskList.append(newTask);
  taskInput.value = "";
}

taskList.addEventListener("click", checkTask);

function checkTask(evt) {
  const eventTarget = evt.target;
  if (eventTarget.tagName === "LI") {
    eventTarget.classList.toggle("task_done");
  }
}
