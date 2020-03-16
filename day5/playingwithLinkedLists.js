const listToArr = {
    list: {},
    createList: function createListformArr(arr) {
        let value = arr.pop();
        if (value == undefined)
            return null;
        this.list['value'] = value;
        this.list['next'] = createArrfromList(arr);
        return this.list;
    },
    createArr: function createArrfromList(list) {
         let arr;

        if (list.next != null) {
            // console.log(list.next);
            this.createArr(list.next);
        } else {
            arr.unshift(list.value);
        }

        return arr;
    }
}

console.log(listToArr.createArr({ value: 1, next: null })) // returns [1]

console.log(listToArr.createArr({ value: 'a', next: { value: 'b', next: { value: 'c', next: null } } })) // returns ['a', 'b', 'c']