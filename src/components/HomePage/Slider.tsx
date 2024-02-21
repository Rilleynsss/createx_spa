import { FC, ReactNode, useEffect, useState } from "react";
import cls from "../../style/home.module.css";

interface ISlider {
  children?: ReactNode;
  slides: string[];
}

const Slider: FC<ISlider> = ({ children, slides }) => {
  const [slideCount, setSlideCount] = useState(0);
  const [imgStyle, setImgStyle] = useState("");
  if (slideCount >= 400) {
    setSlideCount(0);
  }
  useEffect(() => {
    setTimeout(() => {
      changeSlide();
    }, 7000);
  }, [slideCount]);
  const changeSlide = () => {
    setImgStyle(cls.swap);
    setTimeout(() => {
      setSlideCount((prev) => prev + 100);
    }, 1000);
    setTimeout(() => {
      setImgStyle("");
    }, 1000);
  };
  return (
    <div className={cls.slider}>
      <div className={cls.sliderContainer}>
        <div>
          <button>arrow right</button>
          <button className={[cls.btnArrow, cls.btnArrowLeft].join(" ")}>
            arrow left
          </button>
        </div>

        {slides.map((i, idx) => {
          return (
            <img
              key={idx}
              style={{ right: `${slideCount}vw` }}
              src={i}
              className={imgStyle}
              alt=""
              onClick={changeSlide}
            />
          );
        })}
        <button>arrow right</button>
      </div>
      {children}
    </div>
  );
};

export default Slider;
