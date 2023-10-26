import React from 'react';
import fetchNews from '../../../../lib/fetchNews';
import NewsList from '@/app/NewsList';

type Props = {
    params: { category: Category };
}

async function NewsCategory({ params: { category } }: Props) {
    // In this case, you don't need to provide a search term or the topHeadlines flag.
    const news: NewsResponse = await fetchNews(category, "", true);
    
    return (
        <div>
            <h1 className="headerTitle">{category}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default NewsCategory;
