import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
}
