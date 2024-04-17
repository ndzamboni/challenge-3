// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = []; //empty array

// Collect employee data
const collectEmployees = function() {
  while (true) {
    const firstName = prompt("Enter employee's first name (or 'done' to finish):");
    if (firstName.toLowerCase() === 'done') break; // Exit loop if user inputs 'done'

    const lastName = prompt("Enter employee's last name:");
    const salary = parseFloat(prompt("Enter employee's salary:"));

    // Create an employee object and push it to the array
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    employeesArray.push(employee);
  }

  return employeesArray; // Return the array of employee objects
}
  // TODO: Get user input to create and return an array of employee objects
  //done

  // TODO: Calculate and display the average salary
  //done
  // Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0; // Initialize a variable to store the total salary
  
  // Loop through the array of employees to calculate the total salary
  for (const employee of employeesArray) {
    totalSalary += employee.salary; // Add each employee's salary to the total
  }
  
  // Calculate the average salary
  const averageSalary = totalSalary / employeesArray.length;
  
  // Display the average salary
  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
  // Retrieve the employee object at the random index
  const randomEmployee = employeesArray[randomIndex];
  
  // Display the random employee
  console.log("Congrats, " + randomEmployee.firstName + " " + randomEmployee.lastName + "! You've won!");
  console.log(randomEmployee);
  console.table(randomEmployee);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
