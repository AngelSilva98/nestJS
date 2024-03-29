import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService,
  ) {}

  populateDB() {
    // CARS_SEED;
    // BRANDS_SEED;

    this.CarsService.fillCarsWithSeedData(CARS_SEED);
    this.BrandsService.fillCarsWithSeedData(BRANDS_SEED);
    return 'Seed executed successfullyaa';
  }
}
