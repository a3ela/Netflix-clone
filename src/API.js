import axios from "axios";

// base url for imdb to retrive data
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instance;
