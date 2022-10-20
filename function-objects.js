let number1 = 0;
let number2 = number1;

let obj1 = {
    name: "Ion",
}

let obj2 = obj1;


function myFunction(person){
    console.log(person.name);
    console.log(person.job);
    console.log(person.age);
    console.log(person.address);
}

myFunction({
    name: 'Miki',
    age: 21,
    sex: 'male',
    address: 'Timisoara'
})