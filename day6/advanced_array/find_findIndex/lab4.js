const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

// Use 'findIndex' method
function deleteTask(id){
  const findId = tasks.findIndex(task => task.id === id);
  if (findId !== -1){
    tasks.splice(findId, 1);
  } else {
    console.log("No task found");
  }
}

deleteTask(2);

console.log(tasks);