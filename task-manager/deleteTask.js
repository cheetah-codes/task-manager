import chalk from "chalk";
import { readFileSync, writeFileSync } from "fs"

const todos = JSON.parse(readFileSync("./todo.json","utf8"));

const saveTodos = (todos)=>{
   writeFileSync("./todo.json", JSON.stringify(todos,null,2));
}
const deleteTask = (id)=>{
 const newTodos = todos.filter((todo)=>{
    return todo.id != id
 })

 const todo = todos.find(item=>item.id === id)

 
 saveTodos(newTodos);
 
 if(!todo){
   console.log(chalk.red(`can't delete task of id ${id}`));
 }else{

    console.log(chalk.green(`successfully deleted task of id ${id}`))
 }
 
}

export default deleteTask;