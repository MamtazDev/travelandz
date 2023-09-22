import React, { useEffect, useRef } from "react";
import { exportIcon, personIcon } from "./SVG";

export default function Footer() {
  const footerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  const start = 350;
  const onScroll = () => {
    if (window.scrollY > start && footerRef.current) {
      footerRef.current?.classList.add("sticky");
    } else {
      footerRef.current?.classList.remove("sticky");
    }
  };
  return (
    <div className="footer" ref={footerRef}>
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__price">
            <div className="number">2132 €</div>
            <p>1062€/ person</p>
          </div>
          <div className="footer__links">
            <a href="#" className="footer__link button">
              {personIcon} Contact agent
            </a>
            <a href="#" className="footer__link button">
              {exportIcon} Export PDF
            </a>
            <button className="button book">Book & checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
