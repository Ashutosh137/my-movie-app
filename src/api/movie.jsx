import axios from 'axios';

const MOVIES_API_URL = import.meta.env.VITE_MOVIES_API_URL;

export const getMovies = async () => {
  const response = await axios.get(MOVIES_API_URL);
  return response.data;
};
