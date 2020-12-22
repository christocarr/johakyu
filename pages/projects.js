
export default function Projects() {
	const japaneseHeading = 'プロジ ェクト'
	return (
		<main className="font-roboto flex flex-col flex-grow p-5 pt-0 sm:w-2/3 sm:mx-auto sm:mt-5 lg:w-2/4 xl:w-2/5">
			<h1 className="text-xl font-jura  text-brand-red font-bold sm:ml-11">Projects</h1>
			<div className="flex mt-5">
				<h2 className="hidden w-8 text-brand-red font-semibold tracking-widest sm:flex sm:flex-col-rev japanese__heading" lang="ja">{japaneseHeading}</h2>

				<div className="flex flex-col sm:pl-3">
				<p><span className="text-brand-red font-semibold">「序」</span>A beginning full of purpose soon fragments, leaps forth.</p>
				<p className="mt-2"><span className="text-brand-red font-semibold">「 破 」</span>Then navigate this steady flow, it starts to pull fast.</p>
				<p className="mt-2"><span className="text-brand-red font-semibold">「 急 」</span>A dramatic flourish bores life to the emptiness it leaves behind.</p>
				<p className="mt-2">A moment's pause before we start… and start again we do...</p>
				<p className="mt-2"><span className="text-brand-red font-semibold">「 序 破 急 」</span>A tri-part journey, one seamless breath governed solely by the intention that was made. </p>
			</div>
			</div>
		</main>
	);
}
