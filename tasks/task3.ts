//task 3

function setObj<T, K extends keyof T>(obj : T, key : K, new_value: T[K]): T {
    return {
        ...obj,
        [key]: new_value
    }
};

const person = {
    name: 'John',
    age: 30,
    technical_skills: ['JS', 'TS', 'SCSS', 'HTML'],
    english: true
};
console.log(setObj(person, 'name', 'Stas'));
console.log(setObj(person, 'technical_skills', ['JS', 'TS', 'SCSS', 'HTML', 'React']));
console.log(setObj({ name: 'John', isAdmin: true }, 'isAdmin', false));
// console.log(setObj({ name: 'John', isAdmin: true }, 'isAdmin', 'false')); // error