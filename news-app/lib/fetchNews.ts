import { gql } from "graphql-request";

const fetchNews = async (
    category?: Category | string, 
    keywords?: string,
    isDynamic?: boolean
    ) => {
    // Graph QL Query
    const qeury = gql`
        query MyQeury(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
            myQuery(
             access_key: $access_key
             categories: $categories
             countries: "us"
             sort: "published_desc"
             keywords: $keywords
             ) {
                data {
                    author
                    category
                    image
                    description
                    country
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
        }
    }`;
    // Fetch function with Next.js 13

    // Sort function by images

    // return res
}

export default fetchNews;

// http://api.mediastack.com/v1/news?access_key=3b60a13c2c9176b29ec63157a7e83c41&