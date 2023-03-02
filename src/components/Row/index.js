import React, { useEffect, useState } from "react";
// api or base url
import api from "../../API";
// IMAGE base url
import { IMAGE_URL } from "../../config";
// style row
import "./row.css";

const Row = ({ title, url, isLarge }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(url);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [url]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row-items ${isLarge && "bg-img"}`}>
        {movies.map((movie) => (
          <img
            src={`${IMAGE_URL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            key={movie.id}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
