import React from "react";
import TechnologiesList from "./TechnologiesList";
import HTML from "../images/html-5.png";
import CSS3 from "../images/css3.png";
import JS from "../images/javascript.png";
import REACT from "../images/react-icon.png";
import GIT from "../images/Git.png";
import GITHUB from "../images/gitHub.png";
import SCSS from "../images/scss.png";
import LINUX from "../images/Linux-icon.png";
import WEBPACK from "../images/webpack.png";
import NODEJS from "../images/nodejs.png";
import WEBSTORM from "../images/webstorm.jpg";
import VSC from "../images/vscIcon.png";

const Technologies = () => {
  return (
    <div className="technologies">
      <div className="leftSide">
        <h1>Technologie i narzędzia: </h1>
        <img src={HTML} />
        <img src={CSS3} />
        <img src={SCSS} />
        <img src={JS} />
        <img src={REACT} />
        <img src={GIT} />
        <img src={GITHUB} />
        <img src={NODEJS} />
        <img src={LINUX} />
        <img src={WEBPACK} />
        <img src={VSC} />
        <img src={WEBSTORM} />
      </div>
      <div className="rightSide">
        <TechnologiesList />
      </div>
    </div>
  );
};

export default Technologies;
