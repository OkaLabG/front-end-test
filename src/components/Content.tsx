import { useCallback, useEffect, useState } from "react";
import { getPost, getUsers, IGetUsersResponse } from "../services/users";
import { Card } from "./Card";
import "../styles/components/content.sass";
const Content: React.FC = () => {
  const [users, setUsers] = useState([] as any[]);

  const handleUsers = useCallback(async () => {
    const response = await getPost();
    const responseUsers = await getUsers();
    const aux = [] as any[];

    if (response && responseUsers) {
      responseUsers.forEach((item) => {
        const filter = response.filter((post) => post.userId === item.id);
        let number = 0;
        filter.forEach((item) => {
          number += item.comments.length;
        });

        aux.push({
          id: item.id,
          name: item.name,
          email: item.email,
          roles: item.jobRole,
          likes: filter.reduce((partialSum, a) => partialSum + a.totalLikes, 0),
          posts: filter.length,
          comments: number,
        });
      });

      setUsers(aux);
    } else setUsers([]);
  }, [getUsers]);

  useEffect(() => {
    handleUsers();
  }, [handleUsers]);

  return (
    <div className="container">
      <h1>Usuários</h1>
      <div className="container-card">
        {users.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            email={item.email}
            roles={item.roles}
            comments={item.comments}
            likes={item.likes}
            posts={item.posts}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
