import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { animeMockData } from "../data/AnimeMockData";
import AnimeCard from "../components/Molecules/AnimeCard";
import Navbar from "../components/Organisms/Navbar";

export default function WatchlistPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const watchlist = animeMockData.filter((anime) => anime.watchlist);

  const filteredWatchlist = watchlist.filter((anime) =>
    anime.title.romaji.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Navbar />
    <Box sx={{ p: 3, backgroundColor: "#f6e9ff", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", color: "#9407ec", fontWeight: "bold", mb: 3 }}
      >
        My Watchlist
      </Typography>

      <TextField
        label="Search anime"
        variant="outlined"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        sx={{
          display: "block",
          mx: "auto",
          mb: 3,
          maxWidth: 500,
          backgroundColor: "white",
        }}
        fullWidth
      />

      {filteredWatchlist.length === 0 ? (
        <Typography sx={{ textAlign: "center", color: "#9407ec" }}>
          No anime found
        </Typography>
      ) : (
        filteredWatchlist.map((anime, index) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            index={index}
            onClick={() => navigate(`/watchlist/edit/${anime.id}`)}
          />
        ))
      )}
    </Box>
    </>
  );
}