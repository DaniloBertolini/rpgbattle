import { useEffect, useState } from 'react';
import styles from './Game.module.css'

function Game() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className={ `${styles.form} ${isVisible ? styles.visivel : ''}` }>
    </div>
  )
}

export default Game