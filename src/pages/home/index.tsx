import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  const navigate = useNavigate()
  return (
    <div className={ styles.container }>
      <button
      className={ styles.buttonNewGame }
      onClick={ () => navigate('/game')}
      >
      Novo Jogo
      </button>
    </div>
  )
}

export default Home;