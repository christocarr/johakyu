import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

let client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticPaths() {

  let data = await client.getEntries({
    content_type: 'article'
  })

  return {
    paths: data.items.map(item => ({
      params: {slug: item.fields.slug}
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'article',
    "fields.slug": params.slug
  })

  return {
    props: {
      article: data.items[0]
    }
  }
}


export default function Article(props) {

  console.log(props)

  const {title} = props.article.fields

  return (
    <div>{title}</div>
    // <main className="flex flex-col flex-grow p-5 pt-0 sm:w-2/3 sm:mx-auto sm:mt-5 lg:w-2/4 xl:w-2/5">
    //   <article>
    //     <h1>{article.fields.title}</h1>
    //     <div className="mt-2">
    //       <Image 
    //         width="800" 
    //         height="500" 
    //         className="object-cover object-center" 
    //         src={'https:' + article.fields.articleImage.fields.file.url} alt={article.fields.articleImage.fields.title} 
    //       />
    //     </div>
    //     <p className="mt-2">{documentToReactComponents(article.fields.content)}</p>
    //   </article>
    // </main>

  )
}