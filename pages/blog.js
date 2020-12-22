import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import Image from 'next/image';

let client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'article',
  });

  return {
    props: {
      articles: data.items,
    },
    revalidate: 1,
  };
}

export default function Blog({ articles }) {

  const mostRecentArticle = articles.sort((a, b) => (a.sys.createdAt > b.sys.createdAt ? 1 : -1))[0];

  return (
    <main className='font-roboto flex flex-col flex-grow bg-gray-100 pt-0 sm:mt-5'>
      <div className="flex flex-col bg-white sm:flex-row sm:pb-0">
        <div className="w-full h-60 relative">
          <Image
            layout="fill"
            objectFit="cover"
            src={'https:' + mostRecentArticle.fields.articleImage.fields.file.url}
            alt={mostRecentArticle.fields.articleImage.fields.title}
          />
        </div>
        <div className="flex flex-col p-5 sm:w-3/5">
          <div className='flex justify-between align-bottom'>
            <h2 className='text-xl font-jura font-semibold truncate'>{mostRecentArticle.fields.title}</h2>
            <p className="text-gray-600 text-sm">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit"
              }).format(new Date(mostRecentArticle.fields.date))}
            </p>
          </div>
          <div className='h-10 mt-2 text-gray-600'>
            <p className="truncate">{mostRecentArticle.fields.content.content[0].content[0].value}</p>
          </div>
          <Link href={'/articles/' + mostRecentArticle.fields.slug}>
            <a className="uppercase font-bold text-sm text-gray-600 hover:text-brand-red focus:text-brand-red">Read more</a>
          </Link>
        </div>
      </div>
      <div className="px-5 pb-5 sm:px-20">
        {articles.filter(article => article.sys.id !== mostRecentArticle.sys.id).sort((a, b) => (a.sys.createdAt > b.sys.createdAt ? 1 : -1)).map(article => (          
          <div key={article.sys.id} className="flex max-w-lg m-auto bg-white border border-gray-200 mt-5">
            <div className="w-2/5 relative">
              <Image
                layout="fill"
                objectFit="cover"
                src={'https:' + article.fields.articleImage.fields.file.url}
                alt={article.fields.articleImage.fields.title}
              />
            </div>
            <div className="w-3/5 p-8 sm:p-10">
              <Link href={'/articles/' + article.fields.slug}>
                <h3 className="font-jura font-bold truncate cursor-pointer hover:text-brand-red focus:text-brand-red">{article.fields.title}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
