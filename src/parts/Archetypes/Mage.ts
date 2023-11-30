import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _ability: EnergyType = 'mana';
  static counter = 0;

  constructor() {
    super('Mage');
    Mage.counter += 1;
  }

  get energyType(): EnergyType {
    return this._ability;
  }

  static override createdArchetypeInstances() {
    return Mage.counter;
  }
}