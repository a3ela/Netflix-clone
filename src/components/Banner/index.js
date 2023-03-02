import React, { useEffect, useState } from "react";
import api from "../../API";
const Banner = ({ url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(url);
      setMovies(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, [url]);
  console.log(movies);

  return <div></div>;
};

export default Banner;
