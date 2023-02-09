import Avatar from "../../img/avatar.png";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlinePostAdd } from "react-icons/md";
import "../../styles/components/card.sass";

interface ICard {
  name: string;
  email: string;
  roles: string;
  likes: number;
  comments: number;
  posts: number;
}

const Card: React.FC<ICard> = ({
  name,
  email,
  roles,
  comments,
  likes,
  posts,
}) => {
  return (
    <div className="content">
      <div className="properties">
        <div className="properties-name">
          <img src={Avatar} alt="" />
          <div>
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div className="properties-numbers">
            <div>
              <FcLike />
              {likes}
            </div>
            <div>
              <MdOutlinePostAdd />
              {posts}
            </div>
            <div>
              <BiCommentDetail />
              {comments}
            </div>
          </div>
          <div className="properties-role">
            <p>{roles}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
