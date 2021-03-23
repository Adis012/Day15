// Only change code below this line
const sum = (num1, num2) => {
    const greeting = (name = "Anonymous") => "Hello " + name;

    console.log(greeting("John"));
    console.log(greeting());

}
// Only change code above this line 

console.log(sum(sum1, sum2));

module.exports = sum;