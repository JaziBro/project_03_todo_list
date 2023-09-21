#! usr/bin/env node
import inquirer from "inquirer"

interface ansType {
    menuOpt: string,
    todo: string
}

let todos: [] = []
let loop: boolean = true
let answers1: ansType
let answers2: ansType
let answers3: ansType

 async function startLoop (){
    while (loop) {
       await displayMenuItems() 
    }
}
startLoop()

async function displayMenuItems() {
    answers1 = await inquirer.prompt ([
        {
            type: "input",
            name: "MenuOpt",
            choices: ["AddTodoItem", "DeleteTodoItem", "Exit"],
            message: "Please select your menu item"
        }
]);
switch(answers1.menuOpt){
    case `AddTodoItem`: {
        await addTodo()
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
    answers2 = await inquirer.prompt([
        {
            type: "input",
            name: "Todo",
            message: "Enter What To Do"
        }
    ])
    todos.push(answers2.todo)
    console.log(todos)
}

