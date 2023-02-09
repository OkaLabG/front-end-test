import { useEffect } from "react";
import { useCallback, useState } from "react";
import { Alert } from "../../components/Alert";
import { Post } from "../../components/Posts";
import { getPosts } from "../../services/posts";
import { IPost } from "../../services/posts/types";
import "./styles.css";

const Home: React.FC = () => {
  const [post, setPost] = useState([] as IPost[]);
  const [loading, setLoading] = useState(false);

  const getPostsInPage = useCallback(async () => {
    setLoading(true);
    const response = await getPosts();

    if (response[0]) {
      setPost(response);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getPostsInPage();
  }, []);

  return (
    <main className="container-home">
      <header>
        <span>Usuário tal</span>
        <h2 className="title">Seja, bem-vindo ao ImobBook!!</h2>
      </header>

      <div className="center-posts">
        {post[0] ? (
          post.map((e) => (
            <Post
              key={e.id}
              image={e.image}
              title={e.title}
              totalLikes={e.totalLikes}
            />
          ))
        ) : (
          <Alert alert="Nenhum post encontrado!" />
        )}
      </div>
    </main>
  );
};

export default Home;
