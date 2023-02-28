import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = '9bca1f873478832455af25e449c4a86d';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const searchMovies = async stringToSearch => {
  const queryString = `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const getMovieDetails = async movieId => {
  const queryString = `movie/${movieId}$?api_key=${KEY}&language=en-US`;
  const { data: movie } = await axios.get(queryString);
  return movie;
};

export const fetchTrendingMovies = async () => {
  const queryString = `trending/movie/day?api_key=${KEY}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const getMovieCast = async movieId => {
  const queryString = `movie/${movieId}/credits?api_key=${KEY}&language=en-US`;
  const data = await axios.get(queryString);
  const result = data?.data?.cast?.filter((x, i, a) => a.findIndex(it => it.id === x.id) === i)
  return result;
};

export const getReviews = async movieId => {
  const queryString = `movie/${movieId}/reviews?api_key=${KEY}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};
