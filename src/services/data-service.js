import Axios from "axios";
import { API_KEY } from "../constants";

export const getTopNews = (pageSize, country, searchString, category) => {
  return Axios.get(
    `https://newsapi.org/v2/top-headlines?pageSize=${pageSize}` +
      (country !== "all" ? `&country=${country}` : "") +
      (searchString ? `&q=${searchString}` : "") +
      (category !== "All" ? `&category=${category}` : ""),
    {
      headers: { "X-Api-Key": API_KEY }
    }
  ).then(result => result.data);
};
