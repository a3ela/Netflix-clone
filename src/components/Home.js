import React, { useEffect, useState } from "react";
import Row from "./Row/index";
import {
  TRENDING,
  ORIGIN,
  TOP_RATED,
  ACTION_MOVIES,
  COMEDY_MOVIES,
  HORROR_MOVIES,
  ROMANCE_MOVIES,
  DOCUMENTARIES,
} from "../config";

const Home = () => {
  return (
    <>
      <Row title="NETFLIX ORIGINALS" url={ORIGIN} />
      <Row title="Trending Now" url={TRENDING} />
    </>
  );
};

export default Home;
