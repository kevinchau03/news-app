import { categories } from "../../constants";
import { fetchNews } from "../../lib/fetchNews";


async function Home() {
  const news = await fetchNews(categories.join(','))
  console.log(news);
  return (
    <div>
      {/* News List */}
    </div>
  )
}

export default Home
