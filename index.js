// Description
// You're building a nightclub security robot that 
// doesn't admit anyone under the age of 18. 
// Write the functions that would be responsible for that.
// You will find all the functions created and return 
// types as comments inside the challenge template. 
// You just need to fill in the code inside.

// Instructions
// - Write functions that reflect the requirements
// - Test your solution by with some sample data
// - console.log your results

// Tips
// - You can use functions inside functions 
// - Feel free to "fold" your function to clear 
// your workspace once you're done working on it.




/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a , b) {
    // write your code here
    let sum = a+b
    return sum 
  }
  add()
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(a) {
    // write your code here
    if(a%2===0){
        return `even`
    }
    return `odd`
  }
  isEven()
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name) {
    // write your code here
    return `Hello ${name} my friend!`
  }
  greet()
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
    // write your code here
    if (age>=18){
        return `An adult!`
    }
        return 'Not an adult yet!'
  }
  isAnAdult()
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age) {
    // write your code here
    let yearsToAdult = 18 - age
    return yearsToAdult
  }
  yearsToAdulthood()

  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(name, age) {
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
    
    let yearsToAdult = 18-age
    if(age>=18){
        return `Hi ${name}, you are an adult. You can come in!`
    }else if (age<18){
        return`${name}, you are not an adult yet. You can come back in ${yearsToAdult} years please!`
    }
  }
    let name = prompt("What's your name?")
    let age = Number(prompt("How old are you?"))
    admit(name, age)
  