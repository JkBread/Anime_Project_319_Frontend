import { useState, useEffect } from "react";

export interface FavoriteAnime {
  id: number;
  title: string;
  imageUrl: string;
  placement: number;
}

export interface CreateAnimeInput {
  title: string;
  imageUrl: string;
}

export function useFetchFavorites() {
  const [favorites, setFavorites] = useState<FavoriteAnime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/favorites");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: FavoriteAnime[] = await response.json();
        const sortedData = data.sort((a, b) => a.placement - b.placement);
        setFavorites(sortedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);
  return { favorites, setFavorites, loading, error };
}

export async function addFavoriteAnime(
  animeData: CreateAnimeInput,
): Promise<FavoriteAnime | null> {
  try {
    const response = await fetch("http://localhost:8080/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animeData),
    });
    if (!response.ok) {
      throw new Error(`POST error! Status: ${response.status}`);
    }
    const savedAnime: FavoriteAnime = await response.json();
    return savedAnime;
  } catch (error) {
    console.error("Failed to add anime:", error);
    return null;
  }
}

export async function updateAnimePlacement(
  id: number,
  newPlacement: number,
): Promise<FavoriteAnime | null> {
  try {
    const response = await fetch(
      `http://localhost:8080/api/favorites/${id}/placement`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlacement),
      },
    );

    if (!response.ok) {
      throw new Error(`PATCH error! Status: ${response.status}`);
    }
    const updatedAnime: FavoriteAnime = await response.json();
    return updatedAnime;
  } catch (error) {
    console.error("Failed to update placement:", error);
    return null;
  }
}

export async function deleteFavoriteAnime(id: number): Promise<boolean> {
  try {
    const response = await fetch(`http://localhost:8080/api/favorites/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`DELETE error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error("Failed to delete favorite anime:", error);
    return false;
  }
}
