import {useState} from 'react'
import Link from 'next/link';

function NavBar() {

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	function handleClick() {
		setIsMenuOpen(!isMenuOpen)
	}

	console.log(isMenuOpen)

	return (
		<nav className="flex justify-between items-center relative">

			<div className="flex flex-row justify-between w-full md:w-1/2">
				<h1>序 破 急</h1>
				<p className={`${isMenuOpen ? 'hidden' : 'block'} md:hidden`} onClick={handleClick}>Menu</p>
			</div>

			<ul className={`w-1/2 md:flex md:flex-row md:justify-end ${isMenuOpen ? 'absolute z-50 right-0 top-0 w-full flex flex-col items-end' : 'hidden'}`}>
				<li className="md:hidden" onClick={handleClick}>X</li>
				<li>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About us</a>
					</Link>
				</li>
				<li>
					<Link href="/projects">
						<a>Current Projects</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Contact us</a>
					</Link>
				</li>
			</ul>

		</nav>
	);
}

export default NavBar;
