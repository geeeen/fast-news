import Axios from "axios";
import {API_KEY} from "../constants";

export const getTopNews = () => {
  return Axios.get("https://newsapi.org/v2/top-headlines?country=ru",
    {headers: {"X-Api-Key": API_KEY}}
    )
    .then(result => result.data)
};