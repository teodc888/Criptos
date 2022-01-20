
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';


export default function CriptoShearch(props) {
  return (
    <Link to={`/cripto/${props.id}`}>
    <Card sx={{ maxWidth: 350, margin:"auto", marginBottom:"1%"}}>
      <CardMedia
        component="img"
        sx={{float:"left", width:"90px", height:"90px"}}
        image={props.icon}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.symbol}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
}