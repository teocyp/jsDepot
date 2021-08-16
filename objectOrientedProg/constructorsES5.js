// constructor functions

function User(userName, email) {

    this.userName = userName;
    this.email = email;
    this.login = function () {
        console.log(`${this.userName} has logged in`);
    }

};

const userOne = new User('Teo', 'teocyp1@gmail.com');
const userTwo = new User('Bekir', 'bekirarturk@gmail.com');

userTwo.login();
console.log(userOne, userTwo);




//---------------------------------------------------

//ES6 WAY...

// class User {
//     constructor(userName, email) {
//         // set up properties
//         this.userName = userName;
//         this.email = email;
//     }
// }