import { useCallback, useEffect, useState } from "react";
import { IPost } from "../../@types/posts";
import { BodyPage } from "../../components/BodyPage";
import { Comments } from "../../components/Comments";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { useAppContext } from "../../contexts/AppContext";

import "./Posts.scss";

const Posts: React.FC = () => {
  const { allPosts } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPostsVisible, setCurrentPostsVisible] = useState<IPost[]>(
    [] as IPost[]
  );

  const startPostsDisplay = useCallback(() => {
    const itemsPerPage = 15;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentPosts = allPosts.slice(indexOfFirstItem, indexOfLastItem);

    setCurrentPostsVisible(currentPosts);
  }, [allPosts]);

  const updatePostsUsersOnDisplay = useCallback(
    (page: number) => {
      const itemsPerPage = 15;
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      const currentUsers = allPosts.slice(indexOfFirstItem, indexOfLastItem);

      setCurrentPostsVisible(currentUsers);
    },
    [currentPage, allPosts]
  );

  const handleSetPage = useCallback(
    (value: number) => {
      if (value === -1 && currentPage === 1) {
        setCurrentPage(1);
        return;
      }

      const newValue = currentPage + value;

      setCurrentPage(newValue);
    },
    [currentPage]
  );

  useEffect(() => {
    if (allPosts.length > 0) {
      startPostsDisplay();
    }
  }, [allPosts]);

  useEffect(() => {
    updatePostsUsersOnDisplay(currentPage);
  }, [currentPage]);

  return (
    <BodyPage>
      <Header title="Posts" />

      <Content>
        {currentPostsVisible.map((posts) => {
          return (
            <Comments
              key={posts.id}
              description={posts.description}
              imageLink={posts.image}
              title={posts.title}
            />
          );
        })}
      </Content>

      <footer className="footer">
        <button onClick={() => handleSetPage(-1)}>anterior</button>
        <button onClick={() => handleSetPage(1)}>próxima</button>
      </footer>
    </BodyPage>
  );
};

export default Posts;
