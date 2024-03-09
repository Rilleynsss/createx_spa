import { FC, ReactNode } from "react";
import cls from "./Button.module.css";
import { Link } from "react-router-dom";
export const varianBtnStyles = {
  BUTTON: cls.button,
  BUTTON_PRIMARY: [cls.button, cls.primary].join(" "),
  BUTTON_SECONDARY: [cls.button, cls.secondary].join(" "),
  BUTTON_MAIN: [cls.button, cls.main].join(" "),
};
interface IButton {
  children?: ReactNode;
  isLink?: boolean;
  linkHref?: string;
  variant: string;
}

const Button: FC<IButton> = ({ children, isLink, linkHref, variant }) => {
  console.log(variant);
  if (isLink) {
    return (
      <button className={variant}>
        <Link to={linkHref ? linkHref : " "}>{children}</Link>
      </button>
    );
  }
  return <button className={variant}>{children}</button>;
};

export default Button;
