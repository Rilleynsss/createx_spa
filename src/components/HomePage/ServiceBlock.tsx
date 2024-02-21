import { FC } from "react";
import rootCls from "../../style/index.module.css";
import cls from "../../style/home.module.css";
import ic_brick from "../../img/service/ic-construction.png";
const ServiceBlock: FC = () => {
  return (
    <div className={cls.service}>
      <div className={[rootCls.container, cls.serviceBlock].join(" ")}>
        <h3>Our services</h3>
        <p>
          Createx Construction Bureau is a construction giant with a full range
          of construction services.
        </p>
        <ul>
          <li>
            <img src={ic_brick} alt="" />
            <p>Construction</p>
          </li>
          <li>
            <img src={ic_brick} alt="" />
            <p>Construction</p>
          </li>
          <li>
            <img src={ic_brick} alt="" />
            <p>Construction</p>
          </li>
          <li>
            <img src={ic_brick} alt="" />
            <p>Construction</p>
          </li>
        </ul>
        <div className={cls.serviceUnder}>
          <h4>Learn more about our services</h4>
          <button className={[rootCls.button, rootCls.primary].join(" ")}>
            View services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
