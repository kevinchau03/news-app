import { fetchNews } from "../../lib/fetchNews";
import NewsList from "./NewsList";

type Props = {
  params: { category: Category }
}

async function Home({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews("General", "", true);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default Home;


