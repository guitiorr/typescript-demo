"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Users = {
    name: '',
    age: 1,
    email: '',
};
// let user: User = {name: "John", id: 1, email: "owyeah@gmail.com"};
// console.log(user);
let [user1, user2, user3, ...restUsers] = [
    { name: "Tio1", id: 1, email: " " },
    { name: "Tio2", id: 2, email: " " },
    { name: "Tio3", id: 3, email: " " },
    { name: "Tio4", id: 4, email: " " },
    { name: "Tio5", id: 5, email: " " },
];
console.log(user1);
console.log(user2);
console.log(user3);
console.log(restUsers);
let employee = { name: "Tio", id: 1, email: "tio@gmail.com", salary: 1000 };
//# sourceMappingURL=interface.js.map