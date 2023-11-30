import getRandomInt from '../utils';
import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  static raceCounter = 0;

  constructor() {
    super('Elf', getRandomInt(1, 10));
    Elf.raceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances() {
    return Elf.raceCounter;
  }
}