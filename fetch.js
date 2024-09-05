const student = {
    name: "sakib",
    age: 32,
    movies:['king khan', 'Dakay ure taka']
}
const sutdentJSON = JSON.stringify(student);
// console.log(student);
// console.log(sutdentJSON);

const studentObj = JSON.parse(sutdentJSON);
// console.log(studentObj);

const keys = Object.keys(student);
const values = Object.values(student);
// console.log(keys,values);

// for 
const numbers = [5, 23, 74, 20, 15, 35, 87];

const result = numbers.map(num => num * 2);
// console.log(result);


const products = [
    {name: "laptop", price: 25000, brand: "lenovo", color: 'silver'},
    {name: "phone", price: 22000, brand: "iphone", color: 'golden'},
    {name: "watch", price: 2000, brand: "ribon", color: 'black'},
    {name: "sunglass", price: 300, brand: "lenovo", color: 'gray'},
    {name: "camera", price: 80000, brand: "lenovo", color: 'silver '},
]

const newProduct = {name: 'webcam', price: 700, price: 700, brand: "Lal"};

// copy product array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);