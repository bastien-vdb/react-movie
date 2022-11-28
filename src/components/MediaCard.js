import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalTrailer from '../components/ModalTrailer';

export default function MediaCard({ title, poster, date, productType, overview, id }) {

  const [open, setOpen] = useState(false);
  
  const handleSeeMore=()=>{
    setOpen(true);
  }

  return (
    <>
      <Card sx={{ width: 345, height: 'object-fit' }}>
        <CardMedia
          component="img"
          image={poster}
          alt={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {productType === 'tv' ? 'Serie TV' : 'Movie'}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleSeeMore} size="small">See more</Button>
        </CardActions>
      </Card>

      <ModalTrailer setOpen={setOpen} open={open} productType={productType} title={title} poster={poster} date={date} overview={overview} id={id}/>

    </>
  );
}