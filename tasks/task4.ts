//task 4

type UserType = {
    name: string
    age: number
}

type CoordinatesType = {
    x: number
    y: number
}
type ServerResponseType<T> = {
    responseCode: number,
    data: T
}

const resp1: ServerResponseType<UserType> = {
    responseCode: 200,
    data: {
        name: 'John',
        age: 20
    }
};


const resp2: ServerResponseType<CoordinatesType> = {
    responseCode: 200,
    data: {
        x: 55,
        y: 22
    }
}

console.log(resp1, resp2);

