export interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string | null;
  };
  coverImage: {
    large: string;
    medium: string;
  };
  bannerImage: string | null;
  averageScore: number | null;
  genres: string[];
  description: string | null;
  episodes: number | null;
  seasonYear: number | null;
  status: string;
}