// function kitchen() {
//     let roast = 0;
//     return function(){
//         roast++;
//         return roast;
//     }
// }

// const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());

// closure
// let a = 10;
// function f(params1) {
//     let b = params1;
//    return function n() {
//         let c = 10;
//         let d = a + b + c;
//         return d;
//     }
// }
// const k = f(20);
// console.log(k())

function numberOne() {
    console.log("numberOne is called");
}

function numberTow(callBack) {
    console.log("numberTow is called");
    callBack()
}
numberTow(numberOne);