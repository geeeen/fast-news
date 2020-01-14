import Axios from "axios";
import { API_KEY } from "../constants";

export const getAllNews = (country, pageSize, searchString) => {
  return Axios.get(
    `https://newsapi.org/v2/everything?pageSize=${pageSize}` +
      (searchString ? `&q=${searchString}` : ""),
    {
      headers: { "X-Api-Key": API_KEY }
    }
  ).then(result => result.data);
};

export const getTopNews = (country, pageSize, searchString) => {
  return Axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}` +
      (pageSize ? `&pageSize=${pageSize}` : "") +
      (searchString ? `&q=${searchString}` : ""),
    {
      headers: { "X-Api-Key": API_KEY }
    }
  ).then(result => result.data);
};
