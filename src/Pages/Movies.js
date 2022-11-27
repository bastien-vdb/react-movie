import React, { useEffect, useState } from 'react';
import { img_300 } from '../configs/configs';
import MediaCard from '../components/MediaCard';
import Pagination from '@mui/material/Pagination';
import useMovies from '../hooks/useMovies';
import ChipGenres from '../components/ChipGenres';

function Movies(props) {

    const [pageSelected, setPageSelected] = useState(1);
    const [genresURL, setGenresURL] = useState('');

    const [movies, numberOfPage] = useMovies(pageSelected, genresURL);
 
    const changePage = (e, nextElement) => {
        setPageSelected(nextElement);
    }

    return (
        <>
        <ChipGenres setGenresURL={setGenresURL}/>
            <div className='movieGrid'>
                {movies?.map(e => {
                    return (
                        <div key={e.id}>
                            <MediaCard title={e.title} poster={img_300 + e.poster_path} date={e.release_date} />
                        </div>
                    )
                })}
            </div>
            <div className='pagination'>
                <Pagination onChange={changePage} count={numberOfPage} />
            </div>

        </>
    );
}

export default Movies;