import { Link } from 'react-router-dom';
import { TypePlayer, newPlayer, newMonster, TypeMonster } from '../../utils/type'
import styles from './FormPVE.module.css'

import { useEffect, useState } from "react";

function FormPVE() {
  const [counterIdPlayer, setCounterIdPlayer] = useState(1);
  const [counterIdMonster, setCounterIdMonster] = useState(1);
  const [players, setPlayers] = useState<TypePlayer[]>([])
  const [monsters, setMonsters] = useState<TypeMonster[]>([])

  useEffect(() => {
    setCounterIdPlayer(players.length + 1)
  }, [players])

  useEffect(() => {
    setCounterIdMonster(monsters.length + 1)
  }, [monsters])

  const addNewPlayer = () => {
    if (counterIdPlayer === 5) return;
    const newObj = {
      id: counterIdPlayer,
      ...newPlayer
    }

    setPlayers([
      ...players,
      newObj
    ])
  }

  const updatePlayer = (name: string, value: string, index: number) => {
    const newObj = players.map((player) => {
      if (player.id === index + 1) {
        return {
          ...player,
          [name]: value
        }
      }
      return player
    })

    setPlayers(newObj);
  }

  const removePlayer = (index: number) => {
    const newArr = players.filter((player) => (
      player.id !== index + 1
    ))
    verifyIdsPlayer(newArr)
  }

  const verifyIdsPlayer = (arr: TypePlayer[]) => {
    const newArr = arr.map((player, index) => {
      return {
        ...player,
        id: index +1
      }
    })

    setPlayers(newArr);
  }

  const verifyStatsPLayer = (index: number, name: string, type: "race" | "class") =>
    (players[index][type] === name) ? true : false

  const addNewMonster = () => {
    if (counterIdMonster === 7) return;
    const newObj = {
      id: counterIdMonster,
      ...newMonster
    }

    setMonsters([
      ...monsters,
      newObj
    ])
  }

  const updateMonster = (value: string, index: number) => {
    const newObj = monsters.map((monster) => {
      if (monster.id === index + 1) {
        return {
          ...monster,
          type: value
        }
      }
      return monster
    })

    setMonsters(newObj);
  }

  const removeMonster = (index: number) => {
    const newArr = monsters.filter((player) => (
      player.id !== index + 1
    ))
    verifyIdsMonster(newArr)
  }

  const verifyIdsMonster = (arr: TypeMonster[]) => {
    const newArr = arr.map((monster, index) => {
      return {
        ...monster,
        id: index +1
      }
    })

    setMonsters(newArr);
  }

  const verifyStatsMonster = (index: number, name: string) =>
    (monsters[index].type === name) ? true : false

  return (
    <>
      <div>
        <button
          onClick={ addNewPlayer }
          className={ styles.buttonNewPlayer }>
          Novo Jogador
        </button>
        <button
          onClick={ addNewMonster }
          className={ styles.buttonNewMonster }>
          Novo Monstro
        </button>
      </div>
      <div className={ styles.container}>
        <form>
          {players.map((_, index) => (
            <div className={ styles.container } key={index}>
              <label>
                <p className={ styles.p }>Nome:</p>
                <input
                className={ styles.input }
                type="text"
                name="name"
                value={ players[index].name}
                onChange={ ({ target }) => updatePlayer(target.name, target.value, index) }/>
              </label>
              <label>
                <p className={ styles.p }>Raça:</p>
                <select className={ styles.input } name="race" onChange={ ({ target }) => updatePlayer(target.name, target.value, index) }>
                  <option selected={ verifyStatsPLayer(index, "Dwarf", "race") } value="Dwarf">Dwarf</option>
                  <option selected={ verifyStatsPLayer(index, "Elf", "race") } value="Elf">Elf</option>
                  <option selected={ verifyStatsPLayer(index, "Halfling", "race") } value="Halfling">Halfling</option>
                  <option selected={ verifyStatsPLayer(index, "Orc", "race") } value="Orc">Orc</option>
                </select>
              </label>
              <label>
                <p className={ styles.p }>Classe:</p>
                <select className={ styles.input } name="class">
                  <option selected={ verifyStatsPLayer(index, "Mage", "class") } value="Mage">Mage</option>
                  <option selected={ verifyStatsPLayer(index, "Necromancer", "class") } value="Necromancer">Necromancer</option>
                  <option selected={ verifyStatsPLayer(index, "Ranger", "class") } value="Ranger">Ranger</option>
                  <option selected={ verifyStatsPLayer(index, "Warrior", "class") } value="Warrior">Warrior</option>
                </select>
              </label>
              <button
                onClick={ () => removePlayer(index)}
                className={`${styles.buttonRemove} ${styles.margin50}`}
                type='button'>X</button>
            </div>
          ))}
        </form>
        <form>
          {monsters.length > 0 ? <p className={ styles.p }>Tipo:</p> : ''}
          {monsters.map((_, index) => (
            <div className={ styles.container } key={index}>
              <label>
                <select className={ styles.inputMonster } name="type" onChange={ ({ target }) => updateMonster(target.value, index) }>
                  <option selected={ verifyStatsMonster(index, "Monster") } value="Monster">Monster</option>
                  <option selected={ verifyStatsMonster(index, "Dragon") } value="Dragon">Dragon</option>
                </select>
              </label>
              <button
                onClick={ () => removeMonster(index)}
                className={ styles.buttonRemove}
                type='button'>X</button>
            </div>
          ))}
        </form>
      </div>
      <Link className={ styles.buttonStartPosition} to={ '/game/pve'}>
        <button
          disabled={ players.length > 0 && monsters.length > 0 ? false : true}
          className={ `${styles.buttonStart} ${players.length < 1 || monsters.length < 1 ? styles.opacity : ''}` }>
          Iniciar
        </button>
      </Link>
    </>
  )
}

export default FormPVE