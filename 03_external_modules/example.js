import chalk from "chalk";

console.log(chalk.blue("hello World!"));

console.log(chalk.green("Hello Node.js"));

console.log(chalk.red("error"));

console.log(chalk.black("warning"));
console.log(chalk.yellow("hi there"));

console.log(chalk.magenta("hello"));
console.log(chalk.cyan("hi"));
console.log(chalk.white("how are you"));
console.log(chalk.blackBright("blackBright"));
console.log(chalk.redBright("redBright"));
console.log(chalk.greenBright("greenBright"));
console.log(chalk.yellowBright("yellowBright"));
console.log(chalk.blueBright("blueBright"));

// common js

import moment from "moment";

const date = moment().format("DD-MM-YYYY");

console.log("date is", chalk.red(date));

const time = moment().format("HH-mm-ss");

console.log("current time is ", chalk.blue(time));
