import { JSXElementConstructor, ReactElement } from "react";
import "./styles.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  iconLeft?: ReactElement<any, string | JSXElementConstructor<any>>;
  iconRight?: ReactElement<any, string | JSXElementConstructor<any>>;
  width?: string;
  height?: string;
  borderRadius?: boolean;
  variant?:
    | "link"
    | "default"
    | "primary"
    | "secondary"
    | "outline"
    | "buttonPost";
}

const Button: React.FC<ButtonProps> = ({
  title,
  iconLeft,
  iconRight,
  variant = "outline",
  width = "100%",
  height = "48px",
  borderRadius = true,
  ...rest
}) => {
  return (
    <button
      className={`container-button ${variant}`}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius ? "12px" : "0",
      }}
      {...rest}
    >
      {iconLeft} {title} {iconRight}
    </button>
  );
};

export { Button };
