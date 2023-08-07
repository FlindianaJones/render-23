import Header from './Header'
import Controls from './Controls'
import Cocktails from './Cocktails'
import Weather from './Weather'
import styles from '../styles/Layout.module.css'

const Layout = () => {
  
  return (
    <div className={styles.gridContainer}>
      <Header />
      <Controls />
      <Cocktails />
      <Weather />
    </div>
  )
}

export default Layout