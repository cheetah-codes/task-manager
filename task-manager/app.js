#!/usr/bin/env node

import addTask from "./addTask.js";
import listTodos, {
  listDoneTodos,
  listInProgressTodos,
  listToBeDoneTodos,
} from "./readTask.js";
import updateTodos, { markDoneTodo, markInProgressTodo } from "./updateTask.js";
import * as fs from "fs";
import deleteTask from "./deleteTask.js";

const processArgs = process.argv.slice(2);
const [command, ...args] = processArgs;

// if (!fs.existsSync("./todo.json")) {
//     fs.writeFileSync("./todo.json", JSON.stringify([]));
// }

//   const message = `Enter ${type}`;
//   const answer = await inquirer.prompt([
//     {
//       type: "input",
//       name: "todo",
//       message,
//     },
//   ]);

//   return answer.todo
// };

const mainFunc = async () => {
  switch (command) {
    case "add":
      addTask(args.slice(0).join(""));

      break;

    case "update":
      updateTodos(args[0], args.slice(1).join(""));

      break;

    case "delete":
      deleteTask(args.slice(0).join(""));
      break;

    case "list":
      

      switch (args[0]) {
        case "done":
          console.log(listDoneTodos());
          break;
        case "in-progress":
          
          console.log(listInProgressTodos());
          break;
        case "todo":
          
          console.log(listToBeDoneTodos());
          break;
      
        default:
          listTodos();
          break;
      }

      break;

    case "mark-in-progress":
      markInProgressTodo(args.slice(0).join(""));

      break;

    case "mark-done":
      markDoneTodo(args.slice(0).join(""));

      break;

    default:
      break;
  }
};

mainFunc();
