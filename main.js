#! /usr/bin/env node
// ToDo list line1
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([{
            name: "todo",
            message: "What do you want to add in your Todos?",
            type: "input"
        },
        {
            name: "addmore",
            message: "Do you want to add more?",
            type: "confirm",
            default: false
        }]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
;
// ToDo list line2
let clearList = await inquirer.prompt([
    {
        name: "clear",
        type: "confirm",
        message: "Do you want to clear your ToDo list?",
        default: false,
    },
]);
if (clearList.clear) {
    todos = [];
    console.log("ToDo list cleared!");
}
else {
    console.log("ToDo list not cleared!");
}
console.log("Final ToDo List:");
console.log(todos);
