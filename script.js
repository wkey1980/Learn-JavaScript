// function test() {
//     for (var i = 0; i < 5; i++) {
//         console.log('loop: ' + i);
//     }
//     console.log('After: ' + i);
// }

// test();
// console.log('After: ' + i);

// console.log(5 == '5');
// console.log(5 === '5');

// console.log(true == 1);
// console.log(true === 1);

// console.log('Testing Equality' === new String('Testing Equality'));

// let name = 'will';
// let age = null;
// console.log(name, age);


// const numbers = [];
// for (let i = 0; i <= 50; i++) {
//     if (i > 2) break;
//     numbers.push(i);
// }
// console.log(numbers);

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < numbers.length; i++) {
    if (i > 5) break;
    console.log(numbers[i]);
}