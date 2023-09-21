#! usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
let answers1;
let answers2;
let answers3;
async function startLoop() {
    while (loop) {
        await displayMenuItems();
    }
}
startLoop();
async function displayMenuItems() {
    answers1 = await inquirer.prompt([
        {
            type: "input",
            name: "MenuOpt",
            choices: ["AddTodoItem", "DeleteTodoItem", "Exit"],
            message: "Please select your menu item"
        }
    ]);
    switch (answers1.menuOpt) {
        case `AddTodoItem`: {
            await addTodo();
            break;
        }
        case `DeleteTodoItem`: {
            break;
        }
        case `Exit`: {
            break;
        }
        default: {
            loop = false;
            console.log("Exit Program");
            break;
        }
    }
}
async function addTodo() {
    answers2 = await inquirer.prompt([
        {
            type: "input",
            name: "Todo",
            message: "Enter What To Do"
        }
    ]);
    todos.push(answers2.todo);
    console.log(todos);
}
