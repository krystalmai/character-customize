import React from "react";
import "./Part.css";
function Part(props) {
 
  let source = `img/${props.imgPath}/${props.index}.png`;
  return (
    <div >
      <img className={`part ${props.selected ? 'selected' : '' }`} src={source} alt="" onClick={() => props.handleClick(props.imgPath, props.index)}  />
    </div>
  );
}

export default Part;
