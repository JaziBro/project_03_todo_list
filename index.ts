import inquirer from "inquirer"
let todos: string[] = []
let answers = await inquirer.prompt([
    {
        type: "list",
        name: "MenuOpt",
        choices: ["Addtask","Deletetask","Exit"],
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

])
