import { Link } from 'react-router-dom';
import styles from './NewGame.module.css'

function NewGame() {
  return (
    <Link to="/game">
      <button
      className={ styles.buttonNewGame }>
      Novo Jogo
      </button>
    </Link>
  )
}

export default NewGame