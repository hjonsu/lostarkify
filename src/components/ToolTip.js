import Popup from "reactjs-popup";
import React from "react";
import "../styles/styles.css";

export default function Tooltip(props) {
  const { image, height, width, alt } = props;
  return (
    <sup>
      <Popup
        trigger={
          <button className="tooltip-button">
            <strong>(?)</strong>
          </button>
        }
        position="right center"
      >
        <img src={image} height={height} width={width} alt={alt} />
      </Popup>
    </sup>
  );
}
