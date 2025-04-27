const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

function searchEmployee(name) {
  let person = employees[name];
  console.log(
    person 
      ? `Name: ${name}, Salary: ${person?.salary}, District: ${person?.address?.district}, Province: ${person?.address?.province}` 
      : 'Not Found'
    );
}

let inputName = prompt("Enter the employee name");
searchEmployee(inputName);