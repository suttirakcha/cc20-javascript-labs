function createProfile(name, surname, ...hobbies){
  return { name, surname, hobbies, hobbiesLength: hobbies.length }
}

console.log(createProfile("John", "Doe", "Sleeping", "Coding"))