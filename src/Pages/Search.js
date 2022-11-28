import React, { useEffect, useRef, useState } from 'react';
import MediaCard from '../components/MediaCard';
import { img_300 } from '../configs/configs';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import TabsSearch from '../components/TabsSearch';
import Pagination from '@mui/material/Pagination';

function Search(props) {

    const searchInput = useRef(null);
    const [productType, setProductType] = useState('movie');
    const [pageSelected, setPageSelected] = useState(1);
    const [numberOfPages, setNumberOfPage] = useState(null);

    const [resultData, setResultData] = useState(null);
    const [isMatchData, setIsMatchData] = useState(false);

    useEffect(() => {
        fetchSearch('changeTabs');
    },[productType, pageSelected]);

    const fetchSearch = async (e) => {
        if (e.type === 'click' || e.key === 'Enter' || e === 'changeTabs') {
            const expressionSearched = searchInput.current.value;
            if (expressionSearched !== '') {
                const result = await fetch(`https://api.themoviedb.org/3/search/${productType}?api_key=${process.env.REACT_APP_API_KEY_MOVIE
                    }&language=en-US&query=${expressionSearched}&page=${pageSelected}&include_adult=false`);

                const resultJson = await result.json();

                if (resultJson.total_results > 0) {
                    setIsMatchData(true);
                    setResultData(resultJson.results);
                    setNumberOfPage(resultJson.total_pages)
                }
                else {
                    setIsMatchData(false)
                }
            }
        }
    }

    const changePage = (e,page)=>{
        setPageSelected(page);
        window.scroll(0,0);
    }

    return (
        <>
            <div style={{ margin: '2em', display: 'flex', justifyContent: 'center', gap: '1em' }}>
                <TabsSearch setProductType={setProductType} productType={productType} />
                <OutlinedInput inputRef={searchInput} placeholder='Search' inputProps={{ onKeyDown: fetchSearch }} />
                <Button onClick={fetchSearch} variant="contained">Search</Button>
            </div>

            <div className='movieGrid'>
                {isMatchData ? resultData?.map(e => {
                    return (
                        <div key={e.id}><MediaCard productType={productType} title={e.title} poster={img_300 + e.poster_path} date={e.release_date} overview={e.overview} id={e.id}/></div>
                    )
                })
                    :
                    <div style={{ fontWeight: 'bold', fontSize: '1.5em', margin: '3em 0' }}>No result for now</div>
                }
            </div>
            <div className='pagination'>
                    <Pagination page={pageSelected} onChange={changePage} count={numberOfPages} />
                </div>
        </>
    );
}

export default Search;