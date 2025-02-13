"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    login() {
        return { name: "John", id: 1, email: "owyeah@gmail.com" };
    }
    getNameWithAddress() {
        return `${this.name} lives in ${this.address.street}, ${this.address.city}, ${this.address.state} (${this.address.pin})`;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let john = new Employee(1, "John Doe", {
    street: "123 Main St",
    city: "Springfield",
    state: "IL",
    pin: "62701"
});
let tio = new Employee(2, "Tio", {
    street: "456 Oak St",
    city: "Metropolis",
    state: "NY",
    pin: "10001"
});
let senator = new Manager(3, "Armstrong", {
    street: "789 Elm St",
    city: "Capital City",
    state: "DC",
    pin: "20001"
});
console.log(senator);
console.log(senator.getNameWithAddress());
// john.id = 1;
// john.name = "John Doe";
// john.address = "123 Main St";
// console.log(john);
// console.log(tio);
// let tioNameWithAddress = tio.getNameWithAddress();
// console.log(tioNameWithAddress);
