import React, { useEffect, useState } from 'react';
import MediaCard from '../components/MediaCard';
import { img_300 } from '../configs/configs';
import Pagination from '@mui/material/Pagination';
import useTrends from '../hooks/useTrends';

function Trends(props) {

    const [pageSelected, setPageSelected] = useState(1);
    const { content, numberOfPages } = useTrends(pageSelected);

    const changePage = (e, numOfpage) => {
        setPageSelected(numOfpage);
        window.scroll(0,0);
    }

    return (
        <>
            <div className='movieGrid'>
                {content?.map(e => {
                    return (
                        <div key={e.id}>
                            <MediaCard productType='none' title={e.title} poster={img_300 + e.poster_path} date={e.release_date} />
                        </div>
                    )
                })}
            </div>
            <div className='pagination'>
                <Pagination page={pageSelected} onChange={changePage} count={numberOfPages} />
            </div>
        </>
    );
}

export default Trends;