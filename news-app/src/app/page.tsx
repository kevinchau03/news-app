import { categories } from "../../constants";
import fetchNews from "../../lib/fetchNews";


async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(',') );

  return (
    <div>
      /* News List */

    </div>
  )
}
