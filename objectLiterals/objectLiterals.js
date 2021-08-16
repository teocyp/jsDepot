// Creating an object by Object Literals...

// We can't use this keyword with an arrow function


// Very common format of an array of objects...
//----------------------------------------------------------

let person = {
      name: 'Teo',
      age: 31,
      interests: 'Loves Coding',
      blogs: [
            { title: 'why macBook rules', likes: 35 },
            { title: '10 things to positivity', likes: 50 },
      ],
      address: {
            street: '23 Meeting Lane',
            city: 'London',
            postCode: 'SE15 2UN',
      },
      favCity: function () {
            console.log(this.address.city);
      },
      logBlogs() { // Same with favCity function just a different syntax
            this.blogs.forEach(post => {
                  console.log(post);
            })
      },
};

console.log(typeof person); // Outputs the type of the variable
person.age = 32; // Updating Object Property..
person.favCity();
person.logBlogs();
console.log(person.age);

//----------------------------------------------------------
