import React from "react";
import { mount } from "enzyme";
import MainPage from "./MainPage";
import { act } from "react-dom/test-utils";
import axios from "axios";
import { matchers } from "jest-emotion";

expect.extend(matchers);

jest.mock("axios");

describe("Shallow renders StyledMainPage", () => {
  it("Properties and listeners", async () => {
    axios.get.mockResolvedValue({ data: "data" });
    const mainPage = mount(<MainPage />);

    expect(mainPage).toHaveStyleRule(
      "filter",
      "grayscale(1) opacity(0.75) contrast(1.2)"
    );

    await act(async () => window.dispatchEvent(new Event("DOMContentLoaded")));
    await act(async () => window.dispatchEvent(new Event("resize")));
    await act(async () => window.dispatchEvent(new Event("unload")));
  });

  it("Render with fetched data", async () => {
    const news = [
      {
        source: { id: "test_id", name: "test_name" },
        id: "test_id",
        name: "test_name",
        author: "Author",
        title: "test_title",
        description: "test_description",
        url: "https://someurl",
        urlToImage: "https://url_to_image.jpg",
        publishedAt: "test_date",
        content: "test_content"
      }
    ];
    axios.get.mockResolvedValue({ data: news });
    await act(async () => mount(<MainPage />));
  });

  it("Render with thrown error", async () => {
    const error = {
      response: {
        data: {
          code: "parametersMissing"
        }
      }
    };
    axios.get.mockRejectedValue(error);
    await act(async () => mount(<MainPage />));

    axios.get.mockRejectedValue("error");
    await act(async () => mount(<MainPage />));
  });
});
