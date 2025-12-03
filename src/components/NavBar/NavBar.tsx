import styles from './NavBar.module.css';

export function NavBar() {
    return <main className={styles.main}>
        <nav className={styles.menu}>
          <ul>
            <li className={styles.menuItems}>
              <a href='#' className={styles.menuItem}>
                {' '}
                Home{' '}
              </a>
            </li>
            <li className={styles.menuItems}>
              <a href='#' className={styles.menuItem}>
                {' '}
                Painel{' '}
              </a>
            </li>
            <li className={styles.menuItems}>
              <a href='#' className={styles.menuItem}>
                {' '}
                Metodologia{' '}
              </a>
            </li>
            <li className={styles.menuItems}>
              <a href='#' className={styles.menuItem}>
                {' '}
                Sobre{' '}
              </a>
            </li>
            <li className={styles.menuItems}>
              <a href='#' className={styles.menuItem}>
                {' '}
                Atualizações{' '}
              </a>
            </li>
          </ul>
        </nav>
        <div className='menu-background-pattern'></div>
      </main>
}