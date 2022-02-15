import React, { useEffect, useState } from "react";
import LaptopImageDesktop from "../images/illustration-laptop-desktop.svg";
import LaptopImageMobile from "../images/illustration-laptop-mobile.svg";

export default function LastImage() {
     const [size, setSize] = useState(window.innerWidth);
     useEffect(() => {
          window.addEventListener("resize", () => {
               setSize(window.innerWidth);
          });
     }, []);
     return (
          <>
               <div className="last-image-cont">
                    <img
                         src={
                              size > 750
                                   ? LaptopImageDesktop
                                   : LaptopImageMobile
                         }
                         alt="size"
                         className="last-image"
                    />
               </div>
          </>
     );
}
