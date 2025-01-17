let btn = document.querySelector("#add-task");
let ul = document.querySelector("#task-list");
let input = document.querySelector("#input");

// Add a new task
btn.addEventListener("click", function () {
  let task = input.value.trim();
  if (task === "") {
    alert("Task cannot be empty!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");

  li.appendChild(deleteBtn);
  ul.appendChild(li);
  input.value = "";

  // Attach event listener to the new delete button
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
});

// Attach event listener to existing delete buttons
let deleteBtns = document.querySelectorAll(".delete");
deleteBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
});
