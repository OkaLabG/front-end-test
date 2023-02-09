interface AlertProps {
  alert: string;
}

const Alert: React.FC<AlertProps> = ({ alert }) => {
  return <div className="container-alert">{alert}</div>;
};

export { Alert };
