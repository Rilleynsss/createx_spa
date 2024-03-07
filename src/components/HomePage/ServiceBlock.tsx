import { FC } from "react";
import rootCls from "../../style/index.module.css";
import cls from "../../style/home.module.css";
import { ReactComponent as Bricks } from "../../img/icon/service/ic-construction.svg";
import { ReactComponent as Plan } from "../../img/icon/service/ic-plan.svg";
import { ReactComponent as Pantone } from "../../img/icon/service/ic-pantone.svg";
import { ReactComponent as Paint } from "../../img/icon/service/ic-painting.svg";
import serviceItemHoveredBg from "../../img/icon/service/image.jpg";
import UnderBlock from "../UnderBlock";

const ServiceBlock: FC = () => {
  // const serviceData = [
  //   {
  //     svgItem:{
  //       path:
  //     }
  //   }
  // ]
  return (
    <div className={cls.service}>
      <div className={[rootCls.container, cls.serviceBlock].join(" ")}>
        <h3>Our services</h3>
        <p>
          Createx Construction Bureau is a construction giant with a full range
          of construction services.
        </p>
        <ul>
          <li className={cls.serviceBlockItem}>
            <img
              src={serviceItemHoveredBg}
              className={cls.serviceBlockItemHovered}
              alt=""
            />
            <Bricks className={cls.serviceIcon} color="red" />
            <p>Construction</p>
          </li>
          <li className={cls.serviceBlockItem}>
            <img
              src={serviceItemHoveredBg}
              className={cls.serviceBlockItemHovered}
              alt=""
            />
            <Plan className={cls.serviceIcon} color="red" />

            <p>Project Development</p>
          </li>
          <li className={cls.serviceBlockItem}>
            <img
              src={serviceItemHoveredBg}
              className={cls.serviceBlockItemHovered}
              alt=""
            />
            <Pantone className={cls.serviceIcon} color="red" />

            <p>Interior Design</p>
          </li>
          <li className={cls.serviceBlockItem}>
            <img
              src={serviceItemHoveredBg}
              className={cls.serviceBlockItemHovered}
              alt=""
            />
            <Paint className={cls.serviceIcon} color="red" />
            <p>Repairs</p>
          </li>
        </ul>
        <UnderBlock
          text="Learn more about our services"
          textBtn="View services"
          link="/service"
        />
      </div>
    </div>
  );
};

export default ServiceBlock;
