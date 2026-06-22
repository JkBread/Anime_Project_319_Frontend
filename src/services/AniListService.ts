import axios from "axios";
import type { Anime } from "../types/Anime";

const API_URL = "https://graphql.anilist.co";

type GraphQLVariables = Record<string, string | number | boolean | null>;

async function fetchGraphQL<T>(
  query: string,
  variables: GraphQLVariables = {}
): Promise<T> {
  const response = await axios.post(API_URL, {
    query,
    variables,
  });

  if (response.data.errors) {
    throw new Error(response.data.errors[0].message);
  }

  return response.data.data;
}

const animeFields = `
  id
  title {
    romaji
    english
  }
  coverImage {
    large
    medium
  }
  bannerImage
  averageScore
  genres
  description
  episodes
  seasonYear
  status
`;

export async function getTrendingAnime(): Promise<Anime[]> {
  const query = `
    query {
      Page(page: 1, perPage: 10) {
        media(type: ANIME, sort: TRENDING_DESC) {
          ${animeFields}
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ Page: { media: Anime[] } }>(query);
  return data.Page.media;
}

export async function getTopAnime(): Promise<Anime[]> {
  const query = `
    query {
      Page(page: 1, perPage: 10) {
        media(type: ANIME, sort: SCORE_DESC) {
          ${animeFields}
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ Page: { media: Anime[] } }>(query);
  return data.Page.media;
}

export async function searchAnime(search: string): Promise<Anime[]> {
  const query = `
    query ($search: String) {
      Page(page: 1, perPage: 20) {
        media(search: $search, type: ANIME) {
          ${animeFields}
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ Page: { media: Anime[] } }>(query, {
    search,
  });

  return data.Page.media;
}

export async function getAnimeById(id: number): Promise<Anime> {
  const query = `
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        ${animeFields}
      }
    }
  `;

  const data = await fetchGraphQL<{ Media: Anime }>(query, {
    id,
  });

  return data.Media;
}

export async function getAnimeByGenre(genre: string): Promise<Anime[]> {
  const query = `
    query ($genre: String) {
      Page(page: 1, perPage: 20) {
        media(type: ANIME, genre: $genre, sort: POPULARITY_DESC) {
          ${animeFields}
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ Page: { media: Anime[] } }>(query, {
    genre,
  });

  return data.Page.media;
}