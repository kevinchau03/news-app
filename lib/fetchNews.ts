// Define a function to fetch news data
export async function fetchNews(category: string | Category, term?: string, isSearch?: boolean): Promise<NewsResponse> {
  const apiKey = process.env.NEWS_API_KEY; // Replace with your API key
  const baseUrl = 'https://newsapi.org/v2';
  let url = `${baseUrl}/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
  if (isSearch && term) {
    url = `${baseUrl}/everything?q=${term}&apiKey=${apiKey}`;
  }
  try {
    const response = await fetch(url);
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
    data: apiData.articles
      .filter((article: any) => 
        article.urlToImage && // Check if urlToImage is present and not falsy
        article.urlToImage !== '[Removed]' && // Exclude articles with '[Removed]'
        article.description !== '[Removed]' && article.description !== undefined &&
        article.title !== '[Removed]' && article.title !== undefined &&
        article.url !== '[Removed]' && article.url !== undefined &&
        article.publishedAt !== '[Removed]' && article.publishedAt !== undefined &&
        article.source.name !== '[Removed]' && article.source.name !== undefined
      )
      .map((article: any) => ({
        author: article.author || null,
        category: article.category,
        country: 'us',
        description: article.description,
        image: article.urlToImage !== '[Removed]' ? article.urlToImage : null,
        language: 'en',
        published_at: article.publishedAt,
        source: article.source.name,
        title: article.title,
        url: article.url !== '[Removed]' ? article.url : null,
    })),
  };

  return newsResponse;
}

export default fetchNews;

