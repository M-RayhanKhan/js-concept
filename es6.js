
const student = {
    name: "khan",
    age: 19,
    movies: ['llllaaalla', 'mamamaaaldla']
}
// template string
// console.log(`my name ${student.name} age of ${student.age} has number ${numbers} also like movie ${student.movies[0]}`);

// arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;

// spread operator;
const numbers = [89, 58, 6965 ,56];

const newNumbers = [...numbers];
const currentNumbers = [...numbers, 100]
numbers.push(55)
numbers.push(55)
numbers.push(55)


console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);