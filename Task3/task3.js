// task 3a

let animals= ['dog', 'horse', 'cow'];
console.log (`ArrayStr: ${animals}`);

// task 3b

let newAnimals = animals.map(function(x) {
  return x;
});
// let newAnimals = [];
// for (i=0; i < animals.length; i++){
//   newAnimals.push(animals[i]);
// }
newAnimals.push('cat', 'sheep'); 
console.log(`New Array ${newAnimals}`); 

// task 3c

let findWord = 'cow';

if (animals.includes(findWord)){
  console.log(`Search result ${findWord} found`);
} else {
  console.log(`Serch result ${findWord} not found`);
}








