import React from "react";
import Dyplom from "../images/Dyplom-HubertK.jpg";
import suplement from "../images/suplementOne.jpg";
import suplementTwo from "../images/suplementTwo.jpg";
import udemyOne from "../images/udemyOne.jpg";
import udemyTwo from "../images/udemyTwo.jpg";

const MyCertificate = () => {
  const body = document.querySelector("body");
  const newDiv = document.createElement("div");
  newDiv.classList.add("fullScreen");
  const newImg = document.createElement("img");
  const newButton = document.createElement("button");
  newButton.classList.add("close");
  newButton.innerText = "Zamknij";

  const chuj = "../images/udemyTwo.jpg";

  const handleCLickImage = (e) => {
    console.log("click");
    body.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newButton);
    newImg.setAttribute("src", e);
  };
  newButton.addEventListener("click", function () {
    body.removeChild(newDiv);
  });

  return (
    <div className="myCertificate">
      <h1>Dyplomy i certyfikaty: </h1>
      <img src={Dyplom} onClick={(e) => handleCLickImage(Dyplom)} />
      <img src={suplement} onClick={(e) => handleCLickImage(suplement)} />
      <img src={suplementTwo} onClick={(e) => handleCLickImage(suplementTwo)} />
      <img src={udemyOne} onClick={(e) => handleCLickImage(udemyOne)} />
      <img src={udemyTwo} onClick={(e) => handleCLickImage(udemyTwo)} />
    </div>
  );
};

export default MyCertificate;
