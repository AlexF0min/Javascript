// task 1a
let task1 = 'asuntokionapajaa'
let newText = '';

if (task1.includes('paja')){
  newText = 'paja';

}
else { 
  newText = 'String does not exist'
}
console.log(`Origin string: ${task1}`);
console.log(`New string is ${newText}`);

// task 1b

let task1b = 'asuntokionapajaa';
let newText2 = '';
for(i=2; i< task1b.length; i+=3){
  let changeSymbol = task1b[i]
  if(task1b[i]== 'a'){
    changeSymbol = '*'
  }
  newText2 = newText2 + changeSymbol;
}
newText2 = newText2.toUpperCase();
console.log(`Every 3 letter from ${task1b} = ${newText2}`);







