import { Link } from "react-scroll";
import React from "react";

export default function ReactScroll() {
  return (
    <>
      <Link to="technologies" smooth={true} duration={1250}>
        Technologie
      </Link>
      <Link to="myProject" smooth={true} duration={1250}>
        Projekty
      </Link>
      <Link to="contactForm" smooth={true} duration={1250}>
        Kontakt
      </Link>
    </>
  );
}
