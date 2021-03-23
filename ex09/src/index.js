function product(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(product(10, 20, 30));
console.log(product(null, [5, 6], "string", {}));
// Only change code below this line
const product = (aa, bb, cc) => {
    const args = [aa, bb,cc];
// Only change code above this line
    return args.reduce((a, b) => a * b, 1);
}
console.log(product());
console.log(product(1, 2));
console.log(product(4, 3, 10, 2));
console.log(product(7));
module.exports = product;