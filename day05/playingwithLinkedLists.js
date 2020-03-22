const listToArr = {
    createList: function createListformArr(arr) {
        let value = arr.shift();
        let obj = {};
        obj['value'] = value;
        obj['next'] = (arr.length === 0 ? null : createListformArr(arr));
        return obj;
    },
    createArr: function createArrfromList(list, arr = []) {
        if (list.next != null) {
            this.createArr(list.next, arr);
            arr.unshift(list.value);
        } else {
            arr.unshift(list.value);
        }
        return arr;
    }
}

console.log(listToArr.createArr({ value: 1, next: null })) // returns [1]

console.log(listToArr.createArr({ value: 'a', next: { value: 'b', next: { value: 'c', next: null } } })) // returns ['a', 'b', 'c']

console.log(listToArr.createList([4])) // returns {value: 4, next: null}

console.log(listToArr.createList([4, 3, 2, 1])) // {value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: null}