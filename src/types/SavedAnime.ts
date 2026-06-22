export type SavedAnime = {
  id: number;
  title: string;
  image: string;
  description: string | null;
  episodes: number | null;
  rating: number | null;
  genres: string[];
};