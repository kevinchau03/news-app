import { fetchNews } from "../../lib/fetchNews";
import NewsList from "./NewsList";

type Props = {
  params: { category: Category }
}

async function Home({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews("General", "", false);
  return (
    <div>
      <h1 className="headerTitle">General</h1>
      <NewsList news={news} />
    </div>
  );
}

export default Home;


