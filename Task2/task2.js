//  task2
 
 const prompt = require("prompt-sync")();

let age = prompt('Set age between 18 - 22:'); 
while (age < 18 || age > 22){
  age = prompt('Set age between 18 -22');
}

if (age == 18){     // change to switch
  console.log('great age! you getting a passport');
} else if (age == 19){
  console.log('you still cannot by alcohol...' );
} else if (age == 20){
  console.log('Almost there! Just 1 year left');
} else if (age == 21){
  console.log('Yea! Its a party time!! ');
} else {
  console.log('Need to start working..')

}



