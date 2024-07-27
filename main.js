let numbers = [2, 4, 9, 10, 45, 67, 8, 90];

console.log(numbers)

let even_numbers = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        even_numbers.push(number);
    }
}

console.log(even_numbers);