import React from "react";
import InformationReusable from "./InformationReusable";
import MiddleImage from "./MiddleImage";

export default function MiddleInformation() {
     return (
          <>
               <div className="middle-information">
                    <div className="to-fix-middle">
                         <MiddleImage />
                         <InformationReusable
                              titulo="State of the Art Infrastructure"
                              detalles="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                         This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
                              clase={[
                                   "blue-container",
                                   "middle-title",
                                   "middle-info",
                              ]}
                         />
                    </div>
               </div>
          </>
     );
}
