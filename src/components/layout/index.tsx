import { Outlet } from "react-router-dom";
import styles from './Layout.module.css'

function Layout() {
  return (
    <>
      <main className={ styles.main }/>
      <Outlet />
    </>
  )
}

export default Layout;