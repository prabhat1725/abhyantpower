import React from "react";

export const Img = props => {
  return(
        <img 
         src={props.src}
         className={props.className}
         height={props.height}
         width={props.width}
         alt={props.alt}
         onClick={props.onClick}
   />
   )
};
export default Img;
