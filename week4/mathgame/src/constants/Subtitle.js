import React from "react";
import PropTypes from "prop-types";
import style from "../styles/subtitle.module.css";

function Subtitle({ subtitle, score }) {
  return (
    <div className={style.subtitle}>{subtitle} {score}</div>
  );
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  score: PropTypes.number,
};

export default Subtitle;