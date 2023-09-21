import inquirer from "inquirer";
let todos = [];
let answers1 = await inquirer.prompt([
    {
        type: "input",
        name: "menuOpt",
        choices: ["Addtask", "Deletetask", "Exit"],
        message: "Please Select Your Menu Item"
    },
    {
        type: "input",
        name: "Todo",
        message: "Enter What To Do"
    },
    {
        type: "list",
        name: "MenuOpT",
        message: `Please Select Todo You Want To Delete`
    }
]);
