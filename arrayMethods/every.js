const items = [
      { name: 'Bike', price: 100 },
      { name: 'TV', price: 200 },
      { name: 'Album', price: 10 },
      { name: 'Book', price: 5 },
      { name: 'Phone', price: 500 },
      { name: 'Computer', price: 1000 },
      { name: 'Keyboard', price: 25 },
]


const isEveryItem = items.every((item) => {
      return item.price <= 500;
})

console.log(isEveryItem);

// Checks if every item in an array returns true. If one of them fails, the whole thing returns false..