// Arrow Functions

const calcArea = (radius => 3.14 * radius ** 2
);

const area = calcArea(5);
console.log(area);


// Re-write exercise..
const greet = () => 'hello, world';

const bill = ((products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
})

console.log(bill([10, 15, 30], 0.2));