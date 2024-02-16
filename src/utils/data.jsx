import { useEffect, useState } from "react";
import {FATCH_API_RESTAURENT} from "./constant";
const data = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(FATCH_API_RESTAURENT);
    const json = await data.json();
    const Data = json?.data?.cards;
    setData(Data);
  };
  return Data;
};

export default data;
