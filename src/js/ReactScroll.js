import { Link } from "react-scroll";
import React from "react";

export default function ReactScroll() {
  return (
    <>
      <div className="reactScroll">
        <Link to="technologies" smooth={true} duration={1250}>
          * Technologie *
        </Link>
        <Link to="myProject" smooth={true} duration={1250}>
          * Projekty *
        </Link>
        <Link to="myCertificate" smooth={true} duration={1250}>
          * Certyfikaty *
        </Link>
        <Link to="contactSection" smooth={true} duration={1250}>
          * Kontakt *
        </Link>
      </div>
    </>
  );
}
