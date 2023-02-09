import './BodyPage.scss'

interface IBodyPage {
  children: React.ReactNode;
}

const BodyPage: React.FC<IBodyPage> = ({ children }) => {
  return <section>{children}</section>;
};
export { BodyPage };
