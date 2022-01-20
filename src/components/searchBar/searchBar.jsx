import React, { useState } from "react";
import { CardActions, Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import {searchCriptos} from "../../redux/actions/index";

export default function SearchBar() {
    const [movies, setMovies] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = e => {
        e.preventDefault();
        setMovies(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchCriptos(movies));
        setMovies("");
    };


  return (
    <div>
    <form onSubmit={handleSubmit}>
        <CardActions>
            <SearchIcon />

            <Input

            type='text'
            name='text'
            value={movies}
            placeholder="BUSCAR CRIPTO..."
            onChange={e=>handleInputChange(e)}
            sx={{bgcolor:"#004d40", borderColor:"black", width:"100%", borderRadius:"10px", color:"white"}}
            />
        </CardActions>
      </form>
    </div>
  );
}
