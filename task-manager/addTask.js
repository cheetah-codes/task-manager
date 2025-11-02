import { readFileSync, writeFileSync } from "node:fs";
import inquirer from "inquirer";
import chalk from "chalk";
import { v4 as uuidv4 } from 'uuid';

let todos = JSON.parse(readFileSync("./todo.json", "utf8"));

const saveTodos = () => {
  writeFileSync("./todo.json", JSON.stringify(todos, null, 2));
};

const addTask = async () => {
  const date = new Date();

  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "todo",
      message: "What do you want to do?",
    },
  ]);

  todos.push({
    id: uuidv4(),
    description: `${answer.todo}`,

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
