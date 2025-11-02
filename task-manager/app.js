#!/usr/bin/env node
import addTask from "./addTask.js";
// const todo = require('./todo.json');
import inquirer from "inquirer";
import readTodo from "./readTask.js";
import updateTodos from "./updateTask.js";

const processArgs = process.argv.slice(2);
const [command, subcommand, value] = processArgs;

const promptInput = async (type) => {
  const message = `Enter ${type}`;
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "todo",
      message,
    },
  ]);

  return answer.todo
};

//the above method works but has a certain logical donside an improved version is below

const mainFunc = async () => {
  // const answers = await inquirer.prompt([
  //      {
  //          type: "list",
  //          name: "option",
  //          message: "What do you want to do?",
  //          choices: ["add", "delete", "list", "mark as done","update", "exit"]
  //      }
  //  ]);

  //   const inquirer = (await import("inquirer")).default;

  let answers;

  try {
    answers = await inquirer.prompt([
      {
        type: "list",
        name: "option",
        message: "What do you want to do?",
        choices: ["add", "delete", "list", "mark as done", "update", "exit"],
      },
    ]);

    console.log("You selected:", answers.option);
  } catch (error) {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong:", error);
    }
  }

  // if(processArgs.length === 2){
  //   updateTodos(command,subcommand)
  // }

  switch (answers.option) {
    case "add":
      addTask();

      break;

    case "update":
      const id = promptInput("id").then((res)=> {
        return res
      }
    );
    
    const desc = promptInput("description").then((res)=> res);
    
      // const desc = promptInput("new description");


      updateTodos(Number(id), desc);
      // console.log(`${id.todo},hey i got it`);
      

      break;

    // case "delete":

    //     break;

    case "list":
      readTodo();
      break;

    // case "mark-in-progress":

    //     break;

    default:
      break;
  }
};

mainFunc();
