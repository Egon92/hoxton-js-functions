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
// function add(a,b) {
//     let sum = a+b
//     return sum 
//     }
//   console.log(add(2,3))
  
  
  
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  //   function isEven(a) {
  //     if(a%2===0){
  //         return `even`
  //     }
  //     return `odd`
  //     }
  //   console.log(isEven(5))
  


let name = prompt("What's your name?")
let age = Number(prompt("How old are you?"))

  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name) {
    return name
    }
    let greetName = greet(name)
    console.log(greetName)
  
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
    let adult = true 
    if (age>=18){
    return adult 
        }
    return !adult
    }
    let adultOrNot = isAnAdult(age)
    console.log(adultOrNot)  
  
  
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood() {
    let yearsToAdult = 18 - age
    return yearsToAdult
    }
    let yearsToAdult = yearsToAdulthood(age)
    console.log(yearsToAdult)
  
  
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
    function admit(name, age) {
        if(adultOrNot === true){
            return `Hi ${greetName}. You are an adult. You can come in!`
        }else if(adultOrNot === false){
            return `Hi ${greetName}, you are not an adult. Please come again after ${yearsToAdult} years!`
        }
    }

    let admitOrNot = admit(name, age)
    console.log(admitOrNot)
  