import './Content.scss'

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className='content-body'>{children}</div>;
};

export { Content };
