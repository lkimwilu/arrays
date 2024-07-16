var numbers = [
    38,
    65,
    12,
    8,
    25
];
var maxNumber = numbers[0];  

for (var i = 1; i < numbers.length; i++) {  
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];  
    }
}
console.log("The maximum number in the array is: " + maxNumber);