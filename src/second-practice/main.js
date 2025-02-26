//task 2

// let user = {
//   name: "Іван",
//   age: 30,
//   job: "developer",
// }

// for (key in user) {
//   if (user.hasOwnProperty(key)) {
//     console.log(user[key])
//   }

// }

// task 3
// let num;

// do {
//   num = prompt("Введене число, більше за 100?", 0);
// } while (num <= 100 && num);

// task 4
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) {

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }

//   alert( i );
// }

// task 5

// const fitnessVisits = {
//     visitor1: 'Петренко Петро Петрович – 3',
//     visitor2: 'Сидоров Михайло Миколайович – 2'
// };


// function displayFitnessVisits(visits) {
//     let output = '<h2>Частота відвідувань фітнес центру (тиждень):</h2><ul>';
    
//     for (let key in visits) {
//         output += `<li>${visits[key]}</li>`;
//     }

//     output += '</ul>';
//     document.body.innerHTML = output;
// }


// displayFitnessVisits(fitnessVisits);