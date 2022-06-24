import React from "react";
import "./PartList.css";
import Part from "../Part";
function PartList(props) {
 
  return (
    <div>
      <h3 className="list-name">{props.title}</h3>
      <div className="option-box">
        {Array(props.total)
          .fill(0)
          .map((img, index) => (
            <Part
              className={props.title}
              key={index}
              imgPath={props.path}
              index={index + 1}
              handleClick={props.handleClick}
              selected={index + 1 === props.selected}
            />
          ))}
      </div>
    </div>
  );
}
export default PartList;
