import { Box } from "@mui/material";
import Navbar from "../components/Organisms/Navbar";
import { animeMockData } from "../data/AnimeMockData";

const AnimeMyFavorites = () => {
    return (
        <div>
            <Navbar />
            <h1>My Favorites</h1>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ p: 2 }}>
                {animeMockData.filter(anime => anime.favorite).map((anime) => (
                    <div key={anime.id}>
                        <img src={anime.coverImage.large} alt={anime.title.romaji} />
                        <h2>{anime.title.english || anime.title.romaji}</h2>
                    </div>
                ))}
            </Box>
        </div>
    );

};

export default AnimeMyFavorites;