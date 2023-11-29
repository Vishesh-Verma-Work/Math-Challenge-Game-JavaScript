function randomNum() {
    let num = Math.floor(Math.random()*5)+1;
    return num;
}

function randomExp() {
    let exp = ['*','/','+','-'];
    return exp[Math.floor(Math.random()*exp.length)];
}


let num1 = randomNum();
let num2 = randomNum();
let num3 = randomNum();
let num4 = randomNum();
let num5 = randomNum();

let exp1 = randomExp();
let exp2 = randomExp();
let exp3 = randomExp();
let exp4 = randomExp();

console.log(`${num1} ${exp1} ${num2} ${exp2} ${num3} ${exp3} ${num4} ${exp4} ${num5}`);

let expression = `${num1} ${exp1} ${num2} ${exp2} ${num3} ${exp3} ${num4} ${exp4} ${num5}`;
let result;

try {
    result = eval(expression);
    result = Math.round(result);
    console.log("Result:", result);
    
} catch (error) {
    result = Math.round(result);
    console.log("Invalid expression:", error);
}