/****Instructions*****
1.Rewrite the given code as it is seen by the interpreter  
2.Predict the outputs  
3.Run the original code and compare the outputs to your predictions*/

Examples:
// GIVEN
console.log(example);
var example = "I'm the example!";
AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

console.log(example);
let example = "I'm the example!"; 
AFTER HOISTING BY THE INTERPRETER
// let example;
//console.log(example); // ReferenceError: Cannot access 'example' before initialization
// example = "I'm the example!";

//1.) Given
console.log(hello);                                   
var hello = 'world';
//AFTER HOISTING BY THE INTERPRETER 
// Var hello;
// console.log(hello); // output logs undefined
// hello = 'world';    

//2.) Given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING BY THE INTERPRETER
// function test(){        // test() gets hoisted to top
    //var needle = 'magnet'; // we assign a value to our function scoped 'needle'
    //console.log(needle);   // output logs 'magnet'
}
// var needle; //'needle' is a declaration, it's global and gets hoisted to just under the hoisted functions
// needle = 'haystack'; //we assign a value to our global 'needle' 
// test(); //test is called, the first console.log runs

// output log it as 'magnet'

//3.) Given ?
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
print();
console.log(brendan);
//AFTER HOISTING BY THE INTERPRETER
//function print(){           // print() gets hoisted to top
    //brendan = 'only okay';    // we assign a value to our function scoped 'brendan'
    //console.log(brendan);     // we log as 'only okay'
//}
//var brendan;                //'brendan' is a declaration, it's global and gets hoisted to just under the hoisted functions
//brendan = 'super cool'      // we assign a value to our function scoped 'brendan'
//print();                    // print is called, the first console.log runs
//console.log(brendan);       // we log as 'only okay'

//4.) Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING BY THE INTERPRETER
//function eat(){
    //var food;
    //food = 'half-chicken';
    //console.log(food);     // we log 'gone' correct log is 'chicken'
    //food = 'gone'; 
}
// var food;
// food = 'chicken';
// console.log(food);  // we log 'chicken' correct log is 'half-chicken'
// eat();

//5.) Given
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//AFTER HOISTING BY THE INTERPRETER
// var mean;                 // only var is hoisted
// mean();
// console.log(food);
// mean = function () {      // equals acts as an anchor
//   var food;
//   food = "chicken";
//   console.log(food);
//   food = "fish";
//   console.log(food);
// };
// console.log(food);  // output TypeError: mean is not a function

//6.) Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
//function rewind() {
    //var genre;
    //genre = "rock";
    //console.log(genre); // output log is 'rock'
    //genre = "r&b";
    //console.log(genre); // output log is 'r&b
}
//var genre;
// console.log(genre); output is 'undefined'
//genre = 'disco';
//rewind();
//console.log(genre); // output log is 'disco'

//7.) Given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
// function learn() {
    //var dojo;
    //console.log(dojo); // output 'undefined'
    //dojo = "seattle";
    //console.log(dojo); // ouput 'seattle'
    //dojo = "burbank";
    //console.log(dojo); // ouput 'burbank'
}
//dojo = "san jose"; 
//console.log(dojo);  // output 'san jose'
//learn();
//console.log(dojo);  // output 'san jose'

//Bonus: 8.) Given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//AFTER HOISTING BY THE INTERPRETER
//function makeDojo(name, students){
    //const dojo = {};
    //dojo.name = name;
    //dojo.students = students;
    //if(dojo.students > 50){
        //dojo.hiring = true;
    }
    //else if(dojo.students <= 0){
        //dojo = "closed for now"; // Error
    }
    //return dojo;                           
}
//console.log(makeDojo("Chicago", 65));  // output is { name: 'Chicago', students: 65, hiring: true }
//console.log(makeDojo("Berkeley", 0));  // output is 'closed for now' correct output is error: Assignment to constant variable.

//Example?
var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);

//AFTER HOISTING BY THE INTERPRETER
// function magic(){
//     var foo;
//     foo = "hello world";
//     console.log(foo);
// }
// var foo;
// foo = 'bar'
// magic();
// console.log(foo);