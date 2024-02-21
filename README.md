# qooper-js

JavaScript Activity done by Dominic Gabriel Lasap - Full Scale Software Developer for Mr. [Cenk](https://www.linkedin.com/in/cenkyurtbilir) Qooper.io

# Alphabetically Largest Letter Finder

This JavaScript function finds the alphabetically largest letter that occurs in both lowercase and uppercase in a given string. If no such letter exists or the input contains non-alphabetical characters, it returns "NO".

## Installation

No installation required. Simply copy the `solution` function into your JavaScript project.

## Usage

const solution = require('./solution');

console.log(solution("aaBabcDaA")); // Output: "B"
console.log(solution("Qooper")); // Output: "NO"
console.log(solution("WeTestCodErs"));// Output: "T"
