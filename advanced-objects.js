let movie = {
    name: "Matrix",
    rating: 4.3,
}
console.log(movie);


//adding keys
movie.isItGood = true;

if( movie.isItGood !== undefined){
    console.log('exista');
} else {
    console.log('no key for name: isItGood')
};

//display all keys
for (let key in movie){
    console.log(key);
}