import axios from "axios";

interface IUser {
  id: number;
  name: string;
  jobRole: string;
  phone: string;
  email: string;
}

interface IComments {
  body: string;
  id: number;
  postId: number;
  userId: number;
}
interface IPostResponse {
  id: number;
  title: string;
  description: string;
  userId: number;
  image: string;
  totalLikes: number;
  user: IUser;
  comments: IComments[];
}

export interface IGetUsersResponse {
  id: number;
  name: string;
  jobRole: string;
  phone: string;
  email: string;
}

const getUsers = async (): Promise<IGetUsersResponse[]> => {
  const response = await axios
    .get("http://localhost:3333/users?_limit=27")
    .then((res) => res)
    .catch((err) => err.response);

  return response.data;
};

const getPost = async (): Promise<IPostResponse[]> => {
  const response = await axios
    .get(
      "http://localhost:3333/posts?_embed=comments&users?_limit=27&_expand=user"
    )
    .then((res) => res)
    .catch((err) => err.response);

  return response.data;
};

export { getUsers, getPost };
