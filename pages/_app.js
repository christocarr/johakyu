import Layout from '../components/Layout';
import "fontsource-open-sans";
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
