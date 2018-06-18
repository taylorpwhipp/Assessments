// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var DivbyThree=function(num){
  if( num % 3 ===0){console.log(num+" is divisible by three.")}
  else{
    console.log(num+ " is not divisible by three")
  }
  }

  console.log(DivbyThree(6))

  


// // 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var Taylor={
  middlename:"Patricia",
  hobbies:"knitting",
  age:27
}
Taylor.middlename
// 3. Given the object below, fill in how to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log just the bell from the list of gear
console.log(bicycle.gear[2].slice(-4))


// Log the correct PSI for the tires
console.log(bicycle.wheels.specs[2])


// // 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter. 

// // Input:"hooplah"
// // Output:"ahhloop"

function AlphabetSoup(str) {
  var newstring=str.split('')
  return newstring.sort().join()

    // your code goes here  
	

}

// // keep this function call here 

AlphabetSoup("hooplah")

// // 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?
// Answer:  I made both arrays the same length if they weren't equal with a variable that checks for the difference and length and adds empty values until their length is equal

var nums = [1, 5, 88, 2, 5 ,6 ,4, 2]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

var minlength= Math.min(nums.length,nouns.length)
console.log(minlength)

lengthdiff=Math.abs(nums.length-nouns.length)

if (nums.length<nouns.length){
  for (i=0;i<=lengthdiff;i++){
    nums.push('')
  } 
}else{
  for(i=0;i<lengthdiff;i++){
    nouns.push('')
  }
}
console.log(nums)


for (i=0;i<=nums.length;i++){
 console.log(nums[i]+" "+nouns[i])
    }




// // output of the first function should be: "1 ducks"
