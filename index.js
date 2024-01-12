
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function(){
    count++
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}












// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username} `
// };


//TYPE CONVERSION CHANGE datatype value to another 

// let age = window.prompt('How old are you?');
// age = Number(age);                      //converting string data type into number
// age+=1;
// console.log(age, typeof age);   //it will show number because it is converted into a number.log

//const variable that cant be changed 
const pi = 3.14159;
let radius;
let circumference; 
//radius=window.prompt('Enter radius of a circle');
//radius = Number(radius);
 

// document.getElementById("mySubmit").onclick = function(){
//      radius = document.getElementById("myText").value;
//      radius = Number(radius);
//      circumference=2*pi*radius;
//     document.getElementById("myH3").textContent = circumference ;
//         };
//console.log(`The Circumference of the Circle is:${circumference}`);




//accepting user Input
// easy way = window prompt
// let name = window.prompt("What is your name?");
// console.log(name);

// professional way = HTML textbox





// let fullName = 'Ndege Monda';
// let age = 25;
// let gender = 'Male';
// let student = 'false';
// document.getElementById('p1').textContent = fullName
// document.getElementById('p2').textContent = age
// document.getElementById('p3').textContent = student

 //arithmetic operators
// let students = 30;
// students %= 2;
// console.log(students);
// let x = 7 + 4 - 2 * 3 / 8;

// console.log(x)
//console.log('Hello');
//window.alert('This is an alert');
//document.getElementById('myH1').textContent = 'Hello!'
//document.getElementById('myP').textContent = 'i love pizza!'

//variable = container storing a value
// declaration let x
//assignment x = 100;

// let age = 25;
// let price = 10.99
// let gpa = 2.1;
// let firstName = 'Ndege';
// let lastName = "Monda";
// let favouriteFood = 'Pizza'
// let email = 'nmonda123@gmail.com'
// console.log (typeof firstName);
//  console.log(`You name is  ${firstName} ${lastName}`);// use of backticks
// console.log(`You like ${favouriteFood}`);
//  console.log(`Your email is ${email}`);
// let online = true;
// let forSale = false;

// console.log(`Ndege is online:  ${online}`);
// console.log(`Ndege is for sale:  ${forSale}`)