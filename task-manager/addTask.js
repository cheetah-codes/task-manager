import { readFileSync, writeFileSync } from "node:fs";
import chalk from "chalk";
import { v4 as uuidv4 } from 'uuid';

let todos = JSON.parse(readFileSync("./todo.json", "utf8"));

const saveTodos = () => {
  writeFileSync("./todo.json", JSON.stringify(todos, null, 2));
};

const addTask = async (description) => {

  todos.push({
    id: uuidv4(),
    description,

    status: "Todo",
    createdAt: `${new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })} ${new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`,

    updatedAt: `Sometime in ${new Date().getUTCDate()}`,
  });

  saveTodos();

  console.log(chalk.green("Todo added successfully!"));
};

export default addTask;
