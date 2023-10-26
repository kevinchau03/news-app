import { fetchNews } from "../../lib/fetchNews";
import NewsList from "./NewsList";


async function Home() {
  const category: Category = "Sports";
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Home;

