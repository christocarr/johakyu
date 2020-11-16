import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function About() {
	return (
		<div className={styles.container}>
			<Layout title="About Us">
				<main className={styles.main}>
					<h1 className={styles.title}>About Us</h1>
				</main>
			</Layout>
		</div>
	);
}
