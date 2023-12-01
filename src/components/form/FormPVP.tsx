import styles from './Form.module.css'

function FormPVP() {
  const players = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <button
        className={ styles.buttonNewPlayer }>
        Novo Jogador
      </button>
      <form>
        {players.map((player, index) => (
          <div className={ styles.container } key={index}>
            <label>
              <p>Nome:</p>
              <input type="text" id='player' placeholder='Name' />
            </label>
            <label>
              <p>Raça:</p>
              <select name="race">
                <option value="dwarf">Dwarf</option>
                <option value="elf">Elf</option>
                <option value="halfling">Halfling</option>
                <option value="Orc">Orc</option>
              </select>
            </label>
            <label>
              <p>Classe:</p>
              <select name="class">
                <option value="mage">Mage</option>
                <option value="ecromancer">Necromancer</option>
                <option value="ranger">Ranger</option>
                <option value="warrior">Warrior</option>
              </select>
            </label>
          </div>
        ))}
      </form>
    </>
  )
}

export default FormPVP