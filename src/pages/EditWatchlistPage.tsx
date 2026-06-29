import { useParams } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { animeMockData } from "../data/animeMockData";

export default function EditWatchlistPage() {
  const { id } = useParams();

  const anime = animeMockData.find((anime) => anime.id === Number(id));

  if (!anime) {
    return <Typography>Anime not found</Typography>;
  }

  return (
    <Box sx={{ p: 3, backgroundColor: "#f6e9ff", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ color: "#9407ec", fontWeight: "bold" }}>
        Edit Watchlist Entry
      </Typography>

      <Box sx={{ mt: 3, maxWidth: 500 }}>
        <TextField
          label="Title"
          value={anime.title.romaji}
          fullWidth
          sx={{ mb: 2, backgroundColor: "white" }}
        />

        <TextField
          label="Year"
          value={anime.seasonYear}
          fullWidth
          sx={{ mb: 2, backgroundColor: "white" }}
        />

        <Button variant="contained">
          Save
        </Button>
      </Box>
    </Box>
  );
}