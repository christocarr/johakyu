export default function About() {
	const japaneseHeading = 'アバウト'
	return (
		<main className="font-roboto flex flex-col flex-grow p-5 pt-0 sm:w-2/3 sm:mx-auto sm:mt-5 lg:w-2/4 xl:w-2/5">
			<h1 className="text-xl font-jura text-brand-red font-semibold sm:ml-11">About Us</h1>
			<div className="flex mt-5">
				<h2 className="hidden w-8 text-brand-red font-semibold tracking-widest sm:flex sm:flex-col-rev japanese__heading">{japaneseHeading}</h2>
				<div className="sm:pl-3">
					<p>Jo-Ha-Kyū… The rhythmic cycle of flow that permeates Japanese culture. With this feeling at its core, Jo-Ha-Kyū Arts was formed. Set up by long term Japan resident and multidisciplinary artist Verity Lane, Jo-Ha-Kyū Arts exists to showcase genre-defying works steeped in Asian culture, with particular emphasis on contemporary East Asian Arts - namely Japan - to a global stage. We aim to celebrate diversity, transcend social barriers, challenge public perceptions and smash stereotypes to bring forth new and exciting ways to inspire our audiences. Heightened creativity steeped in traditional Eastern aesthetics, our high quality works promise to be an immersive experience for those who dare…</p>
					<p className="mt-5">Verity Lane... ​Born in Tottenham and spending a decade in Japan, artist, composer, writer and director Verity Lane specialises in creating multidisciplinary performance works (sound/words/visuals/movement) for traditional Japanese instruments and beyond. Her works are steeped in traditional Japanese aesthetics and aim to showcase different and unknown elements of Japanese culture to a wider audience. </p>
				</div>
			</div>
		</main>
	);
}
