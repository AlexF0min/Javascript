// task 5 
let weekDays = ['monday', 'tuesday', 'wensday', 'thursday','friday', 'saturday', 'sunday'];

let myDate = new Date();
let weekDay = weekDays[myDate.getDay() -1];
let year = myDate.getFullYear();
let month = myDate.getMonth() +1;
let day = myDate.getDate() ;


console.log(`Today's date is : ${weekDay} ${year}-${month}-${day}`);