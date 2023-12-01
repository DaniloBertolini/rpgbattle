import ButtonNewGame from '../../components/button/ButtonNewGame';
import styles from './Home.module.css'

function Home() {
  return (
    <div className={ styles.container }>
      <ButtonNewGame />
    </div>
  )
}

export default Home;