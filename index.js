// question no. 1
// 1. Sum of all digits of a number. For example, 123 -> 1+2+3=6

// let number = prompt("Enter a Numbers");
// let sum = 0;
// while (number > 0) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
// }
// console.log(`Sum of digits: ${sum}`);

// question no. 2
// 2. Sum of the range of 2 numbers. For example, num1=2, num2=5 -> 2+3+4+5=14

// let numFiirst = +prompt("Enter a first Number");
// let numSecond = +prompt("Enter a second Number");
// let sum = 0;
// for (let i = numFiirst; i <= numSecond; i++) {
//     sum += i;
// }
// console.log(`Sum of the range ${numFiirst} to ${numSecond} is ${sum}`);

// question no. 3
// 3. Calculate the average of numbers given in an array.

// let numbers = prompt("Enter a Numbers")
// let sum = 0;
// for(let i=0; i<numbers.length; i++){
//     sum = sum + parseInt(numbers[i])
// }
// total = sum / numbers.length;
// console.log(`Average: ${total}`);

// question no. 4
// 4. Compare strings by count of characters. For example, car and bat are equal. car and care are not.

// let firstThing =prompt("Enter first thing ");

// let secondThing =prompt("Enter Second  thing ");
// if(firstThing.length == secondThing.length){
//     console.log("Are equal")
// }else{
//     console.log("Are not equal")
// }

// question no. 5
// 5. Swap the string's first and last character. For example, name -> eamn

// const userName = prompt("Enter your Name ");
// let reverse = 0;
// for(let i = userName.length-1; i>=0; i--){
//     reverse = userName[i]
// }
// console.log(reverse);