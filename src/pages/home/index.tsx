import NewGame from '../../components/newGame';
import styles from './Home.module.css'

function Home() {
  return (
    <div className={ styles.container }>
      <NewGame />
    </div>
  )
}

export default Home;