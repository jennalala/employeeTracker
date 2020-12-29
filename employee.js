const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Lilly922!",
  database: "employee_db",
});

//user prompt
function userPrompt() {
    inquirer.prompt({
        name: "userAction",
        type: "list",
        message: "What would you like to do?",
        choices: [
        "View All Employees",
        "View All Employees by Department",
        "View All Employees by Manager",
        "Add Employee",
        "Add Role",
        "Add Department",
        "View All Roles",
        "View All Departments",
        "Exit",

        ],
    })
    .then(function (response) {
        console.log(answer);
      switch (response.userAction) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View All Employees by Department":
          employeeDepartmentView();
          break;
        case "View All Employees by Manager":
          employeeManagerView();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "View All Departments":
            viewAllDepartments();
            break;
        case "Exit":
            connection.end();
    
}
// add dept
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id ", connection.threadId);
  // connection.end();

  insertDepartment();
});

function insertDepartment() {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "Department Name?",
    })
    .then(function (answer) {
      sqlInsertDepartment(answer.name);
    });
}

function sqlInsertDepartment(name) {
  const qry = "INSERT INTO department (name) VALUES (?)";
  const data = [name];

  connection.query(qry, data, function(err, res){
      if(err) throw err;

      console.log(res);
      userOptions();
  })
}
//add new role 
function insertRole(role) {
    const qry = "SELECT * FROM department";
    const data = [role];

    connection.query(qry, data, function(err, res){
        if (err) throw err;
       // console.log(res);
        userOptions();
    })
    inquirer
    .prompt({
      name: "role",
      type: "input",
      message: "What is the employee's role?",
    },
{
    name: "salary",
    type: "input",
    message: "What is salary for role your inquiring about?",
},
{
    name: "department",
    type: "input",
    message: "What department is the employee in?",
},
function choices(){
    then(function (answer)
    {
        insertRole(answer.role);
    
})})}})}
function addEmployee(){
    connection.query("SELECT * FROM roles", (err, res) => {
    inquirer
      .prompt({
          name: "firstName",
          type: "input",
          validate: function(VALUE) {
              if (value === "") {
                  console.log("Enter Employee Name.");
                  return false;
              }
              return true;
          },
          
              name: "Role",
              type: "list",
              message: "Employee's role?",
              choices: () => {
                  const choiceArray = [];

              }
          }
      )},
    )}
