import { Link } from "react-router-dom";
import rootCls from "../style/index.module.css";
import cls from "../style/underBlock.module.css";

const UnderBlock = ({ text, textBtn, link }) => {
  return (
    <div className={cls.serviceUnder}>
      <h4>{text}</h4>
      <button className={[rootCls.button, rootCls.primary].join(" ")}>
        <Link to={link}>{textBtn}</Link>
      </button>
    </div>
  );
};

export default UnderBlock;
