import { Link } from "react-router-dom"
import styles from './root.module.css'

const Root = () => {
  return (
    // Oh look, it's a real bitesize demo of css modules in React!
    <div className={styles.main}>
      <div>
        Here's some pages that demonstrate various of the concepts introduced by RenderATL '23 talks!
        <ul>
          <li><Link to='/basic-css'>Basic CSS upgrades</Link></li>
          <li><Link to='/styled-components'>Styled Components</Link></li>
          <li><Link to='/ssr-with-suspense'>SSR with suspense</Link></li>
          <li><Link to='/grid-layout'>Grid based layout</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Root