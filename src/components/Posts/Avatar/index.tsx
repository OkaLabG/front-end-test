import "./styles.css";

interface AvatarProps {
  src?: string;
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, name }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className="container-avatar" style={{ background: `#${randomColor}` }}>
      {src ? (
        <img src="/images/logo.svg" width="90%" height="90%" alt="usuário" />
      ) : (
        <div className="icon-avatar">{name.substr(0, 1)}</div>
      )}
    </div>
  );
};

export { Avatar };
