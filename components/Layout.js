import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

function Layout({ children, title = 'Johakyu' }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
