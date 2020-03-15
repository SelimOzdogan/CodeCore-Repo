function merge(objA, objB) {
    const newObj = {};
    for (let keyA in objA) {
        for (let keyB in objB) {
            if (keyA === keyB) {
                newObj[keyB] = objB[keyB]
            } else {
                newObj[keyA] = objA[keyA]
                newObj[keyB] = objB[keyB]
            }
        }
    }
    return newObj;
  }
  console.log(merge({a: 1, b: 2}, {c: 3, b:1, d: 4, a:2}));
  console.log(merge(
  {firstName: 'Ron', lastName: 'Weasley', occupation: 'Wizard'},
  {firstName: 'Harry', lastName: 'Potter'}
  ));
  
