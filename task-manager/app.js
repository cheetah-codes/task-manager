#!/usr/bin/env node
import addTask from './addTask.js' 
// const todo = require('./todo.json');
import inquirer from "inquirer";

const processArgs = process.argv.slice(2);
const [command, subcommand, value] = processArgs;

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
  

  switch (answers.option) {
    case "add":
       addTask()

      break;

    // case "update":

    //     break;

    // case "delete":

    //     break;

    // case "list":

    //     break;

    // case "mark-in-progress":

    //     break;

    default:
      break;
  }
};

mainFunc();
