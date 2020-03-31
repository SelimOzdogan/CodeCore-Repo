const add = (a, b = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject("errorr forked you up");
            } else {
                const result = a + b;
                resolve(result);
            }
        });
    });
};
const sub = (a, b = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject("errorr forked you up");
            } else {
                const result = a - b;
                resolve(result);
            }
        });
    });
};
const multi = (a, b = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject("errorr forked you up");
            } else {
                const result = a * b;
                resolve(result);
            }
        });
    });
};
const div = (a, b = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject("errorr forked you up");
            } else {
                const result = a / b;
                resolve(result);
            }
        });
    });
};
const pow = (a, b = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject("errorr forked you up");
            } else {
                const result = a ** b;
                resolve(result);
            }
        });
    });
};


add(9)
    .then(value => add(9, value)) // value is 9
    .then(value => add(2, value)) // value is 18
    .then(value => multi(5, value)) // value is 20
    .then(value => div(value, 10)) // r is 100
    .then(promiseValue => console.log(promiseValue)) // r is 10
    .catch(err => console.log(err));
// Refactored solution
const promiseMath = (a, b, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject("errorr forked you up");
            } else {
                resolve(value);
            }
        });
    });
};
const add = (a, b = 0) => {
    return promiseMath(a, b, a + b);
};
const sub = (a, b = 0) => {
    return promiseMath(a, b, a - b);
};
const multi = (a, b = 0) => {
    return promiseMath(a, b, a * b);
};
const div = (a, b = 0) => {
    return promiseMath(a, b, a / b);
};
const pow = (a, b = 0) => {
    return promiseMath(a, b, a ** b);
};





