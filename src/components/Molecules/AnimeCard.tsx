import { Box, Card, CardContent, Typography } from "@mui/material";

const AnimeCard = ({ anime, index }) => {
  return (
    <Card
    sx={{
        mx: "auto",
        cursor: "grab",
        backgroundColor: "#bd80f9",
        border: "2px solid #9407ec",
        borderRadius: 3,
        width: 1000,
        height: "auto",
    }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#f6e9ff",
            fontWeight: "bold",
            width: 50,
            textAlign: "center",
            fontSize: 25,
          }}
        >
          {index + 1}
        </Typography>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            sx={{
              color: "#f6e9ff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {anime.title.romaji}
          </Typography>

          <Typography
            sx={{
              color: "rgb(245, 226, 255)",
            }}
          >
            {anime.seasonYear}
          </Typography>
        </Box>

        <Box
          component="img"
          src={anime.coverImage}
          alt={anime.title.romaji}
          sx={{
            width: 90,
            height: 130,
            objectFit: "cover",
            borderRadius: 2,
            flexShrink: 0,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default AnimeCard;