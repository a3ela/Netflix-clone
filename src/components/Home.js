import React, { useEffect, useState } from "react";
//components
import Row from "./Row";
import Banner from "./Banner";
//Urls for api pull or fetch
import { moviesUrl } from "../config";
import Navbar from "./Navbar";

import manga from "../assets/mangafire.gif";
const Home = () => {
  const NetflixOrg = moviesUrl.filter((movie) => movie.id === 1);
  const style = {
    center: { margin: "20px auto", width: "50%", display: "block" },
  };
  return (
    <>
      <div>
        <Navbar />
        <Banner url={NetflixOrg[0].url} />
        {moviesUrl.map((item) => (
          <div>
            <Row
              title={item.title}
              url={item.url}
              isLarge={item.isLargeRow}
              key={item.id}
            />
          </div>
        ))}
        <a href="https://mangafire.to/?movies">
          <img src={manga} alt="" style={style.center} />
        </a>
      </div>
    </>
  );
};

export default Home;
