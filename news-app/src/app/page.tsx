import { fetchNews } from "../../lib/fetchNews";
import NewsList from "./NewsList";

type Props = {
  params: { category: Category }
}

async function Home({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default Home;


