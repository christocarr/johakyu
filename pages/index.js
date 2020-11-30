export default function Home() {
	return (
		<main className="font-roboto flex flex-col flex-grow sm:w-2/3 sm:mx-auto sm:mt-5 lg:w-2/4 xl:w-2/5">
			<div className="bg-red-brand-red w-full relative">
				{/* <div className="bg-gray-900 bg-opacity-50 w-full h-full absolute"></div> */}
				<img className="overflow-hidden" src="/static/images/koto_edited.jpg" alt="person playing a koto" />
				<div className="absolute top-0 left-0 p-5 text-white font-semibold sm">
					<p>Genre-defying</p>
					<p>Innovation <span className="text-brand-red">meets</span> Tradition <span className="text-brand-red">meets</span> Diversity</p>
					<p><span className="text-brand-red">Specialising in Contemporary Asian Arts in the UK</span></p>
				</div>
			</div>
			<div className="p-5">
				<p><span className="text-brand-red">「序」</span>A beginning full of purpose soon fragments, leaps forth.</p>
				<p className="mt-2"><span className="text-brand-red">「 破 」</span>Then navigate this steady flow, it starts to pull fast.</p>
				<p className="mt-2"><span className="text-brand-red">「 急 」</span>A dramatic flourish bores life to the emptiness it leaves behind.</p>
				<p className="mt-2">A moment's pause before we start… and start again we do...</p>
				<p className="mt-2"><span className="text-brand-red">「 序 破 急 」</span>A tri-part journey, one seamless breath governed solely by the intention that was made. </p>
			</div>
		</main>
	);
}
