interface User{
    name: String;
    age?: number;
    id: number;
    email: string;
}

var Users = {
    name: '',
    age: 1,
    email: '',
}

let user: User = {name: "John", id: 1, email: "owyeah@gmail.com"};
console.log(user);

interface Employees extends User{
    salary: number;
}

let employee: Employees = {name: "Tio", id: 1, email: "tio@gmail.com", salary: 1000};
console.log(employee);

export interface Login{
    login(): User;
}