import React from "react";
import PropTypes from "prop-types";

function BottomVector({ width, height,color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 521 136" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.592 115H453.138L500.908 19H68.3616L20.592 115Z" fill={color}/>
    </svg>
  );
}

BottomVector.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default BottomVector;