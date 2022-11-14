// Good Luck! You got this 💪🏾
// Write your code here.

//Functions

let describeCountry = (country,population,capitalCity) =>{
    return console.log(`${country} has ${population} million people and its captial city is ${capitalCity}`)
}

let country1 = describeCountry("Somaliland",3.5,"Hargeisa");
let country2 = describeCountry("Switzerland",8.6,"Bern");
let country3 = describeCountry("Canada",38,"Ottawa");


let percentageOfWorld1 = (population) =>{
    percentage = (population/7900)*100;
    return percentage;

}

let Indians = console.log(Math.floor(percentageOfWorld1(1393)));
let Somalis = console.log(Math.ceil(percentageOfWorld1(17)));
let Mexicans = console.log(Math.ceil(percentageOfWorld1(125)));

//Introduction to arrays

let population = [500000,2000000,7500,88000];
let neighbors = ["Kenya","Djibouti","Ethiopia","Somalia"];
console.log(neighbors.length === 4);

//Iteration: for loops

for(let i=0; i<neighbors.length; i++){
    console.log(neighbors[i]);
}

for(let i=(neighbors.length-1); i>=0; i--){
    console.log(neighbors[i]);
}
//Iteration: while loop
let i=0;
while (i<neighbors.length){
    console.log(neighbors[i]);
    i++;
}

i=(neighbors.length-1);
while (i>=0){
    console.log(neighbors[i]);
    i--;
}



