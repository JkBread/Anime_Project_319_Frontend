import baseInstance from './Api';
import { Anime } from '../types/Anime';

const AnimeService = () => {
  const getAllAnimes = async (): Promise<Anime[]> => {
    const data = await baseInstance.get('/animes');

    return data.data;
  };

  const getAnimeById = async (id: string): Promise<Anime> => {
      const data = await baseInstance.get(`/animes/${id}`);

      return data.data;
    };

  const updateAnime = async (id: string, anime: Anime): Promise<Anime> => {
    const data = await baseInstance.put(`/animes/${id}`, anime);

    return data.data;
  };

  const deleteAnime = async (id: string) => {
    await baseInstance.delete(`/animes/${id}`);
  };

  const createAnime = async (anime: Anime): Promise<Anime> => {
    const data = await baseInstance.post('/animes', anime);

    return data.data;
  }

  return {
    getAllAnimes,
    getAnimeById,
    updateAnime,
    deleteAnime,
    createAnime,
  };
};

export default AnimeService;