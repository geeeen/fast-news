import Axios from "axios";
import { API_KEY } from "../constants";

export const getTopNews = (pageSize, country, searchString, category) => {
  return Axios.get(
    `https://newsapi.org/v2/top-headlines` +
      `?pageSize=${pageSize}` +
      `&category=${category}` +
      (country !== "all" ? `&country=${country}` : "") +
      (searchString ? `&q=${searchString}` : ""),
      {
        headers: { "X-Api-Key": API_KEY }
      }
  ).then(result => result.data);
};
