function greeting(greetingHandler, name){
    greetingHandler(name)
}

// const laptop = {price: 55000,brand: 'lenovo', memory: '8gb'}
// greeting(laptop)

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log("good morning", name);
}

greeting(greetingHandler, "Tom rabie");
greeting(greetEvening, 'Tom solaiman');