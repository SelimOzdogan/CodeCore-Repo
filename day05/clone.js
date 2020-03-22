const clone = function (myobj) {
    let newObj = {};
    for (const property in myobj) {
        newObj[property] = myobj[property];
    }
    return newObj;
}

let objA = {a: 1, b: 2}
console.log(objA);
console.log(clone(objA));
console.log(clone(objA) === objA);