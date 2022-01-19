import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
export default function NavBar() {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ bgcolor: "#004d40", color: "white" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration:"none" }}>
        CRIPTOS DELLACQUA
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  );
}