function likes(names) {
    if (names.length === 0)
        return 'no one likes this'
    else if (names.length === 1)
        return `${names[0]} likes this`
    else if (names.length < 4) {
        let str = '';
        for (let i = 0; i < names.length; i++) {
            if (i == names.length - 1)
                str += ` and ${names[i]} like this`;
            else if (i == names.length - 2)
                str += `${names[i]}`;
            else
                str += `${names[i]}, `;

        }
        return str;
    }
    else {
        let str = `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
        return str;
    }
}

console.log(likes([])) // must be "no one likes this"
console.log(likes(["Peter"])) // must be "Peter likes this"
console.log(likes(["Jacob", "Alex"])) // must be "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])) // must be "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])) // must be "Alex, Jacob and 2 others like this"
