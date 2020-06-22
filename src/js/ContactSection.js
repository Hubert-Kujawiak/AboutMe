import React from "react";
import myPhoto from "../images/myPhoto.jpg";

const ContactSection = () => {
  return (
    <div className="contactSection">
      <h1>Kontakt: </h1>
      <div className="allSideContact">
        <div className="leftSideContact">
          <img src={myPhoto} />
        </div>
        <div className="rightSideContact">
          <h2>Dane kontaktowe:</h2>
          <p>Imie: Hubert</p>
          <p>Nazwisko: Kujawiak</p>
          <p>E-mail: h.kujawiak@hotmail.com</p>
          <p>Adres: Kraków</p>
          <p>Number: +48 536 100 052</p>
          <p></p>
          <h2>Linki: </h2>
          <p>
            <a href="https://github.com/Hubert-Kujawiak" target="blank">
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/hubert-kujawiak"
              target="blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
