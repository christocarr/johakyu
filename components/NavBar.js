import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';

function NavBar() {

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	function handleClick() {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav className="sm:flex justify-between align-top">
			<div className="flex align-center justify-between">
				<div className="w-24 h-8 cursor-pointer">
					<Link href="/">
						<img src="/static/images/johaku-logo.svg" alt="Johayu logo" />
					</Link>
				</div>
				<div className="sm:hidden">
					<button onClick={handleClick} className={`font-roboto focus:text-gray-700 hover:text-gray-700 ${isMenuOpen ? "hidden" : "block"}`} type="button">Menu</button>
					<svg onClick={handleClick} className={`w-6 h-6 ${!isMenuOpen ? "hidden" : "block"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
			</div>

			<div className={`-ml-2 pt-5 ${isMenuOpen ? "block" : "hidden"} sm:flex sm:py-0`}>
				<Link href="/about">
					{/* <a className="block px-2 py-1 mt-1 font-jura sm:m-0 sm:px-3"><span className="hover:bg-brand-red hover:text-white english-text">About us</span><span className="hover:bg-brand-red hover:text-white japanese-text">私たちに関しては</span></a> */}
					<a className="block px-2 py-1 mt-1 font-jura hover:bg-brand-red hover:text-white english-text sm:m-0 sm:px-3 about"><span>About us</span></a>
				</Link>
				<Link href="/projects">
					<a className="block px-2 py-1 mt-1 font-jura hover:bg-brand-red hover:text-white sm:m-0 sm:px-3 projects"><span>Projects</span></a>
				</Link>
				<Link href="/contact">
					<a className="block px-2 py-1 mt-1 font-jura hover:bg-brand-red hover:text-white sm:m-0 sm:px-3 contact"><span>Contact us</span></a>
				</Link>
				<Link href="/blog">
					<a className="block px-2 py-1 font-jura hover:bg-brand-red hover:text-white sm:px-3 blog"><span>Blog</span></a>
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
