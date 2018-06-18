### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 
string
symbol
boolean
number
undefined
null
object

alll are primitives except for objects which have methods 

  //Your Answer
  
  
  //Googled Answer


#### 2. Look at this Javascript and try to predict, what will the browser's console show? 

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess:  I thought it was going to return outside. 


Then, past the code in your console and explain why you were right/wrong. Totalllllllly wrong.

I am not super familiar with the topic of variable hoisting, as it says that this is part of the problem.  My lower level understanding of the concept is that passiing 



#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  The way I interepret JSON is a descriptive language that helps deliver information about application development to its users. 
  
  //Googled Answer

In computing, JavaScript Object Notation or JSON (/ˈdʒeɪsən/ "Jason", /dʒeɪˈsɒn/)[1] is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format used for asynchronous browser–server communication, including as a replacement for XML in some AJAX-style systems.[2]

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer A closure is an inner function (function that is reference by another function) that has access to outer/global scope.
  
  Closures are useful for passing information between functions.
  
  
  
  //Googled Answer
  

#### 5. What's the difference between =, ==, and === in JavaScript?
=: assigns a variable value
== : checks for equality after doing conversion
===: checks for equality without type conversion (must be same type and same value)

  //Your Answer
  
  
  //Googled Answer
