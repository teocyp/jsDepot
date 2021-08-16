// Every object in Javascript has a prototype
// Prototypes contain all the methods for that object type
// Class constructor creates methods automatically in prototype
// Classic way of constructing objects are created in properties

function User(userName, email) {
    this.userName = userName;
    this.email = email;
}

User.prototype.login = function () {
    console.log(`${this.userName} has logged in..`);
}

User.prototype.logout = function () {
    console.log(`${this.userName} has logged out..`);
}

// Subclass - inheritance
function Admin(userName, email, title) {
    User.call(this, userName, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);

//-----------------------------------------------------

const userOne = new User('Teo', 'teocyp1@gmail.com');
const userTwo = new User('Bekir', 'bekirarturk@gmail.com');
const userThree = new Admin('Alena', 'alena@gmail.com', 'Super Admin');

console.log(userOne, userTwo, userThree);

userOne.login();
userTwo.logout();
