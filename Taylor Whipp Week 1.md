### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

I learned that you can set default values for function parameters if no argument is passed.
i.e.
function myFunction(number1, number2=1)
{var sum= number1+number2
console.log(sum)
}
myFunc(3) Should return 4 because the default argument for number 2 if it is not entered is 1





#### 2. What is a linter for? Do you think they are usefull? Explain why/why not.

A linter is a tool that runs in the backround which analyzes your code for potential errors. I think that they are useful, but you have to understand what your code is doing in order for them to be effective.  This is because a linter may flag a potential problem (like variable reassignment), when in reality there is nothing wrong.
// your answer

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer. 



Local scope refers to variables/ functions in programming that are accessible throughout the entire program. Local scope is created with closures, and has its own variables and functions that are available only when that particular code is called, not universally.


//Googled Answer


#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises. 

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource. 

//Your Answer

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git commit
- git push -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other? 

Return and console log both print values. 
Return moves between positions in the call stack: i.e. return in local scope exits the function and returns a value into global scope.
Console log is useful for printing a value and checking work but does not exit a function.

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Your Answer
It means that order is important when writing programs; that each step of what we write is interepreted (aka executed) line by line.


// Googled Answer

