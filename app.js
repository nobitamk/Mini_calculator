let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let sum = document.querySelector("#plus");
let subtract = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let  display_result = document.querySelector("#display_result");

sum.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    function AddTwoNumbers(a,b){
        let sum = a + b;
        return sum;
    }
    
    let result = AddTwoNumbers(num_1,num_2);
    
    display_result.innerHTML = result;
    num_1="";
    num_2="";

});



subtract.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    function SubtractTwoNumbers(a,b){
    let diff = a - b;
    return diff;}
    let result = SubtractTwoNumbers(num_1,num_2);
    display_result.innerHTML = result;

    num_1="";
    num_2="";

});
multiply.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
function MultiplyTwoNumbers(a,b){
    let product = a * b;
    return product;
}
    
let result = MultiplyTwoNumbers(num_1,num_2);

display_result.innerHTML = result;

num_1="";
num_2="";

});
divide.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);

function DivideTwoNumbers(a,b){
    let quotient = a / b;
    return quotient;
}
let result = DivideTwoNumbers(num_1,num_2);

display_result.innerHTML = result;
num_1="";
num_2="";

});