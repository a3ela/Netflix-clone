import React, { useEffect, useState } from "react";
// api or base url
import api from "../../API";
// IMAGE base url
import { IMAGE_URL } from "../../config";
// style row
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, url, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(url);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [url]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row-items ${isLarge && "bg-img"}`}>
        {movies.map((movie) => (
          <img
            src={`${IMAGE_URL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            onClick={handleClick(movie)}
            key={movie.id}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
