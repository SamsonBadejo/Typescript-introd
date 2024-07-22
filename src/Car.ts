// Car.ts
import { Vehicle } from './Vehicle';

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("%cCar engine started", "color: green; font-weight: bold; transition: color 0.5s, font-weight 0.5s;");
    }
}

export { Car };
