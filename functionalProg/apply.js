// Apply Method
// It allows you to call a function and pass arguments in as an array instead of comma separated list.
// .call and .apply are Function methods that 'manipulate' what this means inside a function.ß

function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

const result = sum.apply(null, [6, 7, 13, 5, 9]);

console.log(result);

// Apply method allows us to use endless arguments without declaring the specific parameters inside the function body.