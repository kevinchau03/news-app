import { fetchNews } from "../../lib/fetchNews";
import NewsArticle from "./NewsArticle"; // Import the NewsArticle component
import NewsList from "./NewsList";


async function Home() {
  const category: Category = "Science";
  const news: NewsResponse = await fetchNews(category);
  // Extract the first three articles

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Home;

