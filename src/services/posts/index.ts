import { api } from "../api";
import { IPost } from "./types";

const getPosts = async (): Promise<IPost[]> => {
  const res = await api.get("/posts?_limit=100");

  return res.data;
};

export { getPosts };
