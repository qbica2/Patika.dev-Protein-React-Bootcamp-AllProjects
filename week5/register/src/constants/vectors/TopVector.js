import React from "react";
import PropTypes from "prop-types";

function TopVector({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 361 136" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 115H292.546L340.316 19H67.7696L20 115Z" fill={color}/>
    </svg>
  );
}

TopVector.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default TopVector;