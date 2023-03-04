import React, { useEffect, useState } from "react";
//components
import Row from "./Row";
import Banner from "./Banner";
//Urls for api pull or fetch
import { moviesUrl } from "../config";
import Navbar from "./Navbar";
const Home = () => {
  const NetflixOrg = moviesUrl.filter((movie) => movie.id === 1);

  return (
    <>
    <div>
      <Navbar />
      <Banner url={NetflixOrg[0].url} />
      {moviesUrl.map((item) => (
        <Row
          title={item.title}
          url={item.url}
          isLarge={item.isLargeRow}
          key={item.id}
        />
        <img src={} alt="" />
      ))}
    </div></>
  );
};

export default Home;
