import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackButton from "../Atoms/Button/BackButton";
import GoWatchlistButton from "../Atoms/Button/GoWatchlistButton";
import GoFavoritesButton from "../Atoms/Button/GoFavoritesButton";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#a32ded" }}>
      <Toolbar>
        <BackButton />

        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer", textAlign: "center", ml: 15  }}
          onClick={() => navigate("/animes")}
        >
          Anime Library
        </Typography>

        <Box display="flex" justifyContent="flex-end" sx={{ p: 2 }}>

          <GoFavoritesButton />
          <GoWatchlistButton />
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
