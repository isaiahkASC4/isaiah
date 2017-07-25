var prompt = require('prompt-sync') ();
//
// get input from the user . 
//
var n = prompt ('How many more times?') ;


// var counter = 1;

// while() {
  //  console.log(counter); 
    // counter++; 
}

var prompt = require('prompt-sync');
var money = 1000;
var items = {}; 

while (money > 99) {
    console.log('You have $ + money + "left. shirt = $100, computer for $400')
    var answer = prompt ('which item do you want to buy'); 
    if (answer == 'Shirt') {
        money -= 100;
        else if (answer == 'Computer') {
console.log('You bought a shirt'); 
money -= 400; 
items.push('Computer'); 

else { 

}
        }
    }
}