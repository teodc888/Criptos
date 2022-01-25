import * as React from "react";
import CardMedia from '@mui/material/CardMedia';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardCriptoOnly(props) {
  return (
    <Card sx={{ maxWidth: 400, margin:"auto" }}>
      <CardMedia
        component="img"
        sx={{float:"left", width:"90px", height:"90px"}}
        image={props.icon}
        alt="green iguana"
      />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          ${props.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
}
