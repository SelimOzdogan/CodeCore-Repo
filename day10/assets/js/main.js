const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

const reduce = (arr, callback, currentvalue) => {
    if (arr.length === 0) {
        return callback(0, currentvalue);
    }
    let value = arr.pop();
    return currentvalue + reduce(arr, callback, value);
};
®\