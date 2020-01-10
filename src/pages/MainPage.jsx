import React, {useEffect, useState} from "react";
import {getTopNews} from "../services/data-service";
import Header from "./components/Header";

const MainPage = () => {

  const [news, setNews] = useState(undefined);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(undefined);
  const [country, setCountry] = useState(undefined);

  useEffect(() => {
    setNewsLoading(true);
    getTopNews()
      .then(value => {
        setNews(value);
        setNewsLoading(false);
      })
      .catch(error => {
        setNewsLoading(false);
        setNewsError(error.toString());
      })
  }, []);

  return (
    newsLoading ?
      <div>LOADING...</div> :
      newsError ?
        <div>{newsError}</div> :
        <>
          <Header country={country} setCountry={setCountry}/>
          <div onClick={() => console.log(news)}>Main page</div>
        </>

  )
};

export default MainPage;