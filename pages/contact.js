import Link from 'next/link'

export default function Contact() {
	const japaneseHeading = 'コンタクト'
	return (
		<main className="font-roboto flex flex-col flex-grow p-5 pt-0 sm:w-2/3 sm:mx-auto sm:mt-5 lg:w-2/4 xl:w-2/5">
			<h1 className="text-xl font-jura mb-5 text-brand-red font-bold sm:ml-11 sm:mb-0">Contact Us</h1>
			<div className="flex sm:mt-5">
			<h2 className="hidden w-8 text-brand-red font-semibold tracking-widest sm:flex sm:flex-col-rev japanese__heading">{japaneseHeading}</h2>
			<div className="flex flex-col w-full sm:pl-3">
			<div className="mb-5">
					<p>We are currently working on several projects and will release details soon.</p>
					<p className="mt-5">However, we at Jo-Ha-Kyū Arts are always interested in hearing about your own projects and ideas and will consider anything that falls in line with our company ethos.</p>
					<p className="mt-5">We encourage you to get in contact via our online form. Looking forward to hearing from you!
</p>
					<p className="mt-5 italic">Jo-Ha-Kyū Arts Team</p>
				</div>
			<form className="p-5 border border-brand-red rounded-md bg-brand-red bg-opacity-20 flex flex-col justify-center items-center shadow lg:p-10">
				<div className="w-5/6">
					<label htmlFor="fName">Name<span className="text-brand-red">*</span></label>
					<input className="w-full px-2 py-1 border rounded-md" type="text" id="fName" name="fname" placeholder="First name" required />
				</div>
				<div className="w-5/6 mt-2">
					<input className="w-full px-2 py-1 border rounded-md" type="text" name="lname" placeholder="Last name"/>
				</div>
				<div className="w-5/6 mt-2">
					<label htmlFor="email">Email<span className="text-brand-red">*</span></label>
					<input className="w-full px-2 py-1 border rounded-md" type="email" id="email" name="email" placeholder="Watch for typos" required/>
				</div>
				<div className="w-5/6 mt-2">
					<label htmlFor="message">Message<span className="text-brand-red">*</span></label>
					<textarea className="w-full px-2 py-1 border rounded-md" type="text" id="message" name="message" placeholder="Your message..." required></textarea>
				</div>
				<button className="w-5/6 mt-0.5 mb-2 px-2 py-1 bg-white rounded-md shadow-md font-semibold hover:shadow-none hover:bg-brand-red hover:text-white active:bg-red-600 active:text-white lg:mt-5" type="button">Submit</button>
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
				</div>
			</div>
		</main>
	);
}
