import axios from "axios";

const apiUrl = "https://api.unsplash.com/search/photos";
const apiKey = "0Z0gvRP-cgLAWS1YHKc_S2o0SQHr1YgC5XMxt7920ew";

export const getImages = async (query, page) => {
  const { data } = await axios.get(apiUrl, {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${apiKey}`,
    },
  });
  return data;
};
