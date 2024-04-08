#! /usr/bin/env node
import inquirer from "inquirer";
let Currency = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.26,
    PKR: 278.12,
};
const answer_user = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = Currency[answer_user.from];
let toAmount = Currency[answer_user.to];
let answer1 = answer_user.amount / fromAmount;
let answer2 = answer1 * toAmount;
console.log(Math.floor(answer2));
