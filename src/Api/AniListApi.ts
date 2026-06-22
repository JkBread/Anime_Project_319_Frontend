import axios from "axios";

const aniListApi = axios.create({
  baseURL: "https://graphql.anilist.co",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default aniListApi;