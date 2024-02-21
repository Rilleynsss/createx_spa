import { FC } from "react";
import rootCls from "../../style/index.module.css";
import cls from "../../style/home.module.css";
import like from "../../img/icon-box/ic-like.svg";

const ValuesBlock: FC = () => {
  const values = [
    {
      h4Text: "Quality",
      img: like,
      pText: `Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
            velit nostrud aliquip sunt.`,
    },
    {
      h4Text: "Safety",
      img: like,
      pText: `Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.`,
    },
    {
      h4Text: "Comfort",
      img: like,
      pText: `Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.`,
    },
  ];
  return (
    <div className={[rootCls.container, cls.valuesBlock].join(" ")}>
      <h2>Our core values</h2>
      <h3>
        Our mission is to set the highest standards for construction sphere.
      </h3>
      <ul>
        {values.map((i, idx) => {
          return (
            <>
              <li>
                <img src={i.img} alt="" />
                <h4>{i.h4Text}</h4>
                <p>{i.pText}</p>
              </li>
              {idx < values.length - 1 ? <span></span> : null}
            </>
          );
        })}
        {/* <li>
          <img src={like} alt="" />
          <h4>Quality</h4>
          <p>
            Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
            velit nostrud aliquip sunt.
          </p>
        </li>
        <span></span>

        <li>
          <img src={like} alt="" />
          <h4>Quality</h4>
          <p>
            Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
            velit nostrud aliquip sunt.
          </p>
        </li>
        <span></span>
        <li>
          <img src={like} alt="" />
          <h4>Quality</h4>
          <p>
            Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
            velit nostrud aliquip sunt.
          </p>
        </li> */}
      </ul>
    </div>
  );
};

export default ValuesBlock;