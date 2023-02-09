import { api } from "../api";
import { IUser } from "./types";

const getUsers = async (): Promise<IUser[]> => {
  const res = await api.get("/users?_limit=50");

  return res.data;
};

export { getUsers };
