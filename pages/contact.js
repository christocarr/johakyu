import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Contact() {
	return (
		<div className={styles.container}>
			<Layout title="Contact Us">
				<main className={styles.main}>
					<h1 className={styles.title}>Contact Us</h1>
				</main>
			</Layout>
		</div>
	);
}
