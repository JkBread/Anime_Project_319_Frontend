import type { AnimeGenre } from "../enums/AnimeGenre";

export type Anime = {
  id: number;
  genre: AnimeGenre;
  title: string;
  season: number;
  episode: number;
  rating: number;
  description: string;
  publication_date: string;
};