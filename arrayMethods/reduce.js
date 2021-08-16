const items = [
      { name: 'Bike', price: 100 },
      { name: 'TV', price: 200 },
      { name: 'Album', price: 10 },
      { name: 'Book', price: 5 },
      { name: 'Phone', price: 500 },
      { name: 'Computer', price: 1000 },
      { name: 'Keyboard', price: 25 },
]

const totalCost = items.reduce((acc, item) => {
      return acc += item.price;
}, 0);

console.log(totalCost);


/*
- Takes 2 parameters, accumulator and item.
- First parameter is accumulator and returns it.
- Initial accumulator value should be given at the end of the function
*/