import getRandomInt from '../utils';
import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static raceCounter = 0;

  constructor() {
    super('Dwarf', getRandomInt(1, 10));
    Dwarf.raceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances() {
    return Dwarf.raceCounter;
  }
}