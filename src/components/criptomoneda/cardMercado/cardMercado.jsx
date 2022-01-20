import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardMercado(props) {
  return (
    <>
    <h2>{props.precio}</h2>
    <Card sx={{ maxWidth: 250, margin:"auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.icon}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.price}
          </Typography>
          <Typography component="div" variant="h6">
              {props.priceChange1d}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}