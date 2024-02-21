import { FC } from "react";
import rootCls from "../../style/index.module.css";
import cls from "../../style/home.module.css";

const VideoBlock: FC = () => {
  return (
    <div className={[rootCls.container, cls.videoBlock].join(" ")}>
      <h2>We are Createx Construction Bureau </h2>
      <h3>
        We are rightfully considered to be the best construction company in the
        USA.
      </h3>
      <div className={cls.video}>
        <video src=""></video>
      </div>
    </div>
  );
};

export default VideoBlock;
