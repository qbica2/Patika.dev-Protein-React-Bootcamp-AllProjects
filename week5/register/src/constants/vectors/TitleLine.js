import React from "react";
import PropTypes from "prop-types";

function TitleLine({ color }) {
  return (
    <svg width="133" height="4" viewBox="0 0 133 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="2" x2="133" y2="2" stroke={color} strokeWidth="4"/>
    </svg>
  );
}

TitleLine.propTypes = {
  color: PropTypes.string.isRequired
};

export default TitleLine;