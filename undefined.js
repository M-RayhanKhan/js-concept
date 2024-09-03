/*
8 ways to get undefine
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing no the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range;
7. deleting an element inside an arry;
8.set a value directly
*/ 

let first;
// console.log(first);

function second(a, b){
    const total = a + b;
}
const result = second();
// console.log(result);

function third(a, b, c, d) {
    console.log(a, b, c, d);
}

// third(5, 6)

function noNegative (a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
// console.log(noNegative(2, 5));

const fifth = {id: 2, name:"rayhan", age: 23};
// console.log(fifth.age, fifth.salary);

const sixth = [41, 2 ,52 ,1 ,15];
// delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[8]);
// console.log(sixth);

const eighth = undefined;
const ninth = null;

const data = {results: [], undefined: null};
console.log(typeof undefined);
