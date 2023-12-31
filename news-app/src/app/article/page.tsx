import { notFound } from "next/navigation";

type Props = {
    searchParams?: DataEntry;
}

function ArticlePage({ searchParams }: Props) {

  const article: DataEntry = searchParams ?? { 
    title: "", 
    author: "", 
    source: "", 
    description: "", 
    url: "", 
    image: "",
    category: "",
    country: "",
    language: "",
    published_at: ""
  };
  return (
    <article className="pt-10">
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
      {article.image && (
                <img
                src={article.image}
                alt={article.title}
                className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-t-lg shadow-md"
                />            
        )}
        <div className="px-10">
            <h1 className="headerTitle px-0 no-underline pb-2">
                {article.title}
            </h1>
            <div className="flex divide-x-2 space-x-4">
                <h2 className="font-bold">By: {article.author || 'Unknown'}</h2>
                <h2 className="font-bold pl-4">From: {article.source || 'Uknown'}</h2>
                <p className="pl-4">{article.published_at}</p>
            </div>
            <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  )
}

export default ArticlePage;
