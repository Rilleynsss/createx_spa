import { FC } from "react";

interface ITopBlockProps {
  img?: string;
  title?: string;
  nav?: string[];
  undretitle?: string;
}

const TopBlock: FC<ITopBlockProps> = () => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <div className="nav"></div>
        <div className="title"></div>
        <div className="undertitle"></div>
      </div>
    </div>
  );
};

export default TopBlock;
