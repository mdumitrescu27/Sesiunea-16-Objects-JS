let person = {
    name: "Miki",
    age: 21,
    cnp: 123987654000,
    jobLocation: {
        city: 'Timisoara',
        street: null,
    },
    sayhello: () =>{
        console.log('Salut');
    },
}

console.log(person);
console.log(person.name);
console.log(person['age']) //person.age

person.age = 30; // change age parameter
console.log(person);


if( person.sex !== undefined ){
    if( person.sex === "male"){
        console.log("Person is male");
    } else{
        console.log("Person is female");
    };
} else {
    console.log("Unknown Key")
}
