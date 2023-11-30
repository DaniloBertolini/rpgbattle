import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _ability: EnergyType = 'mana';
  static counter = 0;

  constructor() {
    super('Necromancer');
    Necromancer.counter += 1;
  }

  get energyType(): EnergyType {
    return this._ability;
  }

  static override createdArchetypeInstances() {
    return Necromancer.counter;
  }
}