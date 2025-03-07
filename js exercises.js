console.log("Welcome to the exercise solutions!");
//exercise 1
console.log("Hlelo, world!");
//exercise 2
function arithmetic(num1, num2) {
   let sum = num1 + num2;
   let product = num1 * num2;
    let difference = num1 - num2;
    let ratio = num1 / num2;
    console.log(sum, product, difference, ratio);
}
arithmetic(3, 4);
//exercise 3
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let num=1;
while(num<=10){
    console.log(num);
    num++;
}
//exercise 4
if (num%2==0) {
    console.log("even");
}
else{
    console.log(`the number ${num} is odd`);
}