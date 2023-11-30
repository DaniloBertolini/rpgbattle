import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _ability: EnergyType = 'stamina';
  static counter = 0;

  constructor() {
    super('Ranger');
    Ranger.counter += 1;
  }

  get energyType(): EnergyType {
    return this._ability;
  }

  static override createdArchetypeInstances() {
    return Ranger.counter;
  }
}