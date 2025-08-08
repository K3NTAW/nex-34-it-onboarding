export const courseData: { [key: string]: { question: string; starterCode: string; expectedOutput: string } } = {
  "print-your-name": {
    question: `
**Goal:** Write a program that prints your name to the console.

**Guidance:**
1.  In most programming languages, you can use a built-in function to display output. In JavaScript, this is \`console.log()\`.
2.  Text, or "strings," should be enclosed in quotes (e.g., 'hello' or "world").
3.  Place your name inside the parentheses of the \`console.log()\` function.
`,
    starterCode: "",
    expectedOutput: "Your Name"
  },
  "simple-addition": {
    question: `
**Goal:** Write a program that adds two numbers and prints the result.

**Guidance:**
1.  First, you'll need two numbers. You can store these in variables. A variable is like a container for a value.
    *   Example: \`const num1 = 10;\`
2.  Use the \`+\` operator to add the two numbers together.
3.  Use \`console.log()\` to print the final sum.
`,
    starterCode: "",
    expectedOutput: "30"
  },
  "greet-the-user": {
    question: `
**Goal:** Write a program that greets a user by name.

**Example:**
If the user's name is Kenta, the program should print: \`Hello, Kenta!\`

**Guidance:**
1.  Store the user's name in a variable.
2.  To combine text with a variable, you can use "string concatenation" or "template literals."
    *   **Concatenation:** \`'Hello, ' + name + '!'\`
    *   **Template Literal:** \`\`Hello, \${name}!\`\` (often easier to read!)
3.  Print the final greeting using \`console.log()\`.
`,
    starterCode: "",
    expectedOutput: "Hello, Kenta!"
  },
  "even-or-odd": {
    question: `
**Goal:** Write a program that checks if a number is even or odd.

**Guidance:**
1.  A number is even if it can be divided by 2 with no remainder.
2.  The "modulo" operator (\`%\`) gives you the remainder of a division.
    *   \`10 % 2\` is 0 (10 is even)
    *   \`11 % 2\` is 1 (11 is odd)
3.  Use an \`if...else\` statement to check the result of the modulo operation and print "Even" or "Odd" accordingly.
`,
    starterCode: "",
    expectedOutput: "Even"
  },
  "age-in-5-years": {
    question: `
**Goal:** Calculate and print a person's age in 5 years.

**Guidance:**
1.  Store the current age in a variable.
2.  Add 5 to the age variable.
3.  Print the result.
`,
    starterCode: "",
    expectedOutput: "30"
  },
  "number-comparison": {
    question: `
**Goal:** Compare two numbers and determine which is larger or if they are equal.

**Guidance:**
1.  Store two numbers in separate variables.
2.  Use an \`if...else if...else\` statement to compare them.
    *   Use the \`>\` operator to check if one is greater than the other.
    *   Use the \`<\` operator to check if one is less than the other.
    *   Use the \`===\` operator to check if they are equal.
`,
    starterCode: "",
    expectedOutput: "num2 is larger"
  },
  "simple-calculator": {
    question: `
**Goal:** Create a simple calculator that can add, subtract, multiply, or divide two numbers.

**Guidance:**
1.  You'll need three variables: two for the numbers and one for the operation (e.g., '+', '-', '*', '/').
2.  An \`if...else if...else\` chain or a \`switch\` statement is a great way to handle the different operations.
3.  Based on the operation variable, perform the correct calculation and store the result.
4.  Print the final result.
`,
    starterCode: "",
    expectedOutput: "30"
  },
  "guess-the-number": {
    question: `
**Goal:** Create a simple number guessing game.

**Guidance:**
1.  Create a "secret number" and store it in a variable.
2.  Create a "guess" variable to represent the user's guess.
3.  Use an \`if...else\` statement to check if the guess matches the secret number and print the appropriate message.
`,
    starterCode: "",
    expectedOutput: "Try again!"
  },
  "count-to-10": {
    question: `
**Goal:** Print the numbers from 1 to 10.

**Guidance:**
1.  A \`for\` loop is perfect for this task. It repeats a block of code a specific number of times.
2.  A \`for\` loop has three parts:
    1.  **Initialization:** Where to start (e.g., \`let i = 1;\`)
    2.  **Condition:** When to stop (e.g., \`i <= 10;\`)
    3.  **Increment:** What to do after each loop (e.g., \`i++\`)
3.  Inside the loop, print the current value of your loop variable (\`i\`).
`,
    starterCode: "",
    expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
  },
  "multiplication-table": {
    question: `
**Goal:** Print the multiplication table for a given number up to 10.

**Guidance:**
1.  Store the number for the multiplication table in a variable.
2.  Use a \`for\` loop to count from 1 to 10.
3.  Inside the loop, multiply your number by the loop counter and print the result in a clear format (e.g., "5 * 3 = 15").
`,
    starterCode: "",
    expectedOutput: "5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50"
  },
  "sum-of-numbers": {
    question: `
**Goal:** Calculate the sum of all numbers from 1 up to a given number N.

**Guidance:**
1.  You'll need a variable for N (the number to sum up to) and another variable to store the running total, initialized to 0.
2.  Use a \`for\` loop to iterate from 1 to N.
3.  In each iteration, add the current loop number to your running total variable.
4.  After the loop has finished, print the final sum.
`,
    starterCode: "",
    expectedOutput: "55"
  },
  fizzbuzz: {
    question: `
**Goal:** Implement the classic FizzBuzz challenge.

**Instructions:**
Print numbers from 1 to 20. However:
- For multiples of 3, print "Fizz" instead of the number.
- For multiples of 5, print "Buzz" instead of the number.
- For multiples of both 3 and 5, print "FizzBuzz".

**Guidance:**
1.  Use a \`for\` loop to iterate from 1 to 20.
2.  Inside the loop, you'll need an \`if...else if...else\` chain.
3.  **Important:** Check for the "FizzBuzz" condition (divisible by both 3 and 5) first! Otherwise, it will never be reached.
4.  Use the modulo operator (\`%\`) to check for divisibility.
`,
    starterCode: "",
    expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz"
  },
  "find-the-maximum": {
    question: `
**Goal:** Find and print the largest of three numbers.

**Guidance:**
1.  Store the three numbers in variables.
2.  You can solve this with \`if...else\` statements, but a simpler way is to use the built-in \`Math.max()\` function, which takes any number of arguments and returns the largest one.
`,
    starterCode: "",
    expectedOutput: "20"
  },
  "reverse-a-word": {
    question: `
**Goal:** Reverse a given word.

**Example:**
"hello" → "olleh"

**Guidance:**
This is a classic string manipulation problem. A common way to do this in JavaScript is to:
1.  Split the string into an array of characters (\`.split('')\`).
2.  Reverse the array (\`.reverse()\`).
3.  Join the characters back into a string (\`.join('')\`).
`,
    starterCode: "",
    expectedOutput: "olleh"
  },
  "palindrome-checker": {
    question: `
**Goal:** Check if a word is a palindrome (reads the same forwards and backward).

**Examples:**
- "racecar" → Yes!
- "hello" → Nope.

**Guidance:**
1.  First, you need to reverse the word (see the "Reverse a Word" challenge).
2.  Then, use an \`if\` statement to compare the original word with the reversed word.
3.  Print the appropriate result.
`,
    starterCode: "",
    expectedOutput: "Yes!"
  },
};
