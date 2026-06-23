import type { Anime } from "../types/Anime";

const FAVORITES_KEY = "favoriteAnime";

export function getFavorites(): Anime[] {
  const favorites = localStorage.getItem(FAVORITES_KEY);

  if (!favorites) {
    return [];
  }

  return JSON.parse(favorites);
}

export function saveFavorites(favorites: Anime[]): void {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function addFavorite(anime: Anime): void {
  const favorites = getFavorites();

  const alreadyExists = favorites.some(
    (favorite) => favorite.id === anime.id
  );

  if (alreadyExists) return;

  saveFavorites([...favorites, anime]);
}

export function removeFavorite(id: number): void {
  const favorites = getFavorites();

  const updatedFavorites = favorites.filter(
    (anime) => anime.id !== id
  );

  saveFavorites(updatedFavorites);
}