function parseCSV(csvData) {
    let output = [];
    let splitted = csvData.split('\n');
    let titles = splitted[2].split(',');

    let obj = {};
    for (let i = 4; i < splitted.length; i += 2) {
        obj = {};
        let data = splitted[i].split(',');
        if (data[0] === '' || data[0] == undefined)
            continue;
        obj[titles[0]] = data[0];
        obj[titles[1]] = data[1];
        obj[titles[2]] = data[2];
        obj[titles[3]] = data[3];
        output.push(obj);
    }
    return output;
}


let csvData = `

id,firstName,lastName,email

1,jane,doe,wildmirror@yahoo.com

2,john,doe,tamepool@hotmail.com

3,sherlock,holmes,mag@glass.com

4,natalia,romanov,8legged@ninja.com

5,peter,quill,starlord@gmail.com

`

let users = parseCSV(csvData)
console.log(users)
