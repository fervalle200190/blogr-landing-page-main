import React from "react";
import InformationReusable from "./InformationReusable";
import LastImage from "./LastImage";

export default function LastInformation() {
     return (
          <>
               <div className="last-information">
                    <LastImage />
                    <div className="last-info-cont">
                         <InformationReusable
                              titulo="Free, open, simple"
                              detalles="Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
                              clase={[
                                   "last-container",
                                   "last-title",
                                   "last-details",
                              ]}
                         />
                         <InformationReusable
                              titulo="Powerful tooling"
                              detalles="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                              capable of producing even the most complicated sites."
                              clase={[
                                   "last-container",
                                   "last-title",
                                   "last-details",
                              ]}
                         />
                    </div>
               </div>
          </>
     );
}
