// Define a function to fetch news data
export async function fetchNews(category: Category): Promise<NewsResponse> {
  const apiKey = process.env.NEWS_API_KEY; // Replace with your API key
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=US&category=${category}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch news data for category: ${category}`);
    }

    const data = await response.json();
    return organizeNewsData(data);
  } catch (error) {
    throw error;
  }
}

// Define a function to organize the fetched news data
function organizeNewsData(apiData: any): NewsResponse {
  // Parse and organize the API data into the NewsResponse structure
  const newsResponse: NewsResponse = {
    pagination: {
      count: apiData.totalResults,
      limit: apiData.articles.length,
      offset: 0, // You can set an appropriate offset here
      total: apiData.totalResults,
    },
    data: apiData.articles.map((article: any) => ({
      author: article.author || null,
      category: article.category,
      country: 'us',
      description: article.description,
      image: article.urlToImage || null,
      language: 'en',
      published_at: article.publishedAt,
      source: article.source.name,
      title: article.title,
      url: article.url,
    })),
  };

  return newsResponse;
}

export default fetchNews;

