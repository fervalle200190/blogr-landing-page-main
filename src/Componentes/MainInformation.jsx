import React from "react";
import InformationReusable from "./InformationReusable";

export default function MainInformation() {
     return (
          <>
               <div className="information-container">
                    <InformationReusable
                         titulo={["Introducing an","extensible editor"]}
                         detalles="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                         The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                         videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                         change the looks of a blog."
                         clase={["info-main-cont","title-description","details-main"]}
                    />
                    <InformationReusable
                         titulo={["Robust content","management"]}
                         detalles="Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                         by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
                         clase={["info-main-cont","title-description","details-main"]}
                    />
               </div>
          </>
     );
}
