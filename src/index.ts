// Vehicle.ts

class Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
  
    constructor(brand: string, model: string, year: number) {
      this._brand = brand;
      this._model = model;
      this._year = year;
    }
  
    public getBrand(): string {
      return this._brand;
    }
  
    public getModel(): string {
      return this._model;
    }
  
    public getYear(): number {
      return this._year;
    }
  
    public startEngine(): void {
      console.log("Vroom!");
    }
  
  }
  
  // Car.ts
  
  class Car extends Vehicle {
    private _numDoors: number;
  
    constructor(brand: string, model: string, year: number, numDoors: number) {
      super(brand, model, year);
      this._numDoors = numDoors;
    }
  
    public getNumDoors(): number {
      return this._numDoors;
    }
  
    public startEngine(): void {
      console.log("Vroom! (Car specific sound)");
    }
  
    public drive(): void {
      console.log("Driving a car...");
    }
  }
  
  // ElectricVehicle.ts
  
  abstract class ElectricVehicle extends Vehicle {
    public abstract charge(): void;
  }
  
  // Tesla.ts
  
  class Tesla extends Car implements ElectricVehicle {
    private _batteryCapacity: number;
  
    constructor(brand: string, model: string, year: number, numDoors: number, batteryCapacity: number) {
      super(brand, model, year, numDoors);
      this._batteryCapacity = batteryCapacity;
    }
  
    public getBatteryCapacity(): number {
      return this._batteryCapacity;
    }
  
    public charge(): void {
      console.log("Charging the Tesla...");
    }
  
    public drive(): void {
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