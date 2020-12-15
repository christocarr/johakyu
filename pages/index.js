export default function Home() {
	return (
		<main className="font-roboto flex flex-col flex-grow sm:w-2/3 sm:mx-auto sm:mt-5 lg:w-2/4 xl:w-2/5">
			<div className="bg-red-brand-red w-full relative">
				{/* <div className="bg-gray-900 bg-opacity-50 w-full h-full absolute"></div> */}
				<img className="overflow-hidden" src="/static/images/koto_edited.jpg" alt="person playing a koto" />
				<div className="absolute top-0 left-0 p-5 text-white sm">
					<p>Genre-defying</p>
					<p>Innovation <span className="text-brand-red">meets</span> Tradition <span className="text-brand-red">meets</span> Diversity</p>
					<p><span className="text-brand-red">Specialising in Contemporary Asian Arts in the UK</span></p>
				</div>
			</div>

		</main>
	);
}
