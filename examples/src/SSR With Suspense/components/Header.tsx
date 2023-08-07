import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>Par-t Plannr</div>
        <div className={styles.bottom}>Par-t Plannr</div>
      </div>
    </header>
  )
}

export default Header