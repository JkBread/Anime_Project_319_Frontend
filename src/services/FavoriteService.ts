import type { SavedAnime } from "../types/SavedAnime";

const STORAGE_KEY = "favorites";

const FavoriteService = () => {
  const getAllFavorites = (): SavedAnime[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  };

  const addFavorite = (anime: SavedAnime): void => {
    const favorites = getAllFavorites();

    const alreadyExists = favorites.some((item) => item.id === anime.id);
    if (alreadyExists) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites, anime]));
  };

  const deleteFavorite = (id: number): void => {
    const favorites = getAllFavorites();
    const updatedFavorites = favorites.filter((anime) => anime.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
  };

  return {
    getAllFavorites,
    addFavorite,
    deleteFavorite,
  };
};

export default FavoriteService;