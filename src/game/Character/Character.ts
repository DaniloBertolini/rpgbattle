import Energy from "../Energy";
import Fighter from "../Fighter/Fighter";
import Race from "../Races";
import getRandomInt from "../utils";
import Archetype from "../Archetypes";
import SimpleFighter from "../Fighter/SimpleFighter";

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string, race: Race, archetype: Archetype) {
    this._name = name;
    this._dexterity = race.dexterity;
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  get name(): string {
    return this._name;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;

    this.calculateDamage(damage);
    this.isAlive();

    return this.lifePoints;
  }

  private calculateDamage(damage: number) {
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
  }

  private isAlive(): void {
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp() {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = { ...this._energy, amount: 10 };
    this.verifyMaxLifePointsLevelUp();
    this._lifePoints = this._maxLifePoints;
  }

  private verifyMaxLifePointsLevelUp() {
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
  }

  special(enemy: SimpleFighter): void {
    enemy.receiveDamage((this.strength * 2) + this.dexterity);
  }
}