import { useState, useEffect } from "react";

export interface WatchlistAnime {
  id: number;
  title: string;
  imageUrl: string;
}

export interface CreateAnimeInput {
  title: string;
  imageUrl: string;
}

export function useFetchWatchlist() {
  const [watchlist, setWatchlist] = useState<WatchlistAnime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/watchlist");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: WatchlistAnime[] = await response.json();
        setWatchlist(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlist();
  }, []);

  return { watchlist, setWatchlist, loading, error };
}

export async function addWatchlistAnime(
  animeData: CreateAnimeInput,
): Promise<WatchlistAnime | null> {
  try {
    const response = await fetch("http://localhost:8080/api/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animeData),
    });

    if (!response.ok) {
      throw new Error(`POST error! Status: ${response.status}`);
    }
    const savedAnime: WatchlistAnime = await response.json();
    return savedAnime;
  } catch (error) {
    console.error("Failed to add to watchlist:", error);
    return null;
  }
}

export async function deleteWatchlistAnime(id: number): Promise<boolean> {
  try {
    const response = await fetch(`http://localhost:8080/api/watchlist/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`DELETE error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error("Failed to delete from watchlist:", error);
    return false;
  }
}
