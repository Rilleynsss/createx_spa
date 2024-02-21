import { FC, useState } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import cls from "../../style/home.module.css";
import rootCls from "../../style/index.module.css";
import bg from "../../img/bg-image.jpg";

const MainBlock: FC = () => {
  const slides = [bg, bg, bg, bg];

  const [slideNumber, setSlideNumber] = useState(0);
  return (
    <div>
      <Slider slides={slides}>
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
              <button
                className={[rootCls.button, rootCls.main, cls.btnMore].join(
                  " "
                )}
              >
                <Link to="/about">Learn more about us</Link>
              </button>
              <button className={[rootCls.button, rootCls.primary].join(" ")}>
                SUBMIT REQUEST
              </button>
            </div>
            <div>
              <button>01</button>
              <button>02</button>
              <button>03</button>
              <button>04</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainBlock;
