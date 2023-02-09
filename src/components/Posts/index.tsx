import { Button } from "../Button";
import { Avatar } from "./Avatar";
import "./styles.css";
import { AiFillLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface PostProps {
  // id: number;
  title: string;
  // description: string;
  // userId: number;
  image: string;
  totalLikes: number;
}

const Post: React.FC<PostProps> = ({ image, title, totalLikes }) => {
  return (
    <main className="container-post">
      <header className="content-user">
        <Avatar name="Caio" />
        <span>Caio Henrique Rodrigues</span>
      </header>
      <section>
        <figure className="image-post">
          <span className="comments">{title}</span>
          <LazyLoadImage
            src={image}
            alt="Post"
            effect="opacity"
            width="100%"
            style={{ borderRadius: "20px" }}
          />
        </figure>
        <div className="actions">
          <span>{totalLikes} Curtidas</span>
        </div>
        <hr />
        <footer className="content-buttons">
          <Button
            title="Curtir"
            height="40px"
            width="75%"
            variant="buttonPost"
            iconLeft={<AiFillLike size="18px" />}
          />
          <Button
            title="Comentar"
            height="40px"
            variant="buttonPost"
            iconLeft={<BiCommentDetail size="18px" />}
          />
          <Button
            title="Compartilhar"
            height="40px"
            variant="buttonPost"
            iconLeft={<IoMdShareAlt size="18px" />}
          />
        </footer>
      </section>
    </main>
  );
};

export { Post };
