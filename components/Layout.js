import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';

function Layout({ children, title = 'Johakyu' }) {
	return (
		<div className="h-screen flex flex-col">
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
