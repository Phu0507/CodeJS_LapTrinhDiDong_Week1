// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// 1. Store Mark's and John's mass and height in variables

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

// 2. Calculate both their BMIs using the formula (you can even implement both
//     versions)

let BMIMark = massMark / (heightMark * heightMark) 
console.log(BMIMark)

let BMIJohn = massJohn / (heightJohn * heightJohn) 
console.log(BMIJohn)

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

let markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

if(markHigherBMI === true)
    console.log("Mark's BMI is higher than John's!")
else
    console.log("John's BMI is higher than Mark's!")

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

if(markHigherBMI === true)
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
else
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)