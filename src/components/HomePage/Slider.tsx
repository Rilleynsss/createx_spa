import { FC, ReactNode, useEffect, useState } from "react";
import cls from "../../style/slider.module.css";
import arrowLeft from "../../img/icon/arrowLeft.png";
import arrowRight from "../../img/icon/arrowRight.png";

interface ISlider {
  children?: ReactNode;
  slides: string[];
  getSlideCount: (num: number) => void;
}

const Slider: FC<ISlider> = ({ children, slides, getSlideCount }) => {
  const [slideCount, setSlideCount] = useState(0);
  const [imgStyle, setImgStyle] = useState([cls.sliderImg]);
  useEffect(() => {
    if (slideCount < 0) {
      console.log(-slideCount / 100);
      getSlideCount(-slideCount / 100);
    } else {
      getSlideCount(0);
    }
  }, [slideCount, getSlideCount]);

  const changeSlide = (event?: string) => {
    setImgStyle((prev) => [...prev, cls.swap]);
    if (event === "next") {
      setImgStyle((prev) => [...prev, cls.swap]);

      setSlideCount((prev) => prev - 100);
      if (slideCount <= -300) {
        setSlideCount(0);
      }
    } else if (event === "prev") {
      setImgStyle((prev) => [...prev, cls.reverseSwap]);
      setSlideCount((prev) => prev + 100);
      if (slideCount === 0) {
        setSlideCount(-300);
      }
    }
    setTimeout(() => {
      setImgStyle([cls.sliderImg]);
    }, 1000);
  };
  return (
    <div className={cls.slider}>
      <div className={cls.sliderArrows}>
        <button onClick={(e) => changeSlide("prev")}>
          <img className={cls.sliderArrowsImg} src={arrowLeft} alt="" />
        </button>
        <button onClick={() => changeSlide("next")}>
          <img className={cls.sliderArrowsImg} src={arrowRight} alt="" />
        </button>
      </div>
      <div className={cls.sliderContainer}>
        {slides.map((i, idx) => {
          return (
            <img
              key={idx}
              style={{ transform: `translateX(${slideCount}vw)` }}
              src={i}
              className={imgStyle.join(" ")}
              alt=""
            />
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default Slider;
