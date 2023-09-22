import inquirer from "inquirer";
let todos = [];
let answers1 = await inquirer.prompt([
    {
        type: "input",
        name: "menuopt",
        choices: ["Addtask", "Deletetask", "Exit"],
        message: "Please Select Your Menu Item"
    },
    {
        type: "input",
        name: "todo",
        message: "Enter What To Do"
    },
    {
        type: "list",
        name: "menuopT",
        message: `Please Select Todo You Want To Delete`
    }
]);
