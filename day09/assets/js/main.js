// const myString = 'string';
// const myOtherString = myString;

// function testFn() {
//     console.log("This is the testFn");
//     return 1;
// }
// const myFnVariable = testFn;

// const test = () => {
//     console.log("This is the testFn");
//     return 1;
// }
// const multiply = (a, b) => a * b;
// function multiplySame(a, b) {
//     return a * b;
// };

// const duplicator = a => a * 2;
// function duplicatorSame(a) {
//     return a * 2;
// };
// const duplicator = () => 2 * 2;
// function duplicatorSame() {
//     return 2 * 2;
// };

// const five = () => 5;
// const ten = () => 10;

// const console = () => warn = (str) => console.log(`Warn : ${str}`);
// const console = () => log = (str) => console.log(`Log : ${str}`);
// const console = () => info = (str) => console.log(`Info : ${str}`);

// const customLogger = (str) => five();

// const even = n => (n % 2 === 0);
// const odd = n => (!even(n));
// const above = min => n => n > min;

// const repeatedValue = (value, index, arr) => index !== arr.indexOf(value);

// const filter = (arr, fn) => {
//     let newarr = [];
//     arr.forEach(element => {
//         if (fn(element))
//             newarr.push(element);
//     });
//     return newarr;
// }

// const filter2 = (arr, fn) => {
//     let newarr = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (fn(arr[i], i, arr))
//             newarr.push(arr[i]);
//     }
//     return newarr;
// }

const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

const reduce = (arr, callback, currentvalue) => {
    if (arr.length === 0) {
        return callback(0, currentvalue);
    }
    let value = arr.pop();
    return currentvalue + reduce(arr, callback, value);
};