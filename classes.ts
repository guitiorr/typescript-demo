interface Address{
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee {
    #id!: number;
    protected name!: string;
    address!: Address;
   
    constructor(id: number, name: string, address: Address){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress() : string{
        return `${this.name} lives in ${this.address.street}, ${this.address.city}, ${this.address.state} (${this.address.pin})`;
    }
}

class Manager extends Employee{
    constructor(id: number, name: string, address: Address){
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