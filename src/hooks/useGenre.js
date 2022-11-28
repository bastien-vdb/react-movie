import React, { useEffect, useState } from 'react';

function useGenre(props) {
    const [genres, setGenres] = useState(null);
    const [chipNotSelected, setChipNotSelected] = useState();
    const [chipSelected, setChipSelected] = useState([]);

    const [url, setUrl] = useState('');

    const fetchGenres = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_MOVIE}&language=en-US`);
        const dataJson = await data.json();
        setGenres(dataJson.genres);
      };
      useEffect(()=>{
        fetchGenres();
      },[])

      useEffect(() => {
        setChipNotSelected(() => genres);
    }, [genres]);

    useEffect(()=>{
      const urlGenres = generateUrl(chipSelected);
        setUrl(() => urlGenres)
    },[chipNotSelected, chipSelected])

      const handleAdd = (chipAdded) => {

        const chipSelectedCopy = [...chipSelected, chipAdded];
        setChipSelected(() => chipSelectedCopy);

        const chipNotSelectedCopy = chipNotSelected.filter(e => e !== chipAdded);
        setChipNotSelected(() => chipNotSelectedCopy);
    }

    const handleDelete = (chipDeleted) => {
        const chipSelectedCopy = chipSelected.filter(e => e !== chipDeleted);
        setChipSelected(() => chipSelectedCopy);

        const chipNotSelectedCopy = [...chipNotSelected, chipDeleted];
        setChipNotSelected(() => chipNotSelectedCopy);
    }

    const generateUrl = (chipSelectedCopy) => {
        if (chipSelectedCopy.length >= 1) {
            const chipSelectedCopy_IDs = chipSelectedCopy.map(e => e.id);
            return chipSelectedCopy_IDs.reduce((arr, curr) => arr + ',' + curr);
        }
        else return '';
    }

    return {genres, chipNotSelected, chipSelected, handleAdd, handleDelete, url};
}

export default useGenre;