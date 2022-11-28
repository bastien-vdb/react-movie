import { useEffect, useState } from "react";

function useTrends(pageSelected) {

    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPage] = useState(null);

    const fetchTrending = async () => {
        const result = await fetch(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY_MOVIE}&page=${pageSelected}`
        );
        const resultJson = await result.json();
        setContent(resultJson.results);
        setNumberOfPage(resultJson.total_pages);
    };

    useEffect(() => {
        fetchTrending();
    }, [pageSelected])

    return { content, numberOfPages }
}

export default useTrends;