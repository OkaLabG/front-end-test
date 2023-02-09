import {
  createContext,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUser } from "../@types/user";
import { IComment } from "../@types/comment";
import { ILike } from "../@types/likes";
import { IPost } from "../@types/posts";
import { ILeadsPosts } from "../@types/leads";
import { getAllUsers } from "../services/users";
import { getAllComments } from "../services/likes";
import { getAllLikes } from "../services/comments";
import { getAllPosts } from "../services/posts";

export interface AppContextData {
  orderedUsersByScore: ILeadsPosts[];
}

const AppContext = createContext<AppContextData>({} as AppContextData);
const AppProvider: React.FC<any> = ({ children }) => {
  const [allUsers, setAllUsers] = useState<IUser[]>([] as IUser[]);
  const [allComments, setAllComments] = useState<IComment[]>([] as IComment[]);
  const [allLikes, setAllLikes] = useState<ILike[]>([] as ILike[]);
  const [allPosts, setAllPosts] = useState<IPost[]>([] as IPost[]);
  const [orderedUsersByScore, setOrderedUsersByScore] = useState<ILeadsPosts[]>(
    [] as ILeadsPosts[]
  );

  const orderByImportance = useCallback((user: ILeadsPosts[]) => {
    const newArray = user.sort((a, b) => {
      const aPosts = a.posts.length ?? 0;
      const bPosts = b.posts.length ?? 0;

      const aLikes = a.likes.length ?? 0;
      const bLikes = b.likes.length ?? 0;

      const aComments = a.comments.length ?? 0;
      const bComments = b.comments.length ?? 0;

      if (aPosts !== bPosts) {
        return bPosts - aPosts;
      } else if (aLikes !== bLikes) {
        return bLikes - aLikes;
      } else if (aComments !== bComments) {
        return bComments - aComments;
      } else {
        a.user.name.localeCompare(b.user.name);
      }
    });

    return newArray;
  }, []);

  const checkUsersWithMorePosts = useCallback(() => {
    const newArray = allUsers.reduce((acc: ILeadsPosts[], user) => {
      const userPosts = allPosts.filter((post) => post.userId === user.id);
      const userComments = allComments.filter(
        (comment) => comment.userId === user.id
      );
      const userLikes = allComments.filter((like) => like.userId === user.id);
      acc.push({
        user: user,
        posts: userPosts || [],
        comments: userComments || [],
        likes: userLikes || [],
      });
      return acc;
    }, []);

    const orderedArray = orderByImportance(newArray);


    setOrderedUsersByScore(orderedArray);
  }, [allUsers, allPosts, allComments, allLikes]);

  const handleGetAllUsers = useCallback(async () => {
    const response = await getAllUsers();

    setAllUsers(response);
  }, []);

  const handleGetAllComments = useCallback(async () => {
    const response = await getAllComments();

    setAllComments(response);
  }, []);

  const handleGetAllPosts = useCallback(async () => {
    const response = await getAllPosts();

    setAllPosts(response);
  }, []);

  const handleGetAllLikes = useCallback(async () => {
    const response = await getAllLikes();

    setAllLikes(response);
  }, []);

  useEffect(() => {
    handleGetAllUsers();
    handleGetAllComments();
    handleGetAllLikes();
    handleGetAllPosts();
  }, []);

  useEffect(() => {
    if (
      allUsers.length > 0 &&
      allPosts.length > 0 &&
      allComments.length > 0 &&
      allLikes.length > 0
    ) {
      checkUsersWithMorePosts();
    }
  }, [allUsers, allPosts]);

  return (
    <AppContext.Provider value={{ orderedUsersByScore }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export { AppProvider };
