import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({title, poster, date}) {
  return (
    <Card sx={{ width: 345, height:'object-fit' }}>
      <CardMedia
        component="img"
        image={poster}
        alt={title}
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          Movie
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See more</Button>
      </CardActions>
    </Card>
  );
}