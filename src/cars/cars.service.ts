import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Volkswagen',
      model: 'Gol',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Hilux',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    console.log('este es cars service', id);
    const carOne = this.cars.find((car) => car.id == id);

    if (!carOne) throw new NotFoundException(`Car with id ${id} not found`);

    console.log(carOne);
    return carOne;
  }
}
