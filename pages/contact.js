import Link from 'next/link'

export default function Contact() {
	return (
		<main className="flex flex-col flex-grow p-5 pt-0 sm:w-2/3 sm:mx-auto sm:mt-5 lg:w-2/4 xl:w-2/5">
			<h1 className="font-semibold text-lg">Contact Us</h1>
			<form className="p-5 mt-5 border border-gray-400 flex flex-col justify-center items-center shadow lg:p-10">
				<div className="w-5/6">
					<label htmlFor="fName">Name<span className="text-brand-red">*</span></label>
					<input className="w-full px-2 py-1 border border-gray-400" type="text" id="fName" name="fname" placeholder="First name" required />
				</div>
				<div className="w-5/6 mt-2">
					<input className="w-full px-2 py-1 border border-gray-400" type="text" name="lname" placeholder="Last name"/>
				</div>
				<div className="w-5/6 mt-2">
					<label htmlFor="email">Email<span className="text-brand-red">*</span></label>
					<input className="w-full px-2 py-1 border border-gray-400" type="email" id="email" name="email" placeholder="Watch for typos" required/>
				</div>
				<div className="w-5/6 mt-2">
					<label htmlFor="message">Message<span className="text-brand-red">*</span></label>
					<textarea className="w-full px-2 py-1 border border-gray-400" type="text" id="message" name="message" placeholder="Your message..." required></textarea>
				</div>
				<button className="w-5/6 mt-2 border px-2 py-1 border-gray-400 shadow font-semibold hover:shadow-none hover:bg-brand-red hover:text-white lg:mt-5" type="button">Submit</button>
			</form>
			<div className="w-full h-10 mt-10 flex justify-around items-center">
				<Link href="" >
					<img className="w-10 rounded-full shadow cursor-pointer hover:shadow-none" src="/static/social-icons/facebook.png" alt="facebook" />
				</Link>
				<Link href="" >
					<img className="w-10 rounded-full shadow cursor-pointer hover:shadow-none" src="/static/social-icons/twitter.png" alt="twitter" />
				</Link>
				<Link href="" >
					<img className="w-10 rounded-full shadow cursor-pointer hover:shadow-none" src="/static/social-icons/instagram.png" alt="instagram" />
				</Link>
				<Link href="" >
					<img className="w-10 rounded-full shadow cursor-pointer hover:shadow-none" src="/static/social-icons/youtube.png" alt="youtube" />
				</Link>
			</div>
		</main>
	);
}
