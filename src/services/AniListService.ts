import aniListApi from "../api/AniListApi";
import type { Anime } from "../types/Anime";

const SEARCH_ANIME_QUERY = `
query ($search: String) {
  Page(page: 1, perPage: 20) {
    media(search: $search, type: ANIME) {
      id
      title {
        romaji
        english
      }
      genres
      season
      episodes
      averageScore
      description
      startDate {
        year
        month
        day
      }
      coverImage {
        large
      }
    }
  }
}
`;

const AniListService = () => {
  const searchAnime = async (search: string): Promise<Anime[]> => {
    const response = await aniListApi.post("", {
      query: SEARCH_ANIME_QUERY,
      variables: {
        search,
      },
    });

    return response.data.data.Page.media.map((anime: any) => ({
      id: anime.id,
      title: anime.title.english || anime.title.romaji,
      genres: anime.genres,
      season: anime.season,
      episodes: anime.episodes,
      rating: anime.averageScore,
      description: anime.description,
      publicationDate: `${anime.startDate.year}-${anime.startDate.month}-${anime.startDate.day}`,
      image: anime.coverImage.large,
    }));
  };

  return {
    searchAnime,
  };
};

export default AniListService;