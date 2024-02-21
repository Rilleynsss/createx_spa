import { FC } from "react";
import MainBlock from "./MainBlock";
import VideoBlock from "./VideoBlock";
import ServiceBlock from "./ServiceBlock";
import PortfolioBlock from "./PortfolioBlock";
import GraphBlock from "./GraphBlock";
import CallBackForm from "../CallBackForm";
import ValuesBlock from "./ValuesBlock";
import PartnerBlock from "./PartnerBlock";
import NewsBlock from "./NewsBlock";

const HomePage: FC = () => {
  return (
    <div>
      <MainBlock />
      <VideoBlock />
      <ValuesBlock />
      <ServiceBlock />
      <PortfolioBlock />
      <PartnerBlock />
      <GraphBlock />
      <NewsBlock />
      <CallBackForm />
    </div>
  );
};

export default HomePage;
