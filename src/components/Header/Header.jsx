import { Link } from 'react-router-dom';
import logo from '../../assets/logokasa.png';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/'>
                <img src={logo} alt='Kasa Logo' className={styles.logo}/>
            </Link>
                <nav className={styles.nav}>
                    <Link to='/' className={styles.link}>Accueil</Link>
                    <Link to="/about" className={styles.link}>A Propos</Link>
                </nav>
        </header>
    )
}

export default Header