import { FC, useState } from "react";
import cls from "../../style/home.module.css";
import redBuild from "../../img/portfolio-card/image.jpg";
import lightBuild from "../../img/portfolio-card/image.png";
import rootCls from "../../style/index.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Left } from "../../img/icon/Left.svg";
import { ReactComponent as Right } from "../../img/icon/Right.svg";
import UnderBlock from "../UnderBlock";

const cardItems = [
  {
    img: redBuild,
    h4: "Red Finger Building",
    p: "Business Centers",
    btn: "View Project",
  },
  {
    img: lightBuild,
    h4: "Cubes Building",
    p: "Business Centers",
    btn: "View Project",
  },
  {
    img: redBuild,
    h4: "Red Finger Building",
    p: "Business Centers",
    btn: "View Project",
  },
  {
    img: lightBuild,
    h4: "Cubes Building",
    p: "Business Centers",
    btn: "View Project",
  },
];
const PortfolioBlock: FC = () => {
  const [cardsCount, setCardsCount] = useState(0);

  const swipeCards = (value: string) => {
    switch (value) {
      case "next":
        setCardsCount((prev) => prev + 1);
        break;
      case "prev":
        setCardsCount((prev) => prev - 1);
    }
  };

  return (
    <div className={rootCls.container}>
      <div className={cls.portfolioBlockHeader}>
        <h3>Browse our selected projects and learn more about our work</h3>
        <div className={cls.porfolioArrowsContainer}>
          <button
            className={cls.portfolioArrow}
            onClick={() => {
              swipeCards("prev");
            }}
            disabled={cardsCount === 0 ? true : false}
          >
            <Left />
          </button>
          <button
            className={cls.portfolioArrow}
            onClick={() => {
              swipeCards("next");
            }}
            disabled={cardsCount === cardItems.length - 3 ? true : false}
          >
            <Right />
          </button>
        </div>
      </div>
      <ul className={cls.portfolioCards}>
        {cardItems.map((item) => {
          return (
            <li
              key={item.h4}
              style={{ transform: `translateX(${-450 * cardsCount}px)` }}
              className={cls.portfolioCardItem}
            >
              <img src={item.img} alt="" />
              <div className={cls.portfolioCardItemContent}>
                <h4>{item.h4}</h4>
                <p>{item.p}</p>
                <button
                  className={[rootCls.button, rootCls.secondary].join(" ")}
                >
                  <Link to="/work">{item.btn}</Link>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <UnderBlock
        text="Explore all our works"
        textBtn="View portfolio"
        link="/portfolio"
      />
    </div>
  );
};

export default PortfolioBlock;
