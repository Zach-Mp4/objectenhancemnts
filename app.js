function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

let favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

var instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

// Write a function which generates an animal object. The function should accepts 3 arguments:

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.

function generateAnimal(species, verb, noise){
    return{
        species, 
        [verb](){
            return noise;
        }
    }
}