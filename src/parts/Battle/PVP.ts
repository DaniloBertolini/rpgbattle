import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _character: Fighter, private _enemy: Fighter) {
    super(_character);
  }

  override fight(): number {
    this._character.attack(this._enemy);
    this._enemy.attack(this._character);
    const winner = this.isWinner();
    if (winner) {
      return winner.winner;
    }

    return this.fight();
  }

  private isWinner() {
    if (this._character.lifePoints === -1) {
      return { winner: -1 };
    }

    if (this._enemy.lifePoints === -1) {
      return { winner: 1 };
    }

    return null;
  }
}