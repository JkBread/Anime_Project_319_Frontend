// src/data/animeMockData.ts
import type { Anime } from "../types/Anime";

export const animeMockData: Anime[] = [
  {
    id: 1,
    title: {
      romaji: "Sousou no Frieren",
      english: "Frieren: Beyond Journey's End",
    },
    coverImage: {
      large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg",
      medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154587-n1fmjRv4JQUd.jpg",
    },
    bannerImage: null,
    averageScore: 90,
    genres: ["Adventure", "Drama", "Fantasy"],
    description: "Mock description",
    episodes: 28,
    seasonYear: 2023,
    status: "FINISHED",
  },
];