import Fighter from "../Fighter/Fighter";
import SimpleFighter from "../Fighter/SimpleFighter";

export default class Monster implements SimpleFighter {
  constructor(protected _lifePoints = 85, private _strength = 63) {
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this.calculateDamage(attackPoints);
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

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }
}