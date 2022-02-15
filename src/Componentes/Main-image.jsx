import React, { useState, useEffect } from "react";
import GraphicMobile from "../images/illustration-editor-mobile.svg";
import GraphicDesktop from "../images/illustration-editor-desktop.svg";

export default function MainImage() {
     const [size, setSize] = useState(window.innerWidth);
     useEffect(() => {
          window.addEventListener("resize", () => {
               setSize(window.innerWidth);
          });
     }, []);
     return (
          <>
               <div className="image-container">
                    <img
                         src={size > 750 ? GraphicDesktop : GraphicMobile}
                         alt="illustration"
                         className="illustration-image"
                    />
               </div>
          </>
     );
}
