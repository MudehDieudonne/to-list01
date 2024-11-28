document.getElementById('addTaskBtn').addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput')
  const taskList = document.getElementById('taskList')
    
  const taskText = taskInput.value.trim()
  if (taskText === '') {
    alert('Please enter a task.')
    return
  }

  // Create a new list item
  const listItem = document.createElement('li')
  const taskSpan = document.createElement('span')
  taskSpan.className = 'task'
  taskSpan.textContent = taskText

  // Add click event to toggle completion
  taskSpan.addEventListener('click', () => {
  listItem.classList.toggle('completed')
  })

  // Append task text and add list item to the task list
  listItem.appendChild(taskSpan)
  taskList.appendChild(listItem)

  // Clear the input
  taskInput.value = ''
});
