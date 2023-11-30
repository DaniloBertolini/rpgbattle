import getRandomInt from '../utils';
import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  static raceCounter = 0;

  constructor() {
    super('Halfling', getRandomInt(1, 10));
    Halfling.raceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances() {
    return Halfling.raceCounter;
  }
}