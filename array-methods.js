const products = [
    {name: "laptop", price: 25000, brand: "lenovo", color: 'silver'},
    {name: "phone", price: 22000, brand: "iphone", color: 'golden'},
    {name: "watch", price: 2000, brand: "ribon", color: 'black'},
    {name: "sunglass", price: 300, brand: "lenovo", color: 'gray'},
    {name: "camera", price: 80000, brand: "lenovo", color: 'silver '},
]

const brands = products.map(product => product.brand);
// console.log(brands);
// const prices = products.filter(pri => console.log(pri.price));
// console.log(prices);

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

// 3. filter
const cheap = products.filter(p => p.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('s'));
console.log(specificName);