interface NewsArticleProps {
    article: DataEntry;
  }
  
  const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => {
    return (
        <article className="bg-gray-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-gray-400 transition-all duration-200 ease out">
            {article.image && (
                <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover rounded-t-lg shadow-md aspect-w-1/2"
                />            
            )}
        <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col p-5">
                <h2 className="font-bold">{article.title}</h2>
                <section className="mt-2 flex-1 ">
                    <p className="text-xs line-clamp-4">{article.description}</p>
                </section>
                <footer>
                    <p className="font-bold">{article.source}</p>
                </footer>
            </div>
        </div>
        </article>
    );
  };
  
  export default NewsArticle;
