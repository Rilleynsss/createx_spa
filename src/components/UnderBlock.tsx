import cls from "../style/underBlock.module.css";
import { FC } from "react";
import Button, { varianBtnStyles } from "./UI/Button/Button";

interface IUnderBlock {
  text: string;
  textBtn: string;
  link: string;
}

const UnderBlock: FC<IUnderBlock> = ({ text, textBtn, link }) => {
  return (
    <div className={cls.serviceUnder}>
      <h4>{text}</h4>
      <Button
        variant={varianBtnStyles.BUTTON_PRIMARY}
        isLink={true}
        linkHref={link}
      >
        {textBtn}
      </Button>
    </div>
  );
};

export default UnderBlock;
