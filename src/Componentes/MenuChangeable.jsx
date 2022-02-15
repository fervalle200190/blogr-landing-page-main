import React, { useState, useEffect } from "react";
import ArrowLight from "../images/icon-arrow-light.svg";
import ArrowDark from "../images/icon-arrow-dark.svg";

export default function MenuChangeable({
     manejar,
     clase,
     helpers,
     title
}) {
     const [ancho, setAncho] = useState(window.innerWidth);
     useEffect(() => {
          window.addEventListener("resize", () => {
               setAncho(window.innerWidth);
          });
     }, []);
     return (
          <>
               <div className={clase[0]}>
                    <h4
                         className={clase[2]}
                         onClick={(e) => {
                              manejar(e);
                         }}
                    >
                         {title}
                         <img
                              src={ancho > 750 ? ArrowLight : ArrowDark}
                              alt="arrow-light"
                              className={clase[3]}
                         />
                    </h4>
                    <ul className={clase[1]} data-menu>
                         {helpers.map((el, index) => (
                              <li key={index} className={clase[4]}>
                                   {el}
                              </li>
                         ))}
                    </ul>
               </div>
          </>
     );
}
