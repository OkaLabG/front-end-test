import { MdPostAdd } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

import "./CardUser.scss";

interface CardUserProps {
  name: string;
  phone: string;
  email: string;
  job: string;
  posts: number;
  likes: number;
  comments: number;
}

const CardUser: React.FC<CardUserProps> = ({
  name,
  phone,
  email,
  job,
  posts,
  likes,
  comments,
}) => {
  const randomNumber = Math.floor(Math.random() * 70) + 1;

  return (
    <div className="card-user">
      <div className="image-container">
        <img
          src={`https://randomuser.me/api/portraits/men/${randomNumber}.jpg`}
          alt={name}
        />
      </div>
      <div className="user-content">
        <div className="user-info">
          <p>Nome: </p>
          <p className="user-name">&nbsp; &nbsp;{name}</p>
        </div>
        <div className="user-info">
          <p>Telefone: </p>
          <p className="user-normal-info">&nbsp; &nbsp;{phone}</p>
        </div>
        <div className="user-info">
          <p>Função: </p>
          <p className="user-normal-info">&nbsp; &nbsp;{job}</p>
        </div>
        <div className="user-info">
          <p>Email: </p>
          <p className="user-name">&nbsp; &nbsp;{email}</p>
        </div>
        <div className="info-count">
          <div className="count-item">
            <MdPostAdd color="#2FC1A9" size={24} fontWeight={900} />
            <p>{posts}</p>
          </div>
          <div className="count-item">
            <AiFillLike color="#2FC1A9" size={24} fontWeight={900} />
            <p>{likes}</p>
          </div>
          <div className="count-item">
            <BiCommentDetail color="#2FC1A9" size={24} fontWeight={900} />
            <p>{comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardUser };
