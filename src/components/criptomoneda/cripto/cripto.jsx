import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cripto(props) {
  function image() {
    if (props.symbol === "BTC") {
      return "https://logos-marcas.com/wp-content/uploads/2020/08/Bitcoin-Logo.png";
    } else if (props.symbol === "ETH") {
      return "https://1000marcas.net/wp-content/uploads/2020/02/Logo-Ethereum.png";
    } else if (props.symbol === "BNB") {
      return "https://cdn.pixabay.com/photo/2021/04/30/16/47/bnb-6219388_640.png";
    } else if (props.symbol === "USDT") {
      return "https://decrypto.zendesk.com/hc/article_attachments/360060850032/mceclip0.png";
    } else if (props.symbol === "USDC") {
      return "https://thumbs.dreamstime.com/b/usd-coin-usdc-digital-stablecoin-icono-220015622.jpg";
    } else if (props.symbol === "ADA") {
      return "https://www.creativefabrica.com/wp-content/uploads/2021/06/14/Cryptocurrency-Cardano-Logo-Graphics-13393853-1.jpg";
    }else{
      return props.icon
    }
  }

  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardActionArea>
        <Link to={`/cripto/${props.id}`}>
          <CardMedia
            component="img"
            height="300"
            image={image()}
            alt="green iguana"
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${props.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
