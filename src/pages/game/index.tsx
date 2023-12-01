import { useEffect, useState } from 'react';
import styles from './Game.module.css'
import FormPVP from '../../components/form/FormPVP';
import FormPVE from '../../components/form/FormPVE';

function Game() {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonChoice, setButtonChoice] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className={ `${styles.box} ${isVisible ? styles.visivel : ''}` } />
      <main className={ styles.boxLimit }>
        <h1 className={ styles.h1 }>RPG Battle</h1>
        <div className={ styles.buttonsBattle }>
          <button
          onClick={() => setButtonChoice(1)}
          className={ `${styles.button} ${buttonChoice === 1 ? styles.active : ''}` }>PVP</button>
          <button
          onClick={() => setButtonChoice(2)}
          className={ `${styles.button} ${buttonChoice === 2 ? styles.active : ''}` }>PVE</button>
        </div>
    
        {(buttonChoice === 1) && (
          <FormPVP/>
        )}
        {(buttonChoice === 2) && (
          <FormPVE/>
        )}
      </main>
    </>
  )
}

export default Game;