import { useCallback, useEffect, useState } from "react";
import { ILeadsPosts } from "../../@types/leads";
import { BodyPage } from "../../components/BodyPage";
import { CardUser } from "../../components/CardUser";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { useAppContext } from "../../contexts/AppContext";

import './Home.scss'

const Home: React.FC = () => {
  const { orderedUsersByScore } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsersDetails, setCurrentUsersDetails] = useState(
    [] as ILeadsPosts[]
  );

  const starUsersDisplay = useCallback(() => {
    const itemsPerPage = 15;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentUsers = orderedUsersByScore.slice(
      indexOfFirstItem,
      indexOfLastItem
    );


    setCurrentUsersDetails(currentUsers);
  }, [orderedUsersByScore]);

  const updateUsersOnDisplay = useCallback(
    (page: number) => {
      const itemsPerPage = 15;
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      const currentUsers = orderedUsersByScore.slice(
        indexOfFirstItem,
        indexOfLastItem
      );

      setCurrentUsersDetails(currentUsers);
    },
    [currentPage, orderedUsersByScore]
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
    if (orderedUsersByScore.length > 0) {
      starUsersDisplay();
    }
  }, [orderedUsersByScore]);

  useEffect(() => {
    updateUsersOnDisplay(currentPage);
  }, [currentPage]);

  return (
    <BodyPage>
      <Header title="Home" />
      <Content>
        {currentUsersDetails.map((user) => {
          return (
            <CardUser
              key={user.user.id}
              name={user.user.name}
              phone={user.user.phone}
              job={user.user.jobRole}
              email={user.user.email}
              comments={user.comments.length}
              likes={user.likes.length}
              posts={user.posts.length}
            />
          );
        })}

        <footer className="footer">
          <button onClick={() => handleSetPage(-1)}>anterior</button>
          <button onClick={() => handleSetPage(1)}>próxima</button>
        </footer>
      </Content>
    </BodyPage>
  );
};

export default Home;
