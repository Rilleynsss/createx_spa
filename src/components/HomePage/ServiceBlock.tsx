import { FC } from "react";
import rootCls from "../../style/index.module.css";
import cls from "../../style/home.module.css";
import fontCls from "../../style/fontSettings.module.css";
import { ReactComponent as Bricks } from "../../img/icon/service/ic-construction.svg";
import { ReactComponent as Plan } from "../../img/icon/service/ic-plan.svg";
import { ReactComponent as Pantone } from "../../img/icon/service/ic-pantone.svg";
import { ReactComponent as Paint } from "../../img/icon/service/ic-painting.svg";
import serviceItemHoveredBg from "../../img/icon/service/image.jpg";
import UnderBlock from "../UnderBlock";

const ServiceBlock: FC = () => {
  const serviceData = [
    {
      imgHovered: serviceItemHoveredBg,
      svgItem: <Bricks className={cls.serviceIcon} />,
      p: "Construction",
    },
    {
      imgHovered: serviceItemHoveredBg,
      svgItem: <Plan className={cls.serviceIcon} />,
      p: "Project Development",
    },
    {
      imgHovered: serviceItemHoveredBg,
      svgItem: <Pantone className={cls.serviceIcon} />,
      p: "Interior Design",
    },
    {
      imgHovered: serviceItemHoveredBg,
      svgItem: <Paint className={cls.serviceIcon} />,
      p: "Repairs",
    },
  ];
  return (
    <div className={cls.service}>
      <div className={[rootCls.container, cls.serviceBlock].join(" ")}>
        <h2 className={fontCls.fontHeaderBlock}>Our services</h2>
        <p>
          Createx Construction Bureau is a construction giant with a full range
          of construction services.
        </p>
        <ul>
          {serviceData.map((item) => {
            return (
              <li key={item.p} className={cls.serviceBlockItem}>
                <img
                  src={item.imgHovered}
                  className={cls.serviceBlockItemHovered}
                  alt=""
                />
                {item.svgItem}
                <p>{item.p}</p>
              </li>
            );
          })}
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
