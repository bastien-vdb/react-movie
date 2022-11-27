import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useGenre from '../hooks/useGenre';

function ChipGenres({setGenreURL}) {

    const { genres } = useGenre();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [chipNotSelected, setChipNotSelected] = useState();
    const [chipSelected, setChipSelected] = useState();

    useEffect(()=>{
        setChipNotSelected(genres);
    },[genres])

    const handleClick = (el) => {
        let selectedGenresCopy = [...selectedGenres];
        selectedGenresCopy = [...selectedGenresCopy, el];
        setSelectedGenres(()=>[...selectedGenresCopy]);
        const tab=genres.filter(e=>selectedGenresCopy.includes(e.id))
        setChipSelected(tab);


        /***Algo chip */
        const genresCopy = genres.map(e=>e);
        console.log('genresCopy', genresCopy);
        const filtre = genresCopy.filter(e=>selectedGenresCopy.includes(e.id)===false);
        console.log('filtre', filtre)
        setChipNotSelected(filtre);
        
        let genreList = selectedGenresCopy.reduce((acc, curr)=>acc+','+curr);
        setGenreURL(()=>genreList);
        console.log(genreList);
    }

    const handleDelete = ()=>{}

    return (
        <div style={{ margin: '1em' }}>
            <Stack direction="row" spacing={1}>
                <div>
                    {chipNotSelected?.map(e => (
                        <span key={e.id} style={{ margin: '2px' }}>
                            <Chip label={e.name} variant='outlined' onClick={()=>handleClick(e.id)} />
                        </span>
                    ))}
                    {chipSelected?.map(e => (
                        <span key={e.id} style={{ margin: '2px' }}>
                            <Chip label={e.name} variant='primary' onDelete={handleDelete} />
                        </span>
                    ))}
                </div>
            </Stack>
        </div>
    );
}

export default ChipGenres;