import { Link } from 'react-router-dom';
import styles from './ButtonNewGame.module.css'

function ButtonNewGame() {
  return (
    <Link to="/game">
      <button
      className={ styles.buttonNewGame }>
      Novo Jogo
      </button>
    </Link>
  )
}

export default ButtonNewGame