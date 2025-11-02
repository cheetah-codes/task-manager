import { readFileSync, writeFileSync } from "fs";
import chalk from "chalk";

let todos = JSON.parse(readFileSync("./todo.json", "utf8"));

const saveTodos = (todos) => {
  writeFileSync("./todo.json", JSON.stringify(todos, null, 2));
};

const updateTodos = (id, desc) => {
  const todo = todos.find((todo) => {
    return todo.id === id;
  });

  const filteredTodo = todos.filter((todo) => {
    return todo.id != id;
  });

//   const { description, updatedAt } = todo;

  const newTodos = [
    ...filteredTodo,
    {
      ...todo,
      description: desc,
      updatedAt: `${new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })} ${new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`,
    },
  ];
  
  
  

  saveTodos(newTodos)

   console.log(chalk.green(`Todo ${id} updated successfully!`));
};



export default updateTodos;
