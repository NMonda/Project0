// // rest parameters (...rest) bundles separate elements into array
// function combineStrings (...strings){
//     return strings.join(" ");
// }
// const fullName = combineStrings('Mr', "Ndege", "Monda", "III");
// console.log(fullName);  // Output: Mr Ndege Monda iii

//spread operator = ... allows unpacking of elements
// let username = 'Ndege Monda';
// let letters = [...username];
// console.log(letters);

// const textBox = document.getElementById('textBox');
// const toFahrenheit = document.getElementById('toFahrenheit');
// const toCelsius = document.getElementById('toCelsius');
// const result = document.getElementById('result');
// let temp;

// function convert(){
//     if(toFahrenheit.checked){
//         temp =  Number(textBox.value);
//         temp = temp*9/5 +32;
//         result.textContent = temp.toFixed(1) + "°F";
//     }
//     else if(toCelsius.checked){
//         temp =  Number(textBox.value);
//         temp = (temp-32) * (5/9);
//         result.textContent = temp.toFixed(1) + "°C";
//     }
//     else{
//     result.textContent = 'Select a Unit'
// }
// }
// advanced for loop
// let fruits = ['apple','banana','coconut'];
// fruits.sort();

// for (let fruit of fruits){
//     console.log(fruit)
// }




//variable scope
// function function1(){
//     let x = 1;
//     console.log(x)
// }
// function function2(){
//     let y = 2;
//     console.log(x)
// }



//function reusable code
// function happyBirthday(username, age){
//     alert("Happy Birthday!");
//     console.log(` happy bd ${username}`)
//     console.log(`You are ${age}`)
// }
// happyBirthday('Monda', 32);
// happyBirthday('Pookie', 24)
// function add(x,y){
//     return x+y;

// }
// // console.log(add(2,3));
// function isEven(){
//     return number % 2===0? true: false
// }
// let number = prompt("Enter a number");
// console.log(isEven());
 
// function isEmailvalid(){
//     return email.includes('@')? true : false
// }
// let email = "johnDoe1985.com";
// console.log(isEmailvalid());

//number guessing game
// const minNum = 2;
// const maxNum = 100;
// const ans = Math.floor(Math.random() * (maxNum - minNum + 1));

// let attempts = 0;
// let guess;
// let running = true;

// while (running){
//     guess = window.prompt(`Guess a number btn ${minNum} - ${maxNum}`);
//     guess = Number(guess); 
//     if(isNaN(guess)){
//         window.alert('Please enter a valid number!');
//     }
//     else if (guess < minNum || guess > maxNum){
//         window.alert('Your answer is out of the range! Please try again within the given range')
//     }
//     else{   
//         attempts++;
//         if(guess < ans) {
//             window.alert('Too low! Try again ');
//         }
//         else if (guess > ans) {
//             window.alert('Too high! Try again');
//             }
//             else {
//                 window.alert(`Congratulations, you've guessed number ${ans}.Wow! it took you ${attempts} attempts!`)
//     running = false;
// }
//     }
// }








//string slicing string.slice(start,end)
// const email = window.prompt("Enter your email: ");
// let userName = email.slice(0,email.indexOf('@'));
// console.log(`User Name: ${userName}`);

// const fullName = 'Ndege Monda';

// let firstName = fullName.slice(0, fullName.indexOf(' '));
// let lastName = fullName.slice(fullName.indexOf(' '))


// console.log(`First Name: ${firstName}`);
// console.log(`Last Name: ${lastName}`);

// // let userName = 'Ndege';
// let result = userName.startsWith(' ') ? "Your username cant begin with '  '" : `${userName} `
// console.log(result)

//ternary operator shortcut to if condition? codeIfTrue: codeIfFalse;
// let age = 21;
// let message = age >= 18? 'You are an adult': 'You are a minor'
// console.log(message)//output: You are an adult</s>

// let time = 12;
// let greeting = time <= 12? 'Good Morning!' : 'Good Afternoon'
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? 'You are a student' : 'You arent a student'
// console.log(message)

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100? 10: 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount*(discount/100)}`)

//.checked property
// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//     if(myCheckbox.checked){
//         subResult.textContent =`You are subscribed`;
// }
// else{
//     subResult.textContent =`You are not subscribed!`;
// }
// if(visaBtn.checked){
//     paymentResult.textContent += `Payment method: Visa\n`;
// }
// else if (mastercardBtn.checked) {
//     paymentResult.textContent += `Payment method: MasterCard\n`;
//     }
// else if(paypalBtn.checked){
//     paymentResult.textContent += `Payment method: PayPal\n`;
// }
// else{
//     alert(`Please select a payment method!`)
// }
// };
// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){
//     age = myText.value;
//     age = Number(age);
    
//     if(age >= 100){
//         resultElement.textContent =`You are too Old to enter`

//     }
//     else if (age == 0){
//         resultElement.textContent =`You were just born!`
//     }
//     else if (age >=18){
//         resultElement.textContent =`You are Old enough to enter`
//     }
//     else if(age < 0){
//         resultElement.textContent = ('Please Enter a valid Age');
       
//     }
//     else{
//         resultElement.textContent = `Comeback when you ARE 18+`
//     }
// }




// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//     randomNum1 =     Math.floor(Math.random() * max) + min;// Generate a random number between the minimum and maximum values (inclusive)
//     randomNum2 =     Math.floor(Math.random() * max) + min;
//     randomNum3 =     Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;

// }



// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;
// increaseBtn.onclick = function(){
//     count++
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }












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
// const pi = 3.14159;
// let radius;
// let circumference; 
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