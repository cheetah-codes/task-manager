import { readFileSync, writeFileSync } from "fs";
import chalk from "chalk";

let todos = JSON.parse(readFileSync("./todo.json", "utf8"));

const saveTodos = (todos) => {
  writeFileSync("./todo.json", JSON.stringify(todos, null, 2));
};

const updateTodos = async (id, desc) => {
  if (todos.lenght === 0) {
    console.log(chalk.red("No todos to update."));
    return;
  }


 const newTodos =  todos.map((todo) => {
   if( todo.id === Number(id)){
      return {
          ...todo,
          description:desc,
          updatedAt: `${new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })} ${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}`,
        }
      }

      return todo
  });

  saveTodos(newTodos);

  console.log(chalk.green(`Todo ${id} updated successfully!`));
};

export const markInProgressTodo = (id) => {

  const newTodos =  todos.map((todo) => {
   if( todo.id === Number(id)){
      return {
          ...todo,
          status:"in-progress",
          updatedAt: `${new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })} ${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}`
        }
      }

      return todo
  });


  saveTodos(newTodos);
  console.log(`todo of id ${id} is now in-progress`);
};

export const markDoneTodo = (id) => {
 const newTodos =  todos.map((todo) => {
   if( todo.id === Number(id)){
      return {
          ...todo,
          status:"done",
          updatedAt: `${new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })} ${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}`,
        }
      }

      return todo
  });

  saveTodos(newTodos);

  console.log(`todo of id ${id} is now done`);
};

export default updateTodos;
