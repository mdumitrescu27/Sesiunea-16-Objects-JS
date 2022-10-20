let obj1 = {
    name: 'Miki',
}

let obj2 = {
    name: 'Miki',
}

if (obj1 === obj2){
    console.log("Same")
}else{
    console.log("Not the Same")
}



let obj3 = Object.assign({}, obj1); //cloning an object
