import { readFileSync } from "node:fs";

const todos = JSON.parse(readFileSync("./todo.json", "utf8"));

export default function listTodos () {
   console.log(todos)
};

export const listDoneTodos = () => {
  return todos.filter((todo) => todo.status === "done");
};

export const listInProgressTodos = () => {
  return todos.filter((todo) => todo.status === "in-progress");
};

export const listToBeDoneTodos = () => {
  return todos.filter((todo) => todo.status === "todo");
};



