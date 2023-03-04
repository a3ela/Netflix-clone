import React, { useEffect, useState } from "react";
// api base url
import api from "../../API";
// image base url
import { IMAGE_URL } from "../../config";
// style banner
import "./banner.css";

const Banner = ({ url }) => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(url);
      setmovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    // window.setInterval(() => {
    fetchData();
    // }, 10000);
  }, [url]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          background: `linear-gradient(transparent,#000000),url(${IMAGE_URL}${movie.poster_path})`,
          backgroundRepeat: "no-repeat",
          height: "80vh",
        }}
      >
        <div className="banner-contents">
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner-buttons">
            <button className="btn btn-play">Play</button>
            <button className="btn btn-play-list">My List</button>
          </div>
          <p className="banner-description">{truncate(movie.overview, 120)}</p>
        </div>
      </header>
      <div className="banner-fadebottom" />
    </>
  );
};

export default Banner;
