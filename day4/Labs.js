function isHomogenous(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (typeof arr[i] !== typeof arr[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isHomogenous([1, 2, 3])) // true
console.log(isHomogenous(['a', 'b', 'c'])) // true
console.log(isHomogenous([[2], 'Xavier'])) // false
console.log(isHomogenous([[2], { colour: 'blue' }])) // false
console.log(isHomogenous([1, '2', 3])) // false

console.log('----fillRectangle----') // false

function fillRectangle(width, height, chr) {
    let arr = [width, height];
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            //      console.log(i+','+j)
            arr[i, j] = chr;

        }
        console.log(arr)
    }
    //return arr;
}
console.log(fillRectangle(2, 2, "*"))
console.log(fillRectangle(5, 3, "🔥"))

console.log('=------alphaRange----')
function alphaRange(str1, str2, step) {
return  String.fromCharCode(str1.charCodeAt(0)+1);
}


console.log(alphaRange('a','c',1));
