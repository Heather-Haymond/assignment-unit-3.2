console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++) { // account for the count starting at 0
  console.log(i); // expect 1,2,3,4,5
}
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++) { // the count starting at 3 but needs the extra increment 
  console.log(i); // expect 3,4,5
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 2; i <= 10; i += 2) {
  console.log(i);//expect 2,4,6,8,10
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i = 5; i >= 0; i--) {
  console.log(i);//expect 5,4,3,2,1,0
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (const star of stars) { //iterates over each element of the stars array. each time assigning the current star to the variable star.
  console.log(star); // each iteration is saved in this loop. expect 'Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'
}
// expect 'Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i = 0; //index starting point, initialize 
while (i < stars.length) {
  console.log(stars[i]); //console is before the i++ to assure to log the current star in the 0 index
  i++; // increments over each variable index
}
// expect 'Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
i = 0; // resets index
while (i <= 5) {
  console.log(i); // needed to log current index before incrementing 
  i++; //increments by one until conditions are met; i <= 5
}
//expect 0,1,2,3,4,5,
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
i = 10;
while (i >= 5) {
  console.log(i);// logs current index and then increments; saves each loop results
  i--; // decremants; counts down by one 
}
