#! usr/bin/env node
import inquirer from "inquirer"

let todos: [] = []
let loop: boolean = true
let ans1: any
let ans2: string 
let ans3: string 

 async function startLoop (){
    while (loop) {
       await displayMenuItems() 
    }
}
startLoop()

async function displayMenuItems() {
    ans1 = await inquirer.prompt ([
        {
            type: "input",
            name: "MenuOpt",
            choices: ["AddTodoItem", "DeleteTodoItem", "Exit"],
            message: "Please select your menu item"
        }
]);
switch(ans1.MenuOpt){
    case `AddTodoItem`: {
        break
    } 
    case `DeleteTodoItem`: {
        break
    } 
    case `Exit`: {
        break
    } 
    default: {
        loop = false
        console.log("Exit Program")
        break
    }
}
}

async function addTodo(){
    ans2 = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "Enter What To Do"
        }
    ])
}

