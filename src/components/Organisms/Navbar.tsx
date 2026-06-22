import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#a32ded" }}>
      <Toolbar>

        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer", textAlign: "center" }}
          onClick={() => navigate("/animes")}
        >
          Anime Library
        </Typography>

        <Box display="flex" justifyContent="flex-end" sx={{ p: 2 }}>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
