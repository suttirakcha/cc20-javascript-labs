const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

// Use 'find' method
function updateTask(id, newName){
  const foundTask = tasks.find((task) => task.id === id)
  if (foundTask !== undefined){
    foundTask.name = newName;
  } else {
    console.log("No task found");
  }
}

// Use 'findIndex' method
// function updateTask(id, newName){
//   const index = tasks.findIndex((task) => task.id === id)
//   if (index !== -1){
//     tasks[index].name = newName;
//   } else {
//     console.log("No task found")
//   }
// }


updateTask(6, "Travelling");

console.log(tasks);