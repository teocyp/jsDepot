class User {
    constructor(userName, email) {
        // set up properties only
        this.userName = userName;
        this.email = email;
        this.score = 0;
    }

    /* 
     
    1 - Methods are declared after the constructor
    
    2 - *** USE REGULAR FUNCTION SYNTAX WHEN CREATING METHODS - We need to use "Regular Function Declarations" in order to refer 'this' keyword to the current object.
    
    3- *** DO NOT USE ARROW FUNCTION SYNTAX WHEN CREATING METHODS - If we use "Arrow Functions" the 'this' keyword will refer to the window object. 
    
    */
    login() {
        console.log(`${this.userName} just logged in..`);
        return this;
    };
    logout() {
        console.log(`${this.userName} just logged out..`);
        return this;
    };
    incScore() {
        this.score++;
        console.log(`${this.userName} has a score of ${this.score}`);
        return this;
    }
};

const userOne = new User('Mario', 'mario@theninja.co.uk');
const userTwo = new User('Luigi', 'luigi@theninja.co.uk');

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the construector function to 'build' the object

// Method chaining..


// In order to chain methods, we need to return a value. Console.log is just logging out the output to the console and that is the reason we can't chain the methods.

console.log(userOne)
userOne.login();