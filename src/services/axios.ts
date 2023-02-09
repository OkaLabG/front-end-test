import axios from "axios";

const getAPIClient = () => {
  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  return api;
};

export default getAPIClient;
