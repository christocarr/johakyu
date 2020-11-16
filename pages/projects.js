import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Projects() {
	return (
		<div className={styles.container}>
			<Layout title="Current Projects">
				<main className={styles.main}>
					<h1 className={styles.title}>Current Projects</h1>
				</main>
			</Layout>
		</div>
	);
}
