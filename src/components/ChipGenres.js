import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useGenre from '../hooks/useGenre';

function ChipGenres({ setGenresURL }) {

    const [chipNotSelected, setChipNotSelected] = useState();
    const [chipSelected, setChipSelected] = useState([]);
    const { genres } = useGenre();

    useEffect(() => {
        setChipNotSelected(() => genres);
    }, [genres]);

    const handleAdd = (chipAdded) => {

        const chipSelectedCopy = [...chipSelected, chipAdded];
        setChipSelected(() => chipSelectedCopy);

        const chipNotSelectedCopy = chipNotSelected.filter(e => e !== chipAdded);
        setChipNotSelected(() => chipNotSelectedCopy);

        const urlGenres = generateUrl(chipSelectedCopy);
        setGenresURL(() => urlGenres)
    }

    const handleDelete = (chipDeleted) => {
        const chipSelectedCopy = chipSelected.filter(e => e !== chipDeleted);
        setChipSelected(() => chipSelectedCopy);

        const chipNotSelectedCopy = [...chipNotSelected, chipDeleted];
        setChipNotSelected(() => chipNotSelectedCopy);

        const urlGenres = generateUrl(chipSelectedCopy);
        setGenresURL(() => urlGenres)
    }

    const generateUrl = (chipSelectedCopy) => {
        if (chipSelectedCopy.length >= 1) {
            const chipSelectedCopy_IDs = chipSelectedCopy.map(e => e.id);
            return chipSelectedCopy_IDs.reduce((arr, curr) => arr + ',' + curr);
        }
        else return '';
    }

    return (
        <div style={{ margin: '1em' }}>
            <Stack direction="row" spacing={1}>
                <div>
                    {chipNotSelected?.map(e => (
                        <span key={e.id} style={{ margin: '2px' }}>
                            <Chip label={e.name} variant='outlined' onClick={() => handleAdd(e)} />
                        </span>
                    ))}
                    {chipSelected?.map(e => (
                        <span key={e.id} style={{ margin: '2px' }}>
                            <Chip label={e.name} variant='primary' onDelete={() => handleDelete(e)} />
                        </span>
                    ))}
                </div>
            </Stack>
        </div>
    );
}

export default ChipGenres;