/** 
TypeScript class hierarchy to model a vehicle rental system:
*/

/**
1. Start by creating an abstract class called Vehicle that will serve as
the base class for all types of vehicles in the rental system.  
*/

abstract class Vehicle {

  /** 
  2. Define instance variables in the Vehicle class to store common
  properties for all vehicles, such as make, model, year, and rented. 
  */

  protected make: string;
  protected model: string;
  protected year: number;
  protected rented: boolean;

  /** 
  3. Create a constructor in the Vehicle class that takes in these
  properties as parameters and initializes them. 
  */

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = false;
  }

  /** 
  4. Define accessor methods (getters) for the make, model, year, and
  rented instance variables in the Vehicle class. 
  */

  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  isRented(): boolean {
    return this.rented;
  }

  /** 
  5. Define a mutator method (setter) for the rented instance variable in
  the Vehicle class. 
*/

  setRented(value: boolean): void {
    this.rented = value;
  }

  /** 
  6. Define an abstract method called rentalRate in the Vehicle class that
  will be implemented by each subclass to provide the rental rate for that
  particular type of vehicle. 
  */

  abstract rentalRate(): number;

  /** 
  7. Define two methods in the Vehicle class: rent() and return(). The
  rent() method should check if the vehicle is already rented and provide
  a message to the user accordingly. If the vehicle is available, it
  should set the rented instance variable to true. The return() method 
  should check if the vehicle has been rented and provide a message to the
  user accordingly. If the vehicle has been rented, it should set the 
  rented instance variable to false. 
  */

  rent(): string {
    if (this.isRented()) {
      return "Vehicle is already rented.";
    } else {
      this.setRented(true);
      return "Vehicle rented successfully.";
    }
  }

  returnVehicle(): string {
    if (this.isRented()) {
      this.setRented(false);
      return "Vehicle returned successfully.";
    } else {
      return "Vehicle is not rented.";
    }
  }
}

/** 
8. Create subclasses of Vehicle for each type of vehicle in the rental
system (e.g. Car, Truck, Motorcycle). Each subclass should implement the 
rentalRate method to provide the rental rate for that type of vehicle.
9. Define additional instance variables and methods in the subclasses as 
needed to model the specific characteristics of each type of vehicle.
*/

class Car extends Vehicle {
  private numSeats: number;

  constructor(make: string, model: string, year: number, numSeats: number) {
    super(make, model, year);
    this.numSeats = numSeats;
  }

  rentalRate(): number {
    return 50;
  }

  getNumSeats(): number {
    return this.numSeats;
  }
}

class Truck extends Vehicle {
  private maxLoad: number;

  constructor(make: string, model: string, year: number, maxLoad: number) {
    super(make, model, year);
    this.maxLoad = maxLoad;
  }

  rentalRate(): number {
    return 100;
  }

  getMaxLoad(): number {
    return this.maxLoad;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(make: string, model: string, year: number, engineSize: number) {
    super(make, model, year);
    this.engineSize = engineSize;
  }

  rentalRate(): number {
    return 25;
  }

  getEngineSize(): number {
    return this.engineSize;
  }
}

/** 
10. In the main program, create instances of each type of vehicle and test
the rent() and return() methods to make sure they work as expected
*/

const car1 = new Car("Honda", "Civic", 2020, 5);
console.log(car1.rent()); // "Vehicle rented successfully."
console.log(car1.rent()); // "Vehicle is already rented."
console.log(car1.returnVehicle()); // "Vehicle returned successfully."

const truck1 = new Truck("Ford", "F-150", 2018, 1500);
console.log(truck1.rent()); // "Vehicle rented successfully."
console.log(truck1.returnVehicle()); // "Vehicle returned successfully."

const motorcycle1 = new Motorcycle("Harley Davidson", "Iron 883", 2021, 883);
console.log(motorcycle1.rent()); // "Vehicle rented successfully."
console.log(motorcycle1.returnVehicle()); // "Vehicle returned successfully."
