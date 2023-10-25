import { fetchNews } from "../../lib/fetchNews";
import NewsArticle from "./NewsArticle"; // Import the NewsArticle component
import { useRouter } from "next/router";


async function Home() {
  const category: Category = "Technology";
  const news = await fetchNews(category);

  // Extract the first three articles
  const firstThreeArticles = news.data.slice(0, 6);

  return (
    <div>
      {/* Map through the first three articles and render them using the NewsArticle component */}
      {firstThreeArticles.map((article: DataEntry, index: number) => (
        <NewsArticle key={index} article={article} />
      ))}
    </div>
  );
}

export default Home;

