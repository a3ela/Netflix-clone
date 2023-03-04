const API_KEY = process.env.REACT_APP_API_KEY;

// BASE URL configuration for ...
const moviesUrl = [
  {
    id: 1,
    url: `discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    title: "Netflix Originals",
    isLargeRow: true,
  },
  {
    id: 2,
    url: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    title: "Top Rated",
  },
  {
    id: 3,
    url: `discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&with_genres=28`,
    title: "Action Movies",
  },
  {
    id: 4,
    url: `discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&with_genres=35`,
    title: "Comedy Movies",
  },
  {
    id: 5,
    url: `discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&with_genres=27`,
    title: "Horror Movies",
  },
  {
    id: 6,
    url: `discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&with_genres=10749`,
    title: "Romance Movies",
  },
  {
    id: 7,
    url: `discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&with_genres=99`,
    title: "Documentary",
  },
];

const SEARCH = `search/movie?api_key=${API_KEY}&language=en-US&query=`;
const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

export { moviesUrl, SEARCH, IMAGE_URL };
