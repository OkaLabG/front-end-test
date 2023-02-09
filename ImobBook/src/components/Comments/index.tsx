import './Comment.scss'

interface CommentProps {
  imageLink: string;
  description: string;
  title: string;
}

const Comments:React.FC<CommentProps> = ({
  imageLink, description, title
}) => {
  return (
    <div className="comment-container">
      <div className="comment-content">
        <div className="image-container"><img src={imageLink} alt={`${title}-${imageLink}`}/></div>
        <div className="content-container">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
export { Comments}