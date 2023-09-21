#! usr/bin/env node
import inquirer from "inquirer"

let todos: string[] = []
let loop: boolean = true

 async function startLoop (){
    while (loop) {
       await displayMenuItems() 
    }
}
startLoop()

async function displayMenuItems() {
   let answer1 = await inquirer.prompt ([
        {
            type: "input",
            name: "MenuOpt",
            choices: ["AddTodoItem", "DeleteTodoItem", "Exit"],
            message: "Please select your menu item"
        }
]);
switch(answer1.MenuOpt){
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
    let answer2 = await inquirer.prompt([
        {
            type: "input",
            name: "Todo",
            message: "Enter What To Do"
        }
    ])
    todos.push(answer2.Todo)
    console.log(todos)
}

async function deleteTodo(){
    if (todos.length > 0){
        let answers3 = await inquirer.prompt([
            {
                
            }
        ])
    }
}
