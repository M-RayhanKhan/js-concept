function boxify(num1,num2){
    const nums = [num1 , num2];
    return nums;
}
// console.log(boxify(90, 34));

const numbers = [22, 32];
 [x,y] = numbers;
//  console.log(x,y);
const student = {
    name: "khan",
    age: 19,
    movies: ['llllaaalla', 'mamamaaaldla']
}

const [firstMove, secondMove] = student.movies;
// console.log(firstMove, secondMove);

// object desturcturing

// 
const products = {
    name: 'hhh',
    age: 80,
    skills: ['HTML', 'CSS', 'JAVASCRIPT'],
    student: [{
        studentName: "sabbir",
        ages: 20,
        subject: ['math', 'physics']
    }]
}
