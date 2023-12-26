class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Person: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;

        this.assignOwner(owner);
    }

    assignOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log("Cannot assign owner: Person is under 18 years old.");
        }
    }

    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Owner:");
            this.owner.displayInfo();
        } else {
            console.log("No owner assigned.");
        }
    }
}
const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Doe", 17);

const car1 = new Car("Toyota", "Camry", 2020, "ABC123", person1);
const car2 = new Car("Honda", "Civic", 2018, "XYZ789", person2);

person1.displayInfo();
person2.displayInfo();

car1.displayInfo();
car2.displayInfo();
