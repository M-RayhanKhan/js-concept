// primitive types are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    // console.log(a);
    a = 27
    const result = a * b;
    return result;
}
const output = multiply(num1, num2);
// console.log(output);


// object and array are pass by reference
const student1 = { name: "nasir", partner: 'shadia' };
const student2 = { name: "forhad", partner: "nur" }

function makeLife(couple1, couple2) {
    couple1.partner = "somaiya";
    couple2.name = "ahare";
    // console.log(couple1, couple2);
}
makeLife(student1, student2);
// console.log(student1, student2);
// console.log(lifePartner);

// let num11 = null;
// let num22 = undefined;
// console.log(num11, num22);