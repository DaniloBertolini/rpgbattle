import getRandomInt from '../utils';
import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  static raceCounter = 0;

  constructor() {
    super('Orc', getRandomInt(1, 10));
    Orc.raceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances() {
    return Orc.raceCounter;
  }
}