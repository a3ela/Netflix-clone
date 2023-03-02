const API_KEY = process.env.REACT_APP_API_KEY;

// BASE URL configuration for ...
const SEARCH = `search/movie?api_key=${API_KEY}&language=en-US&query=`;
const TRENDING = `trending/all/day?api_key=${API_KEY}`;
const ORIGIN = `discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
const TOP_RATED = `movie/top_rated?api_key=${API_KEY}&language=en-US`;
const ACTION_MOVIES = `discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&with_genres=28`;
const COMEDY_MOVIES = `discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&with_genres=35`;
const HORROR_MOVIES = `discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&with_genres=27`;
const ROMANCE_MOVIES = `discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&with_genres=10749`;
const DOCUMENTARIES = `discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&with_genres=99`;
const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

export {
  SEARCH,
  TRENDING,
  ORIGIN,
  TOP_RATED,
  ACTION_MOVIES,
  COMEDY_MOVIES,
  HORROR_MOVIES,
  ROMANCE_MOVIES,
  DOCUMENTARIES,
  IMAGE_URL,
};
