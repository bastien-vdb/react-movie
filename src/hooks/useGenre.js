import React, { useEffect, useState } from 'react';

function useGenre(props) {
    const [genres, setGenres] = useState(null);
    const fetchGenres = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_MOVIE}&language=en-US`);
        const dataJson = await data.json();
        setGenres(dataJson.genres);
      };
      useEffect(()=>{
        fetchGenres();
      },[])
    return {genres};
}

export default useGenre;