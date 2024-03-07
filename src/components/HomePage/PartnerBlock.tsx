import { FC } from "react";
import rootCls from "../../style/index.module.css";
import cls from "../../style/home.module.css";
import { ReactComponent as Left } from "../../img/icon/Left.svg";
import { ReactComponent as Right } from "../../img/icon/Right.svg";
import { ReactComponent as Logo } from "../../img/InDepth Consulting Logo - Untitled Page.svg";
import partners from "../../img/partner.jpg";
import profileImage from "../../img/profile-image.png";

const PartnerBlock: FC = () => {
  return (
    <div className={cls.partnerBlock}>
      <div className={[rootCls.container, cls.partnerBlockContainer].join(" ")}>
        <h3 className={cls.partnerHeader}>Supported by 12+ partners</h3>
        <ul className={cls.partnersLogos}>
          <li>
            <Logo />
          </li>
          <li>
            <Logo />
          </li>
          <li>
            <Logo />
          </li>
          <li>
            <Logo />
          </li>
          <li>
            <Logo />
          </li>
          <li>
            <Logo />
          </li>
        </ul>
        <div className={cls.partnerUnderBlock}>
          <div className={cls.partnerUnderBlockContent}>
            <h4>What our clients are saying</h4>
            <div className={cls.partnerProfile}>
              <img className={cls.profileImage} src={profileImage} alt="" />
              <p className={cls.profileComment}>
                Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum
                eiusmod enim. Consectetur magna cillum consequat minim laboris
                cillum laboris voluptate minim proident exercitation ullamco.{" "}
              </p>
              <div className={cls.profileUnderTitle}>
                <p>
                  Shawn Edwards
                  <span>Position, Company name</span>
                </p>
                <div>
                  <button>
                    <Left />
                  </button>
                  <button>
                    <Right />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img className={cls.partnerImage} src={partners} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PartnerBlock;
