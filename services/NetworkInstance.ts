import axios from "axios";

const NetworkInstance = (query: string, date: string, pageNum: number) => {
  return axios.create({
    baseURL: "https://real-time-events-search.p.rapidapi.com/",

    params: {
      query: query,
      date: date,
      start: pageNum,
      
    },

    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
      "x-rapidapi-host": "real-time-events-search.p.rapidapi.com",
    },
  });
};

export default NetworkInstance;
