// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");

// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
button.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit

  let task = form.elements.task.value; // could be swapped out for line below
  //let task = taskInput.value;

  let date = (new Date()).toLocaleDateString('en-US') //Convert to short date format
  
  let dueDate = form.elements.dueDate.value
  let completionTime = form.elements.completionTime.value
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  // Call the addTask() function using
  addTask(task, date, dueDate, priorityRating, ["1", "30"], false);

  // Log out the newly populated taskList everytime the button has been pressed
  console.log(taskList);}
)

// Create an empty array to store our tasks
var taskList = [];

function addTask(taskDescription, createdDate, dueDate, priorityRating, estimatedTime, completionStatus) {
  let task = {
    taskDescription,
    createdDate,
    dueDate,
    priorityRating,
    estimatedTime,
    completionStatus
  };

  // Add the task to our array of tasks
  taskList.push(task);

  //displaying task
  renderTask(task);
}


// Function to display the item on the page
function renderTask(task) {
  let item = document.createElement("li");
  //taking use of inner html to line break elements
  item.innerHTML = "<p>" + task.taskDescription + "</br>" + task.dueDate + "</br>" + task.priorityRating + "</br>" + task.createdDate;

  tasklist.appendChild(item);

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

  // Listen for when the 
  delButton.addEventListener("click", function(event){
    item.remove(); 
  })
  
  // Clear the value of the input once the task has been added to the page
  form.reset();
}