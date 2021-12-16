// task 1

interface HasLength {
    length: number;
};

function getLength(data: HasLength): number {
    return data.length;
};

console.log(getLength([1, 3, 56]));
console.log(getLength('fhbdfjsd'));