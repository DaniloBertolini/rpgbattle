import { useEffect, useState } from 'react'
import styles from './FormPVP.module.css'
import { TypePlayer, newPlayer } from '../../utils/type';
import { Link } from 'react-router-dom';

function FormPVP() {
  const [counterId, setCounterId] = useState(1);
  const [players, setPlayers] = useState<TypePlayer[]>([])

  useEffect(() => {
    setCounterId(players.length + 1)
  }, [players])

  const addNewPlayer = () => {
    if (counterId === 5) return;
    const newObj = {
      id: counterId,
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
    const newObj = players.filter((player) => (
      player.id !== index + 1
    ))
    verifyIds(newObj)
  }

  const verifyIds = (newObj: TypePlayer[]) => {
    const newObj2 = newObj.map((player, index) => {
      return {
        ...player,
        id: index +1
      }
    })

    setPlayers(newObj2);
  }

  const veifyStats = (index: number, name: string, type: "race" | "class") =>
    (players[index][type] === name) ? true : false

  return (
    <>
      <button
        onClick={ addNewPlayer }
        className={ styles.buttonNewPlayer }>
        Novo Jogador
      </button>
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
                <option selected={ veifyStats(index, "Dwarf", "race") } value="Dwarf">Dwarf</option>
                <option selected={ veifyStats(index, "Elf", "race") } value="Elf">Elf</option>
                <option selected={ veifyStats(index, "Halfling", "race") } value="Halfling">Halfling</option>
                <option selected={ veifyStats(index, "Orc", "race") } value="Orc">Orc</option>
              </select>
            </label>
            <label>
              <p className={ styles.p }>Classe:</p>
              <select className={ styles.input } name="class">
                <option selected={ veifyStats(index, "Mage", "class") } value="Mage">Mage</option>
                <option selected={ veifyStats(index, "Necromancer", "class") } value="Necromancer">Necromancer</option>
                <option selected={ veifyStats(index, "Ranger", "class") } value="Ranger">Ranger</option>
                <option selected={ veifyStats(index, "Warrior", "class") } value="Warrior">Warrior</option>
              </select>
            </label>
            <button
              onClick={ () => removePlayer(index)}
              className={ styles.buttonRemove}
              type='button'>X</button>
          </div>
        ))}
      </form>
      <Link className={ styles.buttonStartPosition} to={ '/game/pvp'}>
        <button
          disabled={ players.length > 1 ? false : true}
          className={ `${styles.buttonStart} ${players.length <= 1 ? styles.opacity : ''}` }>
          Iniciar
        </button>
      </Link>
    </>
  )
}

export default FormPVP