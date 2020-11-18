import NavBar from './NavBar';
import styles from '../styles/Header.module.css';

function Header() {
	return (
		<header className={styles.header}>
			<h1>序 破 急</h1>
			<NavBar />
		</header>
	);
}

export default Header;
