import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type FightersArray = Fighter[] | SimpleFighter[];

export default class PVE extends Battle {
  private _index = 0;
  constructor(
    private _character: Fighter,
    private _enemy: FightersArray,
  ) {
    super(_character);
  }

  override fight(): number {
    this._character.attack(this._enemy[this._index]);
    this._enemy[this._index].attack(this._character);

    // this._enemy.reduce(
    //   (acc: any, curr) => {
    //     if (curr.lifePoints === -1) {
    //       return acc;
    //     }

    //     return acc.push(curr);
    //   },      
    //   [],
    // );

    this.monsterAlive();

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

    if (this._enemy[this._enemy.length - 1].lifePoints === -1) {
      return { winner: 1 };
    }

    return null;
  }

  private monsterAlive() {
    if (this._enemy[this._index].lifePoints === -1) {
      this._index += 1;
    }
  }
}