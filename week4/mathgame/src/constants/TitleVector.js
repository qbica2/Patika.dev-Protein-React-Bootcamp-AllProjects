import React from "react";
import PropTypes from "prop-types";

function TitleVector({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 640 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M639.998 1.72994C641.22 -1.50429 12.5197 0.574858 5.18769 1.72994C-2.14435 2.88503 -1.30127 5.72697 5.18769 9.1225C11.6766 12.518 619.626 4.96418 619.626 4.96418C619.626 4.96418 638.776 4.96418 639.998 1.72994Z"/>
    </svg>

  );
}

TitleVector.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default TitleVector;