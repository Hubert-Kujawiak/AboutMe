import React from "react";
import CLA from "../images/cla.jpg";
import Portfolio from "../images/portfolioLabs.jpg";

const myProject = () => {
  return (
    <div className="myProject">
      <h1>Moje Projekty: </h1>
      <div className="allSide">
        <div className="leftSideProject">
          <h2>DodajPrzegląd!</h2>
          <a href="http://dodajprzeglad.pl" target="blank">
            <img src={CLA}></img>
          </a>
          <article>
            Projekt przykładowej aplikacji webowej stworzonej z myślą o
            serwisach samochodowych. Technologie wykorzystane w tym projekcie to
            React, SASS, WebPack oraz Firebase. Aplikacja służy do dodawania
            pojazdów do bazy danych na serwerze. Dodatkowe opcje wyszukiwania
            lub dodawania poszczególnych operacji/napraw do danego pojazdu
            ułatwiają prace na aplikacji, istnieje również baza części której
            funkcje także umożliwiają sprawną pracę na niej.{" "}
          </article>
        </div>
        <div className="rightSideProject">
          <h2>Oddaj Rzeczy!</h2>
          <a href="https://nifty-jang-96be08.netlify.app/" target="blank">
            <img src={Portfolio} />
          </a>
          <article>
            Aplikacja stworzona z myślą o oddawaniu niepotrzebnych rzeczy takich
            jak ubrania, zabawki i inne. Zaimplementowane zostało również
            logowanie, zakładanie konta użytkownika oraz baza danych za pomocą
            Firebase. Do stworzenia aplikacji zostały użyte technologie React,
            React-scroll, React-Router, react-form-carousel, Sass, Firebase.
          </article>
        </div>
      </div>
    </div>
  );
};

export default myProject;
