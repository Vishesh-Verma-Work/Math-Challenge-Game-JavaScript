function randomNum() {
    let num = Math.floor(Math.random() * 5) + 1;
    return num;
}

function randomExp() {
    let exp = ['*', '/', '+', '-'];
    return exp[Math.floor(Math.random() * exp.length)];
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
    result = Math.floor(result);
    console.log("Floored Rounded Result:", result);


} catch (error) {
    result = Math.round(result);
    console.log("Invalid expression:", error);
}





let expression1 = document.querySelector(".expression1");
let expression2 = document.querySelector(".expression2");
let expression3 = document.querySelector(".expression3");
let expression4 = document.querySelector(".expression4");
let expression5 = document.querySelector(".expression5");



let operator1 = document.querySelector(".operator1");
let operator2 = document.querySelector(".operator2");
let operator3 = document.querySelector(".operator3");
let operator4 = document.querySelector(".operator4");




let start = document.querySelector("#start");


let answer;
let form = document.querySelector(".form");
let ans = document.querySelector(".answer");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    answer = ans.value
    console.log(answer);
});




start.addEventListener("click", ()=> {
    expression1.innerHTML = num1;
    expression2.innerHTML = num2;
    expression3.innerHTML = num3;
    expression4.innerHTML = num4;
    expression5.innerHTML = num5;
    
    operator1.innerHTML = exp1;
    operator2.innerHTML = exp2;
    operator3.innerHTML = exp3;
    operator4.innerHTML = exp4;

    start.style.display = "none";
});



