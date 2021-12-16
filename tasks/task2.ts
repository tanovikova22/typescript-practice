//task 2

interface FullName {
    firstName: string;
    lastName: string;
};

const makeFullName = (obj: FullName):{} => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
});

console.log(makeFullName({ firstName: 'Test', lastName: 'test' }));

const user = { firstName: 'Tanya', lastName: 'Novikova', age: 20 };
console.log(makeFullName(user));