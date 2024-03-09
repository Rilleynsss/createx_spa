import { FC, useEffect, useState } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import cls from "../../style/home.module.css";
import rootCls from "../../style/index.module.css";
import bg from "../../img/bg-image.jpg";
import Button, { varianBtnStyles } from "../UI/Button/Button";

const MainBlock: FC = () => {
  const slides = [bg, bg, bg, bg];
  const [slideCount, getSlideCount] = useState(0);

  useEffect(() => {}, [slideCount]);
  return (
    <div>
      <Slider slides={slides} getSlideCount={getSlideCount}>
        <div className={rootCls.container}>
          <div className={cls.mainContent}>
            <h1>
              CREATE <span>X</span> CONSTRUCTION
            </h1>
            <h3>
              Cras ultrices leo vitae non viverra. Fringilla nisi quisque
              consequat, dignissim vitae proin ipsum sed. Pellentesque nec
              turpis purus eget pellentesque integer ipsum elementum felis.
            </h3>
            <div>
              <Button
                variant={varianBtnStyles.BUTTON_MAIN}
                isLink={true}
                linkHref="/about"
              >
                Learn more about us
              </Button>
              <Button variant={varianBtnStyles.BUTTON_PRIMARY}>
                SUBMIT REQUEST
              </Button>
            </div>
            <ul className={cls.mainCountSlides}>
              {slides.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={slideCount === index ? cls.countActive : ""}
                  >
                    0{index + 1} <span></span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainBlock;
