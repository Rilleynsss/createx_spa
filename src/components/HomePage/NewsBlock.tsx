import { FC } from "react";
import rootCls from "../../style/index.module.css";
import cls from "../../style/home.module.css";
import fontCls from "../../style/fontSettings.module.css";
import imgLarge from "../../img/article/image1.jpg";
import imgSmallFirst from "../../img/article/image2.jpg";
import imgSmallSecond from "../../img/article/image3.jpg";
import message from "../../img/article/Vector.png";
import UnderBlock from "../UnderBlock";

const NewsBlock: FC = () => {
  return (
    <div className={rootCls.container}>
      <h2 className={[fontCls.fontHeaderBlock, cls.newsHeadTitle].join(" ")}>
        Recent news
      </h2>
      <div className={cls.newsContent}>
        <ul className={cls.newsListContainer}>
          <li className={cls.newsItemLarge}>
            <img src={imgLarge} alt="" />
            <h4 className={cls.newsItemTitle}>
              How to Build Climate Change-Resilient Infrastructure
            </h4>
            <ul className={cls.infoNews}>
              <li>
                <p>Industry News</p>
              </li>
              <span></span>
              <li>
                <p>June 24, 2020</p>
              </li>
              <span></span>
              <li>
                <img src={message} alt="" />
                <p>4 comments</p>
              </li>
            </ul>
            <p className={cls.newsItemUndertext}>
              Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas
              faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer
              bibendum turpis convallis enim, nibh convallis...
            </p>
          </li>
          <li className={cls.newsItemSmall}>
            <img src={imgSmallFirst} alt="" />
            <h4 className={cls.newsItemTitle}>
              How Construction Can Help Itself
            </h4>
            <ul className={cls.infoNews}>
              <li>
                <p>Innovation</p>
              </li>
              <span></span>
              <li>
                <p>June 12, 2020</p>
              </li>
              <span></span>
              <li>
                <img src={message} alt="" />
                <p>No comments</p>
              </li>
            </ul>
          </li>
          <li className={cls.newsItemSmall}>
            <img src={imgSmallFirst} alt="" />
            <h4 className={cls.newsItemTitle}>
              How Construction Can Help Itself
            </h4>
            <ul className={cls.infoNews}>
              <li>
                <p>Innovation</p>
              </li>
              <span></span>
              <li>
                <p>June 12, 2020</p>
              </li>
              <span></span>
              <li>
                <img src={message} alt="" />
                <p>No comments</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <UnderBlock
        text="Explore all our news posts"
        textBtn="View all news"
        link="/news"
      />
    </div>
  );
};

export default NewsBlock;
