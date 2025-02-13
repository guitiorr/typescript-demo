export interface User{
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

// let user: User = {name: "John", id: 1, email: "owyeah@gmail.com"};
// console.log(user);


let [user1, user2, user3, ...restUsers] : User[] = [
    {name: "Tio1", id: 1, email: " "},
    {name: "Tio2", id: 2, email: " "},
    {name: "Tio3", id: 3, email: " "},
    {name: "Tio4", id: 4, email: " "},
    {name: "Tio5", id: 5, email: " "},
];

console.log(user1);
console.log(user2);
console.log(user3);
console.log(restUsers);

interface Employees extends User{
    salary: number;
}

let employee: Employees = {name: "Tio", id: 1, email: "tio@gmail.com", salary: 1000};
// console.log(employee);

export interface Login{
    login(): User;
}