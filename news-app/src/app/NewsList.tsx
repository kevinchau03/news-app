import NewsArticle from "./NewsArticle";

type Props = {
    news: NewsResponse;
}

function NewsList({ news }: Props) {

    const firstSix = news.data.slice(0,6);

    return(
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
            {firstSix.map((article) => (
                <NewsArticle key={article.title} article={article} />
            ))}
        </main>
    )
}

export default NewsList;