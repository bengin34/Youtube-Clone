import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

export const fetchFromApi = async (query) => {
  const options = {
    params: {query, geo: 'US', lang: 'en'},
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  const { data } = await axios.get(`${BASE_URL}/search`, options);
  console.log(data)

  return data;
};
