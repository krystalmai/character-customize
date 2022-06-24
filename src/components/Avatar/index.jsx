import React from "react";
import "./Avatar.css";
function Avatar(props) {
  
  return (
    <div className="avt-wrapper">
      <div className="avt">
        <img src={`img/body/${props.body}.png`} alt="" style={{ zIndex: 0 }} />
        <img src={`img/eyes/${props.eyes}.png`} alt="" style={{ zIndex: 1 }} />
        <img src="img/noses/1.png" alt="" style={{ zIndex: 1 }} />
        <img src={`img/hair/${props.hair}.png`} alt="" style={{ zIndex: 5 }} />
        <img
          src={`img/mouths/${props.mouth}.png`}
          alt=""
          style={{ zIndex: 1 }}
        />
        <img
          src={`img/accessories/hats/${props.hat}.png`}
          alt=""
          style={{ zIndex: 6 }}
        />
        <img
          src={`img/eyebrows/${props.eyebrows}.png`}
          alt=""
          style={{ zIndex: 1 }}
        />
        <img
          src={`img/accessories/glasses/${props.glasses}.png`}
          alt=""
          style={{ zIndex: 3 }}
        />
        <img
          src={`img/clothes/layer_1/${props.clothing1}.png`}
          alt=""
          style={{ zIndex: 2 }}
        />
        <img
          src={`img/clothes/layer_2/${props.clothing2}.png`}
          alt=""
          style={{ zIndex: 3 }}
        />
      </div>
      <div className="text-center">
        <button className="randomize" onClick={props.randomize}>
          Randomize
        </button>
      </div>
    </div>
  );
}

export default Avatar;
