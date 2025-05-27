let addBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  let taskText = taskInput.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerText = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  let delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.style.marginLeft = "10px";

  delBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});