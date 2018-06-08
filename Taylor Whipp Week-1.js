// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense. 
if (true){
  console.log ("This message is visible!")
}
else { console.log("You'll never see this message")}

  

// // 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.
var n=15
for(i=n; n>10;n--) {console.log("This is " +n+" -1")
	
}
console.log( "The value of n at the end of the loop is "+n)

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".

var myArray=[4, "4406 Copeland" , "underpants", "Friday"]
console.log(myArray[1])
myArray[3]="duck"

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:  If loop that returns 
var favoriteanimal="insert your favorite animal here"

if(favoriteanimal==="cat") {
  console.log("You're the right type of human, lets be friends")
}

 else {
	console.log("You have bad taste")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door. 


// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"
var sum=arg1*arg2
function practiceFunc(arg1, arg2) {
  if (sum <20){console.log(sum)
  }
  else {console.log("can't count that high!")
  }
}
	// your code here
   
practiceFunc(6,15)