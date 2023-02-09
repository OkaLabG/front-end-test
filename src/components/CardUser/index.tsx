import { Avatar } from "../Posts/Avatar";
import "./styles.css";

interface CardUserProps {
  name: string;
  jobRole: string;
  phone: string;
  email: string;
}

const CardUser: React.FC<CardUserProps> = ({ name, phone, email, jobRole }) => {
  return (
    <div className="container-card-user">
      <div>
        <Avatar name={name} />
      </div>
      <div className="data-user">
        <div className="content-data">
          <div>
            <p>Nome:</p>
            <span>{name}</span>
          </div>
          <div>
            <p>Telefone:</p>
            <span>{phone}</span>
          </div>
        </div>
        <div className="content-data" style={{ textAlign: "right" }}>
          <div>
            <p>E-mail:</p>
            <span>{email}</span>
          </div>
          <div>
            <p>Trabalho:</p>
            <span>{jobRole}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardUser };
