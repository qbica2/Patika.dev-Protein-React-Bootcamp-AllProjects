/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useFormik } from "formik";

import style from "../styles/overlayright.module.scss";
import TitleLine from "../constants/vectors/TitleLine";
import Moon from "../constants/icons/Moon";
import Sun from "../constants/icons/Sun";
import ThemeContext from "../contexts/ThemeContext";
import Validations from "../constants/validations";

function OverlayRight() {
  const { theme,vectorColor,handleSetTheme } = useContext(ThemeContext);

  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      checkbox: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Validations,
  });

  return (
    <div className={`${style.overlayRight} ${theme === "light" && style.light} ${theme === "dark" && style.dark}`}>
      <div className={style.left}>
        <div className={style.main}>
          <div className={style.titleGroup}>
            <div className={style.title}>Kayıt </div>
            <TitleLine color={vectorColor}/>
          </div>
          <form>
            <div className={style.nameSurname}>
              <div className={style.name}>
                <label >İSİM</label>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="İsmini gir" 
                  onChange={handleChange} 
                  value={values.name} 
                  onBlur={handleBlur}
                />
              </div>
              <div className={style.surname}>
                <label>SOYİSİM</label>
                <input 
                  name="surname" 
                  type="text" 
                  placeholder="Soyismini gir"
                  onChange={handleChange}
                  value={values.surname}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            {
              errors.name && !errors.surname && touched.name && (<span>{errors.name}</span>)
            }
            {
              errors.surname && !errors.name && touched.surname && (<span>{errors.surname}</span>)
            }
            {
              (errors.name && errors.surname) && (errors.name || errors.surname) && (<span>{errors.name}</span>)
            }
            <div className={style.formGroup}>
              <label className={style.required}>E-POSTA</label>
              <input 
                className={errors.email && touched.email && style.error}
                name="email" 
                type="text" 
                placeholder="E-posta adresini gir"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (<span>{errors.email}</span>)}
            </div>
            <div className={style.formGroup}>
              <label className={style.required}>KULLANICI ADI </label>
              <input 
                className={errors.username && touched.username && style.error}
                name="username" 
                type="text" 
                placeholder="Kullanıcı adını gir"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
              />
              {errors.username && touched.username && (<span>{errors.username}</span>)}
            </div>
            <div className={style.formGroup}>
              <label className={style.required}>ŞİFRE</label>
              <input 
                className={errors.password && touched.password && style.error}
                name="password" 
                type="password" 
                placeholder="Şifreni gir"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (<span>{errors.password}</span>)}
            </div>
            <div className={style.formGroup}>
              <label className={style.required}>ŞİFRENİ TEKRAR GİR</label>
              <input
                className={errors.passwordConfirm && touched.passwordConfirm && style.error} 
                name="passwordConfirm"  
                type="password" 
                placeholder="Şifreni tekrar gir"
                onChange={handleChange}
                value={values.passwordConfirm}
                onBlur={handleBlur}
              />
              {errors.passwordConfirm && touched.passwordConfirm && (<span>{errors.passwordConfirm}</span>)}
            </div>
            <div className={style.checkGroup}>
              <input 
                name="checkbox" 
                type="checkbox" 
                onChange={handleChange}
                checked={values.checkbox}
              />
              <span>Sözleşmeyi kabul ediyorum.{errors.checkbox && touched.checkbox && <span className={style.error}>{errors.checkbox}</span>}</span>
            </div>
            
            <button type="submit" onClick={handleSubmit}>KAYIT OL</button>
          </form>
        </div>
      </div>
      <div className={style.right}>
        <button onClick={handleSetTheme}>
          {
            theme === "light" ? 
              <Moon width={42.9} height={48} color="#3C3C3C"/> 
              : 
              <Sun width={24} height={24} color="#FEFEFE"/>
          }
        </button>
      </div>
    </div>
  );
}

export default OverlayRight;