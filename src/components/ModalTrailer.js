import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ModalTrailer({ setOpen, open, title, poster, date, productType, overview, id }) {

    const [video, setVideo] = useState();

    useEffect(() => {
        if (open) {
            fetchVideo();
        }
    }, [open]);

    const fetchVideo = async () => {
        console.log(id)
        const data = await fetch(
            `https://api.themoviedb.org/3/${productType}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY_MOVIE}&language=en-US`
        );

        const dataJson = await data.json();
        setVideo(dataJson?.results[0]?.key);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Movies Title"
            aria-describedby="Movies Selected"
        >
            <Box sx={style}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '2em' }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title} ({date})
                    </Typography>

                    <img src={poster} alt={title} />

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {overview}
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<YouTubeIcon />}
                        color="error"
                        target="__blank"
                        href={`https://www.youtube.com/watch?v=${video}`}
                    >
                        Watch the Trailer
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalTrailer;