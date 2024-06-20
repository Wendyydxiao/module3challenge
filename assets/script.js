// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
  
// Capitalize employee's names
const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

const collectEmployees = () => {

//TODO:Get user input to create and return an array of employee objects
  const employees = [];
  let addMore = true;

  while (addMore) {
    const firstName = prompt("Please enter employee's first name:");
    const lastName = prompt("Please enter employee's last name:");
    const salaryInput = prompt("Please enter employee's salary:");

    const salary= parseFloat(salaryInput)

    if (firstName && lastName && !isNaN(salary)) {
      const capitalizedFirstName = capitalizeFirstLetter(firstName);
      const capitalizedLastName = capitalizeFirstLetter(lastName);

      employees.push({ firstName: capitalizedFirstName, lastName: capitalizedLastName, salary });
    } else {
      alert("Invalid input. Please check the details and enter again.");
    }
    
  

    //Add new employee entry
    addMore = confirm("Do you want to add another employee?");
  }

  employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

  return employees;
};

// Display the average salary
// TODO: Calculate and display the average salary
  
const calculateAverageSalary = employeesArray => {

  // Calculate
  const totalSalary = employeesArray.reduce((sum, { salary }) => sum + salary, 0);
  return totalSalary / employeesArray.length;
};

const displayAverageSalary = employeesArray => {
  
  //Display
  const averageSalary = calculateAverageSalary(employeesArray);

  //Display avg salary with two decimals
  console.log(`Exact Figure: The average employee salary between our employee(s) is: 
  ${(averageSalary).toLocaleString('en-US',{ style: 'currency', currency: 'USD'})}`);

  //Round up salary to remove decimals
  console.log(`Round-up Figure: The average employee salary between our employee(s) is: 
  ${Math.round(averageSalary).toLocaleString('en-US',{ style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})}`);
};

// Select a random employee
const getRandomEmployee = employeesArray => {
  // TODO: Select and display a random employee
  const randomdraw = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee =employeesArray[randomdraw]
  console.log (`Congratulations to ${randomEmployee.firstName}, our random drawing winner!`)
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

