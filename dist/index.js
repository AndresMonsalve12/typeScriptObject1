"use strict";
// Vehicle.ts
class Vehicle {
    constructor(brand, model, year) {
        this._brand = brand;
        this._model = model;
        this._year = year;
    }
    getBrand() {
        return this._brand;
    }
    getModel() {
        return this._model;
    }
    getYear() {
        return this._year;
    }
    startEngine() {
        console.log("Vroom!");
    }
}
// Car.ts
class Car extends Vehicle {
    constructor(brand, model, year, numDoors) {
        super(brand, model, year);
        this._numDoors = numDoors;
    }
    getNumDoors() {
        return this._numDoors;
    }
    startEngine() {
        console.log("Vroom! (Car specific sound)");
    }
    drive() {
        console.log("Driving a car...");
    }
}
// ElectricVehicle.ts
class ElectricVehicle extends Vehicle {
}
// Tesla.ts
class Tesla extends Car {
    constructor(brand, model, year, numDoors, batteryCapacity) {
        super(brand, model, year, numDoors);
        this._batteryCapacity = batteryCapacity;
    }
    getBatteryCapacity() {
        return this._batteryCapacity;
    }
    charge() {
        console.log("Charging the Tesla...");
    }
    drive() {
        console.log("Driving a Tesla...");
    }
}
// main.ts
const myCar = new Car("Toyota", "Corolla", 2022, 4);
console.log(myCar.getBrand()); // Output: Toyota
console.log(myCar.getModel()); // Output: Corolla
console.log(myCar.getYear()); // Output: 2022
console.log(myCar.getNumDoors()); // Output: 4
myCar.startEngine(); // Output: Vroom! (Car specific sound)
myCar.drive(); // Output: Driving a car...
const myTesla = new Tesla("Tesla", "Model S", 2022, 4, 75);
console.log(myTesla.getBrand()); // Output: Tesla
console.log(myTesla.getModel()); // Output: Model S
console.log(myTesla.getYear()); // Output: 2022
console.log(myTesla.getNumDoors()); // Output: 4
console.log(myTesla.getBatteryCapacity()); // Output: 75
myTesla.startEngine(); // Output: Vroom! (Car specific sound)
myTesla.drive(); // Output: Driving a Tesla...
myTesla.charge(); // Output: Charging the Tesla...
