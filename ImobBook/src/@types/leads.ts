import { IComment } from "./comment";
import { ILike } from "./likes";
import { IPost } from "./posts";
import { IUser } from "./user";

export interface ILeadsPosts {
  user: IUser,
  posts: IPost[];
  comments: IComment[];
  likes: ILike[];
}