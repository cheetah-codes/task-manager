#!/usr/bin/env node

// const readLine = require("readline")

const addTask = require("./addTask");

// const qa = readLine.createInterface({
    
//     input: process.stdin,
//     output: process.stdout
// }
// )

// copy.js

// process.argv is an array like:
// [ 'node', '/path/to/copy.js', 'source.txt', 'destination.txt' ]
// const argss = process.argv.slice(2); // skip the first two entries

// const source = argss[0];
// const destination = argss[1];

// if (!source || !destination) {
//   console.log("Usage: node copy.js <source> <destination>");
//   process.exit(1);
// }

// console.log(`Copying from ${source} to ${destination}`);

// Example: fs.copyFileSync(source, destination);


// const args = process.argv.slice(2);
// const name = args[0] || "stranger";

// console.log(`Hello, ${name}!`);

// const {argv} = require("node:process")

// console.log(argv);

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
const processArgs = process.argv.slice(2)

const [command,subcommand,value] = processArgs;

console.log('worked from cli',command,subcommand,value);

switch (command) {
    case "add":
        addTask(subcommand)
        
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
// if(process.argv[])
