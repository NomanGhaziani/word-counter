#!/usr/bin/env node
import inquirer from "inquirer";

//declare a constant answers and assign it to the result of inquirer.prompt function
const answer : {
    Sentence : "string"
} = await inquirer.prompt([{
    name : "Sentence",
type : "input",
    message : "Enter your sentence to count the word:"
}])
const word = answer.Sentence.trim().split(" ");

//print the array of words tothe console
console.log(word)
//print the words count of the sentence to the console
console.log(`your sentence word count is  ${word.length}`)