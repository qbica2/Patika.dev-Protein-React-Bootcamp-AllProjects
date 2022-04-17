import React from "react";
import style from "../styles/register.module.scss";
import OverlayLeft from "../components/OverlayLeft";
import OverlayRight from "../components/OverlayRight";

function Register() {
  return (
    <div className={style.register}>
      <OverlayLeft />
      <OverlayRight />
    </div>
  );
}

export default Register;