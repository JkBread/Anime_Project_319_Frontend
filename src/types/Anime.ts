export type Anime = {
  id: number;
  title: string;
  genres: string[];
  season: string | null;
  episodes: number | null;
  rating: number | null;
  description: string | null;
  publicationDate: string;
  image: string;
};