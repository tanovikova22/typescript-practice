// task 5

function addValue<T>(arr: Array<T>, value: T): Array<T> {
    return [...arr, value]
};


console.log(addValue([4, 5], 6));
console.log(addValue([4, 5, 'str'], 'John'));
console.log(addValue([4, 5, 'str', true], false));
// console.log(addValue([4, 5], 'John')); // error , 'John' is not a type included in string