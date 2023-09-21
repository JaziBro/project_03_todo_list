#! usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
let ans1;
let ans2;
let ans3;
async function startLoop() {
    while (loop) {
        await displayMenuItems();
    }
}
startLoop();
async function displayMenuItems() {
    ans1 = await inquirer.prompt([
        {
            type: "input",
            name: "MenuOpt",
            choices: ["AddTodoItem, DeleteTodoItem,Exit"],
            message: "Please select your menu item"
        }
    ]);
}
