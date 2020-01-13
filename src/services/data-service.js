import Axios from "axios";
import { API_KEY } from "../constants";

export const getTopNews = country => {
  return Axios.get(
    "https://newsapi.org/v2/top-headlines" +
      (country ? `?country=${country}` : ""),
    {
      headers: { "X-Api-Key": API_KEY }
    }
  ).then(result => result.data);
};
