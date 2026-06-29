import { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";

import { animeMockData } from "../data/AnimeMockData";
import AnimeCard from "../components/Molecules/AnimeCard";
import Navbar from "../components/Organisms/Navbar";

export default function AnimeMyFavoritePage() {
  const [favorites, setFavorites] = useState(
    animeMockData.filter((anime) => anime.favorite)
  );

  function handleDragEnd(result: DropResult) {
    if (!result.destination) return;

    const newFavorites = [...favorites];

    const [movedAnime] = newFavorites.splice(result.source.index, 1);

    newFavorites.splice(result.destination.index, 0, movedAnime);

    setFavorites(newFavorites);
  }

  return (
    <Box
      sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "left",
      }}
      >
      <Navbar />

    <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#9407ec",
          fontWeight: "bold",
          mb: 3,
          mt: 2,
        }}
      >
        My Favorite Anime
      </Typography>

      {favorites.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            color: "#9407ec",
            mt: 4,
          }}
        >
          No favorites yet
        </Typography>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="favorite-list">
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {favorites.map((anime, index) => (
                  <Draggable
                    key={anime.id}
                    draggableId={anime.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          width: "100%",
                          maxWidth: 350,
                        }}
                      >
                        <AnimeCard anime={anime} index={index} />
                      </Box>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </Box>
  );
}