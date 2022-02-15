import React from 'react';

export default function LastOptions({ title, helpers, clase }) {
     return (
          <>
               <div className={clase[0]}>
                    <h4 className={clase[2]}>
                         {title}
                    </h4>
                    <ul className={clase[1]}>
                         {helpers.map((el, index) => (
                              <li key={index} className={clase[3]}>
                                   {el}
                              </li>
                         ))}
                    </ul>
               </div>
          </>
     );
}