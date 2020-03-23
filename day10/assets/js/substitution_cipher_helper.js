class SubstitutionCipher {
    constructor(charset1, charset2) {
        this.charset1 = charset1;
        this.charset2 = charset2;
    }
    encode(str) {
        let encoded = '';
        str.split('').forEach(char => {
            encoded += abc2[abc1.indexOf(char)];
        });
        return encoded;
    }
    decode(str) {
        let decoded = '';
        str.split('').forEach(char => {
            decoded += abc1[abc2.indexOf(char)];
        });
        return decoded;
    }
}

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";
const sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc")) // => "eta"
console.log(sub.encode("xyz")) // => "qxz"
console.log(sub.encode("aeiou")) // => "eirfg"
console.log(sub.decode("eta")) // => "abc"
console.log(sub.decode("qxz")) // => "xyz"
console.log(sub.decode("eirfg")) // => "aeiou"