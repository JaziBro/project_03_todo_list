#! usr/bin/env node
import inquirer from "inquirer"

let todos: [] = []
let loop: boolean = true
let ans1: string 
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
            choices: ["AddTodoItem, DeleteTodoItem,Exit"],
            message: "Please select your menu item"
        }

    ])
}