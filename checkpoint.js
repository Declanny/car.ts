// interface Vehicle {
//     make: string;
//     model: string;
//     year: number;
//     start(): void;
// }
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2020);
myCar.start(); // Logs "Car engine started" to the console
