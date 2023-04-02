"use strict";
class Vehicle {
  make;
  model;
  year;
  rented;
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = false;
  }
  getMake() {
    return this.make;
  }
  getModel() {
    return this.model;
  }
  getYear() {
    return this.year;
  }
  isRented() {
    return this.rented;
  }
  setRented(value) {
    this.rented = value;
  }
  rent() {
    if (this.isRented()) {
      return "Vehicle is already rented.";
    } else {
      this.setRented(true);
      return "Vehicle rented successfully.";
    }
  }
  returnVehicle() {
    if (this.isRented()) {
      this.setRented(false);
      return "Vehicle returned successfully.";
    } else {
      return "Vehicle is not rented.";
    }
  }
}
class Car extends Vehicle {
  numSeats;
  constructor(make, model, year, numSeats) {
    super(make, model, year);
    this.numSeats = numSeats;
  }
  rentalRate() {
    return 50;
  }
  getNumSeats() {
    return this.numSeats;
  }
}
class Truck extends Vehicle {
  maxLoad;
  constructor(make, model, year, maxLoad) {
    super(make, model, year);
    this.maxLoad = maxLoad;
  }
  rentalRate() {
    return 100;
  }
  getMaxLoad() {
    return this.maxLoad;
  }
}
class Motorcycle extends Vehicle {
  engineSize;
  constructor(make, model, year, engineSize) {
    super(make, model, year);
    this.engineSize = engineSize;
  }
  rentalRate() {
    return 25;
  }
  getEngineSize() {
    return this.engineSize;
  }
}
const car1 = new Car("Honda", "Civic", 2020, 5);
console.log(car1.rent());
console.log(car1.rent());
console.log(car1.returnVehicle());
const truck1 = new Truck("Ford", "F-150", 2018, 1500);
console.log(truck1.rent());
console.log(truck1.returnVehicle());
const motorcycle1 = new Motorcycle("Harley Davidson", "Iron 883", 2021, 883);
console.log(motorcycle1.rent());
console.log(motorcycle1.returnVehicle());
//# sourceMappingURL=index.js.map
