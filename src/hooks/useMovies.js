import React, {useState, useEffect} from 'react';

function useMovies(pageSelected, genresURL, type) {
    const [movies, setMovies] = useState();
    const [numberOfPages, setNumberOfPage] = useState(null);

    const getMovies = async () => {
        const getMovies = await fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.REACT_APP_API_KEY_MOVIE}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageSelected}&with_watch_monetization_types=flatrate&with_genres=${genresURL}`);
        const getMoviesJson = await getMovies.json();
        setMovies(getMoviesJson.results);
        setNumberOfPage(getMoviesJson.total_pages);
        console.log(getMoviesJson);
    }

    useEffect(() => {
        window.scroll(0,0);
        getMovies();
    }, [pageSelected, genresURL]);

    return [movies, numberOfPages]
}

export default useMovies;