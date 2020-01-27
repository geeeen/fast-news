import React from "react";
import axios from "axios";
import { getTopNews } from "../../services/data-service";

jest.mock("axios");

describe("Data service", () => {
  it("Should fetch data", () => {
    const news = [
      {
        ulr: "https://someurl",
        image: "https://url_to_image.jpg",
        title: "News Title",
        description: "News Description"
      }
    ];

    axios.get.mockResolvedValue({ data: news });

    return getTopNews(10, "all", "car", "all").then(data =>
      expect(data).toEqual(news)
    );
  });

  it("Should throw error", () => {
    const error = {
      error: "Error"
    };
    axios.get.mockRejectedValue(error);

    return getTopNews(10, "ru", undefined, "all").catch(err =>
      expect(err).toEqual(error)
    );
  });
});
