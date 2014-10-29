// Problem: User interaction doesn't provide desired results.
// Solution: Add interactivity so the user can manage daily tasks.


//Global Variables
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var todoTasksHolder = document.getElementById("todo-tasks"); //todo tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed tasks


//New Task List Item
var createNewTaskElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement("li");
  
  //Create elements
  //input (checkbox)
  var checkBox = document.createElement("input"); // type = checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // type = text
  //button.edit
  var editButton = document.createElement("button"); 
  //button.delete
  var deleteButton = document.createElement("button");
  
  //Each element needs modifying
  checkBox.type = "checkbox";
  label.innerText = taskString;
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  
  //Each element needs appending to the "li" parent holder
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Add a new task - triggered by Add button onclick event handler
var addTask = function() {
  
  if (taskInput.value == "") {//EXTRA CREDIT
    return; //if there is nothing in the task, then don't do anything
  } else {
    console.log("Add task...");
    // Create a new list item with the text value from #new-task input box:
    var listItem = createNewTaskElement(taskInput.value);

    //Append listItem to todoTaskHolder
    todoTasksHolder.appendChild(listItem);

    // Reset the binding for the checkbox so that if checked it will become a completed item
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = ""; //clear out the new task input box for the next task now that the last one was used
  }
}


// Edit an existing task - triggered by Edit button onclick event handler
var editTask = function() { //this = edit button
  console.log("Edit task...");
  var listItem = this.parentNode; //get the parent "li" of the edit button
  
  var editInput = listItem.querySelector("input[type=text]"); //get the input box for this task
  var taskLabel = listItem.querySelector("label"); //get the label for this task
  
  var containsClass = listItem.classList.contains("editMode");
  
  // If the class of the parent is .editMode
  if(containsClass) {
    // Switch out of .editMode (see toggle below)
    // label text become the input's value
    taskLabel.innerText = editInput.value;
    //EXTRA CREDIT
    this.innerText = "Edit"; //change the button to read "Edit" instead of "Save"
  } else {
    // Switch to .editMode (see toggle below)
    // input's value becomes the label's text
    editInput.value = taskLabel.innerText;
    //EXTRA CREDIT
    this.innerText = "Save"; //change the button to read "Save" instead of "Edit"
  }
  // Toggle .editMode on the list item
  console.log("Before toggle: ", listItem.classList);
  console.log("CLASS: ", listItem.className);
  listItem.classList.toggle("editMode"); //toggles between having No class defined and a class named "editMode"
  console.log("After toggle: ", listItem.classList);
  console.log("CLASS: ", listItem.className);
}


// Delete a task - triggered by Delete button onclick event handler
var deleteTask = function() {// this = delete button
  console.log("Delete task...");
  
  //Remove the parent list item from the ul
  var listItem = this.parentNode; //get the parent "li" of the delete button
  var ul = listItem.parentNode; //get the parent "ul" of the "li" (grandparent of the delete button)
  ul.removeChild(listItem); //remove the "li" of the delete button from the "ul" (grandparent kills parent & grandchild)
}


// Mark a task as complete - triggered by the TODO's Checkbox onchange event handler
var taskCompleted = function() {// this = check box
  console.log("Task completed...");
  
  // Append the task list item to the #completed-tasks
  // Grab the "li" parent of "this" (checkbox) that got checked
  var listItem = this.parentNode; 
  
  // Append this "li" element (and it's children) to the Completed Task List
  completedTasksHolder.appendChild(listItem);
  
  // Reset the binding for the checkbox so that if un-checked it will become a todo item once again
  bindTaskEvents(listItem, taskTodo);
  
}


// Mark a task as todo - triggered by the COMPLETED Checkbox onchange event handler
var taskTodo = function() { // this = check box
  console.log("Todo task...");
  
  // Append the task list item to the #todo-tasks
  // Grab the "li" parent of "this" (checkbox) that got un-checked
  var listItem = this.parentNode; 
  
  // Append this "li" element (and it's children) to the TODO Task List
  todoTasksHolder.appendChild(listItem); 
  
  // Reset the binding for the checkbox so that if checked it will become a completed item once again
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  
  //select taskListItem's children
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  var checkBox = taskListItem.querySelector("input[type=checkbox]");

  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to the delete button
  deleteButton.onclick = deleteTask;
  
  //bind checkBoxEventHandler to the checkbox
  checkBox.onchange = checkBoxEventHandler;
  
}

//for example purposes only...
var ajaxRequest = function () {
  console.log("AJAX request made");
}

//SET CLICK HANDLERS//

//Set the click handler to the addTask function
//This is outside of "bindTaskEvents" function because it is independent of todo/complete context.
//It could be included in there, but since that function is called twice (once for both contexts)
//it would be redundent (run twice) and therefore inefficient, like this long winded comment.
addButton.onclick = addTask;
addButton.addEventListener("click", ajaxRequest);

//Set the click handlers for Edit button, Delete button, Checkbox
//items in the "todoTasksHolder" ul list
for(var i = 0; i < todoTasksHolder.children.length; i++) {
  console.log("Iterating over TODO tasks #" + i);
  //bind events to list item's children (TODO item list, checkbox context: taskCompleted)
  bindTaskEvents(todoTasksHolder.children[i], taskCompleted);
}

//Set the click handlers for Edit button, Delete button, Checkbox
//items in the "completedTasksHolder" ul list
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  console.log("Iterating over COMPLETED tasks #" + i);
  //bind events to list item's children (COMPLETED item list, checkbox context: taskTodo)
  bindTaskEvents(completedTasksHolder.children[i], taskTodo);
}