import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useGenre from '../hooks/useGenre';

function ChipGenres({ setGenresURL, setPageSelected }) {

    const { chipSelected, chipNotSelected, handleAdd, handleDelete, url } = useGenre();

    const chipAdd=(e)=>{
        handleAdd(e);
    }
    const chipDelete=(e)=>{
        handleDelete(e);
    }

    useEffect(()=>{
        setGenresURL(url);
        setPageSelected(1);
    },[url]);

    return (
        <div style={{ margin: '1em' }}>
            <Stack direction="row" spacing={1}>
                <div>
                    {chipNotSelected?.map(e => (
                        <span key={e.id} style={{ margin: '2px' }}>
                            <Chip label={e.name} variant='outlined' onClick={() => chipAdd(e)} />
                        </span>
                    ))}
                    {chipSelected?.map(e => (
                        <span key={e.id} style={{ margin: '2px' }}>
                            <Chip label={e.name} variant='primary' onDelete={() => chipDelete(e)} />
                        </span>
                    ))}
                </div>
            </Stack>
        </div>
    );
}

export default ChipGenres;