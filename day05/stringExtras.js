let stringExtras = {
    repeat: function repeatString(str, num) {
        if (num > 0)
            return str + repeatString(str, --num);
        else
            return '';
    },
    leftPad: function leftPadString(str, num) {
        if (num < 1)
            num = 0;
        if ((num - str.length) < 1)
            num = 0;
        else
            num = num - str.length;
        return this.repeat('', num) + str;
    },
    rightPad: function rightPadString(str, num) {
        if (num < 1)
            num = 0;
        if ((num - str.length) < 1)
            num = 0;
        else
            num = num - str.length;
        return str + this.repeat(' ', num);
    },
    pad: function padString(str, num) {
        let numLeft, numRigth;
        if (num < 1) {
            numLeft = 0;
            numRigth = 0;
        }
        if ((num - str.length) < 1) {
            numLeft = 0;
            numRigth = 0;
        }
        else {
            numLeft = Math.ceil((num - str.length) / 2);
            numRigth = Math.floor((num - str.length) / 2);
        }
        return this.repeat('-', numLeft) + str + this.repeat('-', numRigth);
    },
    capitalize: function (str) {
        let strArr=str.split('');
        strArr[0]=strArr[0].toUpperCase();
        return strArr.join('');
    }
}

let a = 'you';
console.log(stringExtras.repeat(a, 0)); // returns 'youyouyou'
console.log(stringExtras.repeat(a, 3)); // returns 'youyouyou'
console.log(stringExtras.repeat(' ', 6)); // returns '      '
console.log(stringExtras.leftPad(a, 5)); // returns '  you'
console.log(stringExtras.leftPad(a, 1)); // returns 'you'
console.log(stringExtras.leftPad(a, 3)); // returns 'you'
console.log(stringExtras.leftPad(a, 4)); // returns ' you'
console.log(stringExtras.rightPad(a, 6) + 'me'); // returns 'you   me'
console.log(stringExtras.pad(a, 5)); // returns ' you '
console.log(stringExtras.pad(a, 6)); // returns '  you '
console.log(stringExtras.pad(a, 10)); // returns '    you   '
console.log(stringExtras.capitalize(a)); // returns 'You'