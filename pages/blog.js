import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import Image from 'next/image'

let client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticProps() {
  
  let data = await client.getEntries({
    content_type: 'article'
  })
  
  return {
    props: {
      articles: data.items
    }
  }
}

export default function Blog({ articles }) {

	return (
		<main className="flex flex-col flex-grow p-5 pt-0 sm:w-2/3 sm:mx-auto sm:mt-5 lg:w-2/4 xl:w-2/5">
			<h1 className="font-semibold text-lg">Blog</h1>
			<h2 className="mt-2 -mb-2">Recent Posts</h2>
      {articles.sort((a, b) => a.sys.createdAt > b.sys.createdAt ? 1 : -1).map(article => (
      
        <div className="w-full mt-5 p-5 border shadow lg:p-10" key={article.sys.id}>
          <div>
            <Image 
              width="800" 
              height="500" 
              className="object-cover object-center overflow-hidden" 
              src={'https:' + article.fields.articleImage.fields.file.url} alt={article.fields.articleImage.fields.title} 
            />
          </div>
          <div className="flex justify-between mt-2"><h3>{article.fields.title}</h3><p>{article.fields.date.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1')}</p></div>
          <p className="truncate mt-2">{documentToReactComponents(article.fields.content)}</p>
          <Link href={'/articles/' + article.fields.slug}>
            <button className="w-full mt-2 border px-2 py-1 border-gray-400 shadow font-semibold hover:shadow-none hover:bg-brand-red hover:text-white lg:mt-5" type="button">Read more</button>
          </Link>
        </div>
      
      ))}
      {/* <div className="mt-5">
        <h2>Archived Posts</h2>
        <div className="w-full mt-3 p-5 border shadow">

        </div>
      </div> */}
		</main>
	);
}