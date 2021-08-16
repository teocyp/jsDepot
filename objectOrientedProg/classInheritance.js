class User {
    constructor(userName, email) {
        // set up properties only
        this.userName = userName;
        this.email = email;
        this.score = 0;
    }
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

/* 

1 - Subclasses take the current properties and adds new methods to a new class.
2 -  When we call this inside a sub-class it runs the constructor of the parent first and then carries on adding the new properties to the sub-class

*/
class Admin extends User {
    constructor(userName, email, title) {
        super(userName, email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter((u) => {
            return u.userName !== user.userName;
        });
    }
}

const userOne = new User('Bekir', 'bekirarturk@gmail.com');
const userTwo = new User('Alena', 'alenakhr93@gmail.com');
const userThree = new Admin('Teo', 'teocyp1@gmail.com', 'senior admin');

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);