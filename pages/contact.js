
import styles from '../styles/Home.module.css';

export default function Contact() {
	return (
		<main className="flex flex-col flex-grow p-5 pt-0">
			<h1 className="font-semibold text-lg">Contact Us</h1>
			<form className="p-5 mt-5 border border-gray-400 flex flex-col justify-center items-center">
				<div className="w-5/6">
					<label htmlFor="fName">First Name:</label>
					<input className="w-full px-2 py-1 border border-gray-400" type="text" id="fName" name="fname" required />
				</div>
				<div className="w-5/6 mt-2">
					<input className="w-full px-2 py-1 border border-gray-400" type="text" name="lname" placeholder="Last name"/>
				</div>
				<div className="w-5/6 mt-2">
					<input className="w-full px-2 py-1 border border-gray-400" type="email" name="email" placeholder="Emai" required/>
				</div>
				<div className="w-5/6 mt-2">
					<textarea className="w-full px-2 py-1 border border-gray-400" type="text" name="message" placeholder="Your message..." required></textarea>
				</div>
				<button className="w-5/6 mt-2 border px-2 py-1 border-gray-400 shadow font-semibold hover:shadow-none hover:bg-brand-red hover:text-white" type="button">Submit</button>
			</form>
			<div className="w-full h-auto mt-5 flex justify-around items-center">
			</div>
		</main>
	);
}
