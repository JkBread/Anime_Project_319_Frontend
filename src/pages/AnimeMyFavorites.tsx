import { Box, Typography } from "@mui/material";
import Navbar from "../components/Organisms/Navbar";

const AnimeMyFavorites = () => {
    return (
        <>
        <Navbar />
        <Box
        sx={{
          p: 4,
          backgroundColor: "#bd80f9",
        }}
      >
        <Typography variant="h3" sx={{ mb: 4, color: "rgb(255, 255, 255)", TextAlign: "center" }}>
          Favorite List
        </Typography>

      </Box>
        </>
        
    );
};

export default AnimeMyFavorites;