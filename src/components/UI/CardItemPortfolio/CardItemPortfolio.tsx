import { FC } from "react";
import Button, { varianBtnStyles } from "../Button/Button";
import cls from "./CardItemPortfolio.module.css";

interface ICardItemProps {
  h4: string;
  cardsCount: number;
  btnText: string;
  img: string;
  p: string;
}

const CardItemPortfolio: FC<ICardItemProps> = ({
  h4,
  cardsCount,
  btnText,
  img,
  p,
}) => {
  return (
    <li
      key={h4}
      style={{ transform: `translateX(${-450 * cardsCount}px)` }}
      className={cls.portfolioCardItem}
    >
      <img src={img} alt="" />
      <div className={cls.portfolioCardItemContent}>
        <h4>{h4}</h4>
        <p>{p}</p>
        <Button
          variant={varianBtnStyles.BUTTON_SECONDARY}
          isLink={true}
          linkHref="/work"
        >
          {btnText}
        </Button>
      </div>
    </li>
  );
};

export default CardItemPortfolio;
