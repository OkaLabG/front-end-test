import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Alert } from "../../components/Alert";
import { CardUser } from "../../components/CardUser";
import { getUsers } from "../../services/users";
import { IUser } from "../../services/users/types";
import "./styles.css";

export const Users: React.FC = () => {
  const [users, setUsers] = useState([] as IUser[]);
  const [loading, setLoading] = useState(false);

  const getUsersPage = useCallback(async () => {
    setLoading(true);
    const response = await getUsers();

    if (response[0]) {
      setUsers(response);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    getUsersPage();
  }, []);

  return (
    <div className="container-users">
      <div className="content-users">
        {users[0] ? (
          users.map((e) => (
            <CardUser
              key={e.id}
              email={e.email}
              jobRole={e.jobRole}
              name={e.name}
              phone={e.phone}
            />
          ))
        ) : (
          <Alert alert="Nenhum usuário encontrado" />
        )}
      </div>
    </div>
  );
};
