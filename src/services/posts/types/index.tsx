interface IPost {
  id: number;
  title: string;
  description: string;
  userId: number;
  image: string;
  totalLikes: number;
}

export type { IPost };
